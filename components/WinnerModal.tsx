import React, { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

/**
 * Props for WinnerModal component.
 * @property open - Whether the modal is open
 * @property winner - The winning duck number
 * @property onClose - Callback to close the modal
 * @property emoji - Emoji or image for the duck
 */
interface WinnerModalProps {
  open: boolean;
  winner: number | null;
  onClose: () => void;
  emoji?: string;
}

/**
 * WinnerModal - Modal shown when a duck wins the race.
 * Shows confetti, winner info, and a Play Again button.
 * Accessible and production-grade.
 */
export default function WinnerModal({ open, winner, onClose, emoji = '🦆' }: WinnerModalProps) {
  const confettiFired = useRef(false);

  // Fire confetti when modal opens and winner is set
  useEffect(() => {
    if (open && winner && !confettiFired.current) {
      confettiFired.current = true;
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
      });
    }
    if (!open) {
      confettiFired.current = false;
    }
  }, [open, winner]);

  // Allow closing modal with Escape key
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open || !winner) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
    >
      <div className="bg-white text-gray-900 rounded-xl shadow-xl p-8 flex flex-col items-center relative min-w-[320px]">
        {/* Winner flag animation */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-6xl animate-bounce" aria-hidden="true">🏁</div>
        {/* Winner emoji */}
        <div className="text-5xl mb-2" aria-label="Winning Duck Emoji">{emoji}</div>
        {/* Winner info */}
        <div className="text-2xl font-bold mb-2">Duck #{winner} Wins!</div>
        <div className="text-lg mb-4 flex items-center gap-2">
          <span className="text-3xl" aria-hidden="true">🚩</span>
          <span>Congratulations!</span>
        </div>
        <button
          onClick={onClose}
          className="mt-2 px-6 py-2 bg-green-600 hover:bg-green-500 text-white rounded font-semibold text-lg"
          aria-label="Play Again"
        >
          Play Again
        </button>
      </div>
    </div>
  );
} 