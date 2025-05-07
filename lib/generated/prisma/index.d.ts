
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Participant
 * Participant in a duck race raffle
 */
export type Participant = $Result.DefaultSelection<Prisma.$ParticipantPayload>
/**
 * Model Race
 * A single duck race event
 */
export type Race = $Result.DefaultSelection<Prisma.$RacePayload>
/**
 * Model RaceParticipant
 * Join table for many-to-many Race <-> Participant
 */
export type RaceParticipant = $Result.DefaultSelection<Prisma.$RaceParticipantPayload>
/**
 * Model Result
 * Result of a race (for leaderboard, history)
 */
export type Result = $Result.DefaultSelection<Prisma.$ResultPayload>
/**
 * Model RaceChatMessage
 * 
 */
export type RaceChatMessage = $Result.DefaultSelection<Prisma.$RaceChatMessagePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Participants
 * const participants = await prisma.participant.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Participants
   * const participants = await prisma.participant.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.participant`: Exposes CRUD operations for the **Participant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participants
    * const participants = await prisma.participant.findMany()
    * ```
    */
  get participant(): Prisma.ParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.race`: Exposes CRUD operations for the **Race** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Races
    * const races = await prisma.race.findMany()
    * ```
    */
  get race(): Prisma.RaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.raceParticipant`: Exposes CRUD operations for the **RaceParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RaceParticipants
    * const raceParticipants = await prisma.raceParticipant.findMany()
    * ```
    */
  get raceParticipant(): Prisma.RaceParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.result`: Exposes CRUD operations for the **Result** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Results
    * const results = await prisma.result.findMany()
    * ```
    */
  get result(): Prisma.ResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.raceChatMessage`: Exposes CRUD operations for the **RaceChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RaceChatMessages
    * const raceChatMessages = await prisma.raceChatMessage.findMany()
    * ```
    */
  get raceChatMessage(): Prisma.RaceChatMessageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Participant: 'Participant',
    Race: 'Race',
    RaceParticipant: 'RaceParticipant',
    Result: 'Result',
    RaceChatMessage: 'RaceChatMessage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "participant" | "race" | "raceParticipant" | "result" | "raceChatMessage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Participant: {
        payload: Prisma.$ParticipantPayload<ExtArgs>
        fields: Prisma.ParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          findFirst: {
            args: Prisma.ParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          findMany: {
            args: Prisma.ParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>[]
          }
          create: {
            args: Prisma.ParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          createMany: {
            args: Prisma.ParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>[]
          }
          delete: {
            args: Prisma.ParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          update: {
            args: Prisma.ParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          deleteMany: {
            args: Prisma.ParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>[]
          }
          upsert: {
            args: Prisma.ParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          aggregate: {
            args: Prisma.ParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipant>
          }
          groupBy: {
            args: Prisma.ParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipantCountAggregateOutputType> | number
          }
        }
      }
      Race: {
        payload: Prisma.$RacePayload<ExtArgs>
        fields: Prisma.RaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          findFirst: {
            args: Prisma.RaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          findMany: {
            args: Prisma.RaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>[]
          }
          create: {
            args: Prisma.RaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          createMany: {
            args: Prisma.RaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>[]
          }
          delete: {
            args: Prisma.RaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          update: {
            args: Prisma.RaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          deleteMany: {
            args: Prisma.RaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>[]
          }
          upsert: {
            args: Prisma.RaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          aggregate: {
            args: Prisma.RaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRace>
          }
          groupBy: {
            args: Prisma.RaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<RaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.RaceCountArgs<ExtArgs>
            result: $Utils.Optional<RaceCountAggregateOutputType> | number
          }
        }
      }
      RaceParticipant: {
        payload: Prisma.$RaceParticipantPayload<ExtArgs>
        fields: Prisma.RaceParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RaceParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RaceParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceParticipantPayload>
          }
          findFirst: {
            args: Prisma.RaceParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RaceParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceParticipantPayload>
          }
          findMany: {
            args: Prisma.RaceParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceParticipantPayload>[]
          }
          create: {
            args: Prisma.RaceParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceParticipantPayload>
          }
          createMany: {
            args: Prisma.RaceParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RaceParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceParticipantPayload>[]
          }
          delete: {
            args: Prisma.RaceParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceParticipantPayload>
          }
          update: {
            args: Prisma.RaceParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceParticipantPayload>
          }
          deleteMany: {
            args: Prisma.RaceParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RaceParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RaceParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceParticipantPayload>[]
          }
          upsert: {
            args: Prisma.RaceParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceParticipantPayload>
          }
          aggregate: {
            args: Prisma.RaceParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRaceParticipant>
          }
          groupBy: {
            args: Prisma.RaceParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<RaceParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.RaceParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<RaceParticipantCountAggregateOutputType> | number
          }
        }
      }
      Result: {
        payload: Prisma.$ResultPayload<ExtArgs>
        fields: Prisma.ResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          findFirst: {
            args: Prisma.ResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          findMany: {
            args: Prisma.ResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>[]
          }
          create: {
            args: Prisma.ResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          createMany: {
            args: Prisma.ResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>[]
          }
          delete: {
            args: Prisma.ResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          update: {
            args: Prisma.ResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          deleteMany: {
            args: Prisma.ResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>[]
          }
          upsert: {
            args: Prisma.ResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          aggregate: {
            args: Prisma.ResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResult>
          }
          groupBy: {
            args: Prisma.ResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResultCountArgs<ExtArgs>
            result: $Utils.Optional<ResultCountAggregateOutputType> | number
          }
        }
      }
      RaceChatMessage: {
        payload: Prisma.$RaceChatMessagePayload<ExtArgs>
        fields: Prisma.RaceChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RaceChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RaceChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceChatMessagePayload>
          }
          findFirst: {
            args: Prisma.RaceChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RaceChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceChatMessagePayload>
          }
          findMany: {
            args: Prisma.RaceChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceChatMessagePayload>[]
          }
          create: {
            args: Prisma.RaceChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceChatMessagePayload>
          }
          createMany: {
            args: Prisma.RaceChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RaceChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceChatMessagePayload>[]
          }
          delete: {
            args: Prisma.RaceChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceChatMessagePayload>
          }
          update: {
            args: Prisma.RaceChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.RaceChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RaceChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RaceChatMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceChatMessagePayload>[]
          }
          upsert: {
            args: Prisma.RaceChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceChatMessagePayload>
          }
          aggregate: {
            args: Prisma.RaceChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRaceChatMessage>
          }
          groupBy: {
            args: Prisma.RaceChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<RaceChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.RaceChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<RaceChatMessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    participant?: ParticipantOmit
    race?: RaceOmit
    raceParticipant?: RaceParticipantOmit
    result?: ResultOmit
    raceChatMessage?: RaceChatMessageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ParticipantCountOutputType
   */

  export type ParticipantCountOutputType = {
    races: number
    winnerRaces: number
    results: number
    chatMessages: number
  }

  export type ParticipantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    races?: boolean | ParticipantCountOutputTypeCountRacesArgs
    winnerRaces?: boolean | ParticipantCountOutputTypeCountWinnerRacesArgs
    results?: boolean | ParticipantCountOutputTypeCountResultsArgs
    chatMessages?: boolean | ParticipantCountOutputTypeCountChatMessagesArgs
  }

  // Custom InputTypes
  /**
   * ParticipantCountOutputType without action
   */
  export type ParticipantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantCountOutputType
     */
    select?: ParticipantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParticipantCountOutputType without action
   */
  export type ParticipantCountOutputTypeCountRacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceParticipantWhereInput
  }

  /**
   * ParticipantCountOutputType without action
   */
  export type ParticipantCountOutputTypeCountWinnerRacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceWhereInput
  }

  /**
   * ParticipantCountOutputType without action
   */
  export type ParticipantCountOutputTypeCountResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultWhereInput
  }

  /**
   * ParticipantCountOutputType without action
   */
  export type ParticipantCountOutputTypeCountChatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceChatMessageWhereInput
  }


  /**
   * Count Type RaceCountOutputType
   */

  export type RaceCountOutputType = {
    participants: number
    results: number
    chatMessages: number
  }

  export type RaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | RaceCountOutputTypeCountParticipantsArgs
    results?: boolean | RaceCountOutputTypeCountResultsArgs
    chatMessages?: boolean | RaceCountOutputTypeCountChatMessagesArgs
  }

  // Custom InputTypes
  /**
   * RaceCountOutputType without action
   */
  export type RaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceCountOutputType
     */
    select?: RaceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RaceCountOutputType without action
   */
  export type RaceCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceParticipantWhereInput
  }

  /**
   * RaceCountOutputType without action
   */
  export type RaceCountOutputTypeCountResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultWhereInput
  }

  /**
   * RaceCountOutputType without action
   */
  export type RaceCountOutputTypeCountChatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceChatMessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Participant
   */

  export type AggregateParticipant = {
    _count: ParticipantCountAggregateOutputType | null
    _min: ParticipantMinAggregateOutputType | null
    _max: ParticipantMaxAggregateOutputType | null
  }

  export type ParticipantMinAggregateOutputType = {
    id: string | null
    name: string | null
    avatar: string | null
    telegramId: string | null
    joinedAt: Date | null
  }

  export type ParticipantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    avatar: string | null
    telegramId: string | null
    joinedAt: Date | null
  }

  export type ParticipantCountAggregateOutputType = {
    id: number
    name: number
    avatar: number
    telegramId: number
    joinedAt: number
    _all: number
  }


  export type ParticipantMinAggregateInputType = {
    id?: true
    name?: true
    avatar?: true
    telegramId?: true
    joinedAt?: true
  }

  export type ParticipantMaxAggregateInputType = {
    id?: true
    name?: true
    avatar?: true
    telegramId?: true
    joinedAt?: true
  }

  export type ParticipantCountAggregateInputType = {
    id?: true
    name?: true
    avatar?: true
    telegramId?: true
    joinedAt?: true
    _all?: true
  }

  export type ParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participant to aggregate.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Participants
    **/
    _count?: true | ParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipantMaxAggregateInputType
  }

  export type GetParticipantAggregateType<T extends ParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipant[P]>
      : GetScalarType<T[P], AggregateParticipant[P]>
  }




  export type ParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantWhereInput
    orderBy?: ParticipantOrderByWithAggregationInput | ParticipantOrderByWithAggregationInput[]
    by: ParticipantScalarFieldEnum[] | ParticipantScalarFieldEnum
    having?: ParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipantCountAggregateInputType | true
    _min?: ParticipantMinAggregateInputType
    _max?: ParticipantMaxAggregateInputType
  }

  export type ParticipantGroupByOutputType = {
    id: string
    name: string
    avatar: string | null
    telegramId: string | null
    joinedAt: Date
    _count: ParticipantCountAggregateOutputType | null
    _min: ParticipantMinAggregateOutputType | null
    _max: ParticipantMaxAggregateOutputType | null
  }

  type GetParticipantGroupByPayload<T extends ParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipantGroupByOutputType[P]>
        }
      >
    >


  export type ParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    avatar?: boolean
    telegramId?: boolean
    joinedAt?: boolean
    races?: boolean | Participant$racesArgs<ExtArgs>
    winnerRaces?: boolean | Participant$winnerRacesArgs<ExtArgs>
    results?: boolean | Participant$resultsArgs<ExtArgs>
    chatMessages?: boolean | Participant$chatMessagesArgs<ExtArgs>
    _count?: boolean | ParticipantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participant"]>

  export type ParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    avatar?: boolean
    telegramId?: boolean
    joinedAt?: boolean
  }, ExtArgs["result"]["participant"]>

  export type ParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    avatar?: boolean
    telegramId?: boolean
    joinedAt?: boolean
  }, ExtArgs["result"]["participant"]>

  export type ParticipantSelectScalar = {
    id?: boolean
    name?: boolean
    avatar?: boolean
    telegramId?: boolean
    joinedAt?: boolean
  }

  export type ParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "avatar" | "telegramId" | "joinedAt", ExtArgs["result"]["participant"]>
  export type ParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    races?: boolean | Participant$racesArgs<ExtArgs>
    winnerRaces?: boolean | Participant$winnerRacesArgs<ExtArgs>
    results?: boolean | Participant$resultsArgs<ExtArgs>
    chatMessages?: boolean | Participant$chatMessagesArgs<ExtArgs>
    _count?: boolean | ParticipantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Participant"
    objects: {
      races: Prisma.$RaceParticipantPayload<ExtArgs>[]
      winnerRaces: Prisma.$RacePayload<ExtArgs>[]
      results: Prisma.$ResultPayload<ExtArgs>[]
      chatMessages: Prisma.$RaceChatMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      avatar: string | null
      telegramId: string | null
      joinedAt: Date
    }, ExtArgs["result"]["participant"]>
    composites: {}
  }

  type ParticipantGetPayload<S extends boolean | null | undefined | ParticipantDefaultArgs> = $Result.GetResult<Prisma.$ParticipantPayload, S>

  type ParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipantCountAggregateInputType | true
    }

  export interface ParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Participant'], meta: { name: 'Participant' } }
    /**
     * Find zero or one Participant that matches the filter.
     * @param {ParticipantFindUniqueArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipantFindUniqueArgs>(args: SelectSubset<T, ParticipantFindUniqueArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Participant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipantFindUniqueOrThrowArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindFirstArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipantFindFirstArgs>(args?: SelectSubset<T, ParticipantFindFirstArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindFirstOrThrowArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Participants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participants
     * const participants = await prisma.participant.findMany()
     * 
     * // Get first 10 Participants
     * const participants = await prisma.participant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participantWithIdOnly = await prisma.participant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParticipantFindManyArgs>(args?: SelectSubset<T, ParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Participant.
     * @param {ParticipantCreateArgs} args - Arguments to create a Participant.
     * @example
     * // Create one Participant
     * const Participant = await prisma.participant.create({
     *   data: {
     *     // ... data to create a Participant
     *   }
     * })
     * 
     */
    create<T extends ParticipantCreateArgs>(args: SelectSubset<T, ParticipantCreateArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Participants.
     * @param {ParticipantCreateManyArgs} args - Arguments to create many Participants.
     * @example
     * // Create many Participants
     * const participant = await prisma.participant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipantCreateManyArgs>(args?: SelectSubset<T, ParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Participants and returns the data saved in the database.
     * @param {ParticipantCreateManyAndReturnArgs} args - Arguments to create many Participants.
     * @example
     * // Create many Participants
     * const participant = await prisma.participant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Participants and only return the `id`
     * const participantWithIdOnly = await prisma.participant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, ParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Participant.
     * @param {ParticipantDeleteArgs} args - Arguments to delete one Participant.
     * @example
     * // Delete one Participant
     * const Participant = await prisma.participant.delete({
     *   where: {
     *     // ... filter to delete one Participant
     *   }
     * })
     * 
     */
    delete<T extends ParticipantDeleteArgs>(args: SelectSubset<T, ParticipantDeleteArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Participant.
     * @param {ParticipantUpdateArgs} args - Arguments to update one Participant.
     * @example
     * // Update one Participant
     * const participant = await prisma.participant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipantUpdateArgs>(args: SelectSubset<T, ParticipantUpdateArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Participants.
     * @param {ParticipantDeleteManyArgs} args - Arguments to filter Participants to delete.
     * @example
     * // Delete a few Participants
     * const { count } = await prisma.participant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipantDeleteManyArgs>(args?: SelectSubset<T, ParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participants
     * const participant = await prisma.participant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipantUpdateManyArgs>(args: SelectSubset<T, ParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participants and returns the data updated in the database.
     * @param {ParticipantUpdateManyAndReturnArgs} args - Arguments to update many Participants.
     * @example
     * // Update many Participants
     * const participant = await prisma.participant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Participants and only return the `id`
     * const participantWithIdOnly = await prisma.participant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, ParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Participant.
     * @param {ParticipantUpsertArgs} args - Arguments to update or create a Participant.
     * @example
     * // Update or create a Participant
     * const participant = await prisma.participant.upsert({
     *   create: {
     *     // ... data to create a Participant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participant we want to update
     *   }
     * })
     */
    upsert<T extends ParticipantUpsertArgs>(args: SelectSubset<T, ParticipantUpsertArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantCountArgs} args - Arguments to filter Participants to count.
     * @example
     * // Count the number of Participants
     * const count = await prisma.participant.count({
     *   where: {
     *     // ... the filter for the Participants we want to count
     *   }
     * })
    **/
    count<T extends ParticipantCountArgs>(
      args?: Subset<T, ParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParticipantAggregateArgs>(args: Subset<T, ParticipantAggregateArgs>): Prisma.PrismaPromise<GetParticipantAggregateType<T>>

    /**
     * Group by Participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipantGroupByArgs['orderBy'] }
        : { orderBy?: ParticipantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Participant model
   */
  readonly fields: ParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Participant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    races<T extends Participant$racesArgs<ExtArgs> = {}>(args?: Subset<T, Participant$racesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    winnerRaces<T extends Participant$winnerRacesArgs<ExtArgs> = {}>(args?: Subset<T, Participant$winnerRacesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    results<T extends Participant$resultsArgs<ExtArgs> = {}>(args?: Subset<T, Participant$resultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatMessages<T extends Participant$chatMessagesArgs<ExtArgs> = {}>(args?: Subset<T, Participant$chatMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Participant model
   */
  interface ParticipantFieldRefs {
    readonly id: FieldRef<"Participant", 'String'>
    readonly name: FieldRef<"Participant", 'String'>
    readonly avatar: FieldRef<"Participant", 'String'>
    readonly telegramId: FieldRef<"Participant", 'String'>
    readonly joinedAt: FieldRef<"Participant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Participant findUnique
   */
  export type ParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant findUniqueOrThrow
   */
  export type ParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant findFirst
   */
  export type ParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participants.
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participants.
     */
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Participant findFirstOrThrow
   */
  export type ParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participants.
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participants.
     */
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Participant findMany
   */
  export type ParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participants to fetch.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Participants.
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Participant create
   */
  export type ParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a Participant.
     */
    data: XOR<ParticipantCreateInput, ParticipantUncheckedCreateInput>
  }

  /**
   * Participant createMany
   */
  export type ParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Participants.
     */
    data: ParticipantCreateManyInput | ParticipantCreateManyInput[]
  }

  /**
   * Participant createManyAndReturn
   */
  export type ParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many Participants.
     */
    data: ParticipantCreateManyInput | ParticipantCreateManyInput[]
  }

  /**
   * Participant update
   */
  export type ParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a Participant.
     */
    data: XOR<ParticipantUpdateInput, ParticipantUncheckedUpdateInput>
    /**
     * Choose, which Participant to update.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant updateMany
   */
  export type ParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Participants.
     */
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyInput>
    /**
     * Filter which Participants to update
     */
    where?: ParticipantWhereInput
    /**
     * Limit how many Participants to update.
     */
    limit?: number
  }

  /**
   * Participant updateManyAndReturn
   */
  export type ParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * The data used to update Participants.
     */
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyInput>
    /**
     * Filter which Participants to update
     */
    where?: ParticipantWhereInput
    /**
     * Limit how many Participants to update.
     */
    limit?: number
  }

  /**
   * Participant upsert
   */
  export type ParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the Participant to update in case it exists.
     */
    where: ParticipantWhereUniqueInput
    /**
     * In case the Participant found by the `where` argument doesn't exist, create a new Participant with this data.
     */
    create: XOR<ParticipantCreateInput, ParticipantUncheckedCreateInput>
    /**
     * In case the Participant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipantUpdateInput, ParticipantUncheckedUpdateInput>
  }

  /**
   * Participant delete
   */
  export type ParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter which Participant to delete.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant deleteMany
   */
  export type ParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participants to delete
     */
    where?: ParticipantWhereInput
    /**
     * Limit how many Participants to delete.
     */
    limit?: number
  }

  /**
   * Participant.races
   */
  export type Participant$racesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantInclude<ExtArgs> | null
    where?: RaceParticipantWhereInput
    orderBy?: RaceParticipantOrderByWithRelationInput | RaceParticipantOrderByWithRelationInput[]
    cursor?: RaceParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RaceParticipantScalarFieldEnum | RaceParticipantScalarFieldEnum[]
  }

  /**
   * Participant.winnerRaces
   */
  export type Participant$winnerRacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    where?: RaceWhereInput
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    cursor?: RaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RaceScalarFieldEnum | RaceScalarFieldEnum[]
  }

  /**
   * Participant.results
   */
  export type Participant$resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    where?: ResultWhereInput
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    cursor?: ResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Participant.chatMessages
   */
  export type Participant$chatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceChatMessage
     */
    select?: RaceChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceChatMessage
     */
    omit?: RaceChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceChatMessageInclude<ExtArgs> | null
    where?: RaceChatMessageWhereInput
    orderBy?: RaceChatMessageOrderByWithRelationInput | RaceChatMessageOrderByWithRelationInput[]
    cursor?: RaceChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RaceChatMessageScalarFieldEnum | RaceChatMessageScalarFieldEnum[]
  }

  /**
   * Participant without action
   */
  export type ParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
  }


  /**
   * Model Race
   */

  export type AggregateRace = {
    _count: RaceCountAggregateOutputType | null
    _avg: RaceAvgAggregateOutputType | null
    _sum: RaceSumAggregateOutputType | null
    _min: RaceMinAggregateOutputType | null
    _max: RaceMaxAggregateOutputType | null
  }

  export type RaceAvgAggregateOutputType = {
    prizePool: number | null
  }

  export type RaceSumAggregateOutputType = {
    prizePool: number | null
  }

  export type RaceMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    startedAt: Date | null
    endedAt: Date | null
    winnerId: string | null
    prizePool: number | null
  }

  export type RaceMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    startedAt: Date | null
    endedAt: Date | null
    winnerId: string | null
    prizePool: number | null
  }

  export type RaceCountAggregateOutputType = {
    id: number
    createdAt: number
    startedAt: number
    endedAt: number
    winnerId: number
    prizePool: number
    _all: number
  }


  export type RaceAvgAggregateInputType = {
    prizePool?: true
  }

  export type RaceSumAggregateInputType = {
    prizePool?: true
  }

  export type RaceMinAggregateInputType = {
    id?: true
    createdAt?: true
    startedAt?: true
    endedAt?: true
    winnerId?: true
    prizePool?: true
  }

  export type RaceMaxAggregateInputType = {
    id?: true
    createdAt?: true
    startedAt?: true
    endedAt?: true
    winnerId?: true
    prizePool?: true
  }

  export type RaceCountAggregateInputType = {
    id?: true
    createdAt?: true
    startedAt?: true
    endedAt?: true
    winnerId?: true
    prizePool?: true
    _all?: true
  }

  export type RaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Race to aggregate.
     */
    where?: RaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Races
    **/
    _count?: true | RaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RaceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RaceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RaceMaxAggregateInputType
  }

  export type GetRaceAggregateType<T extends RaceAggregateArgs> = {
        [P in keyof T & keyof AggregateRace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRace[P]>
      : GetScalarType<T[P], AggregateRace[P]>
  }




  export type RaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceWhereInput
    orderBy?: RaceOrderByWithAggregationInput | RaceOrderByWithAggregationInput[]
    by: RaceScalarFieldEnum[] | RaceScalarFieldEnum
    having?: RaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RaceCountAggregateInputType | true
    _avg?: RaceAvgAggregateInputType
    _sum?: RaceSumAggregateInputType
    _min?: RaceMinAggregateInputType
    _max?: RaceMaxAggregateInputType
  }

  export type RaceGroupByOutputType = {
    id: string
    createdAt: Date
    startedAt: Date | null
    endedAt: Date | null
    winnerId: string | null
    prizePool: number
    _count: RaceCountAggregateOutputType | null
    _avg: RaceAvgAggregateOutputType | null
    _sum: RaceSumAggregateOutputType | null
    _min: RaceMinAggregateOutputType | null
    _max: RaceMaxAggregateOutputType | null
  }

  type GetRaceGroupByPayload<T extends RaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RaceGroupByOutputType[P]>
            : GetScalarType<T[P], RaceGroupByOutputType[P]>
        }
      >
    >


  export type RaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    startedAt?: boolean
    endedAt?: boolean
    winnerId?: boolean
    prizePool?: boolean
    participants?: boolean | Race$participantsArgs<ExtArgs>
    winner?: boolean | Race$winnerArgs<ExtArgs>
    results?: boolean | Race$resultsArgs<ExtArgs>
    chatMessages?: boolean | Race$chatMessagesArgs<ExtArgs>
    _count?: boolean | RaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["race"]>

  export type RaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    startedAt?: boolean
    endedAt?: boolean
    winnerId?: boolean
    prizePool?: boolean
    winner?: boolean | Race$winnerArgs<ExtArgs>
  }, ExtArgs["result"]["race"]>

  export type RaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    startedAt?: boolean
    endedAt?: boolean
    winnerId?: boolean
    prizePool?: boolean
    winner?: boolean | Race$winnerArgs<ExtArgs>
  }, ExtArgs["result"]["race"]>

  export type RaceSelectScalar = {
    id?: boolean
    createdAt?: boolean
    startedAt?: boolean
    endedAt?: boolean
    winnerId?: boolean
    prizePool?: boolean
  }

  export type RaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "startedAt" | "endedAt" | "winnerId" | "prizePool", ExtArgs["result"]["race"]>
  export type RaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | Race$participantsArgs<ExtArgs>
    winner?: boolean | Race$winnerArgs<ExtArgs>
    results?: boolean | Race$resultsArgs<ExtArgs>
    chatMessages?: boolean | Race$chatMessagesArgs<ExtArgs>
    _count?: boolean | RaceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    winner?: boolean | Race$winnerArgs<ExtArgs>
  }
  export type RaceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    winner?: boolean | Race$winnerArgs<ExtArgs>
  }

  export type $RacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Race"
    objects: {
      participants: Prisma.$RaceParticipantPayload<ExtArgs>[]
      winner: Prisma.$ParticipantPayload<ExtArgs> | null
      results: Prisma.$ResultPayload<ExtArgs>[]
      chatMessages: Prisma.$RaceChatMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      startedAt: Date | null
      endedAt: Date | null
      winnerId: string | null
      prizePool: number
    }, ExtArgs["result"]["race"]>
    composites: {}
  }

  type RaceGetPayload<S extends boolean | null | undefined | RaceDefaultArgs> = $Result.GetResult<Prisma.$RacePayload, S>

  type RaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RaceCountAggregateInputType | true
    }

  export interface RaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Race'], meta: { name: 'Race' } }
    /**
     * Find zero or one Race that matches the filter.
     * @param {RaceFindUniqueArgs} args - Arguments to find a Race
     * @example
     * // Get one Race
     * const race = await prisma.race.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RaceFindUniqueArgs>(args: SelectSubset<T, RaceFindUniqueArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Race that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RaceFindUniqueOrThrowArgs} args - Arguments to find a Race
     * @example
     * // Get one Race
     * const race = await prisma.race.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RaceFindUniqueOrThrowArgs>(args: SelectSubset<T, RaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Race that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceFindFirstArgs} args - Arguments to find a Race
     * @example
     * // Get one Race
     * const race = await prisma.race.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RaceFindFirstArgs>(args?: SelectSubset<T, RaceFindFirstArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Race that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceFindFirstOrThrowArgs} args - Arguments to find a Race
     * @example
     * // Get one Race
     * const race = await prisma.race.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RaceFindFirstOrThrowArgs>(args?: SelectSubset<T, RaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Races that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Races
     * const races = await prisma.race.findMany()
     * 
     * // Get first 10 Races
     * const races = await prisma.race.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const raceWithIdOnly = await prisma.race.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RaceFindManyArgs>(args?: SelectSubset<T, RaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Race.
     * @param {RaceCreateArgs} args - Arguments to create a Race.
     * @example
     * // Create one Race
     * const Race = await prisma.race.create({
     *   data: {
     *     // ... data to create a Race
     *   }
     * })
     * 
     */
    create<T extends RaceCreateArgs>(args: SelectSubset<T, RaceCreateArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Races.
     * @param {RaceCreateManyArgs} args - Arguments to create many Races.
     * @example
     * // Create many Races
     * const race = await prisma.race.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RaceCreateManyArgs>(args?: SelectSubset<T, RaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Races and returns the data saved in the database.
     * @param {RaceCreateManyAndReturnArgs} args - Arguments to create many Races.
     * @example
     * // Create many Races
     * const race = await prisma.race.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Races and only return the `id`
     * const raceWithIdOnly = await prisma.race.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RaceCreateManyAndReturnArgs>(args?: SelectSubset<T, RaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Race.
     * @param {RaceDeleteArgs} args - Arguments to delete one Race.
     * @example
     * // Delete one Race
     * const Race = await prisma.race.delete({
     *   where: {
     *     // ... filter to delete one Race
     *   }
     * })
     * 
     */
    delete<T extends RaceDeleteArgs>(args: SelectSubset<T, RaceDeleteArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Race.
     * @param {RaceUpdateArgs} args - Arguments to update one Race.
     * @example
     * // Update one Race
     * const race = await prisma.race.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RaceUpdateArgs>(args: SelectSubset<T, RaceUpdateArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Races.
     * @param {RaceDeleteManyArgs} args - Arguments to filter Races to delete.
     * @example
     * // Delete a few Races
     * const { count } = await prisma.race.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RaceDeleteManyArgs>(args?: SelectSubset<T, RaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Races.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Races
     * const race = await prisma.race.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RaceUpdateManyArgs>(args: SelectSubset<T, RaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Races and returns the data updated in the database.
     * @param {RaceUpdateManyAndReturnArgs} args - Arguments to update many Races.
     * @example
     * // Update many Races
     * const race = await prisma.race.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Races and only return the `id`
     * const raceWithIdOnly = await prisma.race.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RaceUpdateManyAndReturnArgs>(args: SelectSubset<T, RaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Race.
     * @param {RaceUpsertArgs} args - Arguments to update or create a Race.
     * @example
     * // Update or create a Race
     * const race = await prisma.race.upsert({
     *   create: {
     *     // ... data to create a Race
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Race we want to update
     *   }
     * })
     */
    upsert<T extends RaceUpsertArgs>(args: SelectSubset<T, RaceUpsertArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Races.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceCountArgs} args - Arguments to filter Races to count.
     * @example
     * // Count the number of Races
     * const count = await prisma.race.count({
     *   where: {
     *     // ... the filter for the Races we want to count
     *   }
     * })
    **/
    count<T extends RaceCountArgs>(
      args?: Subset<T, RaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Race.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RaceAggregateArgs>(args: Subset<T, RaceAggregateArgs>): Prisma.PrismaPromise<GetRaceAggregateType<T>>

    /**
     * Group by Race.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RaceGroupByArgs['orderBy'] }
        : { orderBy?: RaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Race model
   */
  readonly fields: RaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Race.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participants<T extends Race$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Race$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    winner<T extends Race$winnerArgs<ExtArgs> = {}>(args?: Subset<T, Race$winnerArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    results<T extends Race$resultsArgs<ExtArgs> = {}>(args?: Subset<T, Race$resultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatMessages<T extends Race$chatMessagesArgs<ExtArgs> = {}>(args?: Subset<T, Race$chatMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Race model
   */
  interface RaceFieldRefs {
    readonly id: FieldRef<"Race", 'String'>
    readonly createdAt: FieldRef<"Race", 'DateTime'>
    readonly startedAt: FieldRef<"Race", 'DateTime'>
    readonly endedAt: FieldRef<"Race", 'DateTime'>
    readonly winnerId: FieldRef<"Race", 'String'>
    readonly prizePool: FieldRef<"Race", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Race findUnique
   */
  export type RaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Race to fetch.
     */
    where: RaceWhereUniqueInput
  }

  /**
   * Race findUniqueOrThrow
   */
  export type RaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Race to fetch.
     */
    where: RaceWhereUniqueInput
  }

  /**
   * Race findFirst
   */
  export type RaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Race to fetch.
     */
    where?: RaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Races.
     */
    cursor?: RaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Races.
     */
    distinct?: RaceScalarFieldEnum | RaceScalarFieldEnum[]
  }

  /**
   * Race findFirstOrThrow
   */
  export type RaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Race to fetch.
     */
    where?: RaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Races.
     */
    cursor?: RaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Races.
     */
    distinct?: RaceScalarFieldEnum | RaceScalarFieldEnum[]
  }

  /**
   * Race findMany
   */
  export type RaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Races to fetch.
     */
    where?: RaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Races.
     */
    cursor?: RaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    distinct?: RaceScalarFieldEnum | RaceScalarFieldEnum[]
  }

  /**
   * Race create
   */
  export type RaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * The data needed to create a Race.
     */
    data?: XOR<RaceCreateInput, RaceUncheckedCreateInput>
  }

  /**
   * Race createMany
   */
  export type RaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Races.
     */
    data: RaceCreateManyInput | RaceCreateManyInput[]
  }

  /**
   * Race createManyAndReturn
   */
  export type RaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * The data used to create many Races.
     */
    data: RaceCreateManyInput | RaceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Race update
   */
  export type RaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * The data needed to update a Race.
     */
    data: XOR<RaceUpdateInput, RaceUncheckedUpdateInput>
    /**
     * Choose, which Race to update.
     */
    where: RaceWhereUniqueInput
  }

  /**
   * Race updateMany
   */
  export type RaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Races.
     */
    data: XOR<RaceUpdateManyMutationInput, RaceUncheckedUpdateManyInput>
    /**
     * Filter which Races to update
     */
    where?: RaceWhereInput
    /**
     * Limit how many Races to update.
     */
    limit?: number
  }

  /**
   * Race updateManyAndReturn
   */
  export type RaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * The data used to update Races.
     */
    data: XOR<RaceUpdateManyMutationInput, RaceUncheckedUpdateManyInput>
    /**
     * Filter which Races to update
     */
    where?: RaceWhereInput
    /**
     * Limit how many Races to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Race upsert
   */
  export type RaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * The filter to search for the Race to update in case it exists.
     */
    where: RaceWhereUniqueInput
    /**
     * In case the Race found by the `where` argument doesn't exist, create a new Race with this data.
     */
    create: XOR<RaceCreateInput, RaceUncheckedCreateInput>
    /**
     * In case the Race was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RaceUpdateInput, RaceUncheckedUpdateInput>
  }

  /**
   * Race delete
   */
  export type RaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter which Race to delete.
     */
    where: RaceWhereUniqueInput
  }

  /**
   * Race deleteMany
   */
  export type RaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Races to delete
     */
    where?: RaceWhereInput
    /**
     * Limit how many Races to delete.
     */
    limit?: number
  }

  /**
   * Race.participants
   */
  export type Race$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantInclude<ExtArgs> | null
    where?: RaceParticipantWhereInput
    orderBy?: RaceParticipantOrderByWithRelationInput | RaceParticipantOrderByWithRelationInput[]
    cursor?: RaceParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RaceParticipantScalarFieldEnum | RaceParticipantScalarFieldEnum[]
  }

  /**
   * Race.winner
   */
  export type Race$winnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    where?: ParticipantWhereInput
  }

  /**
   * Race.results
   */
  export type Race$resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    where?: ResultWhereInput
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    cursor?: ResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Race.chatMessages
   */
  export type Race$chatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceChatMessage
     */
    select?: RaceChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceChatMessage
     */
    omit?: RaceChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceChatMessageInclude<ExtArgs> | null
    where?: RaceChatMessageWhereInput
    orderBy?: RaceChatMessageOrderByWithRelationInput | RaceChatMessageOrderByWithRelationInput[]
    cursor?: RaceChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RaceChatMessageScalarFieldEnum | RaceChatMessageScalarFieldEnum[]
  }

  /**
   * Race without action
   */
  export type RaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
  }


  /**
   * Model RaceParticipant
   */

  export type AggregateRaceParticipant = {
    _count: RaceParticipantCountAggregateOutputType | null
    _min: RaceParticipantMinAggregateOutputType | null
    _max: RaceParticipantMaxAggregateOutputType | null
  }

  export type RaceParticipantMinAggregateOutputType = {
    id: string | null
    raceId: string | null
    participantId: string | null
    joinedAt: Date | null
  }

  export type RaceParticipantMaxAggregateOutputType = {
    id: string | null
    raceId: string | null
    participantId: string | null
    joinedAt: Date | null
  }

  export type RaceParticipantCountAggregateOutputType = {
    id: number
    raceId: number
    participantId: number
    joinedAt: number
    _all: number
  }


  export type RaceParticipantMinAggregateInputType = {
    id?: true
    raceId?: true
    participantId?: true
    joinedAt?: true
  }

  export type RaceParticipantMaxAggregateInputType = {
    id?: true
    raceId?: true
    participantId?: true
    joinedAt?: true
  }

  export type RaceParticipantCountAggregateInputType = {
    id?: true
    raceId?: true
    participantId?: true
    joinedAt?: true
    _all?: true
  }

  export type RaceParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RaceParticipant to aggregate.
     */
    where?: RaceParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceParticipants to fetch.
     */
    orderBy?: RaceParticipantOrderByWithRelationInput | RaceParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RaceParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RaceParticipants
    **/
    _count?: true | RaceParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RaceParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RaceParticipantMaxAggregateInputType
  }

  export type GetRaceParticipantAggregateType<T extends RaceParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateRaceParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRaceParticipant[P]>
      : GetScalarType<T[P], AggregateRaceParticipant[P]>
  }




  export type RaceParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceParticipantWhereInput
    orderBy?: RaceParticipantOrderByWithAggregationInput | RaceParticipantOrderByWithAggregationInput[]
    by: RaceParticipantScalarFieldEnum[] | RaceParticipantScalarFieldEnum
    having?: RaceParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RaceParticipantCountAggregateInputType | true
    _min?: RaceParticipantMinAggregateInputType
    _max?: RaceParticipantMaxAggregateInputType
  }

  export type RaceParticipantGroupByOutputType = {
    id: string
    raceId: string
    participantId: string
    joinedAt: Date
    _count: RaceParticipantCountAggregateOutputType | null
    _min: RaceParticipantMinAggregateOutputType | null
    _max: RaceParticipantMaxAggregateOutputType | null
  }

  type GetRaceParticipantGroupByPayload<T extends RaceParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RaceParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RaceParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RaceParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], RaceParticipantGroupByOutputType[P]>
        }
      >
    >


  export type RaceParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    raceId?: boolean
    participantId?: boolean
    joinedAt?: boolean
    race?: boolean | RaceDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raceParticipant"]>

  export type RaceParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    raceId?: boolean
    participantId?: boolean
    joinedAt?: boolean
    race?: boolean | RaceDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raceParticipant"]>

  export type RaceParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    raceId?: boolean
    participantId?: boolean
    joinedAt?: boolean
    race?: boolean | RaceDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raceParticipant"]>

  export type RaceParticipantSelectScalar = {
    id?: boolean
    raceId?: boolean
    participantId?: boolean
    joinedAt?: boolean
  }

  export type RaceParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "raceId" | "participantId" | "joinedAt", ExtArgs["result"]["raceParticipant"]>
  export type RaceParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | RaceDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }
  export type RaceParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | RaceDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }
  export type RaceParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | RaceDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }

  export type $RaceParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RaceParticipant"
    objects: {
      race: Prisma.$RacePayload<ExtArgs>
      participant: Prisma.$ParticipantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      raceId: string
      participantId: string
      joinedAt: Date
    }, ExtArgs["result"]["raceParticipant"]>
    composites: {}
  }

  type RaceParticipantGetPayload<S extends boolean | null | undefined | RaceParticipantDefaultArgs> = $Result.GetResult<Prisma.$RaceParticipantPayload, S>

  type RaceParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RaceParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RaceParticipantCountAggregateInputType | true
    }

  export interface RaceParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RaceParticipant'], meta: { name: 'RaceParticipant' } }
    /**
     * Find zero or one RaceParticipant that matches the filter.
     * @param {RaceParticipantFindUniqueArgs} args - Arguments to find a RaceParticipant
     * @example
     * // Get one RaceParticipant
     * const raceParticipant = await prisma.raceParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RaceParticipantFindUniqueArgs>(args: SelectSubset<T, RaceParticipantFindUniqueArgs<ExtArgs>>): Prisma__RaceParticipantClient<$Result.GetResult<Prisma.$RaceParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RaceParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RaceParticipantFindUniqueOrThrowArgs} args - Arguments to find a RaceParticipant
     * @example
     * // Get one RaceParticipant
     * const raceParticipant = await prisma.raceParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RaceParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, RaceParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RaceParticipantClient<$Result.GetResult<Prisma.$RaceParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RaceParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceParticipantFindFirstArgs} args - Arguments to find a RaceParticipant
     * @example
     * // Get one RaceParticipant
     * const raceParticipant = await prisma.raceParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RaceParticipantFindFirstArgs>(args?: SelectSubset<T, RaceParticipantFindFirstArgs<ExtArgs>>): Prisma__RaceParticipantClient<$Result.GetResult<Prisma.$RaceParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RaceParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceParticipantFindFirstOrThrowArgs} args - Arguments to find a RaceParticipant
     * @example
     * // Get one RaceParticipant
     * const raceParticipant = await prisma.raceParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RaceParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, RaceParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__RaceParticipantClient<$Result.GetResult<Prisma.$RaceParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RaceParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RaceParticipants
     * const raceParticipants = await prisma.raceParticipant.findMany()
     * 
     * // Get first 10 RaceParticipants
     * const raceParticipants = await prisma.raceParticipant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const raceParticipantWithIdOnly = await prisma.raceParticipant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RaceParticipantFindManyArgs>(args?: SelectSubset<T, RaceParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RaceParticipant.
     * @param {RaceParticipantCreateArgs} args - Arguments to create a RaceParticipant.
     * @example
     * // Create one RaceParticipant
     * const RaceParticipant = await prisma.raceParticipant.create({
     *   data: {
     *     // ... data to create a RaceParticipant
     *   }
     * })
     * 
     */
    create<T extends RaceParticipantCreateArgs>(args: SelectSubset<T, RaceParticipantCreateArgs<ExtArgs>>): Prisma__RaceParticipantClient<$Result.GetResult<Prisma.$RaceParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RaceParticipants.
     * @param {RaceParticipantCreateManyArgs} args - Arguments to create many RaceParticipants.
     * @example
     * // Create many RaceParticipants
     * const raceParticipant = await prisma.raceParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RaceParticipantCreateManyArgs>(args?: SelectSubset<T, RaceParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RaceParticipants and returns the data saved in the database.
     * @param {RaceParticipantCreateManyAndReturnArgs} args - Arguments to create many RaceParticipants.
     * @example
     * // Create many RaceParticipants
     * const raceParticipant = await prisma.raceParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RaceParticipants and only return the `id`
     * const raceParticipantWithIdOnly = await prisma.raceParticipant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RaceParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, RaceParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RaceParticipant.
     * @param {RaceParticipantDeleteArgs} args - Arguments to delete one RaceParticipant.
     * @example
     * // Delete one RaceParticipant
     * const RaceParticipant = await prisma.raceParticipant.delete({
     *   where: {
     *     // ... filter to delete one RaceParticipant
     *   }
     * })
     * 
     */
    delete<T extends RaceParticipantDeleteArgs>(args: SelectSubset<T, RaceParticipantDeleteArgs<ExtArgs>>): Prisma__RaceParticipantClient<$Result.GetResult<Prisma.$RaceParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RaceParticipant.
     * @param {RaceParticipantUpdateArgs} args - Arguments to update one RaceParticipant.
     * @example
     * // Update one RaceParticipant
     * const raceParticipant = await prisma.raceParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RaceParticipantUpdateArgs>(args: SelectSubset<T, RaceParticipantUpdateArgs<ExtArgs>>): Prisma__RaceParticipantClient<$Result.GetResult<Prisma.$RaceParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RaceParticipants.
     * @param {RaceParticipantDeleteManyArgs} args - Arguments to filter RaceParticipants to delete.
     * @example
     * // Delete a few RaceParticipants
     * const { count } = await prisma.raceParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RaceParticipantDeleteManyArgs>(args?: SelectSubset<T, RaceParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RaceParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RaceParticipants
     * const raceParticipant = await prisma.raceParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RaceParticipantUpdateManyArgs>(args: SelectSubset<T, RaceParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RaceParticipants and returns the data updated in the database.
     * @param {RaceParticipantUpdateManyAndReturnArgs} args - Arguments to update many RaceParticipants.
     * @example
     * // Update many RaceParticipants
     * const raceParticipant = await prisma.raceParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RaceParticipants and only return the `id`
     * const raceParticipantWithIdOnly = await prisma.raceParticipant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RaceParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, RaceParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RaceParticipant.
     * @param {RaceParticipantUpsertArgs} args - Arguments to update or create a RaceParticipant.
     * @example
     * // Update or create a RaceParticipant
     * const raceParticipant = await prisma.raceParticipant.upsert({
     *   create: {
     *     // ... data to create a RaceParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RaceParticipant we want to update
     *   }
     * })
     */
    upsert<T extends RaceParticipantUpsertArgs>(args: SelectSubset<T, RaceParticipantUpsertArgs<ExtArgs>>): Prisma__RaceParticipantClient<$Result.GetResult<Prisma.$RaceParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RaceParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceParticipantCountArgs} args - Arguments to filter RaceParticipants to count.
     * @example
     * // Count the number of RaceParticipants
     * const count = await prisma.raceParticipant.count({
     *   where: {
     *     // ... the filter for the RaceParticipants we want to count
     *   }
     * })
    **/
    count<T extends RaceParticipantCountArgs>(
      args?: Subset<T, RaceParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RaceParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RaceParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RaceParticipantAggregateArgs>(args: Subset<T, RaceParticipantAggregateArgs>): Prisma.PrismaPromise<GetRaceParticipantAggregateType<T>>

    /**
     * Group by RaceParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceParticipantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RaceParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RaceParticipantGroupByArgs['orderBy'] }
        : { orderBy?: RaceParticipantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RaceParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaceParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RaceParticipant model
   */
  readonly fields: RaceParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RaceParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RaceParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    race<T extends RaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RaceDefaultArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participant<T extends ParticipantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParticipantDefaultArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RaceParticipant model
   */
  interface RaceParticipantFieldRefs {
    readonly id: FieldRef<"RaceParticipant", 'String'>
    readonly raceId: FieldRef<"RaceParticipant", 'String'>
    readonly participantId: FieldRef<"RaceParticipant", 'String'>
    readonly joinedAt: FieldRef<"RaceParticipant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RaceParticipant findUnique
   */
  export type RaceParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantInclude<ExtArgs> | null
    /**
     * Filter, which RaceParticipant to fetch.
     */
    where: RaceParticipantWhereUniqueInput
  }

  /**
   * RaceParticipant findUniqueOrThrow
   */
  export type RaceParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantInclude<ExtArgs> | null
    /**
     * Filter, which RaceParticipant to fetch.
     */
    where: RaceParticipantWhereUniqueInput
  }

  /**
   * RaceParticipant findFirst
   */
  export type RaceParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantInclude<ExtArgs> | null
    /**
     * Filter, which RaceParticipant to fetch.
     */
    where?: RaceParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceParticipants to fetch.
     */
    orderBy?: RaceParticipantOrderByWithRelationInput | RaceParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RaceParticipants.
     */
    cursor?: RaceParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RaceParticipants.
     */
    distinct?: RaceParticipantScalarFieldEnum | RaceParticipantScalarFieldEnum[]
  }

  /**
   * RaceParticipant findFirstOrThrow
   */
  export type RaceParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantInclude<ExtArgs> | null
    /**
     * Filter, which RaceParticipant to fetch.
     */
    where?: RaceParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceParticipants to fetch.
     */
    orderBy?: RaceParticipantOrderByWithRelationInput | RaceParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RaceParticipants.
     */
    cursor?: RaceParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RaceParticipants.
     */
    distinct?: RaceParticipantScalarFieldEnum | RaceParticipantScalarFieldEnum[]
  }

  /**
   * RaceParticipant findMany
   */
  export type RaceParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantInclude<ExtArgs> | null
    /**
     * Filter, which RaceParticipants to fetch.
     */
    where?: RaceParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceParticipants to fetch.
     */
    orderBy?: RaceParticipantOrderByWithRelationInput | RaceParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RaceParticipants.
     */
    cursor?: RaceParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceParticipants.
     */
    skip?: number
    distinct?: RaceParticipantScalarFieldEnum | RaceParticipantScalarFieldEnum[]
  }

  /**
   * RaceParticipant create
   */
  export type RaceParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a RaceParticipant.
     */
    data: XOR<RaceParticipantCreateInput, RaceParticipantUncheckedCreateInput>
  }

  /**
   * RaceParticipant createMany
   */
  export type RaceParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RaceParticipants.
     */
    data: RaceParticipantCreateManyInput | RaceParticipantCreateManyInput[]
  }

  /**
   * RaceParticipant createManyAndReturn
   */
  export type RaceParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many RaceParticipants.
     */
    data: RaceParticipantCreateManyInput | RaceParticipantCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RaceParticipant update
   */
  export type RaceParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a RaceParticipant.
     */
    data: XOR<RaceParticipantUpdateInput, RaceParticipantUncheckedUpdateInput>
    /**
     * Choose, which RaceParticipant to update.
     */
    where: RaceParticipantWhereUniqueInput
  }

  /**
   * RaceParticipant updateMany
   */
  export type RaceParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RaceParticipants.
     */
    data: XOR<RaceParticipantUpdateManyMutationInput, RaceParticipantUncheckedUpdateManyInput>
    /**
     * Filter which RaceParticipants to update
     */
    where?: RaceParticipantWhereInput
    /**
     * Limit how many RaceParticipants to update.
     */
    limit?: number
  }

  /**
   * RaceParticipant updateManyAndReturn
   */
  export type RaceParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * The data used to update RaceParticipants.
     */
    data: XOR<RaceParticipantUpdateManyMutationInput, RaceParticipantUncheckedUpdateManyInput>
    /**
     * Filter which RaceParticipants to update
     */
    where?: RaceParticipantWhereInput
    /**
     * Limit how many RaceParticipants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RaceParticipant upsert
   */
  export type RaceParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the RaceParticipant to update in case it exists.
     */
    where: RaceParticipantWhereUniqueInput
    /**
     * In case the RaceParticipant found by the `where` argument doesn't exist, create a new RaceParticipant with this data.
     */
    create: XOR<RaceParticipantCreateInput, RaceParticipantUncheckedCreateInput>
    /**
     * In case the RaceParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RaceParticipantUpdateInput, RaceParticipantUncheckedUpdateInput>
  }

  /**
   * RaceParticipant delete
   */
  export type RaceParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantInclude<ExtArgs> | null
    /**
     * Filter which RaceParticipant to delete.
     */
    where: RaceParticipantWhereUniqueInput
  }

  /**
   * RaceParticipant deleteMany
   */
  export type RaceParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RaceParticipants to delete
     */
    where?: RaceParticipantWhereInput
    /**
     * Limit how many RaceParticipants to delete.
     */
    limit?: number
  }

  /**
   * RaceParticipant without action
   */
  export type RaceParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantInclude<ExtArgs> | null
  }


  /**
   * Model Result
   */

  export type AggregateResult = {
    _count: ResultCountAggregateOutputType | null
    _avg: ResultAvgAggregateOutputType | null
    _sum: ResultSumAggregateOutputType | null
    _min: ResultMinAggregateOutputType | null
    _max: ResultMaxAggregateOutputType | null
  }

  export type ResultAvgAggregateOutputType = {
    place: number | null
  }

  export type ResultSumAggregateOutputType = {
    place: number | null
  }

  export type ResultMinAggregateOutputType = {
    id: string | null
    raceId: string | null
    participantId: string | null
    place: number | null
    finishedAt: Date | null
  }

  export type ResultMaxAggregateOutputType = {
    id: string | null
    raceId: string | null
    participantId: string | null
    place: number | null
    finishedAt: Date | null
  }

  export type ResultCountAggregateOutputType = {
    id: number
    raceId: number
    participantId: number
    place: number
    finishedAt: number
    _all: number
  }


  export type ResultAvgAggregateInputType = {
    place?: true
  }

  export type ResultSumAggregateInputType = {
    place?: true
  }

  export type ResultMinAggregateInputType = {
    id?: true
    raceId?: true
    participantId?: true
    place?: true
    finishedAt?: true
  }

  export type ResultMaxAggregateInputType = {
    id?: true
    raceId?: true
    participantId?: true
    place?: true
    finishedAt?: true
  }

  export type ResultCountAggregateInputType = {
    id?: true
    raceId?: true
    participantId?: true
    place?: true
    finishedAt?: true
    _all?: true
  }

  export type ResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Result to aggregate.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Results
    **/
    _count?: true | ResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResultMaxAggregateInputType
  }

  export type GetResultAggregateType<T extends ResultAggregateArgs> = {
        [P in keyof T & keyof AggregateResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResult[P]>
      : GetScalarType<T[P], AggregateResult[P]>
  }




  export type ResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultWhereInput
    orderBy?: ResultOrderByWithAggregationInput | ResultOrderByWithAggregationInput[]
    by: ResultScalarFieldEnum[] | ResultScalarFieldEnum
    having?: ResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResultCountAggregateInputType | true
    _avg?: ResultAvgAggregateInputType
    _sum?: ResultSumAggregateInputType
    _min?: ResultMinAggregateInputType
    _max?: ResultMaxAggregateInputType
  }

  export type ResultGroupByOutputType = {
    id: string
    raceId: string
    participantId: string
    place: number
    finishedAt: Date
    _count: ResultCountAggregateOutputType | null
    _avg: ResultAvgAggregateOutputType | null
    _sum: ResultSumAggregateOutputType | null
    _min: ResultMinAggregateOutputType | null
    _max: ResultMaxAggregateOutputType | null
  }

  type GetResultGroupByPayload<T extends ResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResultGroupByOutputType[P]>
            : GetScalarType<T[P], ResultGroupByOutputType[P]>
        }
      >
    >


  export type ResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    raceId?: boolean
    participantId?: boolean
    place?: boolean
    finishedAt?: boolean
    race?: boolean | RaceDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["result"]>

  export type ResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    raceId?: boolean
    participantId?: boolean
    place?: boolean
    finishedAt?: boolean
    race?: boolean | RaceDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["result"]>

  export type ResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    raceId?: boolean
    participantId?: boolean
    place?: boolean
    finishedAt?: boolean
    race?: boolean | RaceDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["result"]>

  export type ResultSelectScalar = {
    id?: boolean
    raceId?: boolean
    participantId?: boolean
    place?: boolean
    finishedAt?: boolean
  }

  export type ResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "raceId" | "participantId" | "place" | "finishedAt", ExtArgs["result"]["result"]>
  export type ResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | RaceDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }
  export type ResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | RaceDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }
  export type ResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | RaceDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }

  export type $ResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Result"
    objects: {
      race: Prisma.$RacePayload<ExtArgs>
      participant: Prisma.$ParticipantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      raceId: string
      participantId: string
      place: number
      finishedAt: Date
    }, ExtArgs["result"]["result"]>
    composites: {}
  }

  type ResultGetPayload<S extends boolean | null | undefined | ResultDefaultArgs> = $Result.GetResult<Prisma.$ResultPayload, S>

  type ResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResultCountAggregateInputType | true
    }

  export interface ResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Result'], meta: { name: 'Result' } }
    /**
     * Find zero or one Result that matches the filter.
     * @param {ResultFindUniqueArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResultFindUniqueArgs>(args: SelectSubset<T, ResultFindUniqueArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Result that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResultFindUniqueOrThrowArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResultFindUniqueOrThrowArgs>(args: SelectSubset<T, ResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Result that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultFindFirstArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResultFindFirstArgs>(args?: SelectSubset<T, ResultFindFirstArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Result that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultFindFirstOrThrowArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResultFindFirstOrThrowArgs>(args?: SelectSubset<T, ResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Results that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Results
     * const results = await prisma.result.findMany()
     * 
     * // Get first 10 Results
     * const results = await prisma.result.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resultWithIdOnly = await prisma.result.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResultFindManyArgs>(args?: SelectSubset<T, ResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Result.
     * @param {ResultCreateArgs} args - Arguments to create a Result.
     * @example
     * // Create one Result
     * const Result = await prisma.result.create({
     *   data: {
     *     // ... data to create a Result
     *   }
     * })
     * 
     */
    create<T extends ResultCreateArgs>(args: SelectSubset<T, ResultCreateArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Results.
     * @param {ResultCreateManyArgs} args - Arguments to create many Results.
     * @example
     * // Create many Results
     * const result = await prisma.result.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResultCreateManyArgs>(args?: SelectSubset<T, ResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Results and returns the data saved in the database.
     * @param {ResultCreateManyAndReturnArgs} args - Arguments to create many Results.
     * @example
     * // Create many Results
     * const result = await prisma.result.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Results and only return the `id`
     * const resultWithIdOnly = await prisma.result.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResultCreateManyAndReturnArgs>(args?: SelectSubset<T, ResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Result.
     * @param {ResultDeleteArgs} args - Arguments to delete one Result.
     * @example
     * // Delete one Result
     * const Result = await prisma.result.delete({
     *   where: {
     *     // ... filter to delete one Result
     *   }
     * })
     * 
     */
    delete<T extends ResultDeleteArgs>(args: SelectSubset<T, ResultDeleteArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Result.
     * @param {ResultUpdateArgs} args - Arguments to update one Result.
     * @example
     * // Update one Result
     * const result = await prisma.result.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResultUpdateArgs>(args: SelectSubset<T, ResultUpdateArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Results.
     * @param {ResultDeleteManyArgs} args - Arguments to filter Results to delete.
     * @example
     * // Delete a few Results
     * const { count } = await prisma.result.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResultDeleteManyArgs>(args?: SelectSubset<T, ResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Results
     * const result = await prisma.result.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResultUpdateManyArgs>(args: SelectSubset<T, ResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Results and returns the data updated in the database.
     * @param {ResultUpdateManyAndReturnArgs} args - Arguments to update many Results.
     * @example
     * // Update many Results
     * const result = await prisma.result.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Results and only return the `id`
     * const resultWithIdOnly = await prisma.result.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResultUpdateManyAndReturnArgs>(args: SelectSubset<T, ResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Result.
     * @param {ResultUpsertArgs} args - Arguments to update or create a Result.
     * @example
     * // Update or create a Result
     * const result = await prisma.result.upsert({
     *   create: {
     *     // ... data to create a Result
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Result we want to update
     *   }
     * })
     */
    upsert<T extends ResultUpsertArgs>(args: SelectSubset<T, ResultUpsertArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultCountArgs} args - Arguments to filter Results to count.
     * @example
     * // Count the number of Results
     * const count = await prisma.result.count({
     *   where: {
     *     // ... the filter for the Results we want to count
     *   }
     * })
    **/
    count<T extends ResultCountArgs>(
      args?: Subset<T, ResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Result.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResultAggregateArgs>(args: Subset<T, ResultAggregateArgs>): Prisma.PrismaPromise<GetResultAggregateType<T>>

    /**
     * Group by Result.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResultGroupByArgs['orderBy'] }
        : { orderBy?: ResultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Result model
   */
  readonly fields: ResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Result.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    race<T extends RaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RaceDefaultArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participant<T extends ParticipantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParticipantDefaultArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Result model
   */
  interface ResultFieldRefs {
    readonly id: FieldRef<"Result", 'String'>
    readonly raceId: FieldRef<"Result", 'String'>
    readonly participantId: FieldRef<"Result", 'String'>
    readonly place: FieldRef<"Result", 'Int'>
    readonly finishedAt: FieldRef<"Result", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Result findUnique
   */
  export type ResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result findUniqueOrThrow
   */
  export type ResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result findFirst
   */
  export type ResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Results.
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Results.
     */
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Result findFirstOrThrow
   */
  export type ResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Results.
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Results.
     */
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Result findMany
   */
  export type ResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Results to fetch.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Results.
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Result create
   */
  export type ResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * The data needed to create a Result.
     */
    data: XOR<ResultCreateInput, ResultUncheckedCreateInput>
  }

  /**
   * Result createMany
   */
  export type ResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Results.
     */
    data: ResultCreateManyInput | ResultCreateManyInput[]
  }

  /**
   * Result createManyAndReturn
   */
  export type ResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * The data used to create many Results.
     */
    data: ResultCreateManyInput | ResultCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Result update
   */
  export type ResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * The data needed to update a Result.
     */
    data: XOR<ResultUpdateInput, ResultUncheckedUpdateInput>
    /**
     * Choose, which Result to update.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result updateMany
   */
  export type ResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Results.
     */
    data: XOR<ResultUpdateManyMutationInput, ResultUncheckedUpdateManyInput>
    /**
     * Filter which Results to update
     */
    where?: ResultWhereInput
    /**
     * Limit how many Results to update.
     */
    limit?: number
  }

  /**
   * Result updateManyAndReturn
   */
  export type ResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * The data used to update Results.
     */
    data: XOR<ResultUpdateManyMutationInput, ResultUncheckedUpdateManyInput>
    /**
     * Filter which Results to update
     */
    where?: ResultWhereInput
    /**
     * Limit how many Results to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Result upsert
   */
  export type ResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * The filter to search for the Result to update in case it exists.
     */
    where: ResultWhereUniqueInput
    /**
     * In case the Result found by the `where` argument doesn't exist, create a new Result with this data.
     */
    create: XOR<ResultCreateInput, ResultUncheckedCreateInput>
    /**
     * In case the Result was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResultUpdateInput, ResultUncheckedUpdateInput>
  }

  /**
   * Result delete
   */
  export type ResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter which Result to delete.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result deleteMany
   */
  export type ResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Results to delete
     */
    where?: ResultWhereInput
    /**
     * Limit how many Results to delete.
     */
    limit?: number
  }

  /**
   * Result without action
   */
  export type ResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
  }


  /**
   * Model RaceChatMessage
   */

  export type AggregateRaceChatMessage = {
    _count: RaceChatMessageCountAggregateOutputType | null
    _min: RaceChatMessageMinAggregateOutputType | null
    _max: RaceChatMessageMaxAggregateOutputType | null
  }

  export type RaceChatMessageMinAggregateOutputType = {
    id: string | null
    raceId: string | null
    participantId: string | null
    name: string | null
    avatar: string | null
    message: string | null
    createdAt: Date | null
  }

  export type RaceChatMessageMaxAggregateOutputType = {
    id: string | null
    raceId: string | null
    participantId: string | null
    name: string | null
    avatar: string | null
    message: string | null
    createdAt: Date | null
  }

  export type RaceChatMessageCountAggregateOutputType = {
    id: number
    raceId: number
    participantId: number
    name: number
    avatar: number
    message: number
    createdAt: number
    _all: number
  }


  export type RaceChatMessageMinAggregateInputType = {
    id?: true
    raceId?: true
    participantId?: true
    name?: true
    avatar?: true
    message?: true
    createdAt?: true
  }

  export type RaceChatMessageMaxAggregateInputType = {
    id?: true
    raceId?: true
    participantId?: true
    name?: true
    avatar?: true
    message?: true
    createdAt?: true
  }

  export type RaceChatMessageCountAggregateInputType = {
    id?: true
    raceId?: true
    participantId?: true
    name?: true
    avatar?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type RaceChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RaceChatMessage to aggregate.
     */
    where?: RaceChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceChatMessages to fetch.
     */
    orderBy?: RaceChatMessageOrderByWithRelationInput | RaceChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RaceChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RaceChatMessages
    **/
    _count?: true | RaceChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RaceChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RaceChatMessageMaxAggregateInputType
  }

  export type GetRaceChatMessageAggregateType<T extends RaceChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateRaceChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRaceChatMessage[P]>
      : GetScalarType<T[P], AggregateRaceChatMessage[P]>
  }




  export type RaceChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceChatMessageWhereInput
    orderBy?: RaceChatMessageOrderByWithAggregationInput | RaceChatMessageOrderByWithAggregationInput[]
    by: RaceChatMessageScalarFieldEnum[] | RaceChatMessageScalarFieldEnum
    having?: RaceChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RaceChatMessageCountAggregateInputType | true
    _min?: RaceChatMessageMinAggregateInputType
    _max?: RaceChatMessageMaxAggregateInputType
  }

  export type RaceChatMessageGroupByOutputType = {
    id: string
    raceId: string
    participantId: string
    name: string
    avatar: string | null
    message: string
    createdAt: Date
    _count: RaceChatMessageCountAggregateOutputType | null
    _min: RaceChatMessageMinAggregateOutputType | null
    _max: RaceChatMessageMaxAggregateOutputType | null
  }

  type GetRaceChatMessageGroupByPayload<T extends RaceChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RaceChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RaceChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RaceChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], RaceChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type RaceChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    raceId?: boolean
    participantId?: boolean
    name?: boolean
    avatar?: boolean
    message?: boolean
    createdAt?: boolean
    race?: boolean | RaceDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raceChatMessage"]>

  export type RaceChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    raceId?: boolean
    participantId?: boolean
    name?: boolean
    avatar?: boolean
    message?: boolean
    createdAt?: boolean
    race?: boolean | RaceDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raceChatMessage"]>

  export type RaceChatMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    raceId?: boolean
    participantId?: boolean
    name?: boolean
    avatar?: boolean
    message?: boolean
    createdAt?: boolean
    race?: boolean | RaceDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raceChatMessage"]>

  export type RaceChatMessageSelectScalar = {
    id?: boolean
    raceId?: boolean
    participantId?: boolean
    name?: boolean
    avatar?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type RaceChatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "raceId" | "participantId" | "name" | "avatar" | "message" | "createdAt", ExtArgs["result"]["raceChatMessage"]>
  export type RaceChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | RaceDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }
  export type RaceChatMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | RaceDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }
  export type RaceChatMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | RaceDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }

  export type $RaceChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RaceChatMessage"
    objects: {
      race: Prisma.$RacePayload<ExtArgs>
      participant: Prisma.$ParticipantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      raceId: string
      participantId: string
      name: string
      avatar: string | null
      message: string
      createdAt: Date
    }, ExtArgs["result"]["raceChatMessage"]>
    composites: {}
  }

  type RaceChatMessageGetPayload<S extends boolean | null | undefined | RaceChatMessageDefaultArgs> = $Result.GetResult<Prisma.$RaceChatMessagePayload, S>

  type RaceChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RaceChatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RaceChatMessageCountAggregateInputType | true
    }

  export interface RaceChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RaceChatMessage'], meta: { name: 'RaceChatMessage' } }
    /**
     * Find zero or one RaceChatMessage that matches the filter.
     * @param {RaceChatMessageFindUniqueArgs} args - Arguments to find a RaceChatMessage
     * @example
     * // Get one RaceChatMessage
     * const raceChatMessage = await prisma.raceChatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RaceChatMessageFindUniqueArgs>(args: SelectSubset<T, RaceChatMessageFindUniqueArgs<ExtArgs>>): Prisma__RaceChatMessageClient<$Result.GetResult<Prisma.$RaceChatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RaceChatMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RaceChatMessageFindUniqueOrThrowArgs} args - Arguments to find a RaceChatMessage
     * @example
     * // Get one RaceChatMessage
     * const raceChatMessage = await prisma.raceChatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RaceChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, RaceChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RaceChatMessageClient<$Result.GetResult<Prisma.$RaceChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RaceChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceChatMessageFindFirstArgs} args - Arguments to find a RaceChatMessage
     * @example
     * // Get one RaceChatMessage
     * const raceChatMessage = await prisma.raceChatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RaceChatMessageFindFirstArgs>(args?: SelectSubset<T, RaceChatMessageFindFirstArgs<ExtArgs>>): Prisma__RaceChatMessageClient<$Result.GetResult<Prisma.$RaceChatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RaceChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceChatMessageFindFirstOrThrowArgs} args - Arguments to find a RaceChatMessage
     * @example
     * // Get one RaceChatMessage
     * const raceChatMessage = await prisma.raceChatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RaceChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, RaceChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__RaceChatMessageClient<$Result.GetResult<Prisma.$RaceChatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RaceChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RaceChatMessages
     * const raceChatMessages = await prisma.raceChatMessage.findMany()
     * 
     * // Get first 10 RaceChatMessages
     * const raceChatMessages = await prisma.raceChatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const raceChatMessageWithIdOnly = await prisma.raceChatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RaceChatMessageFindManyArgs>(args?: SelectSubset<T, RaceChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RaceChatMessage.
     * @param {RaceChatMessageCreateArgs} args - Arguments to create a RaceChatMessage.
     * @example
     * // Create one RaceChatMessage
     * const RaceChatMessage = await prisma.raceChatMessage.create({
     *   data: {
     *     // ... data to create a RaceChatMessage
     *   }
     * })
     * 
     */
    create<T extends RaceChatMessageCreateArgs>(args: SelectSubset<T, RaceChatMessageCreateArgs<ExtArgs>>): Prisma__RaceChatMessageClient<$Result.GetResult<Prisma.$RaceChatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RaceChatMessages.
     * @param {RaceChatMessageCreateManyArgs} args - Arguments to create many RaceChatMessages.
     * @example
     * // Create many RaceChatMessages
     * const raceChatMessage = await prisma.raceChatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RaceChatMessageCreateManyArgs>(args?: SelectSubset<T, RaceChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RaceChatMessages and returns the data saved in the database.
     * @param {RaceChatMessageCreateManyAndReturnArgs} args - Arguments to create many RaceChatMessages.
     * @example
     * // Create many RaceChatMessages
     * const raceChatMessage = await prisma.raceChatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RaceChatMessages and only return the `id`
     * const raceChatMessageWithIdOnly = await prisma.raceChatMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RaceChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, RaceChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceChatMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RaceChatMessage.
     * @param {RaceChatMessageDeleteArgs} args - Arguments to delete one RaceChatMessage.
     * @example
     * // Delete one RaceChatMessage
     * const RaceChatMessage = await prisma.raceChatMessage.delete({
     *   where: {
     *     // ... filter to delete one RaceChatMessage
     *   }
     * })
     * 
     */
    delete<T extends RaceChatMessageDeleteArgs>(args: SelectSubset<T, RaceChatMessageDeleteArgs<ExtArgs>>): Prisma__RaceChatMessageClient<$Result.GetResult<Prisma.$RaceChatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RaceChatMessage.
     * @param {RaceChatMessageUpdateArgs} args - Arguments to update one RaceChatMessage.
     * @example
     * // Update one RaceChatMessage
     * const raceChatMessage = await prisma.raceChatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RaceChatMessageUpdateArgs>(args: SelectSubset<T, RaceChatMessageUpdateArgs<ExtArgs>>): Prisma__RaceChatMessageClient<$Result.GetResult<Prisma.$RaceChatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RaceChatMessages.
     * @param {RaceChatMessageDeleteManyArgs} args - Arguments to filter RaceChatMessages to delete.
     * @example
     * // Delete a few RaceChatMessages
     * const { count } = await prisma.raceChatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RaceChatMessageDeleteManyArgs>(args?: SelectSubset<T, RaceChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RaceChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RaceChatMessages
     * const raceChatMessage = await prisma.raceChatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RaceChatMessageUpdateManyArgs>(args: SelectSubset<T, RaceChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RaceChatMessages and returns the data updated in the database.
     * @param {RaceChatMessageUpdateManyAndReturnArgs} args - Arguments to update many RaceChatMessages.
     * @example
     * // Update many RaceChatMessages
     * const raceChatMessage = await prisma.raceChatMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RaceChatMessages and only return the `id`
     * const raceChatMessageWithIdOnly = await prisma.raceChatMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RaceChatMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, RaceChatMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceChatMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RaceChatMessage.
     * @param {RaceChatMessageUpsertArgs} args - Arguments to update or create a RaceChatMessage.
     * @example
     * // Update or create a RaceChatMessage
     * const raceChatMessage = await prisma.raceChatMessage.upsert({
     *   create: {
     *     // ... data to create a RaceChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RaceChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends RaceChatMessageUpsertArgs>(args: SelectSubset<T, RaceChatMessageUpsertArgs<ExtArgs>>): Prisma__RaceChatMessageClient<$Result.GetResult<Prisma.$RaceChatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RaceChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceChatMessageCountArgs} args - Arguments to filter RaceChatMessages to count.
     * @example
     * // Count the number of RaceChatMessages
     * const count = await prisma.raceChatMessage.count({
     *   where: {
     *     // ... the filter for the RaceChatMessages we want to count
     *   }
     * })
    **/
    count<T extends RaceChatMessageCountArgs>(
      args?: Subset<T, RaceChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RaceChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RaceChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RaceChatMessageAggregateArgs>(args: Subset<T, RaceChatMessageAggregateArgs>): Prisma.PrismaPromise<GetRaceChatMessageAggregateType<T>>

    /**
     * Group by RaceChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceChatMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RaceChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RaceChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: RaceChatMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RaceChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaceChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RaceChatMessage model
   */
  readonly fields: RaceChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RaceChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RaceChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    race<T extends RaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RaceDefaultArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participant<T extends ParticipantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParticipantDefaultArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RaceChatMessage model
   */
  interface RaceChatMessageFieldRefs {
    readonly id: FieldRef<"RaceChatMessage", 'String'>
    readonly raceId: FieldRef<"RaceChatMessage", 'String'>
    readonly participantId: FieldRef<"RaceChatMessage", 'String'>
    readonly name: FieldRef<"RaceChatMessage", 'String'>
    readonly avatar: FieldRef<"RaceChatMessage", 'String'>
    readonly message: FieldRef<"RaceChatMessage", 'String'>
    readonly createdAt: FieldRef<"RaceChatMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RaceChatMessage findUnique
   */
  export type RaceChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceChatMessage
     */
    select?: RaceChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceChatMessage
     */
    omit?: RaceChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which RaceChatMessage to fetch.
     */
    where: RaceChatMessageWhereUniqueInput
  }

  /**
   * RaceChatMessage findUniqueOrThrow
   */
  export type RaceChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceChatMessage
     */
    select?: RaceChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceChatMessage
     */
    omit?: RaceChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which RaceChatMessage to fetch.
     */
    where: RaceChatMessageWhereUniqueInput
  }

  /**
   * RaceChatMessage findFirst
   */
  export type RaceChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceChatMessage
     */
    select?: RaceChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceChatMessage
     */
    omit?: RaceChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which RaceChatMessage to fetch.
     */
    where?: RaceChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceChatMessages to fetch.
     */
    orderBy?: RaceChatMessageOrderByWithRelationInput | RaceChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RaceChatMessages.
     */
    cursor?: RaceChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RaceChatMessages.
     */
    distinct?: RaceChatMessageScalarFieldEnum | RaceChatMessageScalarFieldEnum[]
  }

  /**
   * RaceChatMessage findFirstOrThrow
   */
  export type RaceChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceChatMessage
     */
    select?: RaceChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceChatMessage
     */
    omit?: RaceChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which RaceChatMessage to fetch.
     */
    where?: RaceChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceChatMessages to fetch.
     */
    orderBy?: RaceChatMessageOrderByWithRelationInput | RaceChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RaceChatMessages.
     */
    cursor?: RaceChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RaceChatMessages.
     */
    distinct?: RaceChatMessageScalarFieldEnum | RaceChatMessageScalarFieldEnum[]
  }

  /**
   * RaceChatMessage findMany
   */
  export type RaceChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceChatMessage
     */
    select?: RaceChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceChatMessage
     */
    omit?: RaceChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which RaceChatMessages to fetch.
     */
    where?: RaceChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceChatMessages to fetch.
     */
    orderBy?: RaceChatMessageOrderByWithRelationInput | RaceChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RaceChatMessages.
     */
    cursor?: RaceChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceChatMessages.
     */
    skip?: number
    distinct?: RaceChatMessageScalarFieldEnum | RaceChatMessageScalarFieldEnum[]
  }

  /**
   * RaceChatMessage create
   */
  export type RaceChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceChatMessage
     */
    select?: RaceChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceChatMessage
     */
    omit?: RaceChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a RaceChatMessage.
     */
    data: XOR<RaceChatMessageCreateInput, RaceChatMessageUncheckedCreateInput>
  }

  /**
   * RaceChatMessage createMany
   */
  export type RaceChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RaceChatMessages.
     */
    data: RaceChatMessageCreateManyInput | RaceChatMessageCreateManyInput[]
  }

  /**
   * RaceChatMessage createManyAndReturn
   */
  export type RaceChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceChatMessage
     */
    select?: RaceChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RaceChatMessage
     */
    omit?: RaceChatMessageOmit<ExtArgs> | null
    /**
     * The data used to create many RaceChatMessages.
     */
    data: RaceChatMessageCreateManyInput | RaceChatMessageCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceChatMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RaceChatMessage update
   */
  export type RaceChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceChatMessage
     */
    select?: RaceChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceChatMessage
     */
    omit?: RaceChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a RaceChatMessage.
     */
    data: XOR<RaceChatMessageUpdateInput, RaceChatMessageUncheckedUpdateInput>
    /**
     * Choose, which RaceChatMessage to update.
     */
    where: RaceChatMessageWhereUniqueInput
  }

  /**
   * RaceChatMessage updateMany
   */
  export type RaceChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RaceChatMessages.
     */
    data: XOR<RaceChatMessageUpdateManyMutationInput, RaceChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which RaceChatMessages to update
     */
    where?: RaceChatMessageWhereInput
    /**
     * Limit how many RaceChatMessages to update.
     */
    limit?: number
  }

  /**
   * RaceChatMessage updateManyAndReturn
   */
  export type RaceChatMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceChatMessage
     */
    select?: RaceChatMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RaceChatMessage
     */
    omit?: RaceChatMessageOmit<ExtArgs> | null
    /**
     * The data used to update RaceChatMessages.
     */
    data: XOR<RaceChatMessageUpdateManyMutationInput, RaceChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which RaceChatMessages to update
     */
    where?: RaceChatMessageWhereInput
    /**
     * Limit how many RaceChatMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceChatMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RaceChatMessage upsert
   */
  export type RaceChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceChatMessage
     */
    select?: RaceChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceChatMessage
     */
    omit?: RaceChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceChatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the RaceChatMessage to update in case it exists.
     */
    where: RaceChatMessageWhereUniqueInput
    /**
     * In case the RaceChatMessage found by the `where` argument doesn't exist, create a new RaceChatMessage with this data.
     */
    create: XOR<RaceChatMessageCreateInput, RaceChatMessageUncheckedCreateInput>
    /**
     * In case the RaceChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RaceChatMessageUpdateInput, RaceChatMessageUncheckedUpdateInput>
  }

  /**
   * RaceChatMessage delete
   */
  export type RaceChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceChatMessage
     */
    select?: RaceChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceChatMessage
     */
    omit?: RaceChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceChatMessageInclude<ExtArgs> | null
    /**
     * Filter which RaceChatMessage to delete.
     */
    where: RaceChatMessageWhereUniqueInput
  }

  /**
   * RaceChatMessage deleteMany
   */
  export type RaceChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RaceChatMessages to delete
     */
    where?: RaceChatMessageWhereInput
    /**
     * Limit how many RaceChatMessages to delete.
     */
    limit?: number
  }

  /**
   * RaceChatMessage without action
   */
  export type RaceChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceChatMessage
     */
    select?: RaceChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceChatMessage
     */
    omit?: RaceChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceChatMessageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ParticipantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    avatar: 'avatar',
    telegramId: 'telegramId',
    joinedAt: 'joinedAt'
  };

  export type ParticipantScalarFieldEnum = (typeof ParticipantScalarFieldEnum)[keyof typeof ParticipantScalarFieldEnum]


  export const RaceScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    startedAt: 'startedAt',
    endedAt: 'endedAt',
    winnerId: 'winnerId',
    prizePool: 'prizePool'
  };

  export type RaceScalarFieldEnum = (typeof RaceScalarFieldEnum)[keyof typeof RaceScalarFieldEnum]


  export const RaceParticipantScalarFieldEnum: {
    id: 'id',
    raceId: 'raceId',
    participantId: 'participantId',
    joinedAt: 'joinedAt'
  };

  export type RaceParticipantScalarFieldEnum = (typeof RaceParticipantScalarFieldEnum)[keyof typeof RaceParticipantScalarFieldEnum]


  export const ResultScalarFieldEnum: {
    id: 'id',
    raceId: 'raceId',
    participantId: 'participantId',
    place: 'place',
    finishedAt: 'finishedAt'
  };

  export type ResultScalarFieldEnum = (typeof ResultScalarFieldEnum)[keyof typeof ResultScalarFieldEnum]


  export const RaceChatMessageScalarFieldEnum: {
    id: 'id',
    raceId: 'raceId',
    participantId: 'participantId',
    name: 'name',
    avatar: 'avatar',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type RaceChatMessageScalarFieldEnum = (typeof RaceChatMessageScalarFieldEnum)[keyof typeof RaceChatMessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ParticipantWhereInput = {
    AND?: ParticipantWhereInput | ParticipantWhereInput[]
    OR?: ParticipantWhereInput[]
    NOT?: ParticipantWhereInput | ParticipantWhereInput[]
    id?: StringFilter<"Participant"> | string
    name?: StringFilter<"Participant"> | string
    avatar?: StringNullableFilter<"Participant"> | string | null
    telegramId?: StringNullableFilter<"Participant"> | string | null
    joinedAt?: DateTimeFilter<"Participant"> | Date | string
    races?: RaceParticipantListRelationFilter
    winnerRaces?: RaceListRelationFilter
    results?: ResultListRelationFilter
    chatMessages?: RaceChatMessageListRelationFilter
  }

  export type ParticipantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrderInput | SortOrder
    telegramId?: SortOrderInput | SortOrder
    joinedAt?: SortOrder
    races?: RaceParticipantOrderByRelationAggregateInput
    winnerRaces?: RaceOrderByRelationAggregateInput
    results?: ResultOrderByRelationAggregateInput
    chatMessages?: RaceChatMessageOrderByRelationAggregateInput
  }

  export type ParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    telegramId?: string
    AND?: ParticipantWhereInput | ParticipantWhereInput[]
    OR?: ParticipantWhereInput[]
    NOT?: ParticipantWhereInput | ParticipantWhereInput[]
    name?: StringFilter<"Participant"> | string
    avatar?: StringNullableFilter<"Participant"> | string | null
    joinedAt?: DateTimeFilter<"Participant"> | Date | string
    races?: RaceParticipantListRelationFilter
    winnerRaces?: RaceListRelationFilter
    results?: ResultListRelationFilter
    chatMessages?: RaceChatMessageListRelationFilter
  }, "id" | "telegramId">

  export type ParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrderInput | SortOrder
    telegramId?: SortOrderInput | SortOrder
    joinedAt?: SortOrder
    _count?: ParticipantCountOrderByAggregateInput
    _max?: ParticipantMaxOrderByAggregateInput
    _min?: ParticipantMinOrderByAggregateInput
  }

  export type ParticipantScalarWhereWithAggregatesInput = {
    AND?: ParticipantScalarWhereWithAggregatesInput | ParticipantScalarWhereWithAggregatesInput[]
    OR?: ParticipantScalarWhereWithAggregatesInput[]
    NOT?: ParticipantScalarWhereWithAggregatesInput | ParticipantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Participant"> | string
    name?: StringWithAggregatesFilter<"Participant"> | string
    avatar?: StringNullableWithAggregatesFilter<"Participant"> | string | null
    telegramId?: StringNullableWithAggregatesFilter<"Participant"> | string | null
    joinedAt?: DateTimeWithAggregatesFilter<"Participant"> | Date | string
  }

  export type RaceWhereInput = {
    AND?: RaceWhereInput | RaceWhereInput[]
    OR?: RaceWhereInput[]
    NOT?: RaceWhereInput | RaceWhereInput[]
    id?: StringFilter<"Race"> | string
    createdAt?: DateTimeFilter<"Race"> | Date | string
    startedAt?: DateTimeNullableFilter<"Race"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"Race"> | Date | string | null
    winnerId?: StringNullableFilter<"Race"> | string | null
    prizePool?: IntFilter<"Race"> | number
    participants?: RaceParticipantListRelationFilter
    winner?: XOR<ParticipantNullableScalarRelationFilter, ParticipantWhereInput> | null
    results?: ResultListRelationFilter
    chatMessages?: RaceChatMessageListRelationFilter
  }

  export type RaceOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    endedAt?: SortOrderInput | SortOrder
    winnerId?: SortOrderInput | SortOrder
    prizePool?: SortOrder
    participants?: RaceParticipantOrderByRelationAggregateInput
    winner?: ParticipantOrderByWithRelationInput
    results?: ResultOrderByRelationAggregateInput
    chatMessages?: RaceChatMessageOrderByRelationAggregateInput
  }

  export type RaceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RaceWhereInput | RaceWhereInput[]
    OR?: RaceWhereInput[]
    NOT?: RaceWhereInput | RaceWhereInput[]
    createdAt?: DateTimeFilter<"Race"> | Date | string
    startedAt?: DateTimeNullableFilter<"Race"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"Race"> | Date | string | null
    winnerId?: StringNullableFilter<"Race"> | string | null
    prizePool?: IntFilter<"Race"> | number
    participants?: RaceParticipantListRelationFilter
    winner?: XOR<ParticipantNullableScalarRelationFilter, ParticipantWhereInput> | null
    results?: ResultListRelationFilter
    chatMessages?: RaceChatMessageListRelationFilter
  }, "id">

  export type RaceOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    endedAt?: SortOrderInput | SortOrder
    winnerId?: SortOrderInput | SortOrder
    prizePool?: SortOrder
    _count?: RaceCountOrderByAggregateInput
    _avg?: RaceAvgOrderByAggregateInput
    _max?: RaceMaxOrderByAggregateInput
    _min?: RaceMinOrderByAggregateInput
    _sum?: RaceSumOrderByAggregateInput
  }

  export type RaceScalarWhereWithAggregatesInput = {
    AND?: RaceScalarWhereWithAggregatesInput | RaceScalarWhereWithAggregatesInput[]
    OR?: RaceScalarWhereWithAggregatesInput[]
    NOT?: RaceScalarWhereWithAggregatesInput | RaceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Race"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Race"> | Date | string
    startedAt?: DateTimeNullableWithAggregatesFilter<"Race"> | Date | string | null
    endedAt?: DateTimeNullableWithAggregatesFilter<"Race"> | Date | string | null
    winnerId?: StringNullableWithAggregatesFilter<"Race"> | string | null
    prizePool?: IntWithAggregatesFilter<"Race"> | number
  }

  export type RaceParticipantWhereInput = {
    AND?: RaceParticipantWhereInput | RaceParticipantWhereInput[]
    OR?: RaceParticipantWhereInput[]
    NOT?: RaceParticipantWhereInput | RaceParticipantWhereInput[]
    id?: StringFilter<"RaceParticipant"> | string
    raceId?: StringFilter<"RaceParticipant"> | string
    participantId?: StringFilter<"RaceParticipant"> | string
    joinedAt?: DateTimeFilter<"RaceParticipant"> | Date | string
    race?: XOR<RaceScalarRelationFilter, RaceWhereInput>
    participant?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
  }

  export type RaceParticipantOrderByWithRelationInput = {
    id?: SortOrder
    raceId?: SortOrder
    participantId?: SortOrder
    joinedAt?: SortOrder
    race?: RaceOrderByWithRelationInput
    participant?: ParticipantOrderByWithRelationInput
  }

  export type RaceParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    raceId_participantId?: RaceParticipantRaceIdParticipantIdCompoundUniqueInput
    AND?: RaceParticipantWhereInput | RaceParticipantWhereInput[]
    OR?: RaceParticipantWhereInput[]
    NOT?: RaceParticipantWhereInput | RaceParticipantWhereInput[]
    raceId?: StringFilter<"RaceParticipant"> | string
    participantId?: StringFilter<"RaceParticipant"> | string
    joinedAt?: DateTimeFilter<"RaceParticipant"> | Date | string
    race?: XOR<RaceScalarRelationFilter, RaceWhereInput>
    participant?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
  }, "id" | "raceId_participantId">

  export type RaceParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    raceId?: SortOrder
    participantId?: SortOrder
    joinedAt?: SortOrder
    _count?: RaceParticipantCountOrderByAggregateInput
    _max?: RaceParticipantMaxOrderByAggregateInput
    _min?: RaceParticipantMinOrderByAggregateInput
  }

  export type RaceParticipantScalarWhereWithAggregatesInput = {
    AND?: RaceParticipantScalarWhereWithAggregatesInput | RaceParticipantScalarWhereWithAggregatesInput[]
    OR?: RaceParticipantScalarWhereWithAggregatesInput[]
    NOT?: RaceParticipantScalarWhereWithAggregatesInput | RaceParticipantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RaceParticipant"> | string
    raceId?: StringWithAggregatesFilter<"RaceParticipant"> | string
    participantId?: StringWithAggregatesFilter<"RaceParticipant"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"RaceParticipant"> | Date | string
  }

  export type ResultWhereInput = {
    AND?: ResultWhereInput | ResultWhereInput[]
    OR?: ResultWhereInput[]
    NOT?: ResultWhereInput | ResultWhereInput[]
    id?: StringFilter<"Result"> | string
    raceId?: StringFilter<"Result"> | string
    participantId?: StringFilter<"Result"> | string
    place?: IntFilter<"Result"> | number
    finishedAt?: DateTimeFilter<"Result"> | Date | string
    race?: XOR<RaceScalarRelationFilter, RaceWhereInput>
    participant?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
  }

  export type ResultOrderByWithRelationInput = {
    id?: SortOrder
    raceId?: SortOrder
    participantId?: SortOrder
    place?: SortOrder
    finishedAt?: SortOrder
    race?: RaceOrderByWithRelationInput
    participant?: ParticipantOrderByWithRelationInput
  }

  export type ResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    raceId_participantId?: ResultRaceIdParticipantIdCompoundUniqueInput
    AND?: ResultWhereInput | ResultWhereInput[]
    OR?: ResultWhereInput[]
    NOT?: ResultWhereInput | ResultWhereInput[]
    raceId?: StringFilter<"Result"> | string
    participantId?: StringFilter<"Result"> | string
    place?: IntFilter<"Result"> | number
    finishedAt?: DateTimeFilter<"Result"> | Date | string
    race?: XOR<RaceScalarRelationFilter, RaceWhereInput>
    participant?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
  }, "id" | "raceId_participantId">

  export type ResultOrderByWithAggregationInput = {
    id?: SortOrder
    raceId?: SortOrder
    participantId?: SortOrder
    place?: SortOrder
    finishedAt?: SortOrder
    _count?: ResultCountOrderByAggregateInput
    _avg?: ResultAvgOrderByAggregateInput
    _max?: ResultMaxOrderByAggregateInput
    _min?: ResultMinOrderByAggregateInput
    _sum?: ResultSumOrderByAggregateInput
  }

  export type ResultScalarWhereWithAggregatesInput = {
    AND?: ResultScalarWhereWithAggregatesInput | ResultScalarWhereWithAggregatesInput[]
    OR?: ResultScalarWhereWithAggregatesInput[]
    NOT?: ResultScalarWhereWithAggregatesInput | ResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Result"> | string
    raceId?: StringWithAggregatesFilter<"Result"> | string
    participantId?: StringWithAggregatesFilter<"Result"> | string
    place?: IntWithAggregatesFilter<"Result"> | number
    finishedAt?: DateTimeWithAggregatesFilter<"Result"> | Date | string
  }

  export type RaceChatMessageWhereInput = {
    AND?: RaceChatMessageWhereInput | RaceChatMessageWhereInput[]
    OR?: RaceChatMessageWhereInput[]
    NOT?: RaceChatMessageWhereInput | RaceChatMessageWhereInput[]
    id?: StringFilter<"RaceChatMessage"> | string
    raceId?: StringFilter<"RaceChatMessage"> | string
    participantId?: StringFilter<"RaceChatMessage"> | string
    name?: StringFilter<"RaceChatMessage"> | string
    avatar?: StringNullableFilter<"RaceChatMessage"> | string | null
    message?: StringFilter<"RaceChatMessage"> | string
    createdAt?: DateTimeFilter<"RaceChatMessage"> | Date | string
    race?: XOR<RaceScalarRelationFilter, RaceWhereInput>
    participant?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
  }

  export type RaceChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    raceId?: SortOrder
    participantId?: SortOrder
    name?: SortOrder
    avatar?: SortOrderInput | SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    race?: RaceOrderByWithRelationInput
    participant?: ParticipantOrderByWithRelationInput
  }

  export type RaceChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RaceChatMessageWhereInput | RaceChatMessageWhereInput[]
    OR?: RaceChatMessageWhereInput[]
    NOT?: RaceChatMessageWhereInput | RaceChatMessageWhereInput[]
    raceId?: StringFilter<"RaceChatMessage"> | string
    participantId?: StringFilter<"RaceChatMessage"> | string
    name?: StringFilter<"RaceChatMessage"> | string
    avatar?: StringNullableFilter<"RaceChatMessage"> | string | null
    message?: StringFilter<"RaceChatMessage"> | string
    createdAt?: DateTimeFilter<"RaceChatMessage"> | Date | string
    race?: XOR<RaceScalarRelationFilter, RaceWhereInput>
    participant?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
  }, "id">

  export type RaceChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    raceId?: SortOrder
    participantId?: SortOrder
    name?: SortOrder
    avatar?: SortOrderInput | SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    _count?: RaceChatMessageCountOrderByAggregateInput
    _max?: RaceChatMessageMaxOrderByAggregateInput
    _min?: RaceChatMessageMinOrderByAggregateInput
  }

  export type RaceChatMessageScalarWhereWithAggregatesInput = {
    AND?: RaceChatMessageScalarWhereWithAggregatesInput | RaceChatMessageScalarWhereWithAggregatesInput[]
    OR?: RaceChatMessageScalarWhereWithAggregatesInput[]
    NOT?: RaceChatMessageScalarWhereWithAggregatesInput | RaceChatMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RaceChatMessage"> | string
    raceId?: StringWithAggregatesFilter<"RaceChatMessage"> | string
    participantId?: StringWithAggregatesFilter<"RaceChatMessage"> | string
    name?: StringWithAggregatesFilter<"RaceChatMessage"> | string
    avatar?: StringNullableWithAggregatesFilter<"RaceChatMessage"> | string | null
    message?: StringWithAggregatesFilter<"RaceChatMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RaceChatMessage"> | Date | string
  }

  export type ParticipantCreateInput = {
    id?: string
    name: string
    avatar?: string | null
    telegramId?: string | null
    joinedAt?: Date | string
    races?: RaceParticipantCreateNestedManyWithoutParticipantInput
    winnerRaces?: RaceCreateNestedManyWithoutWinnerInput
    results?: ResultCreateNestedManyWithoutParticipantInput
    chatMessages?: RaceChatMessageCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantUncheckedCreateInput = {
    id?: string
    name: string
    avatar?: string | null
    telegramId?: string | null
    joinedAt?: Date | string
    races?: RaceParticipantUncheckedCreateNestedManyWithoutParticipantInput
    winnerRaces?: RaceUncheckedCreateNestedManyWithoutWinnerInput
    results?: ResultUncheckedCreateNestedManyWithoutParticipantInput
    chatMessages?: RaceChatMessageUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    races?: RaceParticipantUpdateManyWithoutParticipantNestedInput
    winnerRaces?: RaceUpdateManyWithoutWinnerNestedInput
    results?: ResultUpdateManyWithoutParticipantNestedInput
    chatMessages?: RaceChatMessageUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    races?: RaceParticipantUncheckedUpdateManyWithoutParticipantNestedInput
    winnerRaces?: RaceUncheckedUpdateManyWithoutWinnerNestedInput
    results?: ResultUncheckedUpdateManyWithoutParticipantNestedInput
    chatMessages?: RaceChatMessageUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantCreateManyInput = {
    id?: string
    name: string
    avatar?: string | null
    telegramId?: string | null
    joinedAt?: Date | string
  }

  export type ParticipantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceCreateInput = {
    id?: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    prizePool?: number
    participants?: RaceParticipantCreateNestedManyWithoutRaceInput
    winner?: ParticipantCreateNestedOneWithoutWinnerRacesInput
    results?: ResultCreateNestedManyWithoutRaceInput
    chatMessages?: RaceChatMessageCreateNestedManyWithoutRaceInput
  }

  export type RaceUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    winnerId?: string | null
    prizePool?: number
    participants?: RaceParticipantUncheckedCreateNestedManyWithoutRaceInput
    results?: ResultUncheckedCreateNestedManyWithoutRaceInput
    chatMessages?: RaceChatMessageUncheckedCreateNestedManyWithoutRaceInput
  }

  export type RaceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prizePool?: IntFieldUpdateOperationsInput | number
    participants?: RaceParticipantUpdateManyWithoutRaceNestedInput
    winner?: ParticipantUpdateOneWithoutWinnerRacesNestedInput
    results?: ResultUpdateManyWithoutRaceNestedInput
    chatMessages?: RaceChatMessageUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    prizePool?: IntFieldUpdateOperationsInput | number
    participants?: RaceParticipantUncheckedUpdateManyWithoutRaceNestedInput
    results?: ResultUncheckedUpdateManyWithoutRaceNestedInput
    chatMessages?: RaceChatMessageUncheckedUpdateManyWithoutRaceNestedInput
  }

  export type RaceCreateManyInput = {
    id?: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    winnerId?: string | null
    prizePool?: number
  }

  export type RaceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prizePool?: IntFieldUpdateOperationsInput | number
  }

  export type RaceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    prizePool?: IntFieldUpdateOperationsInput | number
  }

  export type RaceParticipantCreateInput = {
    id?: string
    joinedAt?: Date | string
    race: RaceCreateNestedOneWithoutParticipantsInput
    participant: ParticipantCreateNestedOneWithoutRacesInput
  }

  export type RaceParticipantUncheckedCreateInput = {
    id?: string
    raceId: string
    participantId: string
    joinedAt?: Date | string
  }

  export type RaceParticipantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    race?: RaceUpdateOneRequiredWithoutParticipantsNestedInput
    participant?: ParticipantUpdateOneRequiredWithoutRacesNestedInput
  }

  export type RaceParticipantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    raceId?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceParticipantCreateManyInput = {
    id?: string
    raceId: string
    participantId: string
    joinedAt?: Date | string
  }

  export type RaceParticipantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceParticipantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    raceId?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultCreateInput = {
    id?: string
    place: number
    finishedAt?: Date | string
    race: RaceCreateNestedOneWithoutResultsInput
    participant: ParticipantCreateNestedOneWithoutResultsInput
  }

  export type ResultUncheckedCreateInput = {
    id?: string
    raceId: string
    participantId: string
    place: number
    finishedAt?: Date | string
  }

  export type ResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    place?: IntFieldUpdateOperationsInput | number
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    race?: RaceUpdateOneRequiredWithoutResultsNestedInput
    participant?: ParticipantUpdateOneRequiredWithoutResultsNestedInput
  }

  export type ResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    raceId?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    place?: IntFieldUpdateOperationsInput | number
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultCreateManyInput = {
    id?: string
    raceId: string
    participantId: string
    place: number
    finishedAt?: Date | string
  }

  export type ResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    place?: IntFieldUpdateOperationsInput | number
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    raceId?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    place?: IntFieldUpdateOperationsInput | number
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceChatMessageCreateInput = {
    id?: string
    name: string
    avatar?: string | null
    message: string
    createdAt?: Date | string
    race: RaceCreateNestedOneWithoutChatMessagesInput
    participant: ParticipantCreateNestedOneWithoutChatMessagesInput
  }

  export type RaceChatMessageUncheckedCreateInput = {
    id?: string
    raceId: string
    participantId: string
    name: string
    avatar?: string | null
    message: string
    createdAt?: Date | string
  }

  export type RaceChatMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    race?: RaceUpdateOneRequiredWithoutChatMessagesNestedInput
    participant?: ParticipantUpdateOneRequiredWithoutChatMessagesNestedInput
  }

  export type RaceChatMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    raceId?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceChatMessageCreateManyInput = {
    id?: string
    raceId: string
    participantId: string
    name: string
    avatar?: string | null
    message: string
    createdAt?: Date | string
  }

  export type RaceChatMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceChatMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    raceId?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RaceParticipantListRelationFilter = {
    every?: RaceParticipantWhereInput
    some?: RaceParticipantWhereInput
    none?: RaceParticipantWhereInput
  }

  export type RaceListRelationFilter = {
    every?: RaceWhereInput
    some?: RaceWhereInput
    none?: RaceWhereInput
  }

  export type ResultListRelationFilter = {
    every?: ResultWhereInput
    some?: ResultWhereInput
    none?: ResultWhereInput
  }

  export type RaceChatMessageListRelationFilter = {
    every?: RaceChatMessageWhereInput
    some?: RaceChatMessageWhereInput
    none?: RaceChatMessageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RaceParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RaceChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    telegramId?: SortOrder
    joinedAt?: SortOrder
  }

  export type ParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    telegramId?: SortOrder
    joinedAt?: SortOrder
  }

  export type ParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    telegramId?: SortOrder
    joinedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ParticipantNullableScalarRelationFilter = {
    is?: ParticipantWhereInput | null
    isNot?: ParticipantWhereInput | null
  }

  export type RaceCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    winnerId?: SortOrder
    prizePool?: SortOrder
  }

  export type RaceAvgOrderByAggregateInput = {
    prizePool?: SortOrder
  }

  export type RaceMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    winnerId?: SortOrder
    prizePool?: SortOrder
  }

  export type RaceMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    winnerId?: SortOrder
    prizePool?: SortOrder
  }

  export type RaceSumOrderByAggregateInput = {
    prizePool?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type RaceScalarRelationFilter = {
    is?: RaceWhereInput
    isNot?: RaceWhereInput
  }

  export type ParticipantScalarRelationFilter = {
    is?: ParticipantWhereInput
    isNot?: ParticipantWhereInput
  }

  export type RaceParticipantRaceIdParticipantIdCompoundUniqueInput = {
    raceId: string
    participantId: string
  }

  export type RaceParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    raceId?: SortOrder
    participantId?: SortOrder
    joinedAt?: SortOrder
  }

  export type RaceParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    raceId?: SortOrder
    participantId?: SortOrder
    joinedAt?: SortOrder
  }

  export type RaceParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    raceId?: SortOrder
    participantId?: SortOrder
    joinedAt?: SortOrder
  }

  export type ResultRaceIdParticipantIdCompoundUniqueInput = {
    raceId: string
    participantId: string
  }

  export type ResultCountOrderByAggregateInput = {
    id?: SortOrder
    raceId?: SortOrder
    participantId?: SortOrder
    place?: SortOrder
    finishedAt?: SortOrder
  }

  export type ResultAvgOrderByAggregateInput = {
    place?: SortOrder
  }

  export type ResultMaxOrderByAggregateInput = {
    id?: SortOrder
    raceId?: SortOrder
    participantId?: SortOrder
    place?: SortOrder
    finishedAt?: SortOrder
  }

  export type ResultMinOrderByAggregateInput = {
    id?: SortOrder
    raceId?: SortOrder
    participantId?: SortOrder
    place?: SortOrder
    finishedAt?: SortOrder
  }

  export type ResultSumOrderByAggregateInput = {
    place?: SortOrder
  }

  export type RaceChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    raceId?: SortOrder
    participantId?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type RaceChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    raceId?: SortOrder
    participantId?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type RaceChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    raceId?: SortOrder
    participantId?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type RaceParticipantCreateNestedManyWithoutParticipantInput = {
    create?: XOR<RaceParticipantCreateWithoutParticipantInput, RaceParticipantUncheckedCreateWithoutParticipantInput> | RaceParticipantCreateWithoutParticipantInput[] | RaceParticipantUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: RaceParticipantCreateOrConnectWithoutParticipantInput | RaceParticipantCreateOrConnectWithoutParticipantInput[]
    createMany?: RaceParticipantCreateManyParticipantInputEnvelope
    connect?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
  }

  export type RaceCreateNestedManyWithoutWinnerInput = {
    create?: XOR<RaceCreateWithoutWinnerInput, RaceUncheckedCreateWithoutWinnerInput> | RaceCreateWithoutWinnerInput[] | RaceUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: RaceCreateOrConnectWithoutWinnerInput | RaceCreateOrConnectWithoutWinnerInput[]
    createMany?: RaceCreateManyWinnerInputEnvelope
    connect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
  }

  export type ResultCreateNestedManyWithoutParticipantInput = {
    create?: XOR<ResultCreateWithoutParticipantInput, ResultUncheckedCreateWithoutParticipantInput> | ResultCreateWithoutParticipantInput[] | ResultUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutParticipantInput | ResultCreateOrConnectWithoutParticipantInput[]
    createMany?: ResultCreateManyParticipantInputEnvelope
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
  }

  export type RaceChatMessageCreateNestedManyWithoutParticipantInput = {
    create?: XOR<RaceChatMessageCreateWithoutParticipantInput, RaceChatMessageUncheckedCreateWithoutParticipantInput> | RaceChatMessageCreateWithoutParticipantInput[] | RaceChatMessageUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: RaceChatMessageCreateOrConnectWithoutParticipantInput | RaceChatMessageCreateOrConnectWithoutParticipantInput[]
    createMany?: RaceChatMessageCreateManyParticipantInputEnvelope
    connect?: RaceChatMessageWhereUniqueInput | RaceChatMessageWhereUniqueInput[]
  }

  export type RaceParticipantUncheckedCreateNestedManyWithoutParticipantInput = {
    create?: XOR<RaceParticipantCreateWithoutParticipantInput, RaceParticipantUncheckedCreateWithoutParticipantInput> | RaceParticipantCreateWithoutParticipantInput[] | RaceParticipantUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: RaceParticipantCreateOrConnectWithoutParticipantInput | RaceParticipantCreateOrConnectWithoutParticipantInput[]
    createMany?: RaceParticipantCreateManyParticipantInputEnvelope
    connect?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
  }

  export type RaceUncheckedCreateNestedManyWithoutWinnerInput = {
    create?: XOR<RaceCreateWithoutWinnerInput, RaceUncheckedCreateWithoutWinnerInput> | RaceCreateWithoutWinnerInput[] | RaceUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: RaceCreateOrConnectWithoutWinnerInput | RaceCreateOrConnectWithoutWinnerInput[]
    createMany?: RaceCreateManyWinnerInputEnvelope
    connect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
  }

  export type ResultUncheckedCreateNestedManyWithoutParticipantInput = {
    create?: XOR<ResultCreateWithoutParticipantInput, ResultUncheckedCreateWithoutParticipantInput> | ResultCreateWithoutParticipantInput[] | ResultUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutParticipantInput | ResultCreateOrConnectWithoutParticipantInput[]
    createMany?: ResultCreateManyParticipantInputEnvelope
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
  }

  export type RaceChatMessageUncheckedCreateNestedManyWithoutParticipantInput = {
    create?: XOR<RaceChatMessageCreateWithoutParticipantInput, RaceChatMessageUncheckedCreateWithoutParticipantInput> | RaceChatMessageCreateWithoutParticipantInput[] | RaceChatMessageUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: RaceChatMessageCreateOrConnectWithoutParticipantInput | RaceChatMessageCreateOrConnectWithoutParticipantInput[]
    createMany?: RaceChatMessageCreateManyParticipantInputEnvelope
    connect?: RaceChatMessageWhereUniqueInput | RaceChatMessageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RaceParticipantUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<RaceParticipantCreateWithoutParticipantInput, RaceParticipantUncheckedCreateWithoutParticipantInput> | RaceParticipantCreateWithoutParticipantInput[] | RaceParticipantUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: RaceParticipantCreateOrConnectWithoutParticipantInput | RaceParticipantCreateOrConnectWithoutParticipantInput[]
    upsert?: RaceParticipantUpsertWithWhereUniqueWithoutParticipantInput | RaceParticipantUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: RaceParticipantCreateManyParticipantInputEnvelope
    set?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    disconnect?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    delete?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    connect?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    update?: RaceParticipantUpdateWithWhereUniqueWithoutParticipantInput | RaceParticipantUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: RaceParticipantUpdateManyWithWhereWithoutParticipantInput | RaceParticipantUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: RaceParticipantScalarWhereInput | RaceParticipantScalarWhereInput[]
  }

  export type RaceUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<RaceCreateWithoutWinnerInput, RaceUncheckedCreateWithoutWinnerInput> | RaceCreateWithoutWinnerInput[] | RaceUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: RaceCreateOrConnectWithoutWinnerInput | RaceCreateOrConnectWithoutWinnerInput[]
    upsert?: RaceUpsertWithWhereUniqueWithoutWinnerInput | RaceUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: RaceCreateManyWinnerInputEnvelope
    set?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    disconnect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    delete?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    connect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    update?: RaceUpdateWithWhereUniqueWithoutWinnerInput | RaceUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: RaceUpdateManyWithWhereWithoutWinnerInput | RaceUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: RaceScalarWhereInput | RaceScalarWhereInput[]
  }

  export type ResultUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<ResultCreateWithoutParticipantInput, ResultUncheckedCreateWithoutParticipantInput> | ResultCreateWithoutParticipantInput[] | ResultUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutParticipantInput | ResultCreateOrConnectWithoutParticipantInput[]
    upsert?: ResultUpsertWithWhereUniqueWithoutParticipantInput | ResultUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: ResultCreateManyParticipantInputEnvelope
    set?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    disconnect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    delete?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    update?: ResultUpdateWithWhereUniqueWithoutParticipantInput | ResultUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: ResultUpdateManyWithWhereWithoutParticipantInput | ResultUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: ResultScalarWhereInput | ResultScalarWhereInput[]
  }

  export type RaceChatMessageUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<RaceChatMessageCreateWithoutParticipantInput, RaceChatMessageUncheckedCreateWithoutParticipantInput> | RaceChatMessageCreateWithoutParticipantInput[] | RaceChatMessageUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: RaceChatMessageCreateOrConnectWithoutParticipantInput | RaceChatMessageCreateOrConnectWithoutParticipantInput[]
    upsert?: RaceChatMessageUpsertWithWhereUniqueWithoutParticipantInput | RaceChatMessageUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: RaceChatMessageCreateManyParticipantInputEnvelope
    set?: RaceChatMessageWhereUniqueInput | RaceChatMessageWhereUniqueInput[]
    disconnect?: RaceChatMessageWhereUniqueInput | RaceChatMessageWhereUniqueInput[]
    delete?: RaceChatMessageWhereUniqueInput | RaceChatMessageWhereUniqueInput[]
    connect?: RaceChatMessageWhereUniqueInput | RaceChatMessageWhereUniqueInput[]
    update?: RaceChatMessageUpdateWithWhereUniqueWithoutParticipantInput | RaceChatMessageUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: RaceChatMessageUpdateManyWithWhereWithoutParticipantInput | RaceChatMessageUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: RaceChatMessageScalarWhereInput | RaceChatMessageScalarWhereInput[]
  }

  export type RaceParticipantUncheckedUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<RaceParticipantCreateWithoutParticipantInput, RaceParticipantUncheckedCreateWithoutParticipantInput> | RaceParticipantCreateWithoutParticipantInput[] | RaceParticipantUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: RaceParticipantCreateOrConnectWithoutParticipantInput | RaceParticipantCreateOrConnectWithoutParticipantInput[]
    upsert?: RaceParticipantUpsertWithWhereUniqueWithoutParticipantInput | RaceParticipantUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: RaceParticipantCreateManyParticipantInputEnvelope
    set?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    disconnect?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    delete?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    connect?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    update?: RaceParticipantUpdateWithWhereUniqueWithoutParticipantInput | RaceParticipantUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: RaceParticipantUpdateManyWithWhereWithoutParticipantInput | RaceParticipantUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: RaceParticipantScalarWhereInput | RaceParticipantScalarWhereInput[]
  }

  export type RaceUncheckedUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<RaceCreateWithoutWinnerInput, RaceUncheckedCreateWithoutWinnerInput> | RaceCreateWithoutWinnerInput[] | RaceUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: RaceCreateOrConnectWithoutWinnerInput | RaceCreateOrConnectWithoutWinnerInput[]
    upsert?: RaceUpsertWithWhereUniqueWithoutWinnerInput | RaceUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: RaceCreateManyWinnerInputEnvelope
    set?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    disconnect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    delete?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    connect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    update?: RaceUpdateWithWhereUniqueWithoutWinnerInput | RaceUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: RaceUpdateManyWithWhereWithoutWinnerInput | RaceUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: RaceScalarWhereInput | RaceScalarWhereInput[]
  }

  export type ResultUncheckedUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<ResultCreateWithoutParticipantInput, ResultUncheckedCreateWithoutParticipantInput> | ResultCreateWithoutParticipantInput[] | ResultUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutParticipantInput | ResultCreateOrConnectWithoutParticipantInput[]
    upsert?: ResultUpsertWithWhereUniqueWithoutParticipantInput | ResultUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: ResultCreateManyParticipantInputEnvelope
    set?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    disconnect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    delete?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    update?: ResultUpdateWithWhereUniqueWithoutParticipantInput | ResultUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: ResultUpdateManyWithWhereWithoutParticipantInput | ResultUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: ResultScalarWhereInput | ResultScalarWhereInput[]
  }

  export type RaceChatMessageUncheckedUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<RaceChatMessageCreateWithoutParticipantInput, RaceChatMessageUncheckedCreateWithoutParticipantInput> | RaceChatMessageCreateWithoutParticipantInput[] | RaceChatMessageUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: RaceChatMessageCreateOrConnectWithoutParticipantInput | RaceChatMessageCreateOrConnectWithoutParticipantInput[]
    upsert?: RaceChatMessageUpsertWithWhereUniqueWithoutParticipantInput | RaceChatMessageUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: RaceChatMessageCreateManyParticipantInputEnvelope
    set?: RaceChatMessageWhereUniqueInput | RaceChatMessageWhereUniqueInput[]
    disconnect?: RaceChatMessageWhereUniqueInput | RaceChatMessageWhereUniqueInput[]
    delete?: RaceChatMessageWhereUniqueInput | RaceChatMessageWhereUniqueInput[]
    connect?: RaceChatMessageWhereUniqueInput | RaceChatMessageWhereUniqueInput[]
    update?: RaceChatMessageUpdateWithWhereUniqueWithoutParticipantInput | RaceChatMessageUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: RaceChatMessageUpdateManyWithWhereWithoutParticipantInput | RaceChatMessageUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: RaceChatMessageScalarWhereInput | RaceChatMessageScalarWhereInput[]
  }

  export type RaceParticipantCreateNestedManyWithoutRaceInput = {
    create?: XOR<RaceParticipantCreateWithoutRaceInput, RaceParticipantUncheckedCreateWithoutRaceInput> | RaceParticipantCreateWithoutRaceInput[] | RaceParticipantUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: RaceParticipantCreateOrConnectWithoutRaceInput | RaceParticipantCreateOrConnectWithoutRaceInput[]
    createMany?: RaceParticipantCreateManyRaceInputEnvelope
    connect?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
  }

  export type ParticipantCreateNestedOneWithoutWinnerRacesInput = {
    create?: XOR<ParticipantCreateWithoutWinnerRacesInput, ParticipantUncheckedCreateWithoutWinnerRacesInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutWinnerRacesInput
    connect?: ParticipantWhereUniqueInput
  }

  export type ResultCreateNestedManyWithoutRaceInput = {
    create?: XOR<ResultCreateWithoutRaceInput, ResultUncheckedCreateWithoutRaceInput> | ResultCreateWithoutRaceInput[] | ResultUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutRaceInput | ResultCreateOrConnectWithoutRaceInput[]
    createMany?: ResultCreateManyRaceInputEnvelope
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
  }

  export type RaceChatMessageCreateNestedManyWithoutRaceInput = {
    create?: XOR<RaceChatMessageCreateWithoutRaceInput, RaceChatMessageUncheckedCreateWithoutRaceInput> | RaceChatMessageCreateWithoutRaceInput[] | RaceChatMessageUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: RaceChatMessageCreateOrConnectWithoutRaceInput | RaceChatMessageCreateOrConnectWithoutRaceInput[]
    createMany?: RaceChatMessageCreateManyRaceInputEnvelope
    connect?: RaceChatMessageWhereUniqueInput | RaceChatMessageWhereUniqueInput[]
  }

  export type RaceParticipantUncheckedCreateNestedManyWithoutRaceInput = {
    create?: XOR<RaceParticipantCreateWithoutRaceInput, RaceParticipantUncheckedCreateWithoutRaceInput> | RaceParticipantCreateWithoutRaceInput[] | RaceParticipantUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: RaceParticipantCreateOrConnectWithoutRaceInput | RaceParticipantCreateOrConnectWithoutRaceInput[]
    createMany?: RaceParticipantCreateManyRaceInputEnvelope
    connect?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
  }

  export type ResultUncheckedCreateNestedManyWithoutRaceInput = {
    create?: XOR<ResultCreateWithoutRaceInput, ResultUncheckedCreateWithoutRaceInput> | ResultCreateWithoutRaceInput[] | ResultUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutRaceInput | ResultCreateOrConnectWithoutRaceInput[]
    createMany?: ResultCreateManyRaceInputEnvelope
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
  }

  export type RaceChatMessageUncheckedCreateNestedManyWithoutRaceInput = {
    create?: XOR<RaceChatMessageCreateWithoutRaceInput, RaceChatMessageUncheckedCreateWithoutRaceInput> | RaceChatMessageCreateWithoutRaceInput[] | RaceChatMessageUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: RaceChatMessageCreateOrConnectWithoutRaceInput | RaceChatMessageCreateOrConnectWithoutRaceInput[]
    createMany?: RaceChatMessageCreateManyRaceInputEnvelope
    connect?: RaceChatMessageWhereUniqueInput | RaceChatMessageWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RaceParticipantUpdateManyWithoutRaceNestedInput = {
    create?: XOR<RaceParticipantCreateWithoutRaceInput, RaceParticipantUncheckedCreateWithoutRaceInput> | RaceParticipantCreateWithoutRaceInput[] | RaceParticipantUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: RaceParticipantCreateOrConnectWithoutRaceInput | RaceParticipantCreateOrConnectWithoutRaceInput[]
    upsert?: RaceParticipantUpsertWithWhereUniqueWithoutRaceInput | RaceParticipantUpsertWithWhereUniqueWithoutRaceInput[]
    createMany?: RaceParticipantCreateManyRaceInputEnvelope
    set?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    disconnect?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    delete?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    connect?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    update?: RaceParticipantUpdateWithWhereUniqueWithoutRaceInput | RaceParticipantUpdateWithWhereUniqueWithoutRaceInput[]
    updateMany?: RaceParticipantUpdateManyWithWhereWithoutRaceInput | RaceParticipantUpdateManyWithWhereWithoutRaceInput[]
    deleteMany?: RaceParticipantScalarWhereInput | RaceParticipantScalarWhereInput[]
  }

  export type ParticipantUpdateOneWithoutWinnerRacesNestedInput = {
    create?: XOR<ParticipantCreateWithoutWinnerRacesInput, ParticipantUncheckedCreateWithoutWinnerRacesInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutWinnerRacesInput
    upsert?: ParticipantUpsertWithoutWinnerRacesInput
    disconnect?: ParticipantWhereInput | boolean
    delete?: ParticipantWhereInput | boolean
    connect?: ParticipantWhereUniqueInput
    update?: XOR<XOR<ParticipantUpdateToOneWithWhereWithoutWinnerRacesInput, ParticipantUpdateWithoutWinnerRacesInput>, ParticipantUncheckedUpdateWithoutWinnerRacesInput>
  }

  export type ResultUpdateManyWithoutRaceNestedInput = {
    create?: XOR<ResultCreateWithoutRaceInput, ResultUncheckedCreateWithoutRaceInput> | ResultCreateWithoutRaceInput[] | ResultUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutRaceInput | ResultCreateOrConnectWithoutRaceInput[]
    upsert?: ResultUpsertWithWhereUniqueWithoutRaceInput | ResultUpsertWithWhereUniqueWithoutRaceInput[]
    createMany?: ResultCreateManyRaceInputEnvelope
    set?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    disconnect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    delete?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    update?: ResultUpdateWithWhereUniqueWithoutRaceInput | ResultUpdateWithWhereUniqueWithoutRaceInput[]
    updateMany?: ResultUpdateManyWithWhereWithoutRaceInput | ResultUpdateManyWithWhereWithoutRaceInput[]
    deleteMany?: ResultScalarWhereInput | ResultScalarWhereInput[]
  }

  export type RaceChatMessageUpdateManyWithoutRaceNestedInput = {
    create?: XOR<RaceChatMessageCreateWithoutRaceInput, RaceChatMessageUncheckedCreateWithoutRaceInput> | RaceChatMessageCreateWithoutRaceInput[] | RaceChatMessageUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: RaceChatMessageCreateOrConnectWithoutRaceInput | RaceChatMessageCreateOrConnectWithoutRaceInput[]
    upsert?: RaceChatMessageUpsertWithWhereUniqueWithoutRaceInput | RaceChatMessageUpsertWithWhereUniqueWithoutRaceInput[]
    createMany?: RaceChatMessageCreateManyRaceInputEnvelope
    set?: RaceChatMessageWhereUniqueInput | RaceChatMessageWhereUniqueInput[]
    disconnect?: RaceChatMessageWhereUniqueInput | RaceChatMessageWhereUniqueInput[]
    delete?: RaceChatMessageWhereUniqueInput | RaceChatMessageWhereUniqueInput[]
    connect?: RaceChatMessageWhereUniqueInput | RaceChatMessageWhereUniqueInput[]
    update?: RaceChatMessageUpdateWithWhereUniqueWithoutRaceInput | RaceChatMessageUpdateWithWhereUniqueWithoutRaceInput[]
    updateMany?: RaceChatMessageUpdateManyWithWhereWithoutRaceInput | RaceChatMessageUpdateManyWithWhereWithoutRaceInput[]
    deleteMany?: RaceChatMessageScalarWhereInput | RaceChatMessageScalarWhereInput[]
  }

  export type RaceParticipantUncheckedUpdateManyWithoutRaceNestedInput = {
    create?: XOR<RaceParticipantCreateWithoutRaceInput, RaceParticipantUncheckedCreateWithoutRaceInput> | RaceParticipantCreateWithoutRaceInput[] | RaceParticipantUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: RaceParticipantCreateOrConnectWithoutRaceInput | RaceParticipantCreateOrConnectWithoutRaceInput[]
    upsert?: RaceParticipantUpsertWithWhereUniqueWithoutRaceInput | RaceParticipantUpsertWithWhereUniqueWithoutRaceInput[]
    createMany?: RaceParticipantCreateManyRaceInputEnvelope
    set?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    disconnect?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    delete?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    connect?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    update?: RaceParticipantUpdateWithWhereUniqueWithoutRaceInput | RaceParticipantUpdateWithWhereUniqueWithoutRaceInput[]
    updateMany?: RaceParticipantUpdateManyWithWhereWithoutRaceInput | RaceParticipantUpdateManyWithWhereWithoutRaceInput[]
    deleteMany?: RaceParticipantScalarWhereInput | RaceParticipantScalarWhereInput[]
  }

  export type ResultUncheckedUpdateManyWithoutRaceNestedInput = {
    create?: XOR<ResultCreateWithoutRaceInput, ResultUncheckedCreateWithoutRaceInput> | ResultCreateWithoutRaceInput[] | ResultUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutRaceInput | ResultCreateOrConnectWithoutRaceInput[]
    upsert?: ResultUpsertWithWhereUniqueWithoutRaceInput | ResultUpsertWithWhereUniqueWithoutRaceInput[]
    createMany?: ResultCreateManyRaceInputEnvelope
    set?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    disconnect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    delete?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    update?: ResultUpdateWithWhereUniqueWithoutRaceInput | ResultUpdateWithWhereUniqueWithoutRaceInput[]
    updateMany?: ResultUpdateManyWithWhereWithoutRaceInput | ResultUpdateManyWithWhereWithoutRaceInput[]
    deleteMany?: ResultScalarWhereInput | ResultScalarWhereInput[]
  }

  export type RaceChatMessageUncheckedUpdateManyWithoutRaceNestedInput = {
    create?: XOR<RaceChatMessageCreateWithoutRaceInput, RaceChatMessageUncheckedCreateWithoutRaceInput> | RaceChatMessageCreateWithoutRaceInput[] | RaceChatMessageUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: RaceChatMessageCreateOrConnectWithoutRaceInput | RaceChatMessageCreateOrConnectWithoutRaceInput[]
    upsert?: RaceChatMessageUpsertWithWhereUniqueWithoutRaceInput | RaceChatMessageUpsertWithWhereUniqueWithoutRaceInput[]
    createMany?: RaceChatMessageCreateManyRaceInputEnvelope
    set?: RaceChatMessageWhereUniqueInput | RaceChatMessageWhereUniqueInput[]
    disconnect?: RaceChatMessageWhereUniqueInput | RaceChatMessageWhereUniqueInput[]
    delete?: RaceChatMessageWhereUniqueInput | RaceChatMessageWhereUniqueInput[]
    connect?: RaceChatMessageWhereUniqueInput | RaceChatMessageWhereUniqueInput[]
    update?: RaceChatMessageUpdateWithWhereUniqueWithoutRaceInput | RaceChatMessageUpdateWithWhereUniqueWithoutRaceInput[]
    updateMany?: RaceChatMessageUpdateManyWithWhereWithoutRaceInput | RaceChatMessageUpdateManyWithWhereWithoutRaceInput[]
    deleteMany?: RaceChatMessageScalarWhereInput | RaceChatMessageScalarWhereInput[]
  }

  export type RaceCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<RaceCreateWithoutParticipantsInput, RaceUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: RaceCreateOrConnectWithoutParticipantsInput
    connect?: RaceWhereUniqueInput
  }

  export type ParticipantCreateNestedOneWithoutRacesInput = {
    create?: XOR<ParticipantCreateWithoutRacesInput, ParticipantUncheckedCreateWithoutRacesInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutRacesInput
    connect?: ParticipantWhereUniqueInput
  }

  export type RaceUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<RaceCreateWithoutParticipantsInput, RaceUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: RaceCreateOrConnectWithoutParticipantsInput
    upsert?: RaceUpsertWithoutParticipantsInput
    connect?: RaceWhereUniqueInput
    update?: XOR<XOR<RaceUpdateToOneWithWhereWithoutParticipantsInput, RaceUpdateWithoutParticipantsInput>, RaceUncheckedUpdateWithoutParticipantsInput>
  }

  export type ParticipantUpdateOneRequiredWithoutRacesNestedInput = {
    create?: XOR<ParticipantCreateWithoutRacesInput, ParticipantUncheckedCreateWithoutRacesInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutRacesInput
    upsert?: ParticipantUpsertWithoutRacesInput
    connect?: ParticipantWhereUniqueInput
    update?: XOR<XOR<ParticipantUpdateToOneWithWhereWithoutRacesInput, ParticipantUpdateWithoutRacesInput>, ParticipantUncheckedUpdateWithoutRacesInput>
  }

  export type RaceCreateNestedOneWithoutResultsInput = {
    create?: XOR<RaceCreateWithoutResultsInput, RaceUncheckedCreateWithoutResultsInput>
    connectOrCreate?: RaceCreateOrConnectWithoutResultsInput
    connect?: RaceWhereUniqueInput
  }

  export type ParticipantCreateNestedOneWithoutResultsInput = {
    create?: XOR<ParticipantCreateWithoutResultsInput, ParticipantUncheckedCreateWithoutResultsInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutResultsInput
    connect?: ParticipantWhereUniqueInput
  }

  export type RaceUpdateOneRequiredWithoutResultsNestedInput = {
    create?: XOR<RaceCreateWithoutResultsInput, RaceUncheckedCreateWithoutResultsInput>
    connectOrCreate?: RaceCreateOrConnectWithoutResultsInput
    upsert?: RaceUpsertWithoutResultsInput
    connect?: RaceWhereUniqueInput
    update?: XOR<XOR<RaceUpdateToOneWithWhereWithoutResultsInput, RaceUpdateWithoutResultsInput>, RaceUncheckedUpdateWithoutResultsInput>
  }

  export type ParticipantUpdateOneRequiredWithoutResultsNestedInput = {
    create?: XOR<ParticipantCreateWithoutResultsInput, ParticipantUncheckedCreateWithoutResultsInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutResultsInput
    upsert?: ParticipantUpsertWithoutResultsInput
    connect?: ParticipantWhereUniqueInput
    update?: XOR<XOR<ParticipantUpdateToOneWithWhereWithoutResultsInput, ParticipantUpdateWithoutResultsInput>, ParticipantUncheckedUpdateWithoutResultsInput>
  }

  export type RaceCreateNestedOneWithoutChatMessagesInput = {
    create?: XOR<RaceCreateWithoutChatMessagesInput, RaceUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: RaceCreateOrConnectWithoutChatMessagesInput
    connect?: RaceWhereUniqueInput
  }

  export type ParticipantCreateNestedOneWithoutChatMessagesInput = {
    create?: XOR<ParticipantCreateWithoutChatMessagesInput, ParticipantUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutChatMessagesInput
    connect?: ParticipantWhereUniqueInput
  }

  export type RaceUpdateOneRequiredWithoutChatMessagesNestedInput = {
    create?: XOR<RaceCreateWithoutChatMessagesInput, RaceUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: RaceCreateOrConnectWithoutChatMessagesInput
    upsert?: RaceUpsertWithoutChatMessagesInput
    connect?: RaceWhereUniqueInput
    update?: XOR<XOR<RaceUpdateToOneWithWhereWithoutChatMessagesInput, RaceUpdateWithoutChatMessagesInput>, RaceUncheckedUpdateWithoutChatMessagesInput>
  }

  export type ParticipantUpdateOneRequiredWithoutChatMessagesNestedInput = {
    create?: XOR<ParticipantCreateWithoutChatMessagesInput, ParticipantUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutChatMessagesInput
    upsert?: ParticipantUpsertWithoutChatMessagesInput
    connect?: ParticipantWhereUniqueInput
    update?: XOR<XOR<ParticipantUpdateToOneWithWhereWithoutChatMessagesInput, ParticipantUpdateWithoutChatMessagesInput>, ParticipantUncheckedUpdateWithoutChatMessagesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type RaceParticipantCreateWithoutParticipantInput = {
    id?: string
    joinedAt?: Date | string
    race: RaceCreateNestedOneWithoutParticipantsInput
  }

  export type RaceParticipantUncheckedCreateWithoutParticipantInput = {
    id?: string
    raceId: string
    joinedAt?: Date | string
  }

  export type RaceParticipantCreateOrConnectWithoutParticipantInput = {
    where: RaceParticipantWhereUniqueInput
    create: XOR<RaceParticipantCreateWithoutParticipantInput, RaceParticipantUncheckedCreateWithoutParticipantInput>
  }

  export type RaceParticipantCreateManyParticipantInputEnvelope = {
    data: RaceParticipantCreateManyParticipantInput | RaceParticipantCreateManyParticipantInput[]
  }

  export type RaceCreateWithoutWinnerInput = {
    id?: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    prizePool?: number
    participants?: RaceParticipantCreateNestedManyWithoutRaceInput
    results?: ResultCreateNestedManyWithoutRaceInput
    chatMessages?: RaceChatMessageCreateNestedManyWithoutRaceInput
  }

  export type RaceUncheckedCreateWithoutWinnerInput = {
    id?: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    prizePool?: number
    participants?: RaceParticipantUncheckedCreateNestedManyWithoutRaceInput
    results?: ResultUncheckedCreateNestedManyWithoutRaceInput
    chatMessages?: RaceChatMessageUncheckedCreateNestedManyWithoutRaceInput
  }

  export type RaceCreateOrConnectWithoutWinnerInput = {
    where: RaceWhereUniqueInput
    create: XOR<RaceCreateWithoutWinnerInput, RaceUncheckedCreateWithoutWinnerInput>
  }

  export type RaceCreateManyWinnerInputEnvelope = {
    data: RaceCreateManyWinnerInput | RaceCreateManyWinnerInput[]
  }

  export type ResultCreateWithoutParticipantInput = {
    id?: string
    place: number
    finishedAt?: Date | string
    race: RaceCreateNestedOneWithoutResultsInput
  }

  export type ResultUncheckedCreateWithoutParticipantInput = {
    id?: string
    raceId: string
    place: number
    finishedAt?: Date | string
  }

  export type ResultCreateOrConnectWithoutParticipantInput = {
    where: ResultWhereUniqueInput
    create: XOR<ResultCreateWithoutParticipantInput, ResultUncheckedCreateWithoutParticipantInput>
  }

  export type ResultCreateManyParticipantInputEnvelope = {
    data: ResultCreateManyParticipantInput | ResultCreateManyParticipantInput[]
  }

  export type RaceChatMessageCreateWithoutParticipantInput = {
    id?: string
    name: string
    avatar?: string | null
    message: string
    createdAt?: Date | string
    race: RaceCreateNestedOneWithoutChatMessagesInput
  }

  export type RaceChatMessageUncheckedCreateWithoutParticipantInput = {
    id?: string
    raceId: string
    name: string
    avatar?: string | null
    message: string
    createdAt?: Date | string
  }

  export type RaceChatMessageCreateOrConnectWithoutParticipantInput = {
    where: RaceChatMessageWhereUniqueInput
    create: XOR<RaceChatMessageCreateWithoutParticipantInput, RaceChatMessageUncheckedCreateWithoutParticipantInput>
  }

  export type RaceChatMessageCreateManyParticipantInputEnvelope = {
    data: RaceChatMessageCreateManyParticipantInput | RaceChatMessageCreateManyParticipantInput[]
  }

  export type RaceParticipantUpsertWithWhereUniqueWithoutParticipantInput = {
    where: RaceParticipantWhereUniqueInput
    update: XOR<RaceParticipantUpdateWithoutParticipantInput, RaceParticipantUncheckedUpdateWithoutParticipantInput>
    create: XOR<RaceParticipantCreateWithoutParticipantInput, RaceParticipantUncheckedCreateWithoutParticipantInput>
  }

  export type RaceParticipantUpdateWithWhereUniqueWithoutParticipantInput = {
    where: RaceParticipantWhereUniqueInput
    data: XOR<RaceParticipantUpdateWithoutParticipantInput, RaceParticipantUncheckedUpdateWithoutParticipantInput>
  }

  export type RaceParticipantUpdateManyWithWhereWithoutParticipantInput = {
    where: RaceParticipantScalarWhereInput
    data: XOR<RaceParticipantUpdateManyMutationInput, RaceParticipantUncheckedUpdateManyWithoutParticipantInput>
  }

  export type RaceParticipantScalarWhereInput = {
    AND?: RaceParticipantScalarWhereInput | RaceParticipantScalarWhereInput[]
    OR?: RaceParticipantScalarWhereInput[]
    NOT?: RaceParticipantScalarWhereInput | RaceParticipantScalarWhereInput[]
    id?: StringFilter<"RaceParticipant"> | string
    raceId?: StringFilter<"RaceParticipant"> | string
    participantId?: StringFilter<"RaceParticipant"> | string
    joinedAt?: DateTimeFilter<"RaceParticipant"> | Date | string
  }

  export type RaceUpsertWithWhereUniqueWithoutWinnerInput = {
    where: RaceWhereUniqueInput
    update: XOR<RaceUpdateWithoutWinnerInput, RaceUncheckedUpdateWithoutWinnerInput>
    create: XOR<RaceCreateWithoutWinnerInput, RaceUncheckedCreateWithoutWinnerInput>
  }

  export type RaceUpdateWithWhereUniqueWithoutWinnerInput = {
    where: RaceWhereUniqueInput
    data: XOR<RaceUpdateWithoutWinnerInput, RaceUncheckedUpdateWithoutWinnerInput>
  }

  export type RaceUpdateManyWithWhereWithoutWinnerInput = {
    where: RaceScalarWhereInput
    data: XOR<RaceUpdateManyMutationInput, RaceUncheckedUpdateManyWithoutWinnerInput>
  }

  export type RaceScalarWhereInput = {
    AND?: RaceScalarWhereInput | RaceScalarWhereInput[]
    OR?: RaceScalarWhereInput[]
    NOT?: RaceScalarWhereInput | RaceScalarWhereInput[]
    id?: StringFilter<"Race"> | string
    createdAt?: DateTimeFilter<"Race"> | Date | string
    startedAt?: DateTimeNullableFilter<"Race"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"Race"> | Date | string | null
    winnerId?: StringNullableFilter<"Race"> | string | null
    prizePool?: IntFilter<"Race"> | number
  }

  export type ResultUpsertWithWhereUniqueWithoutParticipantInput = {
    where: ResultWhereUniqueInput
    update: XOR<ResultUpdateWithoutParticipantInput, ResultUncheckedUpdateWithoutParticipantInput>
    create: XOR<ResultCreateWithoutParticipantInput, ResultUncheckedCreateWithoutParticipantInput>
  }

  export type ResultUpdateWithWhereUniqueWithoutParticipantInput = {
    where: ResultWhereUniqueInput
    data: XOR<ResultUpdateWithoutParticipantInput, ResultUncheckedUpdateWithoutParticipantInput>
  }

  export type ResultUpdateManyWithWhereWithoutParticipantInput = {
    where: ResultScalarWhereInput
    data: XOR<ResultUpdateManyMutationInput, ResultUncheckedUpdateManyWithoutParticipantInput>
  }

  export type ResultScalarWhereInput = {
    AND?: ResultScalarWhereInput | ResultScalarWhereInput[]
    OR?: ResultScalarWhereInput[]
    NOT?: ResultScalarWhereInput | ResultScalarWhereInput[]
    id?: StringFilter<"Result"> | string
    raceId?: StringFilter<"Result"> | string
    participantId?: StringFilter<"Result"> | string
    place?: IntFilter<"Result"> | number
    finishedAt?: DateTimeFilter<"Result"> | Date | string
  }

  export type RaceChatMessageUpsertWithWhereUniqueWithoutParticipantInput = {
    where: RaceChatMessageWhereUniqueInput
    update: XOR<RaceChatMessageUpdateWithoutParticipantInput, RaceChatMessageUncheckedUpdateWithoutParticipantInput>
    create: XOR<RaceChatMessageCreateWithoutParticipantInput, RaceChatMessageUncheckedCreateWithoutParticipantInput>
  }

  export type RaceChatMessageUpdateWithWhereUniqueWithoutParticipantInput = {
    where: RaceChatMessageWhereUniqueInput
    data: XOR<RaceChatMessageUpdateWithoutParticipantInput, RaceChatMessageUncheckedUpdateWithoutParticipantInput>
  }

  export type RaceChatMessageUpdateManyWithWhereWithoutParticipantInput = {
    where: RaceChatMessageScalarWhereInput
    data: XOR<RaceChatMessageUpdateManyMutationInput, RaceChatMessageUncheckedUpdateManyWithoutParticipantInput>
  }

  export type RaceChatMessageScalarWhereInput = {
    AND?: RaceChatMessageScalarWhereInput | RaceChatMessageScalarWhereInput[]
    OR?: RaceChatMessageScalarWhereInput[]
    NOT?: RaceChatMessageScalarWhereInput | RaceChatMessageScalarWhereInput[]
    id?: StringFilter<"RaceChatMessage"> | string
    raceId?: StringFilter<"RaceChatMessage"> | string
    participantId?: StringFilter<"RaceChatMessage"> | string
    name?: StringFilter<"RaceChatMessage"> | string
    avatar?: StringNullableFilter<"RaceChatMessage"> | string | null
    message?: StringFilter<"RaceChatMessage"> | string
    createdAt?: DateTimeFilter<"RaceChatMessage"> | Date | string
  }

  export type RaceParticipantCreateWithoutRaceInput = {
    id?: string
    joinedAt?: Date | string
    participant: ParticipantCreateNestedOneWithoutRacesInput
  }

  export type RaceParticipantUncheckedCreateWithoutRaceInput = {
    id?: string
    participantId: string
    joinedAt?: Date | string
  }

  export type RaceParticipantCreateOrConnectWithoutRaceInput = {
    where: RaceParticipantWhereUniqueInput
    create: XOR<RaceParticipantCreateWithoutRaceInput, RaceParticipantUncheckedCreateWithoutRaceInput>
  }

  export type RaceParticipantCreateManyRaceInputEnvelope = {
    data: RaceParticipantCreateManyRaceInput | RaceParticipantCreateManyRaceInput[]
  }

  export type ParticipantCreateWithoutWinnerRacesInput = {
    id?: string
    name: string
    avatar?: string | null
    telegramId?: string | null
    joinedAt?: Date | string
    races?: RaceParticipantCreateNestedManyWithoutParticipantInput
    results?: ResultCreateNestedManyWithoutParticipantInput
    chatMessages?: RaceChatMessageCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantUncheckedCreateWithoutWinnerRacesInput = {
    id?: string
    name: string
    avatar?: string | null
    telegramId?: string | null
    joinedAt?: Date | string
    races?: RaceParticipantUncheckedCreateNestedManyWithoutParticipantInput
    results?: ResultUncheckedCreateNestedManyWithoutParticipantInput
    chatMessages?: RaceChatMessageUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantCreateOrConnectWithoutWinnerRacesInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutWinnerRacesInput, ParticipantUncheckedCreateWithoutWinnerRacesInput>
  }

  export type ResultCreateWithoutRaceInput = {
    id?: string
    place: number
    finishedAt?: Date | string
    participant: ParticipantCreateNestedOneWithoutResultsInput
  }

  export type ResultUncheckedCreateWithoutRaceInput = {
    id?: string
    participantId: string
    place: number
    finishedAt?: Date | string
  }

  export type ResultCreateOrConnectWithoutRaceInput = {
    where: ResultWhereUniqueInput
    create: XOR<ResultCreateWithoutRaceInput, ResultUncheckedCreateWithoutRaceInput>
  }

  export type ResultCreateManyRaceInputEnvelope = {
    data: ResultCreateManyRaceInput | ResultCreateManyRaceInput[]
  }

  export type RaceChatMessageCreateWithoutRaceInput = {
    id?: string
    name: string
    avatar?: string | null
    message: string
    createdAt?: Date | string
    participant: ParticipantCreateNestedOneWithoutChatMessagesInput
  }

  export type RaceChatMessageUncheckedCreateWithoutRaceInput = {
    id?: string
    participantId: string
    name: string
    avatar?: string | null
    message: string
    createdAt?: Date | string
  }

  export type RaceChatMessageCreateOrConnectWithoutRaceInput = {
    where: RaceChatMessageWhereUniqueInput
    create: XOR<RaceChatMessageCreateWithoutRaceInput, RaceChatMessageUncheckedCreateWithoutRaceInput>
  }

  export type RaceChatMessageCreateManyRaceInputEnvelope = {
    data: RaceChatMessageCreateManyRaceInput | RaceChatMessageCreateManyRaceInput[]
  }

  export type RaceParticipantUpsertWithWhereUniqueWithoutRaceInput = {
    where: RaceParticipantWhereUniqueInput
    update: XOR<RaceParticipantUpdateWithoutRaceInput, RaceParticipantUncheckedUpdateWithoutRaceInput>
    create: XOR<RaceParticipantCreateWithoutRaceInput, RaceParticipantUncheckedCreateWithoutRaceInput>
  }

  export type RaceParticipantUpdateWithWhereUniqueWithoutRaceInput = {
    where: RaceParticipantWhereUniqueInput
    data: XOR<RaceParticipantUpdateWithoutRaceInput, RaceParticipantUncheckedUpdateWithoutRaceInput>
  }

  export type RaceParticipantUpdateManyWithWhereWithoutRaceInput = {
    where: RaceParticipantScalarWhereInput
    data: XOR<RaceParticipantUpdateManyMutationInput, RaceParticipantUncheckedUpdateManyWithoutRaceInput>
  }

  export type ParticipantUpsertWithoutWinnerRacesInput = {
    update: XOR<ParticipantUpdateWithoutWinnerRacesInput, ParticipantUncheckedUpdateWithoutWinnerRacesInput>
    create: XOR<ParticipantCreateWithoutWinnerRacesInput, ParticipantUncheckedCreateWithoutWinnerRacesInput>
    where?: ParticipantWhereInput
  }

  export type ParticipantUpdateToOneWithWhereWithoutWinnerRacesInput = {
    where?: ParticipantWhereInput
    data: XOR<ParticipantUpdateWithoutWinnerRacesInput, ParticipantUncheckedUpdateWithoutWinnerRacesInput>
  }

  export type ParticipantUpdateWithoutWinnerRacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    races?: RaceParticipantUpdateManyWithoutParticipantNestedInput
    results?: ResultUpdateManyWithoutParticipantNestedInput
    chatMessages?: RaceChatMessageUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutWinnerRacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    races?: RaceParticipantUncheckedUpdateManyWithoutParticipantNestedInput
    results?: ResultUncheckedUpdateManyWithoutParticipantNestedInput
    chatMessages?: RaceChatMessageUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type ResultUpsertWithWhereUniqueWithoutRaceInput = {
    where: ResultWhereUniqueInput
    update: XOR<ResultUpdateWithoutRaceInput, ResultUncheckedUpdateWithoutRaceInput>
    create: XOR<ResultCreateWithoutRaceInput, ResultUncheckedCreateWithoutRaceInput>
  }

  export type ResultUpdateWithWhereUniqueWithoutRaceInput = {
    where: ResultWhereUniqueInput
    data: XOR<ResultUpdateWithoutRaceInput, ResultUncheckedUpdateWithoutRaceInput>
  }

  export type ResultUpdateManyWithWhereWithoutRaceInput = {
    where: ResultScalarWhereInput
    data: XOR<ResultUpdateManyMutationInput, ResultUncheckedUpdateManyWithoutRaceInput>
  }

  export type RaceChatMessageUpsertWithWhereUniqueWithoutRaceInput = {
    where: RaceChatMessageWhereUniqueInput
    update: XOR<RaceChatMessageUpdateWithoutRaceInput, RaceChatMessageUncheckedUpdateWithoutRaceInput>
    create: XOR<RaceChatMessageCreateWithoutRaceInput, RaceChatMessageUncheckedCreateWithoutRaceInput>
  }

  export type RaceChatMessageUpdateWithWhereUniqueWithoutRaceInput = {
    where: RaceChatMessageWhereUniqueInput
    data: XOR<RaceChatMessageUpdateWithoutRaceInput, RaceChatMessageUncheckedUpdateWithoutRaceInput>
  }

  export type RaceChatMessageUpdateManyWithWhereWithoutRaceInput = {
    where: RaceChatMessageScalarWhereInput
    data: XOR<RaceChatMessageUpdateManyMutationInput, RaceChatMessageUncheckedUpdateManyWithoutRaceInput>
  }

  export type RaceCreateWithoutParticipantsInput = {
    id?: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    prizePool?: number
    winner?: ParticipantCreateNestedOneWithoutWinnerRacesInput
    results?: ResultCreateNestedManyWithoutRaceInput
    chatMessages?: RaceChatMessageCreateNestedManyWithoutRaceInput
  }

  export type RaceUncheckedCreateWithoutParticipantsInput = {
    id?: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    winnerId?: string | null
    prizePool?: number
    results?: ResultUncheckedCreateNestedManyWithoutRaceInput
    chatMessages?: RaceChatMessageUncheckedCreateNestedManyWithoutRaceInput
  }

  export type RaceCreateOrConnectWithoutParticipantsInput = {
    where: RaceWhereUniqueInput
    create: XOR<RaceCreateWithoutParticipantsInput, RaceUncheckedCreateWithoutParticipantsInput>
  }

  export type ParticipantCreateWithoutRacesInput = {
    id?: string
    name: string
    avatar?: string | null
    telegramId?: string | null
    joinedAt?: Date | string
    winnerRaces?: RaceCreateNestedManyWithoutWinnerInput
    results?: ResultCreateNestedManyWithoutParticipantInput
    chatMessages?: RaceChatMessageCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantUncheckedCreateWithoutRacesInput = {
    id?: string
    name: string
    avatar?: string | null
    telegramId?: string | null
    joinedAt?: Date | string
    winnerRaces?: RaceUncheckedCreateNestedManyWithoutWinnerInput
    results?: ResultUncheckedCreateNestedManyWithoutParticipantInput
    chatMessages?: RaceChatMessageUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantCreateOrConnectWithoutRacesInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutRacesInput, ParticipantUncheckedCreateWithoutRacesInput>
  }

  export type RaceUpsertWithoutParticipantsInput = {
    update: XOR<RaceUpdateWithoutParticipantsInput, RaceUncheckedUpdateWithoutParticipantsInput>
    create: XOR<RaceCreateWithoutParticipantsInput, RaceUncheckedCreateWithoutParticipantsInput>
    where?: RaceWhereInput
  }

  export type RaceUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: RaceWhereInput
    data: XOR<RaceUpdateWithoutParticipantsInput, RaceUncheckedUpdateWithoutParticipantsInput>
  }

  export type RaceUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prizePool?: IntFieldUpdateOperationsInput | number
    winner?: ParticipantUpdateOneWithoutWinnerRacesNestedInput
    results?: ResultUpdateManyWithoutRaceNestedInput
    chatMessages?: RaceChatMessageUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    prizePool?: IntFieldUpdateOperationsInput | number
    results?: ResultUncheckedUpdateManyWithoutRaceNestedInput
    chatMessages?: RaceChatMessageUncheckedUpdateManyWithoutRaceNestedInput
  }

  export type ParticipantUpsertWithoutRacesInput = {
    update: XOR<ParticipantUpdateWithoutRacesInput, ParticipantUncheckedUpdateWithoutRacesInput>
    create: XOR<ParticipantCreateWithoutRacesInput, ParticipantUncheckedCreateWithoutRacesInput>
    where?: ParticipantWhereInput
  }

  export type ParticipantUpdateToOneWithWhereWithoutRacesInput = {
    where?: ParticipantWhereInput
    data: XOR<ParticipantUpdateWithoutRacesInput, ParticipantUncheckedUpdateWithoutRacesInput>
  }

  export type ParticipantUpdateWithoutRacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winnerRaces?: RaceUpdateManyWithoutWinnerNestedInput
    results?: ResultUpdateManyWithoutParticipantNestedInput
    chatMessages?: RaceChatMessageUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutRacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winnerRaces?: RaceUncheckedUpdateManyWithoutWinnerNestedInput
    results?: ResultUncheckedUpdateManyWithoutParticipantNestedInput
    chatMessages?: RaceChatMessageUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type RaceCreateWithoutResultsInput = {
    id?: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    prizePool?: number
    participants?: RaceParticipantCreateNestedManyWithoutRaceInput
    winner?: ParticipantCreateNestedOneWithoutWinnerRacesInput
    chatMessages?: RaceChatMessageCreateNestedManyWithoutRaceInput
  }

  export type RaceUncheckedCreateWithoutResultsInput = {
    id?: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    winnerId?: string | null
    prizePool?: number
    participants?: RaceParticipantUncheckedCreateNestedManyWithoutRaceInput
    chatMessages?: RaceChatMessageUncheckedCreateNestedManyWithoutRaceInput
  }

  export type RaceCreateOrConnectWithoutResultsInput = {
    where: RaceWhereUniqueInput
    create: XOR<RaceCreateWithoutResultsInput, RaceUncheckedCreateWithoutResultsInput>
  }

  export type ParticipantCreateWithoutResultsInput = {
    id?: string
    name: string
    avatar?: string | null
    telegramId?: string | null
    joinedAt?: Date | string
    races?: RaceParticipantCreateNestedManyWithoutParticipantInput
    winnerRaces?: RaceCreateNestedManyWithoutWinnerInput
    chatMessages?: RaceChatMessageCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantUncheckedCreateWithoutResultsInput = {
    id?: string
    name: string
    avatar?: string | null
    telegramId?: string | null
    joinedAt?: Date | string
    races?: RaceParticipantUncheckedCreateNestedManyWithoutParticipantInput
    winnerRaces?: RaceUncheckedCreateNestedManyWithoutWinnerInput
    chatMessages?: RaceChatMessageUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantCreateOrConnectWithoutResultsInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutResultsInput, ParticipantUncheckedCreateWithoutResultsInput>
  }

  export type RaceUpsertWithoutResultsInput = {
    update: XOR<RaceUpdateWithoutResultsInput, RaceUncheckedUpdateWithoutResultsInput>
    create: XOR<RaceCreateWithoutResultsInput, RaceUncheckedCreateWithoutResultsInput>
    where?: RaceWhereInput
  }

  export type RaceUpdateToOneWithWhereWithoutResultsInput = {
    where?: RaceWhereInput
    data: XOR<RaceUpdateWithoutResultsInput, RaceUncheckedUpdateWithoutResultsInput>
  }

  export type RaceUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prizePool?: IntFieldUpdateOperationsInput | number
    participants?: RaceParticipantUpdateManyWithoutRaceNestedInput
    winner?: ParticipantUpdateOneWithoutWinnerRacesNestedInput
    chatMessages?: RaceChatMessageUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    prizePool?: IntFieldUpdateOperationsInput | number
    participants?: RaceParticipantUncheckedUpdateManyWithoutRaceNestedInput
    chatMessages?: RaceChatMessageUncheckedUpdateManyWithoutRaceNestedInput
  }

  export type ParticipantUpsertWithoutResultsInput = {
    update: XOR<ParticipantUpdateWithoutResultsInput, ParticipantUncheckedUpdateWithoutResultsInput>
    create: XOR<ParticipantCreateWithoutResultsInput, ParticipantUncheckedCreateWithoutResultsInput>
    where?: ParticipantWhereInput
  }

  export type ParticipantUpdateToOneWithWhereWithoutResultsInput = {
    where?: ParticipantWhereInput
    data: XOR<ParticipantUpdateWithoutResultsInput, ParticipantUncheckedUpdateWithoutResultsInput>
  }

  export type ParticipantUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    races?: RaceParticipantUpdateManyWithoutParticipantNestedInput
    winnerRaces?: RaceUpdateManyWithoutWinnerNestedInput
    chatMessages?: RaceChatMessageUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    races?: RaceParticipantUncheckedUpdateManyWithoutParticipantNestedInput
    winnerRaces?: RaceUncheckedUpdateManyWithoutWinnerNestedInput
    chatMessages?: RaceChatMessageUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type RaceCreateWithoutChatMessagesInput = {
    id?: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    prizePool?: number
    participants?: RaceParticipantCreateNestedManyWithoutRaceInput
    winner?: ParticipantCreateNestedOneWithoutWinnerRacesInput
    results?: ResultCreateNestedManyWithoutRaceInput
  }

  export type RaceUncheckedCreateWithoutChatMessagesInput = {
    id?: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    winnerId?: string | null
    prizePool?: number
    participants?: RaceParticipantUncheckedCreateNestedManyWithoutRaceInput
    results?: ResultUncheckedCreateNestedManyWithoutRaceInput
  }

  export type RaceCreateOrConnectWithoutChatMessagesInput = {
    where: RaceWhereUniqueInput
    create: XOR<RaceCreateWithoutChatMessagesInput, RaceUncheckedCreateWithoutChatMessagesInput>
  }

  export type ParticipantCreateWithoutChatMessagesInput = {
    id?: string
    name: string
    avatar?: string | null
    telegramId?: string | null
    joinedAt?: Date | string
    races?: RaceParticipantCreateNestedManyWithoutParticipantInput
    winnerRaces?: RaceCreateNestedManyWithoutWinnerInput
    results?: ResultCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantUncheckedCreateWithoutChatMessagesInput = {
    id?: string
    name: string
    avatar?: string | null
    telegramId?: string | null
    joinedAt?: Date | string
    races?: RaceParticipantUncheckedCreateNestedManyWithoutParticipantInput
    winnerRaces?: RaceUncheckedCreateNestedManyWithoutWinnerInput
    results?: ResultUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantCreateOrConnectWithoutChatMessagesInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutChatMessagesInput, ParticipantUncheckedCreateWithoutChatMessagesInput>
  }

  export type RaceUpsertWithoutChatMessagesInput = {
    update: XOR<RaceUpdateWithoutChatMessagesInput, RaceUncheckedUpdateWithoutChatMessagesInput>
    create: XOR<RaceCreateWithoutChatMessagesInput, RaceUncheckedCreateWithoutChatMessagesInput>
    where?: RaceWhereInput
  }

  export type RaceUpdateToOneWithWhereWithoutChatMessagesInput = {
    where?: RaceWhereInput
    data: XOR<RaceUpdateWithoutChatMessagesInput, RaceUncheckedUpdateWithoutChatMessagesInput>
  }

  export type RaceUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prizePool?: IntFieldUpdateOperationsInput | number
    participants?: RaceParticipantUpdateManyWithoutRaceNestedInput
    winner?: ParticipantUpdateOneWithoutWinnerRacesNestedInput
    results?: ResultUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    prizePool?: IntFieldUpdateOperationsInput | number
    participants?: RaceParticipantUncheckedUpdateManyWithoutRaceNestedInput
    results?: ResultUncheckedUpdateManyWithoutRaceNestedInput
  }

  export type ParticipantUpsertWithoutChatMessagesInput = {
    update: XOR<ParticipantUpdateWithoutChatMessagesInput, ParticipantUncheckedUpdateWithoutChatMessagesInput>
    create: XOR<ParticipantCreateWithoutChatMessagesInput, ParticipantUncheckedCreateWithoutChatMessagesInput>
    where?: ParticipantWhereInput
  }

  export type ParticipantUpdateToOneWithWhereWithoutChatMessagesInput = {
    where?: ParticipantWhereInput
    data: XOR<ParticipantUpdateWithoutChatMessagesInput, ParticipantUncheckedUpdateWithoutChatMessagesInput>
  }

  export type ParticipantUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    races?: RaceParticipantUpdateManyWithoutParticipantNestedInput
    winnerRaces?: RaceUpdateManyWithoutWinnerNestedInput
    results?: ResultUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    races?: RaceParticipantUncheckedUpdateManyWithoutParticipantNestedInput
    winnerRaces?: RaceUncheckedUpdateManyWithoutWinnerNestedInput
    results?: ResultUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type RaceParticipantCreateManyParticipantInput = {
    id?: string
    raceId: string
    joinedAt?: Date | string
  }

  export type RaceCreateManyWinnerInput = {
    id?: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    prizePool?: number
  }

  export type ResultCreateManyParticipantInput = {
    id?: string
    raceId: string
    place: number
    finishedAt?: Date | string
  }

  export type RaceChatMessageCreateManyParticipantInput = {
    id?: string
    raceId: string
    name: string
    avatar?: string | null
    message: string
    createdAt?: Date | string
  }

  export type RaceParticipantUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    race?: RaceUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type RaceParticipantUncheckedUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    raceId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceParticipantUncheckedUpdateManyWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    raceId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceUpdateWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prizePool?: IntFieldUpdateOperationsInput | number
    participants?: RaceParticipantUpdateManyWithoutRaceNestedInput
    results?: ResultUpdateManyWithoutRaceNestedInput
    chatMessages?: RaceChatMessageUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prizePool?: IntFieldUpdateOperationsInput | number
    participants?: RaceParticipantUncheckedUpdateManyWithoutRaceNestedInput
    results?: ResultUncheckedUpdateManyWithoutRaceNestedInput
    chatMessages?: RaceChatMessageUncheckedUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateManyWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prizePool?: IntFieldUpdateOperationsInput | number
  }

  export type ResultUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    place?: IntFieldUpdateOperationsInput | number
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    race?: RaceUpdateOneRequiredWithoutResultsNestedInput
  }

  export type ResultUncheckedUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    raceId?: StringFieldUpdateOperationsInput | string
    place?: IntFieldUpdateOperationsInput | number
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultUncheckedUpdateManyWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    raceId?: StringFieldUpdateOperationsInput | string
    place?: IntFieldUpdateOperationsInput | number
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceChatMessageUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    race?: RaceUpdateOneRequiredWithoutChatMessagesNestedInput
  }

  export type RaceChatMessageUncheckedUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    raceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceChatMessageUncheckedUpdateManyWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    raceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceParticipantCreateManyRaceInput = {
    id?: string
    participantId: string
    joinedAt?: Date | string
  }

  export type ResultCreateManyRaceInput = {
    id?: string
    participantId: string
    place: number
    finishedAt?: Date | string
  }

  export type RaceChatMessageCreateManyRaceInput = {
    id?: string
    participantId: string
    name: string
    avatar?: string | null
    message: string
    createdAt?: Date | string
  }

  export type RaceParticipantUpdateWithoutRaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participant?: ParticipantUpdateOneRequiredWithoutRacesNestedInput
  }

  export type RaceParticipantUncheckedUpdateWithoutRaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceParticipantUncheckedUpdateManyWithoutRaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultUpdateWithoutRaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    place?: IntFieldUpdateOperationsInput | number
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participant?: ParticipantUpdateOneRequiredWithoutResultsNestedInput
  }

  export type ResultUncheckedUpdateWithoutRaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    place?: IntFieldUpdateOperationsInput | number
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultUncheckedUpdateManyWithoutRaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    place?: IntFieldUpdateOperationsInput | number
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceChatMessageUpdateWithoutRaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participant?: ParticipantUpdateOneRequiredWithoutChatMessagesNestedInput
  }

  export type RaceChatMessageUncheckedUpdateWithoutRaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceChatMessageUncheckedUpdateManyWithoutRaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}