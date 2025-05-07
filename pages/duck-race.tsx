import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  MutableRefObject,
} from 'react';
import WinnerModal from '../components/WinnerModal';
import { useRouter } from 'next/router';
import JoinRaffleForm from '../components/JoinRaffleForm';

/**
 * Props for the DuckRacePage component.
 * Allows customization of duck count, race duration, emoji, and XP rewards.
 */
interface DuckRaceProps {
  numDucks?: number;           // Default: 12
  raceDuration?: number;       // ms (winner)
  emoji?: string;              // 🦆 or custom sprite URL
  winXp?: number;              // XP for winner
  participationXp?: number;    // XP for each non‑winner
}

/**
 * Represents a row in the leaderboard.
 */
interface LeaderboardRow {
  race: number;
  winner: number;
  xpAwarded: number;
}

// Extend the Window interface for Telegram Mini App integration
declare global {
  interface Window {
    Telegram?: any;
  }
}

/**
 * DuckRacePage - Main component for the animated duck race.
 * Supports Telegram Mini App integration and server-driven winner selection.
 */
export default function DuckRacePage({
  numDucks = 12,
  raceDuration = 3_000,
  emoji = '🦆',
  winXp = 50,
  participationXp = 5,
}: DuckRaceProps) {
  const router = useRouter();
  // Get participants and winner from query params (for server-driven raffles)
  const { participants, winner: winnerParam } = router.query;

  // Parse participants and winner
  const participantList = typeof participants === 'string' && participants.length > 0
    ? participants.split(',')
    : [];
  // Use participantList length if present, else fallback to prop
  const duckCount = participantList.length > 0 ? participantList.length : numDucks;
  // Forced winner (1-based index from query param)
  const forcedWinner = winnerParam ? Number(winnerParam) : null;
  // Validate forcedWinner
  const validForcedWinner = forcedWinner !== null && !isNaN(forcedWinner) && forcedWinner > 0 && forcedWinner <= duckCount
    ? forcedWinner
    : null;

  // State for race animation and results
  const [positions, setPositions] = useState<number[]>(Array(duckCount).fill(0));
  const [racing, setRacing] = useState<boolean>(false);
  const [winner, setWinner] = useState<number | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [xp, setXp] = useState<number>(0);
  const [board, setBoard] = useState<LeaderboardRow[]>([]);
  const raceCounter = useRef<number>(1);
  const frame = useRef<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [winningIdx, setWinningIdx] = useState<number | null>(null);

  // State for backend-driven race
  const [backendParticipants, setBackendParticipants] = useState<string[]>([]);
  const [backendWinner, setBackendWinner] = useState<number | null>(null);
  const [raceFinished, setRaceFinished] = useState(false);

  // Track if user has joined this session
  const [hasJoined, setHasJoined] = useState(false);

  // Restore persistent state from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedXp = localStorage.getItem('duck_xp');
      if (storedXp) setXp(Number(storedXp));
      const storedBoard = localStorage.getItem('duck_board');
      if (storedBoard) setBoard(JSON.parse(storedBoard));
      const storedHasJoined = localStorage.getItem('duck_has_joined');
      if (storedHasJoined === 'true') setHasJoined(true);
    }
  }, []);

  /**
   * Cancel the current animation frame (if any).
   */
  const cancelAnim = (): void => {
    if (frame.current) cancelAnimationFrame(frame.current);
  };

  /**
   * Easing function for smooth duck movement.
   * @param t - Progress (0 to 1)
   */
  const ease = (t: number): number => 0.5 - Math.cos(Math.PI * t) / 2;

  /**
   * Animate the ducks across the track.
   * @param start - Animation start time
   * @param finishTimes - Array of finish times for each duck
   * @param winIdx - Index of the winning duck
   */
  const animate = useCallback(
    (start: number, finishTimes: number[], winIdx: number): void => {
      const step = () => {
        const now = performance.now();
        const nextPos = finishTimes.map((f, i) => {
          const pct = Math.min((now - start) / f, 1);
          return ease(pct); // 0→1 eased
        });
        setPositions(nextPos);
        if (now - start < Math.max(...finishTimes)) {
          frame.current = requestAnimationFrame(step);
        } else {
          setRacing(false);
          setWinner(winIdx + 1);
          setWinningIdx(winIdx);
          setShowModal(true);
          // XP payout
          setXp((prev) => prev + winXp + participationXp * (duckCount - 1));
          setBoard((prev) => [
            { race: raceCounter.current, winner: winIdx + 1, xpAwarded: winXp },
            ...prev.slice(0, 4),
          ]);
          raceCounter.current += 1;
        }
      };
      frame.current = requestAnimationFrame(step);
    },
    [duckCount, winXp, participationXp]
  );

  /**
   * Start a new race (with countdown).
   */
  const startRace = (): void => {
    if (racing) return;
    setWinner(null);
    setWinningIdx(null);
    setShowModal(false);
    setPositions(Array(duckCount).fill(0));
    setCountdown(3);
  };

  /**
   * Countdown effect: triggers the race animation when countdown reaches 0.
   */
  useEffect(() => {
    if (countdown === null) return;
    if (countdown === 0) {
      setCountdown(null);
      setRacing(true);
      // Use validForcedWinner if provided, otherwise random
      const winIdx = validForcedWinner !== null
        ? validForcedWinner - 1
        : Math.floor(Math.random() * duckCount);
      const finishTimes = Array.from({ length: duckCount }, (_, i) =>
        i === winIdx
          ? raceDuration
          : raceDuration + 500 + Math.random() * 1500
      );
      cancelAnim();
      animate(performance.now(), finishTimes, winIdx);
      return;
    }
    const t = setTimeout(() => setCountdown((c) => (c ?? 0) - 1), 1000);
    return () => clearTimeout(t);
  }, [countdown, animate, duckCount, raceDuration, validForcedWinner]);

  /**
   * Cleanup effect: cancel animation on unmount.
   */
  useEffect(() => {
    return () => { cancelAnim(); };
  }, []);

  /**
   * Telegram Mini App: expand to full height on load.
   */
  useEffect(() => {
    window?.Telegram?.WebApp?.expand?.();
  }, []);

  /**
   * Show Telegram popup when a winner is declared.
   */
  const showTelegramPopup = (message: string): void => {
    if (
      typeof window !== 'undefined' &&
      window.Telegram &&
      window.Telegram.WebApp &&
      typeof window.Telegram.WebApp.showPopup === 'function'
    ) {
      try {
        window.Telegram.WebApp.showPopup({ message });
      } catch (e) {
        // Silently ignore if not supported
      }
    }
  };

  useEffect(() => {
    if (winner && !racing) {
      showTelegramPopup(`Duck #${winner} wins!`);
    }
  }, [winner, racing]);

  // Identify current web user (by localStorage ID)
  let currentUserId = '';
  let currentUserName = '';
  if (typeof window !== 'undefined') {
    currentUserId = localStorage.getItem('duck_user_id') || '';
    currentUserName = localStorage.getItem('duck_user_name') || '';
  }

  // Show join form if user is not a participant and hasn't just joined
  const isCurrentUserParticipant = backendParticipants.some(
    (nameOrId) => nameOrId === currentUserId || nameOrId === ''
  );

  if (!isCurrentUserParticipant && !hasJoined) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-blue-950 text-white">
        <h1 className="text-2xl font-bold mb-4">Duck Race</h1>
        <JoinRaffleForm onJoinSuccess={() => setHasJoined(true)} />
      </div>
    );
  }

  // If user is a participant, show waiting state if not enough participants
  const minParticipants = 2;
  if (backendParticipants.length < minParticipants) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-blue-950 text-white">
        <h1 className="text-2xl font-bold mb-4">Duck Race</h1>
        <div className="bg-yellow-700/80 text-white px-6 py-4 rounded shadow text-lg mb-6">
          Waiting for more participants to join...<br />
          Share this page or invite friends to join the race!
        </div>
        <button
          aria-label="Start Race"
          onClick={startRace}
          className="bg-green-600 hover:bg-green-500 px-6 py-3 rounded text-lg font-semibold mt-4"
          disabled={backendParticipants.length < minParticipants}
        >
          Start Race
        </button>
        <div className="mt-6 text-blue-200">Current participants: {backendParticipants.length}</div>
      </div>
    );
  }

  if (winnerParam && !validForcedWinner) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-blue-950 text-white">
        <h1 className="text-2xl font-bold mb-4">Duck Race</h1>
        <div className="bg-red-700/80 text-white px-6 py-4 rounded shadow text-lg">
          Invalid winner specified. Please check your raffle link.
        </div>
      </div>
    );
  }

  // Poll backend for current raffle status after joining
  useEffect(() => {
    if (!isCurrentUserParticipant) return;
    let interval: NodeJS.Timeout;
    const poll = async () => {
      try {
        const res = await fetch('/api/admin-raffles');
        const raffles = await res.json();
        if (Array.isArray(raffles) && raffles.length > 0) {
          const current = raffles.find((r: any) => !r.finishedAt);
          if (current) {
            setBackendParticipants(current.participants.map((p: any) => p.name));
            if (current.winnerDuckNumber) {
              setBackendWinner(current.winnerDuckNumber);
              setRaceFinished(true);
            } else {
              setBackendWinner(null);
              setRaceFinished(false);
            }
          }
        }
      } catch {}
    };
    poll();
    interval = setInterval(poll, 2000);
    return () => clearInterval(interval);
  }, [isCurrentUserParticipant]);

  // When race finishes, trigger animation with backend winner
  useEffect(() => {
    if (raceFinished && backendWinner && !racing && winner !== backendWinner) {
      setWinner(null);
      setWinningIdx(null);
      setShowModal(false);
      setPositions(Array(backendParticipants.length).fill(0));
      setCountdown(3);
      // After countdown, animate with backend winner
      setTimeout(() => {
        setCountdown(null);
        setRacing(true);
        const winIdx = backendWinner - 1;
        const finishTimes = Array.from({ length: backendParticipants.length }, (_, i) =>
          i === winIdx
            ? raceDuration
            : raceDuration + 500 + Math.random() * 1500
        );
        cancelAnim();
        animate(performance.now(), finishTimes, winIdx);
      }, 3000);
    }
  }, [raceFinished, backendWinner, backendParticipants.length, racing, winner, animate, raceDuration]);

  // Persist XP, leaderboard, and join status to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('duck_xp', xp.toString());
    }
  }, [xp]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('duck_board', JSON.stringify(board));
    }
  }, [board]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('duck_has_joined', hasJoined ? 'true' : 'false');
    }
  }, [hasJoined]);

  // --- Render ---
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-blue-900 to-blue-950 text-white">
      {/* Header */}
      <header className="w-full max-w-4xl flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Duck Race</h1>
        <span className="font-mono bg-yellow-400/20 px-3 py-1 rounded">
          XP: {xp}
        </span>
      </header>

      {/* Prize Pool */}
      <div className="mb-4 text-lg font-semibold text-yellow-300">
        Prize Pool: {backendParticipants.length * 100} XP
      </div>

      {/* Live Participant List */}
      <section className="w-full max-w-md mt-4 mb-6" aria-label="Current Participants">
        <h2 className="text-lg font-semibold mb-2">Current Participants</h2>
        <ul className="space-y-1">
          {backendParticipants.length > 0 ? (
            backendParticipants.map((name, i) => (
              <li key={i} className="bg-blue-800/40 px-4 py-2 rounded flex items-center">
                <span className="font-mono">Duck #{i + 1}</span>
                <span className="ml-3">{name}</span>
              </li>
            ))
          ) : (
            <li className="text-center text-gray-400">No participants yet</li>
          )}
        </ul>
      </section>

      {/* Race Track */}
      <div
        ref={trackRef}
        className="relative w-full max-w-4xl h-[calc(3.5rem*12)] border-y-4 border-blue-300/40 bg-blue-800/40 overflow-hidden"
        aria-label="Duck Race Track"
        role="region"
      >
        {/* Start Line */}
        <div className="absolute left-0 top-0 h-full w-2 bg-green-400 z-20" style={{ boxShadow: '2px 0 8px #22c55e88' }} />
        {/* Finish Line */}
        <div className="absolute top-0 h-full w-2 bg-yellow-400 z-20" style={{ right: 0, boxShadow: '-2px 0 8px #fde04788', left: 'auto' }} />
        {Array.from({ length: backendParticipants.length }, (_, i) => (
          <div
            key={i}
            className="absolute left-0 top-0 h-14 w-full flex items-center"
            style={{ transform: `translateY(${i * 3.5}rem)` }}
            aria-label={`Duck Row ${i + 1}`}
          >
            {/* Flag for winning duck */}
            {winningIdx === i && winner && !racing && (
              <span className="absolute -top-8 left-2 text-3xl animate-bounce" aria-label="Winner Flag">🚩</span>
            )}
            <span
              className={`absolute text-3xl transition-transform will-change-transform ${racing ? 'animate-wiggle' : ''}`}
              style={{
                left: `${positions[i] * 100}%`,
                transform: 'scaleX(-1)',
              }}
              aria-label={`Duck ${i + 1}`}
            >
              {emoji}
            </span>
            {/* Show participant name/username if available */}
            {backendParticipants[i] && (
              <span className="absolute left-16 text-xs text-blue-200 font-mono bg-blue-900/70 px-2 py-1 rounded shadow" aria-label={`Participant ${backendParticipants[i]}`}> 
                {backendParticipants[i]}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Buttons and Waiting State */}
      <div className="mt-6 flex flex-col items-center">
        {!raceFinished && (
          <div className="text-yellow-300 text-lg font-semibold mb-2">Waiting for the admin to start the race...</div>
        )}
        <button
          aria-label={racing ? "Racing…" : "Start Race"}
          onClick={startRace}
          disabled={racing || countdown !== null || !raceFinished}
          className="bg-green-600 hover:bg-green-500 px-6 py-3 rounded text-lg font-semibold disabled:opacity-50"
        >
          {racing ? 'Racing…' : 'Start Race'}
        </button>
      </div>

      {/* Countdown Overlay */}
      {countdown !== null && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/70 text-7xl font-extrabold" aria-live="polite">
          {countdown === 0 ? 'GO!' : countdown}
        </div>
      )}

      {/* Winner Banner */}
      {winner && !racing && !showModal && (
        <div className="mt-6 text-2xl font-bold text-yellow-300" aria-live="polite">
          🏆 Duck #{winner} wins! +{winXp} XP
        </div>
      )}
      <WinnerModal
        open={showModal}
        winner={winner}
        onClose={startRace}
        emoji={emoji}
      />

      {/* Leaderboard */}
      <section className="w-full max-w-md mt-8 mb-12" aria-label="Leaderboard">
        <h2 className="text-xl mb-2 font-semibold">Recent Races</h2>
        <ul className="space-y-1">
          {board.map((row) => (
            <li
              key={row.race}
              className="bg-blue-800/40 px-4 py-2 rounded flex justify-between"
            >
              <span>
                Race&nbsp;#{row.race} → Duck&nbsp;{row.winner}
                {backendParticipants[row.winner - 1] && (
                  <span className="ml-2 text-blue-200 font-mono">
                    ({backendParticipants[row.winner - 1]})
                  </span>
                )}
              </span>
              <span className="text-yellow-300 font-mono">
                +{row.xpAwarded}xp
              </span>
            </li>
          ))}
          {board.length === 0 && (
            <li className="text-center text-gray-400">No races yet</li>
          )}
        </ul>
      </section>
    </div>
  );
}

/**
 * DuckRaceCard - Dashboard card for launching the Duck Race game.
 */
export const DuckRaceCard: React.FC = () => (
  <div className="bg-blue-900/60 rounded-xl p-4 flex flex-col items-center">
    <div className="text-4xl">🦆</div>
    <div className="font-bold mt-2">Duck‑Race</div>
    <div className="text-sm text-blue-200 mb-3">XP lottery mini‑game</div>
    <button
      onClick={() => window.location.assign('/duck-race')}
      className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded text-sm font-semibold"
      aria-label="Play Duck Race"
    >
      Play
    </button>
  </div>
); 