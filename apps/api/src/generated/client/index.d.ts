
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Tenant
 * 
 */
export type Tenant = $Result.DefaultSelection<Prisma.$TenantPayload>
/**
 * Model Staff
 * 
 */
export type Staff = $Result.DefaultSelection<Prisma.$StaffPayload>
/**
 * Model MembershipPlan
 * 
 */
export type MembershipPlan = $Result.DefaultSelection<Prisma.$MembershipPlanPayload>
/**
 * Model Member
 * 
 */
export type Member = $Result.DefaultSelection<Prisma.$MemberPayload>
/**
 * Model ClassSession
 * 
 */
export type ClassSession = $Result.DefaultSelection<Prisma.$ClassSessionPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model CheckIn
 * 
 */
export type CheckIn = $Result.DefaultSelection<Prisma.$CheckInPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PlanTier: {
  STARTER: 'STARTER',
  PRO: 'PRO',
  ELITE: 'ELITE'
};

export type PlanTier = (typeof PlanTier)[keyof typeof PlanTier]


export const MemberStatus: {
  ACTIVE: 'ACTIVE',
  FROZEN: 'FROZEN',
  EXPIRED: 'EXPIRED',
  CANCELLED: 'CANCELLED'
};

export type MemberStatus = (typeof MemberStatus)[keyof typeof MemberStatus]


export const BillingCycle: {
  MONTHLY: 'MONTHLY',
  QUARTERLY: 'QUARTERLY',
  ANNUAL: 'ANNUAL'
};

export type BillingCycle = (typeof BillingCycle)[keyof typeof BillingCycle]


export const BookingStatus: {
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED',
  ATTENDED: 'ATTENDED',
  NO_SHOW: 'NO_SHOW'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]


export const CheckInMethod: {
  QR: 'QR',
  PIN: 'PIN',
  MANUAL: 'MANUAL'
};

export type CheckInMethod = (typeof CheckInMethod)[keyof typeof CheckInMethod]


export const PaymentStatus: {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const StaffRole: {
  OWNER: 'OWNER',
  ADMIN: 'ADMIN',
  TRAINER: 'TRAINER',
  RECEPTIONIST: 'RECEPTIONIST'
};

export type StaffRole = (typeof StaffRole)[keyof typeof StaffRole]

}

export type PlanTier = $Enums.PlanTier

export const PlanTier: typeof $Enums.PlanTier

export type MemberStatus = $Enums.MemberStatus

export const MemberStatus: typeof $Enums.MemberStatus

export type BillingCycle = $Enums.BillingCycle

export const BillingCycle: typeof $Enums.BillingCycle

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

export type CheckInMethod = $Enums.CheckInMethod

export const CheckInMethod: typeof $Enums.CheckInMethod

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type StaffRole = $Enums.StaffRole

export const StaffRole: typeof $Enums.StaffRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Tenants
 * const tenants = await prisma.tenant.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Tenants
   * const tenants = await prisma.tenant.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenant.findMany()
    * ```
    */
  get tenant(): Prisma.TenantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staff`: Exposes CRUD operations for the **Staff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Staff
    * const staff = await prisma.staff.findMany()
    * ```
    */
  get staff(): Prisma.StaffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.membershipPlan`: Exposes CRUD operations for the **MembershipPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MembershipPlans
    * const membershipPlans = await prisma.membershipPlan.findMany()
    * ```
    */
  get membershipPlan(): Prisma.MembershipPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.member`: Exposes CRUD operations for the **Member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.MemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classSession`: Exposes CRUD operations for the **ClassSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClassSessions
    * const classSessions = await prisma.classSession.findMany()
    * ```
    */
  get classSession(): Prisma.ClassSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.checkIn`: Exposes CRUD operations for the **CheckIn** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CheckIns
    * const checkIns = await prisma.checkIn.findMany()
    * ```
    */
  get checkIn(): Prisma.CheckInDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Tenant: 'Tenant',
    Staff: 'Staff',
    MembershipPlan: 'MembershipPlan',
    Member: 'Member',
    ClassSession: 'ClassSession',
    Booking: 'Booking',
    CheckIn: 'CheckIn',
    Payment: 'Payment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tenant" | "staff" | "membershipPlan" | "member" | "classSession" | "booking" | "checkIn" | "payment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Tenant: {
        payload: Prisma.$TenantPayload<ExtArgs>
        fields: Prisma.TenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findFirst: {
            args: Prisma.TenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findMany: {
            args: Prisma.TenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          create: {
            args: Prisma.TenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          createMany: {
            args: Prisma.TenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          delete: {
            args: Prisma.TenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          update: {
            args: Prisma.TenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          deleteMany: {
            args: Prisma.TenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TenantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          upsert: {
            args: Prisma.TenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          aggregate: {
            args: Prisma.TenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenant>
          }
          groupBy: {
            args: Prisma.TenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantCountArgs<ExtArgs>
            result: $Utils.Optional<TenantCountAggregateOutputType> | number
          }
        }
      }
      Staff: {
        payload: Prisma.$StaffPayload<ExtArgs>
        fields: Prisma.StaffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findFirst: {
            args: Prisma.StaffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findMany: {
            args: Prisma.StaffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          create: {
            args: Prisma.StaffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          createMany: {
            args: Prisma.StaffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaffCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          delete: {
            args: Prisma.StaffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          update: {
            args: Prisma.StaffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          deleteMany: {
            args: Prisma.StaffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StaffUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          upsert: {
            args: Prisma.StaffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          aggregate: {
            args: Prisma.StaffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaff>
          }
          groupBy: {
            args: Prisma.StaffGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffCountArgs<ExtArgs>
            result: $Utils.Optional<StaffCountAggregateOutputType> | number
          }
        }
      }
      MembershipPlan: {
        payload: Prisma.$MembershipPlanPayload<ExtArgs>
        fields: Prisma.MembershipPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MembershipPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MembershipPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPlanPayload>
          }
          findFirst: {
            args: Prisma.MembershipPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MembershipPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPlanPayload>
          }
          findMany: {
            args: Prisma.MembershipPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPlanPayload>[]
          }
          create: {
            args: Prisma.MembershipPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPlanPayload>
          }
          createMany: {
            args: Prisma.MembershipPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MembershipPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPlanPayload>[]
          }
          delete: {
            args: Prisma.MembershipPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPlanPayload>
          }
          update: {
            args: Prisma.MembershipPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPlanPayload>
          }
          deleteMany: {
            args: Prisma.MembershipPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MembershipPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MembershipPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPlanPayload>[]
          }
          upsert: {
            args: Prisma.MembershipPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPlanPayload>
          }
          aggregate: {
            args: Prisma.MembershipPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMembershipPlan>
          }
          groupBy: {
            args: Prisma.MembershipPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<MembershipPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.MembershipPlanCountArgs<ExtArgs>
            result: $Utils.Optional<MembershipPlanCountAggregateOutputType> | number
          }
        }
      }
      Member: {
        payload: Prisma.$MemberPayload<ExtArgs>
        fields: Prisma.MemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findFirst: {
            args: Prisma.MemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findMany: {
            args: Prisma.MemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          create: {
            args: Prisma.MemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          createMany: {
            args: Prisma.MemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          delete: {
            args: Prisma.MemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          update: {
            args: Prisma.MemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          deleteMany: {
            args: Prisma.MemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          upsert: {
            args: Prisma.MemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.MemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberCountArgs<ExtArgs>
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
      ClassSession: {
        payload: Prisma.$ClassSessionPayload<ExtArgs>
        fields: Prisma.ClassSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSessionPayload>
          }
          findFirst: {
            args: Prisma.ClassSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSessionPayload>
          }
          findMany: {
            args: Prisma.ClassSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSessionPayload>[]
          }
          create: {
            args: Prisma.ClassSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSessionPayload>
          }
          createMany: {
            args: Prisma.ClassSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSessionPayload>[]
          }
          delete: {
            args: Prisma.ClassSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSessionPayload>
          }
          update: {
            args: Prisma.ClassSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSessionPayload>
          }
          deleteMany: {
            args: Prisma.ClassSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSessionPayload>[]
          }
          upsert: {
            args: Prisma.ClassSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSessionPayload>
          }
          aggregate: {
            args: Prisma.ClassSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassSession>
          }
          groupBy: {
            args: Prisma.ClassSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassSessionCountArgs<ExtArgs>
            result: $Utils.Optional<ClassSessionCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      CheckIn: {
        payload: Prisma.$CheckInPayload<ExtArgs>
        fields: Prisma.CheckInFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CheckInFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CheckInFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          findFirst: {
            args: Prisma.CheckInFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CheckInFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          findMany: {
            args: Prisma.CheckInFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>[]
          }
          create: {
            args: Prisma.CheckInCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          createMany: {
            args: Prisma.CheckInCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CheckInCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>[]
          }
          delete: {
            args: Prisma.CheckInDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          update: {
            args: Prisma.CheckInUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          deleteMany: {
            args: Prisma.CheckInDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CheckInUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CheckInUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>[]
          }
          upsert: {
            args: Prisma.CheckInUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          aggregate: {
            args: Prisma.CheckInAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCheckIn>
          }
          groupBy: {
            args: Prisma.CheckInGroupByArgs<ExtArgs>
            result: $Utils.Optional<CheckInGroupByOutputType>[]
          }
          count: {
            args: Prisma.CheckInCountArgs<ExtArgs>
            result: $Utils.Optional<CheckInCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    tenant?: TenantOmit
    staff?: StaffOmit
    membershipPlan?: MembershipPlanOmit
    member?: MemberOmit
    classSession?: ClassSessionOmit
    booking?: BookingOmit
    checkIn?: CheckInOmit
    payment?: PaymentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type TenantCountOutputType
   */

  export type TenantCountOutputType = {
    staff: number
    members: number
    membershipPlans: number
    classSessions: number
    checkIns: number
    payments: number
  }

  export type TenantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | TenantCountOutputTypeCountStaffArgs
    members?: boolean | TenantCountOutputTypeCountMembersArgs
    membershipPlans?: boolean | TenantCountOutputTypeCountMembershipPlansArgs
    classSessions?: boolean | TenantCountOutputTypeCountClassSessionsArgs
    checkIns?: boolean | TenantCountOutputTypeCountCheckInsArgs
    payments?: boolean | TenantCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCountOutputType
     */
    select?: TenantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountStaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountMembershipPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipPlanWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountClassSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassSessionWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountCheckInsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckInWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type StaffCountOutputType
   */

  export type StaffCountOutputType = {
    classSessions: number
  }

  export type StaffCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classSessions?: boolean | StaffCountOutputTypeCountClassSessionsArgs
  }

  // Custom InputTypes
  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffCountOutputType
     */
    select?: StaffCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountClassSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassSessionWhereInput
  }


  /**
   * Count Type MembershipPlanCountOutputType
   */

  export type MembershipPlanCountOutputType = {
    members: number
  }

  export type MembershipPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | MembershipPlanCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * MembershipPlanCountOutputType without action
   */
  export type MembershipPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipPlanCountOutputType
     */
    select?: MembershipPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MembershipPlanCountOutputType without action
   */
  export type MembershipPlanCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
  }


  /**
   * Count Type MemberCountOutputType
   */

  export type MemberCountOutputType = {
    bookings: number
    checkIns: number
    payments: number
  }

  export type MemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | MemberCountOutputTypeCountBookingsArgs
    checkIns?: boolean | MemberCountOutputTypeCountCheckInsArgs
    payments?: boolean | MemberCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberCountOutputType
     */
    select?: MemberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountCheckInsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckInWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type ClassSessionCountOutputType
   */

  export type ClassSessionCountOutputType = {
    bookings: number
  }

  export type ClassSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | ClassSessionCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * ClassSessionCountOutputType without action
   */
  export type ClassSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSessionCountOutputType
     */
    select?: ClassSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassSessionCountOutputType without action
   */
  export type ClassSessionCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Tenant
   */

  export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  export type TenantMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    planTier: $Enums.PlanTier | null
    logoUrl: string | null
    address: string | null
    phone: string | null
    email: string | null
    currency: string | null
    timezone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    planTier: $Enums.PlanTier | null
    logoUrl: string | null
    address: string | null
    phone: string | null
    email: string | null
    currency: string | null
    timezone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    planTier: number
    logoUrl: number
    address: number
    phone: number
    email: number
    currency: number
    timezone: number
    settings: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TenantMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    planTier?: true
    logoUrl?: true
    address?: true
    phone?: true
    email?: true
    currency?: true
    timezone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    planTier?: true
    logoUrl?: true
    address?: true
    phone?: true
    email?: true
    currency?: true
    timezone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    planTier?: true
    logoUrl?: true
    address?: true
    phone?: true
    email?: true
    currency?: true
    timezone?: true
    settings?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenant to aggregate.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenants
    **/
    _count?: true | TenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantMaxAggregateInputType
  }

  export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant[P]>
      : GetScalarType<T[P], AggregateTenant[P]>
  }




  export type TenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithAggregationInput | TenantOrderByWithAggregationInput[]
    by: TenantScalarFieldEnum[] | TenantScalarFieldEnum
    having?: TenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantCountAggregateInputType | true
    _min?: TenantMinAggregateInputType
    _max?: TenantMaxAggregateInputType
  }

  export type TenantGroupByOutputType = {
    id: string
    name: string
    slug: string
    planTier: $Enums.PlanTier
    logoUrl: string | null
    address: string | null
    phone: string | null
    email: string | null
    currency: string
    timezone: string
    settings: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantGroupByOutputType[P]>
            : GetScalarType<T[P], TenantGroupByOutputType[P]>
        }
      >
    >


  export type TenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    planTier?: boolean
    logoUrl?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    currency?: boolean
    timezone?: boolean
    settings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    staff?: boolean | Tenant$staffArgs<ExtArgs>
    members?: boolean | Tenant$membersArgs<ExtArgs>
    membershipPlans?: boolean | Tenant$membershipPlansArgs<ExtArgs>
    classSessions?: boolean | Tenant$classSessionsArgs<ExtArgs>
    checkIns?: boolean | Tenant$checkInsArgs<ExtArgs>
    payments?: boolean | Tenant$paymentsArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    planTier?: boolean
    logoUrl?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    currency?: boolean
    timezone?: boolean
    settings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    planTier?: boolean
    logoUrl?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    currency?: boolean
    timezone?: boolean
    settings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    planTier?: boolean
    logoUrl?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    currency?: boolean
    timezone?: boolean
    settings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TenantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "planTier" | "logoUrl" | "address" | "phone" | "email" | "currency" | "timezone" | "settings" | "createdAt" | "updatedAt", ExtArgs["result"]["tenant"]>
  export type TenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | Tenant$staffArgs<ExtArgs>
    members?: boolean | Tenant$membersArgs<ExtArgs>
    membershipPlans?: boolean | Tenant$membershipPlansArgs<ExtArgs>
    classSessions?: boolean | Tenant$classSessionsArgs<ExtArgs>
    checkIns?: boolean | Tenant$checkInsArgs<ExtArgs>
    payments?: boolean | Tenant$paymentsArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TenantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TenantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tenant"
    objects: {
      staff: Prisma.$StaffPayload<ExtArgs>[]
      members: Prisma.$MemberPayload<ExtArgs>[]
      membershipPlans: Prisma.$MembershipPlanPayload<ExtArgs>[]
      classSessions: Prisma.$ClassSessionPayload<ExtArgs>[]
      checkIns: Prisma.$CheckInPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      planTier: $Enums.PlanTier
      logoUrl: string | null
      address: string | null
      phone: string | null
      email: string | null
      currency: string
      timezone: string
      settings: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tenant"]>
    composites: {}
  }

  type TenantGetPayload<S extends boolean | null | undefined | TenantDefaultArgs> = $Result.GetResult<Prisma.$TenantPayload, S>

  type TenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenantCountAggregateInputType | true
    }

  export interface TenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenant'], meta: { name: 'Tenant' } }
    /**
     * Find zero or one Tenant that matches the filter.
     * @param {TenantFindUniqueArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantFindUniqueArgs>(args: SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tenant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TenantFindUniqueOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantFindFirstArgs>(args?: SelectSubset<T, TenantFindFirstArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenant.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantWithIdOnly = await prisma.tenant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantFindManyArgs>(args?: SelectSubset<T, TenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tenant.
     * @param {TenantCreateArgs} args - Arguments to create a Tenant.
     * @example
     * // Create one Tenant
     * const Tenant = await prisma.tenant.create({
     *   data: {
     *     // ... data to create a Tenant
     *   }
     * })
     * 
     */
    create<T extends TenantCreateArgs>(args: SelectSubset<T, TenantCreateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tenants.
     * @param {TenantCreateManyArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantCreateManyArgs>(args?: SelectSubset<T, TenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenants and returns the data saved in the database.
     * @param {TenantCreateManyAndReturnArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tenant.
     * @param {TenantDeleteArgs} args - Arguments to delete one Tenant.
     * @example
     * // Delete one Tenant
     * const Tenant = await prisma.tenant.delete({
     *   where: {
     *     // ... filter to delete one Tenant
     *   }
     * })
     * 
     */
    delete<T extends TenantDeleteArgs>(args: SelectSubset<T, TenantDeleteArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tenant.
     * @param {TenantUpdateArgs} args - Arguments to update one Tenant.
     * @example
     * // Update one Tenant
     * const tenant = await prisma.tenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantUpdateArgs>(args: SelectSubset<T, TenantUpdateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tenants.
     * @param {TenantDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantDeleteManyArgs>(args?: SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantUpdateManyArgs>(args: SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants and returns the data updated in the database.
     * @param {TenantUpdateManyAndReturnArgs} args - Arguments to update many Tenants.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.updateManyAndReturn({
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
    updateManyAndReturn<T extends TenantUpdateManyAndReturnArgs>(args: SelectSubset<T, TenantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tenant.
     * @param {TenantUpsertArgs} args - Arguments to update or create a Tenant.
     * @example
     * // Update or create a Tenant
     * const tenant = await prisma.tenant.upsert({
     *   create: {
     *     // ... data to create a Tenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant we want to update
     *   }
     * })
     */
    upsert<T extends TenantUpsertArgs>(args: SelectSubset<T, TenantUpsertArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenant.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends TenantCountArgs>(
      args?: Subset<T, TenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TenantAggregateArgs>(args: Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>

    /**
     * Group by Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGroupByArgs} args - Group by arguments.
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
      T extends TenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGroupByArgs['orderBy'] }
        : { orderBy?: TenantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tenant model
   */
  readonly fields: TenantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    staff<T extends Tenant$staffArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$staffArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    members<T extends Tenant$membersArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    membershipPlans<T extends Tenant$membershipPlansArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$membershipPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    classSessions<T extends Tenant$classSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$classSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    checkIns<T extends Tenant$checkInsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$checkInsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends Tenant$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tenant model
   */
  interface TenantFieldRefs {
    readonly id: FieldRef<"Tenant", 'String'>
    readonly name: FieldRef<"Tenant", 'String'>
    readonly slug: FieldRef<"Tenant", 'String'>
    readonly planTier: FieldRef<"Tenant", 'PlanTier'>
    readonly logoUrl: FieldRef<"Tenant", 'String'>
    readonly address: FieldRef<"Tenant", 'String'>
    readonly phone: FieldRef<"Tenant", 'String'>
    readonly email: FieldRef<"Tenant", 'String'>
    readonly currency: FieldRef<"Tenant", 'String'>
    readonly timezone: FieldRef<"Tenant", 'String'>
    readonly settings: FieldRef<"Tenant", 'Json'>
    readonly createdAt: FieldRef<"Tenant", 'DateTime'>
    readonly updatedAt: FieldRef<"Tenant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tenant findUnique
   */
  export type TenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findUniqueOrThrow
   */
  export type TenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findFirst
   */
  export type TenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findFirstOrThrow
   */
  export type TenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findMany
   */
  export type TenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant create
   */
  export type TenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to create a Tenant.
     */
    data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
  }

  /**
   * Tenant createMany
   */
  export type TenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant createManyAndReturn
   */
  export type TenantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant update
   */
  export type TenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to update a Tenant.
     */
    data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    /**
     * Choose, which Tenant to update.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant updateMany
   */
  export type TenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant updateManyAndReturn
   */
  export type TenantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant upsert
   */
  export type TenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The filter to search for the Tenant to update in case it exists.
     */
    where: TenantWhereUniqueInput
    /**
     * In case the Tenant found by the `where` argument doesn't exist, create a new Tenant with this data.
     */
    create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    /**
     * In case the Tenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
  }

  /**
   * Tenant delete
   */
  export type TenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter which Tenant to delete.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant deleteMany
   */
  export type TenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenants to delete
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to delete.
     */
    limit?: number
  }

  /**
   * Tenant.staff
   */
  export type Tenant$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    where?: StaffWhereInput
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    cursor?: StaffWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Tenant.members
   */
  export type Tenant$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    cursor?: MemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Tenant.membershipPlans
   */
  export type Tenant$membershipPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipPlan
     */
    select?: MembershipPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipPlan
     */
    omit?: MembershipPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipPlanInclude<ExtArgs> | null
    where?: MembershipPlanWhereInput
    orderBy?: MembershipPlanOrderByWithRelationInput | MembershipPlanOrderByWithRelationInput[]
    cursor?: MembershipPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembershipPlanScalarFieldEnum | MembershipPlanScalarFieldEnum[]
  }

  /**
   * Tenant.classSessions
   */
  export type Tenant$classSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSession
     */
    select?: ClassSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSession
     */
    omit?: ClassSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSessionInclude<ExtArgs> | null
    where?: ClassSessionWhereInput
    orderBy?: ClassSessionOrderByWithRelationInput | ClassSessionOrderByWithRelationInput[]
    cursor?: ClassSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassSessionScalarFieldEnum | ClassSessionScalarFieldEnum[]
  }

  /**
   * Tenant.checkIns
   */
  export type Tenant$checkInsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    where?: CheckInWhereInput
    orderBy?: CheckInOrderByWithRelationInput | CheckInOrderByWithRelationInput[]
    cursor?: CheckInWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckInScalarFieldEnum | CheckInScalarFieldEnum[]
  }

  /**
   * Tenant.payments
   */
  export type Tenant$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Tenant without action
   */
  export type TenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
  }


  /**
   * Model Staff
   */

  export type AggregateStaff = {
    _count: StaffCountAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  export type StaffMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.StaffRole | null
    phone: string | null
    avatarUrl: string | null
    isActive: boolean | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StaffMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.StaffRole | null
    phone: string | null
    avatarUrl: string | null
    isActive: boolean | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StaffCountAggregateOutputType = {
    id: number
    tenantId: number
    name: number
    email: number
    passwordHash: number
    role: number
    phone: number
    avatarUrl: number
    isActive: number
    lastLoginAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StaffMinAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    phone?: true
    avatarUrl?: true
    isActive?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StaffMaxAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    phone?: true
    avatarUrl?: true
    isActive?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StaffCountAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    phone?: true
    avatarUrl?: true
    isActive?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StaffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to aggregate.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Staff
    **/
    _count?: true | StaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffMaxAggregateInputType
  }

  export type GetStaffAggregateType<T extends StaffAggregateArgs> = {
        [P in keyof T & keyof AggregateStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaff[P]>
      : GetScalarType<T[P], AggregateStaff[P]>
  }




  export type StaffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffWhereInput
    orderBy?: StaffOrderByWithAggregationInput | StaffOrderByWithAggregationInput[]
    by: StaffScalarFieldEnum[] | StaffScalarFieldEnum
    having?: StaffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffCountAggregateInputType | true
    _min?: StaffMinAggregateInputType
    _max?: StaffMaxAggregateInputType
  }

  export type StaffGroupByOutputType = {
    id: string
    tenantId: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.StaffRole
    phone: string | null
    avatarUrl: string | null
    isActive: boolean
    lastLoginAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: StaffCountAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  type GetStaffGroupByPayload<T extends StaffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffGroupByOutputType[P]>
            : GetScalarType<T[P], StaffGroupByOutputType[P]>
        }
      >
    >


  export type StaffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    phone?: boolean
    avatarUrl?: boolean
    isActive?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    classSessions?: boolean | Staff$classSessionsArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    phone?: boolean
    avatarUrl?: boolean
    isActive?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    phone?: boolean
    avatarUrl?: boolean
    isActive?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectScalar = {
    id?: boolean
    tenantId?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    phone?: boolean
    avatarUrl?: boolean
    isActive?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StaffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "name" | "email" | "passwordHash" | "role" | "phone" | "avatarUrl" | "isActive" | "lastLoginAt" | "createdAt" | "updatedAt", ExtArgs["result"]["staff"]>
  export type StaffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    classSessions?: boolean | Staff$classSessionsArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StaffIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type StaffIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $StaffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Staff"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      classSessions: Prisma.$ClassSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      name: string
      email: string
      passwordHash: string
      role: $Enums.StaffRole
      phone: string | null
      avatarUrl: string | null
      isActive: boolean
      lastLoginAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["staff"]>
    composites: {}
  }

  type StaffGetPayload<S extends boolean | null | undefined | StaffDefaultArgs> = $Result.GetResult<Prisma.$StaffPayload, S>

  type StaffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffCountAggregateInputType | true
    }

  export interface StaffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Staff'], meta: { name: 'Staff' } }
    /**
     * Find zero or one Staff that matches the filter.
     * @param {StaffFindUniqueArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffFindUniqueArgs>(args: SelectSubset<T, StaffFindUniqueArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Staff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffFindUniqueOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffFindFirstArgs>(args?: SelectSubset<T, StaffFindFirstArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staff
     * const staff = await prisma.staff.findMany()
     * 
     * // Get first 10 Staff
     * const staff = await prisma.staff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffWithIdOnly = await prisma.staff.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaffFindManyArgs>(args?: SelectSubset<T, StaffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Staff.
     * @param {StaffCreateArgs} args - Arguments to create a Staff.
     * @example
     * // Create one Staff
     * const Staff = await prisma.staff.create({
     *   data: {
     *     // ... data to create a Staff
     *   }
     * })
     * 
     */
    create<T extends StaffCreateArgs>(args: SelectSubset<T, StaffCreateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Staff.
     * @param {StaffCreateManyArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffCreateManyArgs>(args?: SelectSubset<T, StaffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Staff and returns the data saved in the database.
     * @param {StaffCreateManyAndReturnArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Staff and only return the `id`
     * const staffWithIdOnly = await prisma.staff.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaffCreateManyAndReturnArgs>(args?: SelectSubset<T, StaffCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Staff.
     * @param {StaffDeleteArgs} args - Arguments to delete one Staff.
     * @example
     * // Delete one Staff
     * const Staff = await prisma.staff.delete({
     *   where: {
     *     // ... filter to delete one Staff
     *   }
     * })
     * 
     */
    delete<T extends StaffDeleteArgs>(args: SelectSubset<T, StaffDeleteArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Staff.
     * @param {StaffUpdateArgs} args - Arguments to update one Staff.
     * @example
     * // Update one Staff
     * const staff = await prisma.staff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffUpdateArgs>(args: SelectSubset<T, StaffUpdateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Staff.
     * @param {StaffDeleteManyArgs} args - Arguments to filter Staff to delete.
     * @example
     * // Delete a few Staff
     * const { count } = await prisma.staff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffDeleteManyArgs>(args?: SelectSubset<T, StaffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffUpdateManyArgs>(args: SelectSubset<T, StaffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff and returns the data updated in the database.
     * @param {StaffUpdateManyAndReturnArgs} args - Arguments to update many Staff.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Staff and only return the `id`
     * const staffWithIdOnly = await prisma.staff.updateManyAndReturn({
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
    updateManyAndReturn<T extends StaffUpdateManyAndReturnArgs>(args: SelectSubset<T, StaffUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Staff.
     * @param {StaffUpsertArgs} args - Arguments to update or create a Staff.
     * @example
     * // Update or create a Staff
     * const staff = await prisma.staff.upsert({
     *   create: {
     *     // ... data to create a Staff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staff we want to update
     *   }
     * })
     */
    upsert<T extends StaffUpsertArgs>(args: SelectSubset<T, StaffUpsertArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffCountArgs} args - Arguments to filter Staff to count.
     * @example
     * // Count the number of Staff
     * const count = await prisma.staff.count({
     *   where: {
     *     // ... the filter for the Staff we want to count
     *   }
     * })
    **/
    count<T extends StaffCountArgs>(
      args?: Subset<T, StaffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StaffAggregateArgs>(args: Subset<T, StaffAggregateArgs>): Prisma.PrismaPromise<GetStaffAggregateType<T>>

    /**
     * Group by Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffGroupByArgs} args - Group by arguments.
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
      T extends StaffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffGroupByArgs['orderBy'] }
        : { orderBy?: StaffGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StaffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Staff model
   */
  readonly fields: StaffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Staff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    classSessions<T extends Staff$classSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Staff$classSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Staff model
   */
  interface StaffFieldRefs {
    readonly id: FieldRef<"Staff", 'String'>
    readonly tenantId: FieldRef<"Staff", 'String'>
    readonly name: FieldRef<"Staff", 'String'>
    readonly email: FieldRef<"Staff", 'String'>
    readonly passwordHash: FieldRef<"Staff", 'String'>
    readonly role: FieldRef<"Staff", 'StaffRole'>
    readonly phone: FieldRef<"Staff", 'String'>
    readonly avatarUrl: FieldRef<"Staff", 'String'>
    readonly isActive: FieldRef<"Staff", 'Boolean'>
    readonly lastLoginAt: FieldRef<"Staff", 'DateTime'>
    readonly createdAt: FieldRef<"Staff", 'DateTime'>
    readonly updatedAt: FieldRef<"Staff", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Staff findUnique
   */
  export type StaffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findUniqueOrThrow
   */
  export type StaffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findFirst
   */
  export type StaffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findFirstOrThrow
   */
  export type StaffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findMany
   */
  export type StaffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff create
   */
  export type StaffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to create a Staff.
     */
    data: XOR<StaffCreateInput, StaffUncheckedCreateInput>
  }

  /**
   * Staff createMany
   */
  export type StaffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Staff.
     */
    data: StaffCreateManyInput | StaffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Staff createManyAndReturn
   */
  export type StaffCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * The data used to create many Staff.
     */
    data: StaffCreateManyInput | StaffCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Staff update
   */
  export type StaffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to update a Staff.
     */
    data: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
    /**
     * Choose, which Staff to update.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff updateMany
   */
  export type StaffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Staff.
     */
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyInput>
    /**
     * Filter which Staff to update
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to update.
     */
    limit?: number
  }

  /**
   * Staff updateManyAndReturn
   */
  export type StaffUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * The data used to update Staff.
     */
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyInput>
    /**
     * Filter which Staff to update
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Staff upsert
   */
  export type StaffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The filter to search for the Staff to update in case it exists.
     */
    where: StaffWhereUniqueInput
    /**
     * In case the Staff found by the `where` argument doesn't exist, create a new Staff with this data.
     */
    create: XOR<StaffCreateInput, StaffUncheckedCreateInput>
    /**
     * In case the Staff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
  }

  /**
   * Staff delete
   */
  export type StaffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter which Staff to delete.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff deleteMany
   */
  export type StaffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to delete
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to delete.
     */
    limit?: number
  }

  /**
   * Staff.classSessions
   */
  export type Staff$classSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSession
     */
    select?: ClassSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSession
     */
    omit?: ClassSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSessionInclude<ExtArgs> | null
    where?: ClassSessionWhereInput
    orderBy?: ClassSessionOrderByWithRelationInput | ClassSessionOrderByWithRelationInput[]
    cursor?: ClassSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassSessionScalarFieldEnum | ClassSessionScalarFieldEnum[]
  }

  /**
   * Staff without action
   */
  export type StaffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
  }


  /**
   * Model MembershipPlan
   */

  export type AggregateMembershipPlan = {
    _count: MembershipPlanCountAggregateOutputType | null
    _avg: MembershipPlanAvgAggregateOutputType | null
    _sum: MembershipPlanSumAggregateOutputType | null
    _min: MembershipPlanMinAggregateOutputType | null
    _max: MembershipPlanMaxAggregateOutputType | null
  }

  export type MembershipPlanAvgAggregateOutputType = {
    price: Decimal | null
    maxClassesPerWeek: number | null
    accessHoursStart: number | null
    accessHoursEnd: number | null
  }

  export type MembershipPlanSumAggregateOutputType = {
    price: Decimal | null
    maxClassesPerWeek: number | null
    accessHoursStart: number | null
    accessHoursEnd: number | null
  }

  export type MembershipPlanMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    name: string | null
    description: string | null
    price: Decimal | null
    billingCycle: $Enums.BillingCycle | null
    maxClassesPerWeek: number | null
    accessHoursStart: number | null
    accessHoursEnd: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MembershipPlanMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    name: string | null
    description: string | null
    price: Decimal | null
    billingCycle: $Enums.BillingCycle | null
    maxClassesPerWeek: number | null
    accessHoursStart: number | null
    accessHoursEnd: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MembershipPlanCountAggregateOutputType = {
    id: number
    tenantId: number
    name: number
    description: number
    price: number
    billingCycle: number
    maxClassesPerWeek: number
    accessHoursStart: number
    accessHoursEnd: number
    features: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MembershipPlanAvgAggregateInputType = {
    price?: true
    maxClassesPerWeek?: true
    accessHoursStart?: true
    accessHoursEnd?: true
  }

  export type MembershipPlanSumAggregateInputType = {
    price?: true
    maxClassesPerWeek?: true
    accessHoursStart?: true
    accessHoursEnd?: true
  }

  export type MembershipPlanMinAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    description?: true
    price?: true
    billingCycle?: true
    maxClassesPerWeek?: true
    accessHoursStart?: true
    accessHoursEnd?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MembershipPlanMaxAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    description?: true
    price?: true
    billingCycle?: true
    maxClassesPerWeek?: true
    accessHoursStart?: true
    accessHoursEnd?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MembershipPlanCountAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    description?: true
    price?: true
    billingCycle?: true
    maxClassesPerWeek?: true
    accessHoursStart?: true
    accessHoursEnd?: true
    features?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MembershipPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MembershipPlan to aggregate.
     */
    where?: MembershipPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembershipPlans to fetch.
     */
    orderBy?: MembershipPlanOrderByWithRelationInput | MembershipPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MembershipPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembershipPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembershipPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MembershipPlans
    **/
    _count?: true | MembershipPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MembershipPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MembershipPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MembershipPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MembershipPlanMaxAggregateInputType
  }

  export type GetMembershipPlanAggregateType<T extends MembershipPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateMembershipPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMembershipPlan[P]>
      : GetScalarType<T[P], AggregateMembershipPlan[P]>
  }




  export type MembershipPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipPlanWhereInput
    orderBy?: MembershipPlanOrderByWithAggregationInput | MembershipPlanOrderByWithAggregationInput[]
    by: MembershipPlanScalarFieldEnum[] | MembershipPlanScalarFieldEnum
    having?: MembershipPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MembershipPlanCountAggregateInputType | true
    _avg?: MembershipPlanAvgAggregateInputType
    _sum?: MembershipPlanSumAggregateInputType
    _min?: MembershipPlanMinAggregateInputType
    _max?: MembershipPlanMaxAggregateInputType
  }

  export type MembershipPlanGroupByOutputType = {
    id: string
    tenantId: string
    name: string
    description: string | null
    price: Decimal
    billingCycle: $Enums.BillingCycle
    maxClassesPerWeek: number | null
    accessHoursStart: number
    accessHoursEnd: number
    features: string[]
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: MembershipPlanCountAggregateOutputType | null
    _avg: MembershipPlanAvgAggregateOutputType | null
    _sum: MembershipPlanSumAggregateOutputType | null
    _min: MembershipPlanMinAggregateOutputType | null
    _max: MembershipPlanMaxAggregateOutputType | null
  }

  type GetMembershipPlanGroupByPayload<T extends MembershipPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MembershipPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MembershipPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MembershipPlanGroupByOutputType[P]>
            : GetScalarType<T[P], MembershipPlanGroupByOutputType[P]>
        }
      >
    >


  export type MembershipPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    billingCycle?: boolean
    maxClassesPerWeek?: boolean
    accessHoursStart?: boolean
    accessHoursEnd?: boolean
    features?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    members?: boolean | MembershipPlan$membersArgs<ExtArgs>
    _count?: boolean | MembershipPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membershipPlan"]>

  export type MembershipPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    billingCycle?: boolean
    maxClassesPerWeek?: boolean
    accessHoursStart?: boolean
    accessHoursEnd?: boolean
    features?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membershipPlan"]>

  export type MembershipPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    billingCycle?: boolean
    maxClassesPerWeek?: boolean
    accessHoursStart?: boolean
    accessHoursEnd?: boolean
    features?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membershipPlan"]>

  export type MembershipPlanSelectScalar = {
    id?: boolean
    tenantId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    billingCycle?: boolean
    maxClassesPerWeek?: boolean
    accessHoursStart?: boolean
    accessHoursEnd?: boolean
    features?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MembershipPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "name" | "description" | "price" | "billingCycle" | "maxClassesPerWeek" | "accessHoursStart" | "accessHoursEnd" | "features" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["membershipPlan"]>
  export type MembershipPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    members?: boolean | MembershipPlan$membersArgs<ExtArgs>
    _count?: boolean | MembershipPlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MembershipPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type MembershipPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $MembershipPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MembershipPlan"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      members: Prisma.$MemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      name: string
      description: string | null
      price: Prisma.Decimal
      billingCycle: $Enums.BillingCycle
      maxClassesPerWeek: number | null
      accessHoursStart: number
      accessHoursEnd: number
      features: string[]
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["membershipPlan"]>
    composites: {}
  }

  type MembershipPlanGetPayload<S extends boolean | null | undefined | MembershipPlanDefaultArgs> = $Result.GetResult<Prisma.$MembershipPlanPayload, S>

  type MembershipPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MembershipPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MembershipPlanCountAggregateInputType | true
    }

  export interface MembershipPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MembershipPlan'], meta: { name: 'MembershipPlan' } }
    /**
     * Find zero or one MembershipPlan that matches the filter.
     * @param {MembershipPlanFindUniqueArgs} args - Arguments to find a MembershipPlan
     * @example
     * // Get one MembershipPlan
     * const membershipPlan = await prisma.membershipPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MembershipPlanFindUniqueArgs>(args: SelectSubset<T, MembershipPlanFindUniqueArgs<ExtArgs>>): Prisma__MembershipPlanClient<$Result.GetResult<Prisma.$MembershipPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MembershipPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MembershipPlanFindUniqueOrThrowArgs} args - Arguments to find a MembershipPlan
     * @example
     * // Get one MembershipPlan
     * const membershipPlan = await prisma.membershipPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MembershipPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, MembershipPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MembershipPlanClient<$Result.GetResult<Prisma.$MembershipPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MembershipPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipPlanFindFirstArgs} args - Arguments to find a MembershipPlan
     * @example
     * // Get one MembershipPlan
     * const membershipPlan = await prisma.membershipPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MembershipPlanFindFirstArgs>(args?: SelectSubset<T, MembershipPlanFindFirstArgs<ExtArgs>>): Prisma__MembershipPlanClient<$Result.GetResult<Prisma.$MembershipPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MembershipPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipPlanFindFirstOrThrowArgs} args - Arguments to find a MembershipPlan
     * @example
     * // Get one MembershipPlan
     * const membershipPlan = await prisma.membershipPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MembershipPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, MembershipPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__MembershipPlanClient<$Result.GetResult<Prisma.$MembershipPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MembershipPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MembershipPlans
     * const membershipPlans = await prisma.membershipPlan.findMany()
     * 
     * // Get first 10 MembershipPlans
     * const membershipPlans = await prisma.membershipPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const membershipPlanWithIdOnly = await prisma.membershipPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MembershipPlanFindManyArgs>(args?: SelectSubset<T, MembershipPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MembershipPlan.
     * @param {MembershipPlanCreateArgs} args - Arguments to create a MembershipPlan.
     * @example
     * // Create one MembershipPlan
     * const MembershipPlan = await prisma.membershipPlan.create({
     *   data: {
     *     // ... data to create a MembershipPlan
     *   }
     * })
     * 
     */
    create<T extends MembershipPlanCreateArgs>(args: SelectSubset<T, MembershipPlanCreateArgs<ExtArgs>>): Prisma__MembershipPlanClient<$Result.GetResult<Prisma.$MembershipPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MembershipPlans.
     * @param {MembershipPlanCreateManyArgs} args - Arguments to create many MembershipPlans.
     * @example
     * // Create many MembershipPlans
     * const membershipPlan = await prisma.membershipPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MembershipPlanCreateManyArgs>(args?: SelectSubset<T, MembershipPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MembershipPlans and returns the data saved in the database.
     * @param {MembershipPlanCreateManyAndReturnArgs} args - Arguments to create many MembershipPlans.
     * @example
     * // Create many MembershipPlans
     * const membershipPlan = await prisma.membershipPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MembershipPlans and only return the `id`
     * const membershipPlanWithIdOnly = await prisma.membershipPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MembershipPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, MembershipPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MembershipPlan.
     * @param {MembershipPlanDeleteArgs} args - Arguments to delete one MembershipPlan.
     * @example
     * // Delete one MembershipPlan
     * const MembershipPlan = await prisma.membershipPlan.delete({
     *   where: {
     *     // ... filter to delete one MembershipPlan
     *   }
     * })
     * 
     */
    delete<T extends MembershipPlanDeleteArgs>(args: SelectSubset<T, MembershipPlanDeleteArgs<ExtArgs>>): Prisma__MembershipPlanClient<$Result.GetResult<Prisma.$MembershipPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MembershipPlan.
     * @param {MembershipPlanUpdateArgs} args - Arguments to update one MembershipPlan.
     * @example
     * // Update one MembershipPlan
     * const membershipPlan = await prisma.membershipPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MembershipPlanUpdateArgs>(args: SelectSubset<T, MembershipPlanUpdateArgs<ExtArgs>>): Prisma__MembershipPlanClient<$Result.GetResult<Prisma.$MembershipPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MembershipPlans.
     * @param {MembershipPlanDeleteManyArgs} args - Arguments to filter MembershipPlans to delete.
     * @example
     * // Delete a few MembershipPlans
     * const { count } = await prisma.membershipPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MembershipPlanDeleteManyArgs>(args?: SelectSubset<T, MembershipPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MembershipPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MembershipPlans
     * const membershipPlan = await prisma.membershipPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MembershipPlanUpdateManyArgs>(args: SelectSubset<T, MembershipPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MembershipPlans and returns the data updated in the database.
     * @param {MembershipPlanUpdateManyAndReturnArgs} args - Arguments to update many MembershipPlans.
     * @example
     * // Update many MembershipPlans
     * const membershipPlan = await prisma.membershipPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MembershipPlans and only return the `id`
     * const membershipPlanWithIdOnly = await prisma.membershipPlan.updateManyAndReturn({
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
    updateManyAndReturn<T extends MembershipPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, MembershipPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MembershipPlan.
     * @param {MembershipPlanUpsertArgs} args - Arguments to update or create a MembershipPlan.
     * @example
     * // Update or create a MembershipPlan
     * const membershipPlan = await prisma.membershipPlan.upsert({
     *   create: {
     *     // ... data to create a MembershipPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MembershipPlan we want to update
     *   }
     * })
     */
    upsert<T extends MembershipPlanUpsertArgs>(args: SelectSubset<T, MembershipPlanUpsertArgs<ExtArgs>>): Prisma__MembershipPlanClient<$Result.GetResult<Prisma.$MembershipPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MembershipPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipPlanCountArgs} args - Arguments to filter MembershipPlans to count.
     * @example
     * // Count the number of MembershipPlans
     * const count = await prisma.membershipPlan.count({
     *   where: {
     *     // ... the filter for the MembershipPlans we want to count
     *   }
     * })
    **/
    count<T extends MembershipPlanCountArgs>(
      args?: Subset<T, MembershipPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MembershipPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MembershipPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MembershipPlanAggregateArgs>(args: Subset<T, MembershipPlanAggregateArgs>): Prisma.PrismaPromise<GetMembershipPlanAggregateType<T>>

    /**
     * Group by MembershipPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipPlanGroupByArgs} args - Group by arguments.
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
      T extends MembershipPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MembershipPlanGroupByArgs['orderBy'] }
        : { orderBy?: MembershipPlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MembershipPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembershipPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MembershipPlan model
   */
  readonly fields: MembershipPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MembershipPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MembershipPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends MembershipPlan$membersArgs<ExtArgs> = {}>(args?: Subset<T, MembershipPlan$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MembershipPlan model
   */
  interface MembershipPlanFieldRefs {
    readonly id: FieldRef<"MembershipPlan", 'String'>
    readonly tenantId: FieldRef<"MembershipPlan", 'String'>
    readonly name: FieldRef<"MembershipPlan", 'String'>
    readonly description: FieldRef<"MembershipPlan", 'String'>
    readonly price: FieldRef<"MembershipPlan", 'Decimal'>
    readonly billingCycle: FieldRef<"MembershipPlan", 'BillingCycle'>
    readonly maxClassesPerWeek: FieldRef<"MembershipPlan", 'Int'>
    readonly accessHoursStart: FieldRef<"MembershipPlan", 'Int'>
    readonly accessHoursEnd: FieldRef<"MembershipPlan", 'Int'>
    readonly features: FieldRef<"MembershipPlan", 'String[]'>
    readonly isActive: FieldRef<"MembershipPlan", 'Boolean'>
    readonly createdAt: FieldRef<"MembershipPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"MembershipPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MembershipPlan findUnique
   */
  export type MembershipPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipPlan
     */
    select?: MembershipPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipPlan
     */
    omit?: MembershipPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipPlanInclude<ExtArgs> | null
    /**
     * Filter, which MembershipPlan to fetch.
     */
    where: MembershipPlanWhereUniqueInput
  }

  /**
   * MembershipPlan findUniqueOrThrow
   */
  export type MembershipPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipPlan
     */
    select?: MembershipPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipPlan
     */
    omit?: MembershipPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipPlanInclude<ExtArgs> | null
    /**
     * Filter, which MembershipPlan to fetch.
     */
    where: MembershipPlanWhereUniqueInput
  }

  /**
   * MembershipPlan findFirst
   */
  export type MembershipPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipPlan
     */
    select?: MembershipPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipPlan
     */
    omit?: MembershipPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipPlanInclude<ExtArgs> | null
    /**
     * Filter, which MembershipPlan to fetch.
     */
    where?: MembershipPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembershipPlans to fetch.
     */
    orderBy?: MembershipPlanOrderByWithRelationInput | MembershipPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MembershipPlans.
     */
    cursor?: MembershipPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembershipPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembershipPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MembershipPlans.
     */
    distinct?: MembershipPlanScalarFieldEnum | MembershipPlanScalarFieldEnum[]
  }

  /**
   * MembershipPlan findFirstOrThrow
   */
  export type MembershipPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipPlan
     */
    select?: MembershipPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipPlan
     */
    omit?: MembershipPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipPlanInclude<ExtArgs> | null
    /**
     * Filter, which MembershipPlan to fetch.
     */
    where?: MembershipPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembershipPlans to fetch.
     */
    orderBy?: MembershipPlanOrderByWithRelationInput | MembershipPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MembershipPlans.
     */
    cursor?: MembershipPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembershipPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembershipPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MembershipPlans.
     */
    distinct?: MembershipPlanScalarFieldEnum | MembershipPlanScalarFieldEnum[]
  }

  /**
   * MembershipPlan findMany
   */
  export type MembershipPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipPlan
     */
    select?: MembershipPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipPlan
     */
    omit?: MembershipPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipPlanInclude<ExtArgs> | null
    /**
     * Filter, which MembershipPlans to fetch.
     */
    where?: MembershipPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembershipPlans to fetch.
     */
    orderBy?: MembershipPlanOrderByWithRelationInput | MembershipPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MembershipPlans.
     */
    cursor?: MembershipPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembershipPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembershipPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MembershipPlans.
     */
    distinct?: MembershipPlanScalarFieldEnum | MembershipPlanScalarFieldEnum[]
  }

  /**
   * MembershipPlan create
   */
  export type MembershipPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipPlan
     */
    select?: MembershipPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipPlan
     */
    omit?: MembershipPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a MembershipPlan.
     */
    data: XOR<MembershipPlanCreateInput, MembershipPlanUncheckedCreateInput>
  }

  /**
   * MembershipPlan createMany
   */
  export type MembershipPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MembershipPlans.
     */
    data: MembershipPlanCreateManyInput | MembershipPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MembershipPlan createManyAndReturn
   */
  export type MembershipPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipPlan
     */
    select?: MembershipPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipPlan
     */
    omit?: MembershipPlanOmit<ExtArgs> | null
    /**
     * The data used to create many MembershipPlans.
     */
    data: MembershipPlanCreateManyInput | MembershipPlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MembershipPlan update
   */
  export type MembershipPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipPlan
     */
    select?: MembershipPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipPlan
     */
    omit?: MembershipPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a MembershipPlan.
     */
    data: XOR<MembershipPlanUpdateInput, MembershipPlanUncheckedUpdateInput>
    /**
     * Choose, which MembershipPlan to update.
     */
    where: MembershipPlanWhereUniqueInput
  }

  /**
   * MembershipPlan updateMany
   */
  export type MembershipPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MembershipPlans.
     */
    data: XOR<MembershipPlanUpdateManyMutationInput, MembershipPlanUncheckedUpdateManyInput>
    /**
     * Filter which MembershipPlans to update
     */
    where?: MembershipPlanWhereInput
    /**
     * Limit how many MembershipPlans to update.
     */
    limit?: number
  }

  /**
   * MembershipPlan updateManyAndReturn
   */
  export type MembershipPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipPlan
     */
    select?: MembershipPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipPlan
     */
    omit?: MembershipPlanOmit<ExtArgs> | null
    /**
     * The data used to update MembershipPlans.
     */
    data: XOR<MembershipPlanUpdateManyMutationInput, MembershipPlanUncheckedUpdateManyInput>
    /**
     * Filter which MembershipPlans to update
     */
    where?: MembershipPlanWhereInput
    /**
     * Limit how many MembershipPlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipPlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MembershipPlan upsert
   */
  export type MembershipPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipPlan
     */
    select?: MembershipPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipPlan
     */
    omit?: MembershipPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the MembershipPlan to update in case it exists.
     */
    where: MembershipPlanWhereUniqueInput
    /**
     * In case the MembershipPlan found by the `where` argument doesn't exist, create a new MembershipPlan with this data.
     */
    create: XOR<MembershipPlanCreateInput, MembershipPlanUncheckedCreateInput>
    /**
     * In case the MembershipPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MembershipPlanUpdateInput, MembershipPlanUncheckedUpdateInput>
  }

  /**
   * MembershipPlan delete
   */
  export type MembershipPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipPlan
     */
    select?: MembershipPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipPlan
     */
    omit?: MembershipPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipPlanInclude<ExtArgs> | null
    /**
     * Filter which MembershipPlan to delete.
     */
    where: MembershipPlanWhereUniqueInput
  }

  /**
   * MembershipPlan deleteMany
   */
  export type MembershipPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MembershipPlans to delete
     */
    where?: MembershipPlanWhereInput
    /**
     * Limit how many MembershipPlans to delete.
     */
    limit?: number
  }

  /**
   * MembershipPlan.members
   */
  export type MembershipPlan$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    cursor?: MemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * MembershipPlan without action
   */
  export type MembershipPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipPlan
     */
    select?: MembershipPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipPlan
     */
    omit?: MembershipPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipPlanInclude<ExtArgs> | null
  }


  /**
   * Model Member
   */

  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberAvgAggregateOutputType = {
    frozenDays: number | null
  }

  export type MemberSumAggregateOutputType = {
    frozenDays: number | null
  }

  export type MemberMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    membershipPlanId: string | null
    name: string | null
    email: string | null
    phone: string | null
    photoUrl: string | null
    qrCode: string | null
    pin: string | null
    status: $Enums.MemberStatus | null
    joinedAt: Date | null
    expiresAt: Date | null
    frozenAt: Date | null
    frozenDays: number | null
    emergencyContact: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MemberMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    membershipPlanId: string | null
    name: string | null
    email: string | null
    phone: string | null
    photoUrl: string | null
    qrCode: string | null
    pin: string | null
    status: $Enums.MemberStatus | null
    joinedAt: Date | null
    expiresAt: Date | null
    frozenAt: Date | null
    frozenDays: number | null
    emergencyContact: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MemberCountAggregateOutputType = {
    id: number
    tenantId: number
    membershipPlanId: number
    name: number
    email: number
    phone: number
    photoUrl: number
    qrCode: number
    pin: number
    status: number
    joinedAt: number
    expiresAt: number
    frozenAt: number
    frozenDays: number
    emergencyContact: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MemberAvgAggregateInputType = {
    frozenDays?: true
  }

  export type MemberSumAggregateInputType = {
    frozenDays?: true
  }

  export type MemberMinAggregateInputType = {
    id?: true
    tenantId?: true
    membershipPlanId?: true
    name?: true
    email?: true
    phone?: true
    photoUrl?: true
    qrCode?: true
    pin?: true
    status?: true
    joinedAt?: true
    expiresAt?: true
    frozenAt?: true
    frozenDays?: true
    emergencyContact?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MemberMaxAggregateInputType = {
    id?: true
    tenantId?: true
    membershipPlanId?: true
    name?: true
    email?: true
    phone?: true
    photoUrl?: true
    qrCode?: true
    pin?: true
    status?: true
    joinedAt?: true
    expiresAt?: true
    frozenAt?: true
    frozenDays?: true
    emergencyContact?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MemberCountAggregateInputType = {
    id?: true
    tenantId?: true
    membershipPlanId?: true
    name?: true
    email?: true
    phone?: true
    photoUrl?: true
    qrCode?: true
    pin?: true
    status?: true
    joinedAt?: true
    expiresAt?: true
    frozenAt?: true
    frozenDays?: true
    emergencyContact?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member to aggregate.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type MemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithAggregationInput | MemberOrderByWithAggregationInput[]
    by: MemberScalarFieldEnum[] | MemberScalarFieldEnum
    having?: MemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _avg?: MemberAvgAggregateInputType
    _sum?: MemberSumAggregateInputType
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }

  export type MemberGroupByOutputType = {
    id: string
    tenantId: string
    membershipPlanId: string | null
    name: string
    email: string
    phone: string | null
    photoUrl: string | null
    qrCode: string | null
    pin: string | null
    status: $Enums.MemberStatus
    joinedAt: Date
    expiresAt: Date | null
    frozenAt: Date | null
    frozenDays: number
    emergencyContact: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends MemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type MemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    membershipPlanId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    photoUrl?: boolean
    qrCode?: boolean
    pin?: boolean
    status?: boolean
    joinedAt?: boolean
    expiresAt?: boolean
    frozenAt?: boolean
    frozenDays?: boolean
    emergencyContact?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    plan?: boolean | Member$planArgs<ExtArgs>
    bookings?: boolean | Member$bookingsArgs<ExtArgs>
    checkIns?: boolean | Member$checkInsArgs<ExtArgs>
    payments?: boolean | Member$paymentsArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    membershipPlanId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    photoUrl?: boolean
    qrCode?: boolean
    pin?: boolean
    status?: boolean
    joinedAt?: boolean
    expiresAt?: boolean
    frozenAt?: boolean
    frozenDays?: boolean
    emergencyContact?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    plan?: boolean | Member$planArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    membershipPlanId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    photoUrl?: boolean
    qrCode?: boolean
    pin?: boolean
    status?: boolean
    joinedAt?: boolean
    expiresAt?: boolean
    frozenAt?: boolean
    frozenDays?: boolean
    emergencyContact?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    plan?: boolean | Member$planArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectScalar = {
    id?: boolean
    tenantId?: boolean
    membershipPlanId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    photoUrl?: boolean
    qrCode?: boolean
    pin?: boolean
    status?: boolean
    joinedAt?: boolean
    expiresAt?: boolean
    frozenAt?: boolean
    frozenDays?: boolean
    emergencyContact?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "membershipPlanId" | "name" | "email" | "phone" | "photoUrl" | "qrCode" | "pin" | "status" | "joinedAt" | "expiresAt" | "frozenAt" | "frozenDays" | "emergencyContact" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["member"]>
  export type MemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    plan?: boolean | Member$planArgs<ExtArgs>
    bookings?: boolean | Member$bookingsArgs<ExtArgs>
    checkIns?: boolean | Member$checkInsArgs<ExtArgs>
    payments?: boolean | Member$paymentsArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    plan?: boolean | Member$planArgs<ExtArgs>
  }
  export type MemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    plan?: boolean | Member$planArgs<ExtArgs>
  }

  export type $MemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Member"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      plan: Prisma.$MembershipPlanPayload<ExtArgs> | null
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      checkIns: Prisma.$CheckInPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      membershipPlanId: string | null
      name: string
      email: string
      phone: string | null
      photoUrl: string | null
      qrCode: string | null
      pin: string | null
      status: $Enums.MemberStatus
      joinedAt: Date
      expiresAt: Date | null
      frozenAt: Date | null
      frozenDays: number
      emergencyContact: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["member"]>
    composites: {}
  }

  type MemberGetPayload<S extends boolean | null | undefined | MemberDefaultArgs> = $Result.GetResult<Prisma.$MemberPayload, S>

  type MemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface MemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Member'], meta: { name: 'Member' } }
    /**
     * Find zero or one Member that matches the filter.
     * @param {MemberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberFindUniqueArgs>(args: SelectSubset<T, MemberFindUniqueArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Member that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberFindFirstArgs>(args?: SelectSubset<T, MemberFindFirstArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberWithIdOnly = await prisma.member.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemberFindManyArgs>(args?: SelectSubset<T, MemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Member.
     * @param {MemberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
     */
    create<T extends MemberCreateArgs>(args: SelectSubset<T, MemberCreateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Members.
     * @param {MemberCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberCreateManyArgs>(args?: SelectSubset<T, MemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Members and returns the data saved in the database.
     * @param {MemberCreateManyAndReturnArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Members and only return the `id`
     * const memberWithIdOnly = await prisma.member.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemberCreateManyAndReturnArgs>(args?: SelectSubset<T, MemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Member.
     * @param {MemberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
     */
    delete<T extends MemberDeleteArgs>(args: SelectSubset<T, MemberDeleteArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Member.
     * @param {MemberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberUpdateArgs>(args: SelectSubset<T, MemberUpdateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Members.
     * @param {MemberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberDeleteManyArgs>(args?: SelectSubset<T, MemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberUpdateManyArgs>(args: SelectSubset<T, MemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members and returns the data updated in the database.
     * @param {MemberUpdateManyAndReturnArgs} args - Arguments to update many Members.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Members and only return the `id`
     * const memberWithIdOnly = await prisma.member.updateManyAndReturn({
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
    updateManyAndReturn<T extends MemberUpdateManyAndReturnArgs>(args: SelectSubset<T, MemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Member.
     * @param {MemberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
     */
    upsert<T extends MemberUpsertArgs>(args: SelectSubset<T, MemberUpsertArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends MemberCountArgs>(
      args?: Subset<T, MemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberGroupByArgs} args - Group by arguments.
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
      T extends MemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberGroupByArgs['orderBy'] }
        : { orderBy?: MemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Member model
   */
  readonly fields: MemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    plan<T extends Member$planArgs<ExtArgs> = {}>(args?: Subset<T, Member$planArgs<ExtArgs>>): Prisma__MembershipPlanClient<$Result.GetResult<Prisma.$MembershipPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    bookings<T extends Member$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Member$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    checkIns<T extends Member$checkInsArgs<ExtArgs> = {}>(args?: Subset<T, Member$checkInsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends Member$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Member$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Member model
   */
  interface MemberFieldRefs {
    readonly id: FieldRef<"Member", 'String'>
    readonly tenantId: FieldRef<"Member", 'String'>
    readonly membershipPlanId: FieldRef<"Member", 'String'>
    readonly name: FieldRef<"Member", 'String'>
    readonly email: FieldRef<"Member", 'String'>
    readonly phone: FieldRef<"Member", 'String'>
    readonly photoUrl: FieldRef<"Member", 'String'>
    readonly qrCode: FieldRef<"Member", 'String'>
    readonly pin: FieldRef<"Member", 'String'>
    readonly status: FieldRef<"Member", 'MemberStatus'>
    readonly joinedAt: FieldRef<"Member", 'DateTime'>
    readonly expiresAt: FieldRef<"Member", 'DateTime'>
    readonly frozenAt: FieldRef<"Member", 'DateTime'>
    readonly frozenDays: FieldRef<"Member", 'Int'>
    readonly emergencyContact: FieldRef<"Member", 'String'>
    readonly notes: FieldRef<"Member", 'String'>
    readonly createdAt: FieldRef<"Member", 'DateTime'>
    readonly updatedAt: FieldRef<"Member", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Member findUnique
   */
  export type MemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findUniqueOrThrow
   */
  export type MemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findFirst
   */
  export type MemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findFirstOrThrow
   */
  export type MemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findMany
   */
  export type MemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member create
   */
  export type MemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to create a Member.
     */
    data: XOR<MemberCreateInput, MemberUncheckedCreateInput>
  }

  /**
   * Member createMany
   */
  export type MemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Member createManyAndReturn
   */
  export type MemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Member update
   */
  export type MemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to update a Member.
     */
    data: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
    /**
     * Choose, which Member to update.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member updateMany
   */
  export type MemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
  }

  /**
   * Member updateManyAndReturn
   */
  export type MemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Member upsert
   */
  export type MemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The filter to search for the Member to update in case it exists.
     */
    where: MemberWhereUniqueInput
    /**
     * In case the Member found by the `where` argument doesn't exist, create a new Member with this data.
     */
    create: XOR<MemberCreateInput, MemberUncheckedCreateInput>
    /**
     * In case the Member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
  }

  /**
   * Member delete
   */
  export type MemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter which Member to delete.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member deleteMany
   */
  export type MemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to delete
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to delete.
     */
    limit?: number
  }

  /**
   * Member.plan
   */
  export type Member$planArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipPlan
     */
    select?: MembershipPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipPlan
     */
    omit?: MembershipPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipPlanInclude<ExtArgs> | null
    where?: MembershipPlanWhereInput
  }

  /**
   * Member.bookings
   */
  export type Member$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Member.checkIns
   */
  export type Member$checkInsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    where?: CheckInWhereInput
    orderBy?: CheckInOrderByWithRelationInput | CheckInOrderByWithRelationInput[]
    cursor?: CheckInWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckInScalarFieldEnum | CheckInScalarFieldEnum[]
  }

  /**
   * Member.payments
   */
  export type Member$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Member without action
   */
  export type MemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
  }


  /**
   * Model ClassSession
   */

  export type AggregateClassSession = {
    _count: ClassSessionCountAggregateOutputType | null
    _avg: ClassSessionAvgAggregateOutputType | null
    _sum: ClassSessionSumAggregateOutputType | null
    _min: ClassSessionMinAggregateOutputType | null
    _max: ClassSessionMaxAggregateOutputType | null
  }

  export type ClassSessionAvgAggregateOutputType = {
    capacity: number | null
  }

  export type ClassSessionSumAggregateOutputType = {
    capacity: number | null
  }

  export type ClassSessionMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    trainerId: string | null
    name: string | null
    description: string | null
    capacity: number | null
    startTime: Date | null
    endTime: Date | null
    location: string | null
    isRecurring: boolean | null
    recurrenceRule: string | null
    isCancelled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClassSessionMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    trainerId: string | null
    name: string | null
    description: string | null
    capacity: number | null
    startTime: Date | null
    endTime: Date | null
    location: string | null
    isRecurring: boolean | null
    recurrenceRule: string | null
    isCancelled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClassSessionCountAggregateOutputType = {
    id: number
    tenantId: number
    trainerId: number
    name: number
    description: number
    capacity: number
    startTime: number
    endTime: number
    location: number
    isRecurring: number
    recurrenceRule: number
    isCancelled: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClassSessionAvgAggregateInputType = {
    capacity?: true
  }

  export type ClassSessionSumAggregateInputType = {
    capacity?: true
  }

  export type ClassSessionMinAggregateInputType = {
    id?: true
    tenantId?: true
    trainerId?: true
    name?: true
    description?: true
    capacity?: true
    startTime?: true
    endTime?: true
    location?: true
    isRecurring?: true
    recurrenceRule?: true
    isCancelled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClassSessionMaxAggregateInputType = {
    id?: true
    tenantId?: true
    trainerId?: true
    name?: true
    description?: true
    capacity?: true
    startTime?: true
    endTime?: true
    location?: true
    isRecurring?: true
    recurrenceRule?: true
    isCancelled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClassSessionCountAggregateInputType = {
    id?: true
    tenantId?: true
    trainerId?: true
    name?: true
    description?: true
    capacity?: true
    startTime?: true
    endTime?: true
    location?: true
    isRecurring?: true
    recurrenceRule?: true
    isCancelled?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClassSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassSession to aggregate.
     */
    where?: ClassSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassSessions to fetch.
     */
    orderBy?: ClassSessionOrderByWithRelationInput | ClassSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClassSessions
    **/
    _count?: true | ClassSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassSessionMaxAggregateInputType
  }

  export type GetClassSessionAggregateType<T extends ClassSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateClassSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassSession[P]>
      : GetScalarType<T[P], AggregateClassSession[P]>
  }




  export type ClassSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassSessionWhereInput
    orderBy?: ClassSessionOrderByWithAggregationInput | ClassSessionOrderByWithAggregationInput[]
    by: ClassSessionScalarFieldEnum[] | ClassSessionScalarFieldEnum
    having?: ClassSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassSessionCountAggregateInputType | true
    _avg?: ClassSessionAvgAggregateInputType
    _sum?: ClassSessionSumAggregateInputType
    _min?: ClassSessionMinAggregateInputType
    _max?: ClassSessionMaxAggregateInputType
  }

  export type ClassSessionGroupByOutputType = {
    id: string
    tenantId: string
    trainerId: string | null
    name: string
    description: string | null
    capacity: number
    startTime: Date
    endTime: Date
    location: string | null
    isRecurring: boolean
    recurrenceRule: string | null
    isCancelled: boolean
    createdAt: Date
    updatedAt: Date
    _count: ClassSessionCountAggregateOutputType | null
    _avg: ClassSessionAvgAggregateOutputType | null
    _sum: ClassSessionSumAggregateOutputType | null
    _min: ClassSessionMinAggregateOutputType | null
    _max: ClassSessionMaxAggregateOutputType | null
  }

  type GetClassSessionGroupByPayload<T extends ClassSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassSessionGroupByOutputType[P]>
            : GetScalarType<T[P], ClassSessionGroupByOutputType[P]>
        }
      >
    >


  export type ClassSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    trainerId?: boolean
    name?: boolean
    description?: boolean
    capacity?: boolean
    startTime?: boolean
    endTime?: boolean
    location?: boolean
    isRecurring?: boolean
    recurrenceRule?: boolean
    isCancelled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    trainer?: boolean | ClassSession$trainerArgs<ExtArgs>
    bookings?: boolean | ClassSession$bookingsArgs<ExtArgs>
    _count?: boolean | ClassSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classSession"]>

  export type ClassSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    trainerId?: boolean
    name?: boolean
    description?: boolean
    capacity?: boolean
    startTime?: boolean
    endTime?: boolean
    location?: boolean
    isRecurring?: boolean
    recurrenceRule?: boolean
    isCancelled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    trainer?: boolean | ClassSession$trainerArgs<ExtArgs>
  }, ExtArgs["result"]["classSession"]>

  export type ClassSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    trainerId?: boolean
    name?: boolean
    description?: boolean
    capacity?: boolean
    startTime?: boolean
    endTime?: boolean
    location?: boolean
    isRecurring?: boolean
    recurrenceRule?: boolean
    isCancelled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    trainer?: boolean | ClassSession$trainerArgs<ExtArgs>
  }, ExtArgs["result"]["classSession"]>

  export type ClassSessionSelectScalar = {
    id?: boolean
    tenantId?: boolean
    trainerId?: boolean
    name?: boolean
    description?: boolean
    capacity?: boolean
    startTime?: boolean
    endTime?: boolean
    location?: boolean
    isRecurring?: boolean
    recurrenceRule?: boolean
    isCancelled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClassSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "trainerId" | "name" | "description" | "capacity" | "startTime" | "endTime" | "location" | "isRecurring" | "recurrenceRule" | "isCancelled" | "createdAt" | "updatedAt", ExtArgs["result"]["classSession"]>
  export type ClassSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    trainer?: boolean | ClassSession$trainerArgs<ExtArgs>
    bookings?: boolean | ClassSession$bookingsArgs<ExtArgs>
    _count?: boolean | ClassSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    trainer?: boolean | ClassSession$trainerArgs<ExtArgs>
  }
  export type ClassSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    trainer?: boolean | ClassSession$trainerArgs<ExtArgs>
  }

  export type $ClassSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClassSession"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      trainer: Prisma.$StaffPayload<ExtArgs> | null
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      trainerId: string | null
      name: string
      description: string | null
      capacity: number
      startTime: Date
      endTime: Date
      location: string | null
      isRecurring: boolean
      recurrenceRule: string | null
      isCancelled: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["classSession"]>
    composites: {}
  }

  type ClassSessionGetPayload<S extends boolean | null | undefined | ClassSessionDefaultArgs> = $Result.GetResult<Prisma.$ClassSessionPayload, S>

  type ClassSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassSessionCountAggregateInputType | true
    }

  export interface ClassSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClassSession'], meta: { name: 'ClassSession' } }
    /**
     * Find zero or one ClassSession that matches the filter.
     * @param {ClassSessionFindUniqueArgs} args - Arguments to find a ClassSession
     * @example
     * // Get one ClassSession
     * const classSession = await prisma.classSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassSessionFindUniqueArgs>(args: SelectSubset<T, ClassSessionFindUniqueArgs<ExtArgs>>): Prisma__ClassSessionClient<$Result.GetResult<Prisma.$ClassSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClassSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassSessionFindUniqueOrThrowArgs} args - Arguments to find a ClassSession
     * @example
     * // Get one ClassSession
     * const classSession = await prisma.classSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassSessionClient<$Result.GetResult<Prisma.$ClassSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassSessionFindFirstArgs} args - Arguments to find a ClassSession
     * @example
     * // Get one ClassSession
     * const classSession = await prisma.classSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassSessionFindFirstArgs>(args?: SelectSubset<T, ClassSessionFindFirstArgs<ExtArgs>>): Prisma__ClassSessionClient<$Result.GetResult<Prisma.$ClassSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassSessionFindFirstOrThrowArgs} args - Arguments to find a ClassSession
     * @example
     * // Get one ClassSession
     * const classSession = await prisma.classSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassSessionClient<$Result.GetResult<Prisma.$ClassSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClassSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClassSessions
     * const classSessions = await prisma.classSession.findMany()
     * 
     * // Get first 10 ClassSessions
     * const classSessions = await prisma.classSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classSessionWithIdOnly = await prisma.classSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassSessionFindManyArgs>(args?: SelectSubset<T, ClassSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClassSession.
     * @param {ClassSessionCreateArgs} args - Arguments to create a ClassSession.
     * @example
     * // Create one ClassSession
     * const ClassSession = await prisma.classSession.create({
     *   data: {
     *     // ... data to create a ClassSession
     *   }
     * })
     * 
     */
    create<T extends ClassSessionCreateArgs>(args: SelectSubset<T, ClassSessionCreateArgs<ExtArgs>>): Prisma__ClassSessionClient<$Result.GetResult<Prisma.$ClassSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClassSessions.
     * @param {ClassSessionCreateManyArgs} args - Arguments to create many ClassSessions.
     * @example
     * // Create many ClassSessions
     * const classSession = await prisma.classSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassSessionCreateManyArgs>(args?: SelectSubset<T, ClassSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClassSessions and returns the data saved in the database.
     * @param {ClassSessionCreateManyAndReturnArgs} args - Arguments to create many ClassSessions.
     * @example
     * // Create many ClassSessions
     * const classSession = await prisma.classSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClassSessions and only return the `id`
     * const classSessionWithIdOnly = await prisma.classSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClassSession.
     * @param {ClassSessionDeleteArgs} args - Arguments to delete one ClassSession.
     * @example
     * // Delete one ClassSession
     * const ClassSession = await prisma.classSession.delete({
     *   where: {
     *     // ... filter to delete one ClassSession
     *   }
     * })
     * 
     */
    delete<T extends ClassSessionDeleteArgs>(args: SelectSubset<T, ClassSessionDeleteArgs<ExtArgs>>): Prisma__ClassSessionClient<$Result.GetResult<Prisma.$ClassSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClassSession.
     * @param {ClassSessionUpdateArgs} args - Arguments to update one ClassSession.
     * @example
     * // Update one ClassSession
     * const classSession = await prisma.classSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassSessionUpdateArgs>(args: SelectSubset<T, ClassSessionUpdateArgs<ExtArgs>>): Prisma__ClassSessionClient<$Result.GetResult<Prisma.$ClassSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClassSessions.
     * @param {ClassSessionDeleteManyArgs} args - Arguments to filter ClassSessions to delete.
     * @example
     * // Delete a few ClassSessions
     * const { count } = await prisma.classSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassSessionDeleteManyArgs>(args?: SelectSubset<T, ClassSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClassSessions
     * const classSession = await prisma.classSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassSessionUpdateManyArgs>(args: SelectSubset<T, ClassSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassSessions and returns the data updated in the database.
     * @param {ClassSessionUpdateManyAndReturnArgs} args - Arguments to update many ClassSessions.
     * @example
     * // Update many ClassSessions
     * const classSession = await prisma.classSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClassSessions and only return the `id`
     * const classSessionWithIdOnly = await prisma.classSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClassSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClassSession.
     * @param {ClassSessionUpsertArgs} args - Arguments to update or create a ClassSession.
     * @example
     * // Update or create a ClassSession
     * const classSession = await prisma.classSession.upsert({
     *   create: {
     *     // ... data to create a ClassSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClassSession we want to update
     *   }
     * })
     */
    upsert<T extends ClassSessionUpsertArgs>(args: SelectSubset<T, ClassSessionUpsertArgs<ExtArgs>>): Prisma__ClassSessionClient<$Result.GetResult<Prisma.$ClassSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClassSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassSessionCountArgs} args - Arguments to filter ClassSessions to count.
     * @example
     * // Count the number of ClassSessions
     * const count = await prisma.classSession.count({
     *   where: {
     *     // ... the filter for the ClassSessions we want to count
     *   }
     * })
    **/
    count<T extends ClassSessionCountArgs>(
      args?: Subset<T, ClassSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClassSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassSessionAggregateArgs>(args: Subset<T, ClassSessionAggregateArgs>): Prisma.PrismaPromise<GetClassSessionAggregateType<T>>

    /**
     * Group by ClassSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassSessionGroupByArgs} args - Group by arguments.
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
      T extends ClassSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassSessionGroupByArgs['orderBy'] }
        : { orderBy?: ClassSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClassSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClassSession model
   */
  readonly fields: ClassSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClassSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    trainer<T extends ClassSession$trainerArgs<ExtArgs> = {}>(args?: Subset<T, ClassSession$trainerArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    bookings<T extends ClassSession$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, ClassSession$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ClassSession model
   */
  interface ClassSessionFieldRefs {
    readonly id: FieldRef<"ClassSession", 'String'>
    readonly tenantId: FieldRef<"ClassSession", 'String'>
    readonly trainerId: FieldRef<"ClassSession", 'String'>
    readonly name: FieldRef<"ClassSession", 'String'>
    readonly description: FieldRef<"ClassSession", 'String'>
    readonly capacity: FieldRef<"ClassSession", 'Int'>
    readonly startTime: FieldRef<"ClassSession", 'DateTime'>
    readonly endTime: FieldRef<"ClassSession", 'DateTime'>
    readonly location: FieldRef<"ClassSession", 'String'>
    readonly isRecurring: FieldRef<"ClassSession", 'Boolean'>
    readonly recurrenceRule: FieldRef<"ClassSession", 'String'>
    readonly isCancelled: FieldRef<"ClassSession", 'Boolean'>
    readonly createdAt: FieldRef<"ClassSession", 'DateTime'>
    readonly updatedAt: FieldRef<"ClassSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClassSession findUnique
   */
  export type ClassSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSession
     */
    select?: ClassSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSession
     */
    omit?: ClassSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSessionInclude<ExtArgs> | null
    /**
     * Filter, which ClassSession to fetch.
     */
    where: ClassSessionWhereUniqueInput
  }

  /**
   * ClassSession findUniqueOrThrow
   */
  export type ClassSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSession
     */
    select?: ClassSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSession
     */
    omit?: ClassSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSessionInclude<ExtArgs> | null
    /**
     * Filter, which ClassSession to fetch.
     */
    where: ClassSessionWhereUniqueInput
  }

  /**
   * ClassSession findFirst
   */
  export type ClassSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSession
     */
    select?: ClassSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSession
     */
    omit?: ClassSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSessionInclude<ExtArgs> | null
    /**
     * Filter, which ClassSession to fetch.
     */
    where?: ClassSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassSessions to fetch.
     */
    orderBy?: ClassSessionOrderByWithRelationInput | ClassSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassSessions.
     */
    cursor?: ClassSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassSessions.
     */
    distinct?: ClassSessionScalarFieldEnum | ClassSessionScalarFieldEnum[]
  }

  /**
   * ClassSession findFirstOrThrow
   */
  export type ClassSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSession
     */
    select?: ClassSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSession
     */
    omit?: ClassSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSessionInclude<ExtArgs> | null
    /**
     * Filter, which ClassSession to fetch.
     */
    where?: ClassSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassSessions to fetch.
     */
    orderBy?: ClassSessionOrderByWithRelationInput | ClassSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassSessions.
     */
    cursor?: ClassSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassSessions.
     */
    distinct?: ClassSessionScalarFieldEnum | ClassSessionScalarFieldEnum[]
  }

  /**
   * ClassSession findMany
   */
  export type ClassSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSession
     */
    select?: ClassSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSession
     */
    omit?: ClassSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSessionInclude<ExtArgs> | null
    /**
     * Filter, which ClassSessions to fetch.
     */
    where?: ClassSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassSessions to fetch.
     */
    orderBy?: ClassSessionOrderByWithRelationInput | ClassSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClassSessions.
     */
    cursor?: ClassSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassSessions.
     */
    distinct?: ClassSessionScalarFieldEnum | ClassSessionScalarFieldEnum[]
  }

  /**
   * ClassSession create
   */
  export type ClassSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSession
     */
    select?: ClassSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSession
     */
    omit?: ClassSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a ClassSession.
     */
    data: XOR<ClassSessionCreateInput, ClassSessionUncheckedCreateInput>
  }

  /**
   * ClassSession createMany
   */
  export type ClassSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClassSessions.
     */
    data: ClassSessionCreateManyInput | ClassSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClassSession createManyAndReturn
   */
  export type ClassSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSession
     */
    select?: ClassSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSession
     */
    omit?: ClassSessionOmit<ExtArgs> | null
    /**
     * The data used to create many ClassSessions.
     */
    data: ClassSessionCreateManyInput | ClassSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassSession update
   */
  export type ClassSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSession
     */
    select?: ClassSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSession
     */
    omit?: ClassSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a ClassSession.
     */
    data: XOR<ClassSessionUpdateInput, ClassSessionUncheckedUpdateInput>
    /**
     * Choose, which ClassSession to update.
     */
    where: ClassSessionWhereUniqueInput
  }

  /**
   * ClassSession updateMany
   */
  export type ClassSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClassSessions.
     */
    data: XOR<ClassSessionUpdateManyMutationInput, ClassSessionUncheckedUpdateManyInput>
    /**
     * Filter which ClassSessions to update
     */
    where?: ClassSessionWhereInput
    /**
     * Limit how many ClassSessions to update.
     */
    limit?: number
  }

  /**
   * ClassSession updateManyAndReturn
   */
  export type ClassSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSession
     */
    select?: ClassSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSession
     */
    omit?: ClassSessionOmit<ExtArgs> | null
    /**
     * The data used to update ClassSessions.
     */
    data: XOR<ClassSessionUpdateManyMutationInput, ClassSessionUncheckedUpdateManyInput>
    /**
     * Filter which ClassSessions to update
     */
    where?: ClassSessionWhereInput
    /**
     * Limit how many ClassSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassSession upsert
   */
  export type ClassSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSession
     */
    select?: ClassSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSession
     */
    omit?: ClassSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the ClassSession to update in case it exists.
     */
    where: ClassSessionWhereUniqueInput
    /**
     * In case the ClassSession found by the `where` argument doesn't exist, create a new ClassSession with this data.
     */
    create: XOR<ClassSessionCreateInput, ClassSessionUncheckedCreateInput>
    /**
     * In case the ClassSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassSessionUpdateInput, ClassSessionUncheckedUpdateInput>
  }

  /**
   * ClassSession delete
   */
  export type ClassSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSession
     */
    select?: ClassSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSession
     */
    omit?: ClassSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSessionInclude<ExtArgs> | null
    /**
     * Filter which ClassSession to delete.
     */
    where: ClassSessionWhereUniqueInput
  }

  /**
   * ClassSession deleteMany
   */
  export type ClassSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassSessions to delete
     */
    where?: ClassSessionWhereInput
    /**
     * Limit how many ClassSessions to delete.
     */
    limit?: number
  }

  /**
   * ClassSession.trainer
   */
  export type ClassSession$trainerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    where?: StaffWhereInput
  }

  /**
   * ClassSession.bookings
   */
  export type ClassSession$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * ClassSession without action
   */
  export type ClassSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSession
     */
    select?: ClassSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSession
     */
    omit?: ClassSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSessionInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    memberId: string | null
    classSessionId: string | null
    status: $Enums.BookingStatus | null
    bookedAt: Date | null
    cancelledAt: Date | null
    attendedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    memberId: string | null
    classSessionId: string | null
    status: $Enums.BookingStatus | null
    bookedAt: Date | null
    cancelledAt: Date | null
    attendedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    memberId: number
    classSessionId: number
    status: number
    bookedAt: number
    cancelledAt: number
    attendedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingMinAggregateInputType = {
    id?: true
    memberId?: true
    classSessionId?: true
    status?: true
    bookedAt?: true
    cancelledAt?: true
    attendedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    memberId?: true
    classSessionId?: true
    status?: true
    bookedAt?: true
    cancelledAt?: true
    attendedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    memberId?: true
    classSessionId?: true
    status?: true
    bookedAt?: true
    cancelledAt?: true
    attendedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    memberId: string
    classSessionId: string
    status: $Enums.BookingStatus
    bookedAt: Date
    cancelledAt: Date | null
    attendedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: BookingCountAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    classSessionId?: boolean
    status?: boolean
    bookedAt?: boolean
    cancelledAt?: boolean
    attendedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    classSession?: boolean | ClassSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    classSessionId?: boolean
    status?: boolean
    bookedAt?: boolean
    cancelledAt?: boolean
    attendedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    classSession?: boolean | ClassSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    classSessionId?: boolean
    status?: boolean
    bookedAt?: boolean
    cancelledAt?: boolean
    attendedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    classSession?: boolean | ClassSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    memberId?: boolean
    classSessionId?: boolean
    status?: boolean
    bookedAt?: boolean
    cancelledAt?: boolean
    attendedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "memberId" | "classSessionId" | "status" | "bookedAt" | "cancelledAt" | "attendedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    classSession?: boolean | ClassSessionDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    classSession?: boolean | ClassSessionDefaultArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    classSession?: boolean | ClassSessionDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      member: Prisma.$MemberPayload<ExtArgs>
      classSession: Prisma.$ClassSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      memberId: string
      classSessionId: string
      status: $Enums.BookingStatus
      bookedAt: Date
      cancelledAt: Date | null
      attendedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    classSession<T extends ClassSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassSessionDefaultArgs<ExtArgs>>): Prisma__ClassSessionClient<$Result.GetResult<Prisma.$ClassSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly memberId: FieldRef<"Booking", 'String'>
    readonly classSessionId: FieldRef<"Booking", 'String'>
    readonly status: FieldRef<"Booking", 'BookingStatus'>
    readonly bookedAt: FieldRef<"Booking", 'DateTime'>
    readonly cancelledAt: FieldRef<"Booking", 'DateTime'>
    readonly attendedAt: FieldRef<"Booking", 'DateTime'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model CheckIn
   */

  export type AggregateCheckIn = {
    _count: CheckInCountAggregateOutputType | null
    _min: CheckInMinAggregateOutputType | null
    _max: CheckInMaxAggregateOutputType | null
  }

  export type CheckInMinAggregateOutputType = {
    id: string | null
    memberId: string | null
    tenantId: string | null
    method: $Enums.CheckInMethod | null
    checkedInAt: Date | null
    note: string | null
  }

  export type CheckInMaxAggregateOutputType = {
    id: string | null
    memberId: string | null
    tenantId: string | null
    method: $Enums.CheckInMethod | null
    checkedInAt: Date | null
    note: string | null
  }

  export type CheckInCountAggregateOutputType = {
    id: number
    memberId: number
    tenantId: number
    method: number
    checkedInAt: number
    note: number
    _all: number
  }


  export type CheckInMinAggregateInputType = {
    id?: true
    memberId?: true
    tenantId?: true
    method?: true
    checkedInAt?: true
    note?: true
  }

  export type CheckInMaxAggregateInputType = {
    id?: true
    memberId?: true
    tenantId?: true
    method?: true
    checkedInAt?: true
    note?: true
  }

  export type CheckInCountAggregateInputType = {
    id?: true
    memberId?: true
    tenantId?: true
    method?: true
    checkedInAt?: true
    note?: true
    _all?: true
  }

  export type CheckInAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CheckIn to aggregate.
     */
    where?: CheckInWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckIns to fetch.
     */
    orderBy?: CheckInOrderByWithRelationInput | CheckInOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CheckInWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckIns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckIns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CheckIns
    **/
    _count?: true | CheckInCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CheckInMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CheckInMaxAggregateInputType
  }

  export type GetCheckInAggregateType<T extends CheckInAggregateArgs> = {
        [P in keyof T & keyof AggregateCheckIn]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCheckIn[P]>
      : GetScalarType<T[P], AggregateCheckIn[P]>
  }




  export type CheckInGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckInWhereInput
    orderBy?: CheckInOrderByWithAggregationInput | CheckInOrderByWithAggregationInput[]
    by: CheckInScalarFieldEnum[] | CheckInScalarFieldEnum
    having?: CheckInScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CheckInCountAggregateInputType | true
    _min?: CheckInMinAggregateInputType
    _max?: CheckInMaxAggregateInputType
  }

  export type CheckInGroupByOutputType = {
    id: string
    memberId: string
    tenantId: string
    method: $Enums.CheckInMethod
    checkedInAt: Date
    note: string | null
    _count: CheckInCountAggregateOutputType | null
    _min: CheckInMinAggregateOutputType | null
    _max: CheckInMaxAggregateOutputType | null
  }

  type GetCheckInGroupByPayload<T extends CheckInGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CheckInGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CheckInGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CheckInGroupByOutputType[P]>
            : GetScalarType<T[P], CheckInGroupByOutputType[P]>
        }
      >
    >


  export type CheckInSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    tenantId?: boolean
    method?: boolean
    checkedInAt?: boolean
    note?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkIn"]>

  export type CheckInSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    tenantId?: boolean
    method?: boolean
    checkedInAt?: boolean
    note?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkIn"]>

  export type CheckInSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    tenantId?: boolean
    method?: boolean
    checkedInAt?: boolean
    note?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkIn"]>

  export type CheckInSelectScalar = {
    id?: boolean
    memberId?: boolean
    tenantId?: boolean
    method?: boolean
    checkedInAt?: boolean
    note?: boolean
  }

  export type CheckInOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "memberId" | "tenantId" | "method" | "checkedInAt" | "note", ExtArgs["result"]["checkIn"]>
  export type CheckInInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type CheckInIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type CheckInIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $CheckInPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CheckIn"
    objects: {
      member: Prisma.$MemberPayload<ExtArgs>
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      memberId: string
      tenantId: string
      method: $Enums.CheckInMethod
      checkedInAt: Date
      note: string | null
    }, ExtArgs["result"]["checkIn"]>
    composites: {}
  }

  type CheckInGetPayload<S extends boolean | null | undefined | CheckInDefaultArgs> = $Result.GetResult<Prisma.$CheckInPayload, S>

  type CheckInCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CheckInFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CheckInCountAggregateInputType | true
    }

  export interface CheckInDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CheckIn'], meta: { name: 'CheckIn' } }
    /**
     * Find zero or one CheckIn that matches the filter.
     * @param {CheckInFindUniqueArgs} args - Arguments to find a CheckIn
     * @example
     * // Get one CheckIn
     * const checkIn = await prisma.checkIn.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CheckInFindUniqueArgs>(args: SelectSubset<T, CheckInFindUniqueArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CheckIn that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CheckInFindUniqueOrThrowArgs} args - Arguments to find a CheckIn
     * @example
     * // Get one CheckIn
     * const checkIn = await prisma.checkIn.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CheckInFindUniqueOrThrowArgs>(args: SelectSubset<T, CheckInFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CheckIn that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInFindFirstArgs} args - Arguments to find a CheckIn
     * @example
     * // Get one CheckIn
     * const checkIn = await prisma.checkIn.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CheckInFindFirstArgs>(args?: SelectSubset<T, CheckInFindFirstArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CheckIn that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInFindFirstOrThrowArgs} args - Arguments to find a CheckIn
     * @example
     * // Get one CheckIn
     * const checkIn = await prisma.checkIn.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CheckInFindFirstOrThrowArgs>(args?: SelectSubset<T, CheckInFindFirstOrThrowArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CheckIns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CheckIns
     * const checkIns = await prisma.checkIn.findMany()
     * 
     * // Get first 10 CheckIns
     * const checkIns = await prisma.checkIn.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checkInWithIdOnly = await prisma.checkIn.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CheckInFindManyArgs>(args?: SelectSubset<T, CheckInFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CheckIn.
     * @param {CheckInCreateArgs} args - Arguments to create a CheckIn.
     * @example
     * // Create one CheckIn
     * const CheckIn = await prisma.checkIn.create({
     *   data: {
     *     // ... data to create a CheckIn
     *   }
     * })
     * 
     */
    create<T extends CheckInCreateArgs>(args: SelectSubset<T, CheckInCreateArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CheckIns.
     * @param {CheckInCreateManyArgs} args - Arguments to create many CheckIns.
     * @example
     * // Create many CheckIns
     * const checkIn = await prisma.checkIn.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CheckInCreateManyArgs>(args?: SelectSubset<T, CheckInCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CheckIns and returns the data saved in the database.
     * @param {CheckInCreateManyAndReturnArgs} args - Arguments to create many CheckIns.
     * @example
     * // Create many CheckIns
     * const checkIn = await prisma.checkIn.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CheckIns and only return the `id`
     * const checkInWithIdOnly = await prisma.checkIn.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CheckInCreateManyAndReturnArgs>(args?: SelectSubset<T, CheckInCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CheckIn.
     * @param {CheckInDeleteArgs} args - Arguments to delete one CheckIn.
     * @example
     * // Delete one CheckIn
     * const CheckIn = await prisma.checkIn.delete({
     *   where: {
     *     // ... filter to delete one CheckIn
     *   }
     * })
     * 
     */
    delete<T extends CheckInDeleteArgs>(args: SelectSubset<T, CheckInDeleteArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CheckIn.
     * @param {CheckInUpdateArgs} args - Arguments to update one CheckIn.
     * @example
     * // Update one CheckIn
     * const checkIn = await prisma.checkIn.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CheckInUpdateArgs>(args: SelectSubset<T, CheckInUpdateArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CheckIns.
     * @param {CheckInDeleteManyArgs} args - Arguments to filter CheckIns to delete.
     * @example
     * // Delete a few CheckIns
     * const { count } = await prisma.checkIn.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CheckInDeleteManyArgs>(args?: SelectSubset<T, CheckInDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CheckIns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CheckIns
     * const checkIn = await prisma.checkIn.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CheckInUpdateManyArgs>(args: SelectSubset<T, CheckInUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CheckIns and returns the data updated in the database.
     * @param {CheckInUpdateManyAndReturnArgs} args - Arguments to update many CheckIns.
     * @example
     * // Update many CheckIns
     * const checkIn = await prisma.checkIn.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CheckIns and only return the `id`
     * const checkInWithIdOnly = await prisma.checkIn.updateManyAndReturn({
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
    updateManyAndReturn<T extends CheckInUpdateManyAndReturnArgs>(args: SelectSubset<T, CheckInUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CheckIn.
     * @param {CheckInUpsertArgs} args - Arguments to update or create a CheckIn.
     * @example
     * // Update or create a CheckIn
     * const checkIn = await prisma.checkIn.upsert({
     *   create: {
     *     // ... data to create a CheckIn
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CheckIn we want to update
     *   }
     * })
     */
    upsert<T extends CheckInUpsertArgs>(args: SelectSubset<T, CheckInUpsertArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CheckIns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInCountArgs} args - Arguments to filter CheckIns to count.
     * @example
     * // Count the number of CheckIns
     * const count = await prisma.checkIn.count({
     *   where: {
     *     // ... the filter for the CheckIns we want to count
     *   }
     * })
    **/
    count<T extends CheckInCountArgs>(
      args?: Subset<T, CheckInCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CheckInCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CheckIn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CheckInAggregateArgs>(args: Subset<T, CheckInAggregateArgs>): Prisma.PrismaPromise<GetCheckInAggregateType<T>>

    /**
     * Group by CheckIn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInGroupByArgs} args - Group by arguments.
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
      T extends CheckInGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CheckInGroupByArgs['orderBy'] }
        : { orderBy?: CheckInGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CheckInGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckInGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CheckIn model
   */
  readonly fields: CheckInFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CheckIn.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CheckInClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CheckIn model
   */
  interface CheckInFieldRefs {
    readonly id: FieldRef<"CheckIn", 'String'>
    readonly memberId: FieldRef<"CheckIn", 'String'>
    readonly tenantId: FieldRef<"CheckIn", 'String'>
    readonly method: FieldRef<"CheckIn", 'CheckInMethod'>
    readonly checkedInAt: FieldRef<"CheckIn", 'DateTime'>
    readonly note: FieldRef<"CheckIn", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CheckIn findUnique
   */
  export type CheckInFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * Filter, which CheckIn to fetch.
     */
    where: CheckInWhereUniqueInput
  }

  /**
   * CheckIn findUniqueOrThrow
   */
  export type CheckInFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * Filter, which CheckIn to fetch.
     */
    where: CheckInWhereUniqueInput
  }

  /**
   * CheckIn findFirst
   */
  export type CheckInFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * Filter, which CheckIn to fetch.
     */
    where?: CheckInWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckIns to fetch.
     */
    orderBy?: CheckInOrderByWithRelationInput | CheckInOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CheckIns.
     */
    cursor?: CheckInWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckIns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckIns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CheckIns.
     */
    distinct?: CheckInScalarFieldEnum | CheckInScalarFieldEnum[]
  }

  /**
   * CheckIn findFirstOrThrow
   */
  export type CheckInFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * Filter, which CheckIn to fetch.
     */
    where?: CheckInWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckIns to fetch.
     */
    orderBy?: CheckInOrderByWithRelationInput | CheckInOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CheckIns.
     */
    cursor?: CheckInWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckIns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckIns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CheckIns.
     */
    distinct?: CheckInScalarFieldEnum | CheckInScalarFieldEnum[]
  }

  /**
   * CheckIn findMany
   */
  export type CheckInFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * Filter, which CheckIns to fetch.
     */
    where?: CheckInWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckIns to fetch.
     */
    orderBy?: CheckInOrderByWithRelationInput | CheckInOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CheckIns.
     */
    cursor?: CheckInWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckIns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckIns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CheckIns.
     */
    distinct?: CheckInScalarFieldEnum | CheckInScalarFieldEnum[]
  }

  /**
   * CheckIn create
   */
  export type CheckInCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * The data needed to create a CheckIn.
     */
    data: XOR<CheckInCreateInput, CheckInUncheckedCreateInput>
  }

  /**
   * CheckIn createMany
   */
  export type CheckInCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CheckIns.
     */
    data: CheckInCreateManyInput | CheckInCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CheckIn createManyAndReturn
   */
  export type CheckInCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null
    /**
     * The data used to create many CheckIns.
     */
    data: CheckInCreateManyInput | CheckInCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CheckIn update
   */
  export type CheckInUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * The data needed to update a CheckIn.
     */
    data: XOR<CheckInUpdateInput, CheckInUncheckedUpdateInput>
    /**
     * Choose, which CheckIn to update.
     */
    where: CheckInWhereUniqueInput
  }

  /**
   * CheckIn updateMany
   */
  export type CheckInUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CheckIns.
     */
    data: XOR<CheckInUpdateManyMutationInput, CheckInUncheckedUpdateManyInput>
    /**
     * Filter which CheckIns to update
     */
    where?: CheckInWhereInput
    /**
     * Limit how many CheckIns to update.
     */
    limit?: number
  }

  /**
   * CheckIn updateManyAndReturn
   */
  export type CheckInUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null
    /**
     * The data used to update CheckIns.
     */
    data: XOR<CheckInUpdateManyMutationInput, CheckInUncheckedUpdateManyInput>
    /**
     * Filter which CheckIns to update
     */
    where?: CheckInWhereInput
    /**
     * Limit how many CheckIns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CheckIn upsert
   */
  export type CheckInUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * The filter to search for the CheckIn to update in case it exists.
     */
    where: CheckInWhereUniqueInput
    /**
     * In case the CheckIn found by the `where` argument doesn't exist, create a new CheckIn with this data.
     */
    create: XOR<CheckInCreateInput, CheckInUncheckedCreateInput>
    /**
     * In case the CheckIn was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CheckInUpdateInput, CheckInUncheckedUpdateInput>
  }

  /**
   * CheckIn delete
   */
  export type CheckInDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * Filter which CheckIn to delete.
     */
    where: CheckInWhereUniqueInput
  }

  /**
   * CheckIn deleteMany
   */
  export type CheckInDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CheckIns to delete
     */
    where?: CheckInWhereInput
    /**
     * Limit how many CheckIns to delete.
     */
    limit?: number
  }

  /**
   * CheckIn without action
   */
  export type CheckInDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    memberId: string | null
    tenantId: string | null
    amount: Decimal | null
    currency: string | null
    status: $Enums.PaymentStatus | null
    gatewayRef: string | null
    description: string | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    memberId: string | null
    tenantId: string | null
    amount: Decimal | null
    currency: string | null
    status: $Enums.PaymentStatus | null
    gatewayRef: string | null
    description: string | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    memberId: number
    tenantId: number
    amount: number
    currency: number
    status: number
    gatewayRef: number
    gatewayData: number
    description: number
    paidAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    memberId?: true
    tenantId?: true
    amount?: true
    currency?: true
    status?: true
    gatewayRef?: true
    description?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    memberId?: true
    tenantId?: true
    amount?: true
    currency?: true
    status?: true
    gatewayRef?: true
    description?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    memberId?: true
    tenantId?: true
    amount?: true
    currency?: true
    status?: true
    gatewayRef?: true
    gatewayData?: true
    description?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    memberId: string
    tenantId: string
    amount: Decimal
    currency: string
    status: $Enums.PaymentStatus
    gatewayRef: string | null
    gatewayData: JsonValue | null
    description: string | null
    paidAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    tenantId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    gatewayRef?: boolean
    gatewayData?: boolean
    description?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    tenantId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    gatewayRef?: boolean
    gatewayData?: boolean
    description?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    tenantId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    gatewayRef?: boolean
    gatewayData?: boolean
    description?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    memberId?: boolean
    tenantId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    gatewayRef?: boolean
    gatewayData?: boolean
    description?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "memberId" | "tenantId" | "amount" | "currency" | "status" | "gatewayRef" | "gatewayData" | "description" | "paidAt" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      member: Prisma.$MemberPayload<ExtArgs>
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      memberId: string
      tenantId: string
      amount: Prisma.Decimal
      currency: string
      status: $Enums.PaymentStatus
      gatewayRef: string | null
      gatewayData: Prisma.JsonValue | null
      description: string | null
      paidAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly memberId: FieldRef<"Payment", 'String'>
    readonly tenantId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Decimal'>
    readonly currency: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly gatewayRef: FieldRef<"Payment", 'String'>
    readonly gatewayData: FieldRef<"Payment", 'Json'>
    readonly description: FieldRef<"Payment", 'String'>
    readonly paidAt: FieldRef<"Payment", 'DateTime'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TenantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    planTier: 'planTier',
    logoUrl: 'logoUrl',
    address: 'address',
    phone: 'phone',
    email: 'email',
    currency: 'currency',
    timezone: 'timezone',
    settings: 'settings',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


  export const StaffScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    phone: 'phone',
    avatarUrl: 'avatarUrl',
    isActive: 'isActive',
    lastLoginAt: 'lastLoginAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StaffScalarFieldEnum = (typeof StaffScalarFieldEnum)[keyof typeof StaffScalarFieldEnum]


  export const MembershipPlanScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    name: 'name',
    description: 'description',
    price: 'price',
    billingCycle: 'billingCycle',
    maxClassesPerWeek: 'maxClassesPerWeek',
    accessHoursStart: 'accessHoursStart',
    accessHoursEnd: 'accessHoursEnd',
    features: 'features',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MembershipPlanScalarFieldEnum = (typeof MembershipPlanScalarFieldEnum)[keyof typeof MembershipPlanScalarFieldEnum]


  export const MemberScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    membershipPlanId: 'membershipPlanId',
    name: 'name',
    email: 'email',
    phone: 'phone',
    photoUrl: 'photoUrl',
    qrCode: 'qrCode',
    pin: 'pin',
    status: 'status',
    joinedAt: 'joinedAt',
    expiresAt: 'expiresAt',
    frozenAt: 'frozenAt',
    frozenDays: 'frozenDays',
    emergencyContact: 'emergencyContact',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const ClassSessionScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    trainerId: 'trainerId',
    name: 'name',
    description: 'description',
    capacity: 'capacity',
    startTime: 'startTime',
    endTime: 'endTime',
    location: 'location',
    isRecurring: 'isRecurring',
    recurrenceRule: 'recurrenceRule',
    isCancelled: 'isCancelled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClassSessionScalarFieldEnum = (typeof ClassSessionScalarFieldEnum)[keyof typeof ClassSessionScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    memberId: 'memberId',
    classSessionId: 'classSessionId',
    status: 'status',
    bookedAt: 'bookedAt',
    cancelledAt: 'cancelledAt',
    attendedAt: 'attendedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const CheckInScalarFieldEnum: {
    id: 'id',
    memberId: 'memberId',
    tenantId: 'tenantId',
    method: 'method',
    checkedInAt: 'checkedInAt',
    note: 'note'
  };

  export type CheckInScalarFieldEnum = (typeof CheckInScalarFieldEnum)[keyof typeof CheckInScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    memberId: 'memberId',
    tenantId: 'tenantId',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    gatewayRef: 'gatewayRef',
    gatewayData: 'gatewayData',
    description: 'description',
    paidAt: 'paidAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'PlanTier'
   */
  export type EnumPlanTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanTier'>
    


  /**
   * Reference to a field of type 'PlanTier[]'
   */
  export type ListEnumPlanTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanTier[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'StaffRole'
   */
  export type EnumStaffRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StaffRole'>
    


  /**
   * Reference to a field of type 'StaffRole[]'
   */
  export type ListEnumStaffRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StaffRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'BillingCycle'
   */
  export type EnumBillingCycleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BillingCycle'>
    


  /**
   * Reference to a field of type 'BillingCycle[]'
   */
  export type ListEnumBillingCycleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BillingCycle[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'MemberStatus'
   */
  export type EnumMemberStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MemberStatus'>
    


  /**
   * Reference to a field of type 'MemberStatus[]'
   */
  export type ListEnumMemberStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MemberStatus[]'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    


  /**
   * Reference to a field of type 'CheckInMethod'
   */
  export type EnumCheckInMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CheckInMethod'>
    


  /**
   * Reference to a field of type 'CheckInMethod[]'
   */
  export type ListEnumCheckInMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CheckInMethod[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type TenantWhereInput = {
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    id?: StringFilter<"Tenant"> | string
    name?: StringFilter<"Tenant"> | string
    slug?: StringFilter<"Tenant"> | string
    planTier?: EnumPlanTierFilter<"Tenant"> | $Enums.PlanTier
    logoUrl?: StringNullableFilter<"Tenant"> | string | null
    address?: StringNullableFilter<"Tenant"> | string | null
    phone?: StringNullableFilter<"Tenant"> | string | null
    email?: StringNullableFilter<"Tenant"> | string | null
    currency?: StringFilter<"Tenant"> | string
    timezone?: StringFilter<"Tenant"> | string
    settings?: JsonFilter<"Tenant">
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    staff?: StaffListRelationFilter
    members?: MemberListRelationFilter
    membershipPlans?: MembershipPlanListRelationFilter
    classSessions?: ClassSessionListRelationFilter
    checkIns?: CheckInListRelationFilter
    payments?: PaymentListRelationFilter
  }

  export type TenantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    planTier?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    currency?: SortOrder
    timezone?: SortOrder
    settings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    staff?: StaffOrderByRelationAggregateInput
    members?: MemberOrderByRelationAggregateInput
    membershipPlans?: MembershipPlanOrderByRelationAggregateInput
    classSessions?: ClassSessionOrderByRelationAggregateInput
    checkIns?: CheckInOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type TenantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    name?: StringFilter<"Tenant"> | string
    planTier?: EnumPlanTierFilter<"Tenant"> | $Enums.PlanTier
    logoUrl?: StringNullableFilter<"Tenant"> | string | null
    address?: StringNullableFilter<"Tenant"> | string | null
    phone?: StringNullableFilter<"Tenant"> | string | null
    email?: StringNullableFilter<"Tenant"> | string | null
    currency?: StringFilter<"Tenant"> | string
    timezone?: StringFilter<"Tenant"> | string
    settings?: JsonFilter<"Tenant">
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    staff?: StaffListRelationFilter
    members?: MemberListRelationFilter
    membershipPlans?: MembershipPlanListRelationFilter
    classSessions?: ClassSessionListRelationFilter
    checkIns?: CheckInListRelationFilter
    payments?: PaymentListRelationFilter
  }, "id" | "slug">

  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    planTier?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    currency?: SortOrder
    timezone?: SortOrder
    settings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TenantCountOrderByAggregateInput
    _max?: TenantMaxOrderByAggregateInput
    _min?: TenantMinOrderByAggregateInput
  }

  export type TenantScalarWhereWithAggregatesInput = {
    AND?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    OR?: TenantScalarWhereWithAggregatesInput[]
    NOT?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tenant"> | string
    name?: StringWithAggregatesFilter<"Tenant"> | string
    slug?: StringWithAggregatesFilter<"Tenant"> | string
    planTier?: EnumPlanTierWithAggregatesFilter<"Tenant"> | $Enums.PlanTier
    logoUrl?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    address?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    email?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    currency?: StringWithAggregatesFilter<"Tenant"> | string
    timezone?: StringWithAggregatesFilter<"Tenant"> | string
    settings?: JsonWithAggregatesFilter<"Tenant">
    createdAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
  }

  export type StaffWhereInput = {
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    id?: StringFilter<"Staff"> | string
    tenantId?: StringFilter<"Staff"> | string
    name?: StringFilter<"Staff"> | string
    email?: StringFilter<"Staff"> | string
    passwordHash?: StringFilter<"Staff"> | string
    role?: EnumStaffRoleFilter<"Staff"> | $Enums.StaffRole
    phone?: StringNullableFilter<"Staff"> | string | null
    avatarUrl?: StringNullableFilter<"Staff"> | string | null
    isActive?: BoolFilter<"Staff"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"Staff"> | Date | string | null
    createdAt?: DateTimeFilter<"Staff"> | Date | string
    updatedAt?: DateTimeFilter<"Staff"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    classSessions?: ClassSessionListRelationFilter
  }

  export type StaffOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    phone?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    classSessions?: ClassSessionOrderByRelationAggregateInput
  }

  export type StaffWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenantId_email?: StaffTenantIdEmailCompoundUniqueInput
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    tenantId?: StringFilter<"Staff"> | string
    name?: StringFilter<"Staff"> | string
    email?: StringFilter<"Staff"> | string
    passwordHash?: StringFilter<"Staff"> | string
    role?: EnumStaffRoleFilter<"Staff"> | $Enums.StaffRole
    phone?: StringNullableFilter<"Staff"> | string | null
    avatarUrl?: StringNullableFilter<"Staff"> | string | null
    isActive?: BoolFilter<"Staff"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"Staff"> | Date | string | null
    createdAt?: DateTimeFilter<"Staff"> | Date | string
    updatedAt?: DateTimeFilter<"Staff"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    classSessions?: ClassSessionListRelationFilter
  }, "id" | "tenantId_email">

  export type StaffOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    phone?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StaffCountOrderByAggregateInput
    _max?: StaffMaxOrderByAggregateInput
    _min?: StaffMinOrderByAggregateInput
  }

  export type StaffScalarWhereWithAggregatesInput = {
    AND?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    OR?: StaffScalarWhereWithAggregatesInput[]
    NOT?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Staff"> | string
    tenantId?: StringWithAggregatesFilter<"Staff"> | string
    name?: StringWithAggregatesFilter<"Staff"> | string
    email?: StringWithAggregatesFilter<"Staff"> | string
    passwordHash?: StringWithAggregatesFilter<"Staff"> | string
    role?: EnumStaffRoleWithAggregatesFilter<"Staff"> | $Enums.StaffRole
    phone?: StringNullableWithAggregatesFilter<"Staff"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"Staff"> | string | null
    isActive?: BoolWithAggregatesFilter<"Staff"> | boolean
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"Staff"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Staff"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Staff"> | Date | string
  }

  export type MembershipPlanWhereInput = {
    AND?: MembershipPlanWhereInput | MembershipPlanWhereInput[]
    OR?: MembershipPlanWhereInput[]
    NOT?: MembershipPlanWhereInput | MembershipPlanWhereInput[]
    id?: StringFilter<"MembershipPlan"> | string
    tenantId?: StringFilter<"MembershipPlan"> | string
    name?: StringFilter<"MembershipPlan"> | string
    description?: StringNullableFilter<"MembershipPlan"> | string | null
    price?: DecimalFilter<"MembershipPlan"> | Decimal | DecimalJsLike | number | string
    billingCycle?: EnumBillingCycleFilter<"MembershipPlan"> | $Enums.BillingCycle
    maxClassesPerWeek?: IntNullableFilter<"MembershipPlan"> | number | null
    accessHoursStart?: IntFilter<"MembershipPlan"> | number
    accessHoursEnd?: IntFilter<"MembershipPlan"> | number
    features?: StringNullableListFilter<"MembershipPlan">
    isActive?: BoolFilter<"MembershipPlan"> | boolean
    createdAt?: DateTimeFilter<"MembershipPlan"> | Date | string
    updatedAt?: DateTimeFilter<"MembershipPlan"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    members?: MemberListRelationFilter
  }

  export type MembershipPlanOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    billingCycle?: SortOrder
    maxClassesPerWeek?: SortOrderInput | SortOrder
    accessHoursStart?: SortOrder
    accessHoursEnd?: SortOrder
    features?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    members?: MemberOrderByRelationAggregateInput
  }

  export type MembershipPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MembershipPlanWhereInput | MembershipPlanWhereInput[]
    OR?: MembershipPlanWhereInput[]
    NOT?: MembershipPlanWhereInput | MembershipPlanWhereInput[]
    tenantId?: StringFilter<"MembershipPlan"> | string
    name?: StringFilter<"MembershipPlan"> | string
    description?: StringNullableFilter<"MembershipPlan"> | string | null
    price?: DecimalFilter<"MembershipPlan"> | Decimal | DecimalJsLike | number | string
    billingCycle?: EnumBillingCycleFilter<"MembershipPlan"> | $Enums.BillingCycle
    maxClassesPerWeek?: IntNullableFilter<"MembershipPlan"> | number | null
    accessHoursStart?: IntFilter<"MembershipPlan"> | number
    accessHoursEnd?: IntFilter<"MembershipPlan"> | number
    features?: StringNullableListFilter<"MembershipPlan">
    isActive?: BoolFilter<"MembershipPlan"> | boolean
    createdAt?: DateTimeFilter<"MembershipPlan"> | Date | string
    updatedAt?: DateTimeFilter<"MembershipPlan"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    members?: MemberListRelationFilter
  }, "id">

  export type MembershipPlanOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    billingCycle?: SortOrder
    maxClassesPerWeek?: SortOrderInput | SortOrder
    accessHoursStart?: SortOrder
    accessHoursEnd?: SortOrder
    features?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MembershipPlanCountOrderByAggregateInput
    _avg?: MembershipPlanAvgOrderByAggregateInput
    _max?: MembershipPlanMaxOrderByAggregateInput
    _min?: MembershipPlanMinOrderByAggregateInput
    _sum?: MembershipPlanSumOrderByAggregateInput
  }

  export type MembershipPlanScalarWhereWithAggregatesInput = {
    AND?: MembershipPlanScalarWhereWithAggregatesInput | MembershipPlanScalarWhereWithAggregatesInput[]
    OR?: MembershipPlanScalarWhereWithAggregatesInput[]
    NOT?: MembershipPlanScalarWhereWithAggregatesInput | MembershipPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MembershipPlan"> | string
    tenantId?: StringWithAggregatesFilter<"MembershipPlan"> | string
    name?: StringWithAggregatesFilter<"MembershipPlan"> | string
    description?: StringNullableWithAggregatesFilter<"MembershipPlan"> | string | null
    price?: DecimalWithAggregatesFilter<"MembershipPlan"> | Decimal | DecimalJsLike | number | string
    billingCycle?: EnumBillingCycleWithAggregatesFilter<"MembershipPlan"> | $Enums.BillingCycle
    maxClassesPerWeek?: IntNullableWithAggregatesFilter<"MembershipPlan"> | number | null
    accessHoursStart?: IntWithAggregatesFilter<"MembershipPlan"> | number
    accessHoursEnd?: IntWithAggregatesFilter<"MembershipPlan"> | number
    features?: StringNullableListFilter<"MembershipPlan">
    isActive?: BoolWithAggregatesFilter<"MembershipPlan"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"MembershipPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MembershipPlan"> | Date | string
  }

  export type MemberWhereInput = {
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    id?: StringFilter<"Member"> | string
    tenantId?: StringFilter<"Member"> | string
    membershipPlanId?: StringNullableFilter<"Member"> | string | null
    name?: StringFilter<"Member"> | string
    email?: StringFilter<"Member"> | string
    phone?: StringNullableFilter<"Member"> | string | null
    photoUrl?: StringNullableFilter<"Member"> | string | null
    qrCode?: StringNullableFilter<"Member"> | string | null
    pin?: StringNullableFilter<"Member"> | string | null
    status?: EnumMemberStatusFilter<"Member"> | $Enums.MemberStatus
    joinedAt?: DateTimeFilter<"Member"> | Date | string
    expiresAt?: DateTimeNullableFilter<"Member"> | Date | string | null
    frozenAt?: DateTimeNullableFilter<"Member"> | Date | string | null
    frozenDays?: IntFilter<"Member"> | number
    emergencyContact?: StringNullableFilter<"Member"> | string | null
    notes?: StringNullableFilter<"Member"> | string | null
    createdAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeFilter<"Member"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    plan?: XOR<MembershipPlanNullableScalarRelationFilter, MembershipPlanWhereInput> | null
    bookings?: BookingListRelationFilter
    checkIns?: CheckInListRelationFilter
    payments?: PaymentListRelationFilter
  }

  export type MemberOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    membershipPlanId?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    qrCode?: SortOrderInput | SortOrder
    pin?: SortOrderInput | SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    frozenAt?: SortOrderInput | SortOrder
    frozenDays?: SortOrder
    emergencyContact?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    plan?: MembershipPlanOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
    checkIns?: CheckInOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type MemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    qrCode?: string
    tenantId_email?: MemberTenantIdEmailCompoundUniqueInput
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    tenantId?: StringFilter<"Member"> | string
    membershipPlanId?: StringNullableFilter<"Member"> | string | null
    name?: StringFilter<"Member"> | string
    email?: StringFilter<"Member"> | string
    phone?: StringNullableFilter<"Member"> | string | null
    photoUrl?: StringNullableFilter<"Member"> | string | null
    pin?: StringNullableFilter<"Member"> | string | null
    status?: EnumMemberStatusFilter<"Member"> | $Enums.MemberStatus
    joinedAt?: DateTimeFilter<"Member"> | Date | string
    expiresAt?: DateTimeNullableFilter<"Member"> | Date | string | null
    frozenAt?: DateTimeNullableFilter<"Member"> | Date | string | null
    frozenDays?: IntFilter<"Member"> | number
    emergencyContact?: StringNullableFilter<"Member"> | string | null
    notes?: StringNullableFilter<"Member"> | string | null
    createdAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeFilter<"Member"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    plan?: XOR<MembershipPlanNullableScalarRelationFilter, MembershipPlanWhereInput> | null
    bookings?: BookingListRelationFilter
    checkIns?: CheckInListRelationFilter
    payments?: PaymentListRelationFilter
  }, "id" | "qrCode" | "tenantId_email">

  export type MemberOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    membershipPlanId?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    qrCode?: SortOrderInput | SortOrder
    pin?: SortOrderInput | SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    frozenAt?: SortOrderInput | SortOrder
    frozenDays?: SortOrder
    emergencyContact?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MemberCountOrderByAggregateInput
    _avg?: MemberAvgOrderByAggregateInput
    _max?: MemberMaxOrderByAggregateInput
    _min?: MemberMinOrderByAggregateInput
    _sum?: MemberSumOrderByAggregateInput
  }

  export type MemberScalarWhereWithAggregatesInput = {
    AND?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    OR?: MemberScalarWhereWithAggregatesInput[]
    NOT?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Member"> | string
    tenantId?: StringWithAggregatesFilter<"Member"> | string
    membershipPlanId?: StringNullableWithAggregatesFilter<"Member"> | string | null
    name?: StringWithAggregatesFilter<"Member"> | string
    email?: StringWithAggregatesFilter<"Member"> | string
    phone?: StringNullableWithAggregatesFilter<"Member"> | string | null
    photoUrl?: StringNullableWithAggregatesFilter<"Member"> | string | null
    qrCode?: StringNullableWithAggregatesFilter<"Member"> | string | null
    pin?: StringNullableWithAggregatesFilter<"Member"> | string | null
    status?: EnumMemberStatusWithAggregatesFilter<"Member"> | $Enums.MemberStatus
    joinedAt?: DateTimeWithAggregatesFilter<"Member"> | Date | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Member"> | Date | string | null
    frozenAt?: DateTimeNullableWithAggregatesFilter<"Member"> | Date | string | null
    frozenDays?: IntWithAggregatesFilter<"Member"> | number
    emergencyContact?: StringNullableWithAggregatesFilter<"Member"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Member"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Member"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Member"> | Date | string
  }

  export type ClassSessionWhereInput = {
    AND?: ClassSessionWhereInput | ClassSessionWhereInput[]
    OR?: ClassSessionWhereInput[]
    NOT?: ClassSessionWhereInput | ClassSessionWhereInput[]
    id?: StringFilter<"ClassSession"> | string
    tenantId?: StringFilter<"ClassSession"> | string
    trainerId?: StringNullableFilter<"ClassSession"> | string | null
    name?: StringFilter<"ClassSession"> | string
    description?: StringNullableFilter<"ClassSession"> | string | null
    capacity?: IntFilter<"ClassSession"> | number
    startTime?: DateTimeFilter<"ClassSession"> | Date | string
    endTime?: DateTimeFilter<"ClassSession"> | Date | string
    location?: StringNullableFilter<"ClassSession"> | string | null
    isRecurring?: BoolFilter<"ClassSession"> | boolean
    recurrenceRule?: StringNullableFilter<"ClassSession"> | string | null
    isCancelled?: BoolFilter<"ClassSession"> | boolean
    createdAt?: DateTimeFilter<"ClassSession"> | Date | string
    updatedAt?: DateTimeFilter<"ClassSession"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    trainer?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
    bookings?: BookingListRelationFilter
  }

  export type ClassSessionOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    trainerId?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    capacity?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    location?: SortOrderInput | SortOrder
    isRecurring?: SortOrder
    recurrenceRule?: SortOrderInput | SortOrder
    isCancelled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    trainer?: StaffOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type ClassSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClassSessionWhereInput | ClassSessionWhereInput[]
    OR?: ClassSessionWhereInput[]
    NOT?: ClassSessionWhereInput | ClassSessionWhereInput[]
    tenantId?: StringFilter<"ClassSession"> | string
    trainerId?: StringNullableFilter<"ClassSession"> | string | null
    name?: StringFilter<"ClassSession"> | string
    description?: StringNullableFilter<"ClassSession"> | string | null
    capacity?: IntFilter<"ClassSession"> | number
    startTime?: DateTimeFilter<"ClassSession"> | Date | string
    endTime?: DateTimeFilter<"ClassSession"> | Date | string
    location?: StringNullableFilter<"ClassSession"> | string | null
    isRecurring?: BoolFilter<"ClassSession"> | boolean
    recurrenceRule?: StringNullableFilter<"ClassSession"> | string | null
    isCancelled?: BoolFilter<"ClassSession"> | boolean
    createdAt?: DateTimeFilter<"ClassSession"> | Date | string
    updatedAt?: DateTimeFilter<"ClassSession"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    trainer?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
    bookings?: BookingListRelationFilter
  }, "id">

  export type ClassSessionOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    trainerId?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    capacity?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    location?: SortOrderInput | SortOrder
    isRecurring?: SortOrder
    recurrenceRule?: SortOrderInput | SortOrder
    isCancelled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClassSessionCountOrderByAggregateInput
    _avg?: ClassSessionAvgOrderByAggregateInput
    _max?: ClassSessionMaxOrderByAggregateInput
    _min?: ClassSessionMinOrderByAggregateInput
    _sum?: ClassSessionSumOrderByAggregateInput
  }

  export type ClassSessionScalarWhereWithAggregatesInput = {
    AND?: ClassSessionScalarWhereWithAggregatesInput | ClassSessionScalarWhereWithAggregatesInput[]
    OR?: ClassSessionScalarWhereWithAggregatesInput[]
    NOT?: ClassSessionScalarWhereWithAggregatesInput | ClassSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClassSession"> | string
    tenantId?: StringWithAggregatesFilter<"ClassSession"> | string
    trainerId?: StringNullableWithAggregatesFilter<"ClassSession"> | string | null
    name?: StringWithAggregatesFilter<"ClassSession"> | string
    description?: StringNullableWithAggregatesFilter<"ClassSession"> | string | null
    capacity?: IntWithAggregatesFilter<"ClassSession"> | number
    startTime?: DateTimeWithAggregatesFilter<"ClassSession"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"ClassSession"> | Date | string
    location?: StringNullableWithAggregatesFilter<"ClassSession"> | string | null
    isRecurring?: BoolWithAggregatesFilter<"ClassSession"> | boolean
    recurrenceRule?: StringNullableWithAggregatesFilter<"ClassSession"> | string | null
    isCancelled?: BoolWithAggregatesFilter<"ClassSession"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ClassSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ClassSession"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    memberId?: StringFilter<"Booking"> | string
    classSessionId?: StringFilter<"Booking"> | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    bookedAt?: DateTimeFilter<"Booking"> | Date | string
    cancelledAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    attendedAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    classSession?: XOR<ClassSessionScalarRelationFilter, ClassSessionWhereInput>
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    memberId?: SortOrder
    classSessionId?: SortOrder
    status?: SortOrder
    bookedAt?: SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    attendedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    member?: MemberOrderByWithRelationInput
    classSession?: ClassSessionOrderByWithRelationInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    memberId_classSessionId?: BookingMemberIdClassSessionIdCompoundUniqueInput
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    memberId?: StringFilter<"Booking"> | string
    classSessionId?: StringFilter<"Booking"> | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    bookedAt?: DateTimeFilter<"Booking"> | Date | string
    cancelledAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    attendedAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    classSession?: XOR<ClassSessionScalarRelationFilter, ClassSessionWhereInput>
  }, "id" | "memberId_classSessionId">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    memberId?: SortOrder
    classSessionId?: SortOrder
    status?: SortOrder
    bookedAt?: SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    attendedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    memberId?: StringWithAggregatesFilter<"Booking"> | string
    classSessionId?: StringWithAggregatesFilter<"Booking"> | string
    status?: EnumBookingStatusWithAggregatesFilter<"Booking"> | $Enums.BookingStatus
    bookedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    cancelledAt?: DateTimeNullableWithAggregatesFilter<"Booking"> | Date | string | null
    attendedAt?: DateTimeNullableWithAggregatesFilter<"Booking"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type CheckInWhereInput = {
    AND?: CheckInWhereInput | CheckInWhereInput[]
    OR?: CheckInWhereInput[]
    NOT?: CheckInWhereInput | CheckInWhereInput[]
    id?: StringFilter<"CheckIn"> | string
    memberId?: StringFilter<"CheckIn"> | string
    tenantId?: StringFilter<"CheckIn"> | string
    method?: EnumCheckInMethodFilter<"CheckIn"> | $Enums.CheckInMethod
    checkedInAt?: DateTimeFilter<"CheckIn"> | Date | string
    note?: StringNullableFilter<"CheckIn"> | string | null
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }

  export type CheckInOrderByWithRelationInput = {
    id?: SortOrder
    memberId?: SortOrder
    tenantId?: SortOrder
    method?: SortOrder
    checkedInAt?: SortOrder
    note?: SortOrderInput | SortOrder
    member?: MemberOrderByWithRelationInput
    tenant?: TenantOrderByWithRelationInput
  }

  export type CheckInWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CheckInWhereInput | CheckInWhereInput[]
    OR?: CheckInWhereInput[]
    NOT?: CheckInWhereInput | CheckInWhereInput[]
    memberId?: StringFilter<"CheckIn"> | string
    tenantId?: StringFilter<"CheckIn"> | string
    method?: EnumCheckInMethodFilter<"CheckIn"> | $Enums.CheckInMethod
    checkedInAt?: DateTimeFilter<"CheckIn"> | Date | string
    note?: StringNullableFilter<"CheckIn"> | string | null
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }, "id">

  export type CheckInOrderByWithAggregationInput = {
    id?: SortOrder
    memberId?: SortOrder
    tenantId?: SortOrder
    method?: SortOrder
    checkedInAt?: SortOrder
    note?: SortOrderInput | SortOrder
    _count?: CheckInCountOrderByAggregateInput
    _max?: CheckInMaxOrderByAggregateInput
    _min?: CheckInMinOrderByAggregateInput
  }

  export type CheckInScalarWhereWithAggregatesInput = {
    AND?: CheckInScalarWhereWithAggregatesInput | CheckInScalarWhereWithAggregatesInput[]
    OR?: CheckInScalarWhereWithAggregatesInput[]
    NOT?: CheckInScalarWhereWithAggregatesInput | CheckInScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CheckIn"> | string
    memberId?: StringWithAggregatesFilter<"CheckIn"> | string
    tenantId?: StringWithAggregatesFilter<"CheckIn"> | string
    method?: EnumCheckInMethodWithAggregatesFilter<"CheckIn"> | $Enums.CheckInMethod
    checkedInAt?: DateTimeWithAggregatesFilter<"CheckIn"> | Date | string
    note?: StringNullableWithAggregatesFilter<"CheckIn"> | string | null
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    memberId?: StringFilter<"Payment"> | string
    tenantId?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    gatewayRef?: StringNullableFilter<"Payment"> | string | null
    gatewayData?: JsonNullableFilter<"Payment">
    description?: StringNullableFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    memberId?: SortOrder
    tenantId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    gatewayRef?: SortOrderInput | SortOrder
    gatewayData?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    member?: MemberOrderByWithRelationInput
    tenant?: TenantOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    gatewayRef?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    memberId?: StringFilter<"Payment"> | string
    tenantId?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    gatewayData?: JsonNullableFilter<"Payment">
    description?: StringNullableFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }, "id" | "gatewayRef">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    memberId?: SortOrder
    tenantId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    gatewayRef?: SortOrderInput | SortOrder
    gatewayData?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    memberId?: StringWithAggregatesFilter<"Payment"> | string
    tenantId?: StringWithAggregatesFilter<"Payment"> | string
    amount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"Payment"> | string
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    gatewayRef?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    gatewayData?: JsonNullableWithAggregatesFilter<"Payment">
    description?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type TenantCreateInput = {
    id?: string
    name: string
    slug: string
    planTier?: $Enums.PlanTier
    logoUrl?: string | null
    address?: string | null
    phone?: string | null
    email?: string | null
    currency?: string
    timezone?: string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: StaffCreateNestedManyWithoutTenantInput
    members?: MemberCreateNestedManyWithoutTenantInput
    membershipPlans?: MembershipPlanCreateNestedManyWithoutTenantInput
    classSessions?: ClassSessionCreateNestedManyWithoutTenantInput
    checkIns?: CheckInCreateNestedManyWithoutTenantInput
    payments?: PaymentCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    planTier?: $Enums.PlanTier
    logoUrl?: string | null
    address?: string | null
    phone?: string | null
    email?: string | null
    currency?: string
    timezone?: string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: StaffUncheckedCreateNestedManyWithoutTenantInput
    members?: MemberUncheckedCreateNestedManyWithoutTenantInput
    membershipPlans?: MembershipPlanUncheckedCreateNestedManyWithoutTenantInput
    classSessions?: ClassSessionUncheckedCreateNestedManyWithoutTenantInput
    checkIns?: CheckInUncheckedCreateNestedManyWithoutTenantInput
    payments?: PaymentUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    planTier?: EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: StaffUpdateManyWithoutTenantNestedInput
    members?: MemberUpdateManyWithoutTenantNestedInput
    membershipPlans?: MembershipPlanUpdateManyWithoutTenantNestedInput
    classSessions?: ClassSessionUpdateManyWithoutTenantNestedInput
    checkIns?: CheckInUpdateManyWithoutTenantNestedInput
    payments?: PaymentUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    planTier?: EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: StaffUncheckedUpdateManyWithoutTenantNestedInput
    members?: MemberUncheckedUpdateManyWithoutTenantNestedInput
    membershipPlans?: MembershipPlanUncheckedUpdateManyWithoutTenantNestedInput
    classSessions?: ClassSessionUncheckedUpdateManyWithoutTenantNestedInput
    checkIns?: CheckInUncheckedUpdateManyWithoutTenantNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateManyInput = {
    id?: string
    name: string
    slug: string
    planTier?: $Enums.PlanTier
    logoUrl?: string | null
    address?: string | null
    phone?: string | null
    email?: string | null
    currency?: string
    timezone?: string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    planTier?: EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    planTier?: EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.StaffRole
    phone?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutStaffInput
    classSessions?: ClassSessionCreateNestedManyWithoutTrainerInput
  }

  export type StaffUncheckedCreateInput = {
    id?: string
    tenantId: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.StaffRole
    phone?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    classSessions?: ClassSessionUncheckedCreateNestedManyWithoutTrainerInput
  }

  export type StaffUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutStaffNestedInput
    classSessions?: ClassSessionUpdateManyWithoutTrainerNestedInput
  }

  export type StaffUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classSessions?: ClassSessionUncheckedUpdateManyWithoutTrainerNestedInput
  }

  export type StaffCreateManyInput = {
    id?: string
    tenantId: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.StaffRole
    phone?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipPlanCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    billingCycle?: $Enums.BillingCycle
    maxClassesPerWeek?: number | null
    accessHoursStart?: number
    accessHoursEnd?: number
    features?: MembershipPlanCreatefeaturesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutMembershipPlansInput
    members?: MemberCreateNestedManyWithoutPlanInput
  }

  export type MembershipPlanUncheckedCreateInput = {
    id?: string
    tenantId: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    billingCycle?: $Enums.BillingCycle
    maxClassesPerWeek?: number | null
    accessHoursStart?: number
    accessHoursEnd?: number
    features?: MembershipPlanCreatefeaturesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: MemberUncheckedCreateNestedManyWithoutPlanInput
  }

  export type MembershipPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    billingCycle?: EnumBillingCycleFieldUpdateOperationsInput | $Enums.BillingCycle
    maxClassesPerWeek?: NullableIntFieldUpdateOperationsInput | number | null
    accessHoursStart?: IntFieldUpdateOperationsInput | number
    accessHoursEnd?: IntFieldUpdateOperationsInput | number
    features?: MembershipPlanUpdatefeaturesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutMembershipPlansNestedInput
    members?: MemberUpdateManyWithoutPlanNestedInput
  }

  export type MembershipPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    billingCycle?: EnumBillingCycleFieldUpdateOperationsInput | $Enums.BillingCycle
    maxClassesPerWeek?: NullableIntFieldUpdateOperationsInput | number | null
    accessHoursStart?: IntFieldUpdateOperationsInput | number
    accessHoursEnd?: IntFieldUpdateOperationsInput | number
    features?: MembershipPlanUpdatefeaturesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type MembershipPlanCreateManyInput = {
    id?: string
    tenantId: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    billingCycle?: $Enums.BillingCycle
    maxClassesPerWeek?: number | null
    accessHoursStart?: number
    accessHoursEnd?: number
    features?: MembershipPlanCreatefeaturesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembershipPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    billingCycle?: EnumBillingCycleFieldUpdateOperationsInput | $Enums.BillingCycle
    maxClassesPerWeek?: NullableIntFieldUpdateOperationsInput | number | null
    accessHoursStart?: IntFieldUpdateOperationsInput | number
    accessHoursEnd?: IntFieldUpdateOperationsInput | number
    features?: MembershipPlanUpdatefeaturesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    billingCycle?: EnumBillingCycleFieldUpdateOperationsInput | $Enums.BillingCycle
    maxClassesPerWeek?: NullableIntFieldUpdateOperationsInput | number | null
    accessHoursStart?: IntFieldUpdateOperationsInput | number
    accessHoursEnd?: IntFieldUpdateOperationsInput | number
    features?: MembershipPlanUpdatefeaturesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    photoUrl?: string | null
    qrCode?: string | null
    pin?: string | null
    status?: $Enums.MemberStatus
    joinedAt?: Date | string
    expiresAt?: Date | string | null
    frozenAt?: Date | string | null
    frozenDays?: number
    emergencyContact?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutMembersInput
    plan?: MembershipPlanCreateNestedOneWithoutMembersInput
    bookings?: BookingCreateNestedManyWithoutMemberInput
    checkIns?: CheckInCreateNestedManyWithoutMemberInput
    payments?: PaymentCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateInput = {
    id?: string
    tenantId: string
    membershipPlanId?: string | null
    name: string
    email: string
    phone?: string | null
    photoUrl?: string | null
    qrCode?: string | null
    pin?: string | null
    status?: $Enums.MemberStatus
    joinedAt?: Date | string
    expiresAt?: Date | string | null
    frozenAt?: Date | string | null
    frozenDays?: number
    emergencyContact?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutMemberInput
    checkIns?: CheckInUncheckedCreateNestedManyWithoutMemberInput
    payments?: PaymentUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenDays?: IntFieldUpdateOperationsInput | number
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutMembersNestedInput
    plan?: MembershipPlanUpdateOneWithoutMembersNestedInput
    bookings?: BookingUpdateManyWithoutMemberNestedInput
    checkIns?: CheckInUpdateManyWithoutMemberNestedInput
    payments?: PaymentUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    membershipPlanId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenDays?: IntFieldUpdateOperationsInput | number
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutMemberNestedInput
    checkIns?: CheckInUncheckedUpdateManyWithoutMemberNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type MemberCreateManyInput = {
    id?: string
    tenantId: string
    membershipPlanId?: string | null
    name: string
    email: string
    phone?: string | null
    photoUrl?: string | null
    qrCode?: string | null
    pin?: string | null
    status?: $Enums.MemberStatus
    joinedAt?: Date | string
    expiresAt?: Date | string | null
    frozenAt?: Date | string | null
    frozenDays?: number
    emergencyContact?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenDays?: IntFieldUpdateOperationsInput | number
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    membershipPlanId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenDays?: IntFieldUpdateOperationsInput | number
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassSessionCreateInput = {
    id?: string
    name: string
    description?: string | null
    capacity?: number
    startTime: Date | string
    endTime: Date | string
    location?: string | null
    isRecurring?: boolean
    recurrenceRule?: string | null
    isCancelled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutClassSessionsInput
    trainer?: StaffCreateNestedOneWithoutClassSessionsInput
    bookings?: BookingCreateNestedManyWithoutClassSessionInput
  }

  export type ClassSessionUncheckedCreateInput = {
    id?: string
    tenantId: string
    trainerId?: string | null
    name: string
    description?: string | null
    capacity?: number
    startTime: Date | string
    endTime: Date | string
    location?: string | null
    isRecurring?: boolean
    recurrenceRule?: string | null
    isCancelled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutClassSessionInput
  }

  export type ClassSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrenceRule?: NullableStringFieldUpdateOperationsInput | string | null
    isCancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutClassSessionsNestedInput
    trainer?: StaffUpdateOneWithoutClassSessionsNestedInput
    bookings?: BookingUpdateManyWithoutClassSessionNestedInput
  }

  export type ClassSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    trainerId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrenceRule?: NullableStringFieldUpdateOperationsInput | string | null
    isCancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutClassSessionNestedInput
  }

  export type ClassSessionCreateManyInput = {
    id?: string
    tenantId: string
    trainerId?: string | null
    name: string
    description?: string | null
    capacity?: number
    startTime: Date | string
    endTime: Date | string
    location?: string | null
    isRecurring?: boolean
    recurrenceRule?: string | null
    isCancelled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrenceRule?: NullableStringFieldUpdateOperationsInput | string | null
    isCancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    trainerId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrenceRule?: NullableStringFieldUpdateOperationsInput | string | null
    isCancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    id?: string
    status?: $Enums.BookingStatus
    bookedAt?: Date | string
    cancelledAt?: Date | string | null
    attendedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    member: MemberCreateNestedOneWithoutBookingsInput
    classSession: ClassSessionCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    memberId: string
    classSessionId: string
    status?: $Enums.BookingStatus
    bookedAt?: Date | string
    cancelledAt?: Date | string | null
    attendedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateOneRequiredWithoutBookingsNestedInput
    classSession?: ClassSessionUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    classSessionId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyInput = {
    id?: string
    memberId: string
    classSessionId: string
    status?: $Enums.BookingStatus
    bookedAt?: Date | string
    cancelledAt?: Date | string | null
    attendedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    classSessionId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInCreateInput = {
    id?: string
    method?: $Enums.CheckInMethod
    checkedInAt?: Date | string
    note?: string | null
    member: MemberCreateNestedOneWithoutCheckInsInput
    tenant: TenantCreateNestedOneWithoutCheckInsInput
  }

  export type CheckInUncheckedCreateInput = {
    id?: string
    memberId: string
    tenantId: string
    method?: $Enums.CheckInMethod
    checkedInAt?: Date | string
    note?: string | null
  }

  export type CheckInUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumCheckInMethodFieldUpdateOperationsInput | $Enums.CheckInMethod
    checkedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    member?: MemberUpdateOneRequiredWithoutCheckInsNestedInput
    tenant?: TenantUpdateOneRequiredWithoutCheckInsNestedInput
  }

  export type CheckInUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    method?: EnumCheckInMethodFieldUpdateOperationsInput | $Enums.CheckInMethod
    checkedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CheckInCreateManyInput = {
    id?: string
    memberId: string
    tenantId: string
    method?: $Enums.CheckInMethod
    checkedInAt?: Date | string
    note?: string | null
  }

  export type CheckInUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumCheckInMethodFieldUpdateOperationsInput | $Enums.CheckInMethod
    checkedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CheckInUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    method?: EnumCheckInMethodFieldUpdateOperationsInput | $Enums.CheckInMethod
    checkedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    gatewayRef?: string | null
    gatewayData?: NullableJsonNullValueInput | InputJsonValue
    description?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    member: MemberCreateNestedOneWithoutPaymentsInput
    tenant: TenantCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    memberId: string
    tenantId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    gatewayRef?: string | null
    gatewayData?: NullableJsonNullValueInput | InputJsonValue
    description?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    gatewayRef?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayData?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateOneRequiredWithoutPaymentsNestedInput
    tenant?: TenantUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    gatewayRef?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayData?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    memberId: string
    tenantId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    gatewayRef?: string | null
    gatewayData?: NullableJsonNullValueInput | InputJsonValue
    description?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    gatewayRef?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayData?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    gatewayRef?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayData?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumPlanTierFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanTier | EnumPlanTierFieldRefInput<$PrismaModel>
    in?: $Enums.PlanTier[] | ListEnumPlanTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanTier[] | ListEnumPlanTierFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTierFilter<$PrismaModel> | $Enums.PlanTier
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StaffListRelationFilter = {
    every?: StaffWhereInput
    some?: StaffWhereInput
    none?: StaffWhereInput
  }

  export type MemberListRelationFilter = {
    every?: MemberWhereInput
    some?: MemberWhereInput
    none?: MemberWhereInput
  }

  export type MembershipPlanListRelationFilter = {
    every?: MembershipPlanWhereInput
    some?: MembershipPlanWhereInput
    none?: MembershipPlanWhereInput
  }

  export type ClassSessionListRelationFilter = {
    every?: ClassSessionWhereInput
    some?: ClassSessionWhereInput
    none?: ClassSessionWhereInput
  }

  export type CheckInListRelationFilter = {
    every?: CheckInWhereInput
    some?: CheckInWhereInput
    none?: CheckInWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StaffOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MembershipPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CheckInOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    planTier?: SortOrder
    logoUrl?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    currency?: SortOrder
    timezone?: SortOrder
    settings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    planTier?: SortOrder
    logoUrl?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    currency?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    planTier?: SortOrder
    logoUrl?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    currency?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumPlanTierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanTier | EnumPlanTierFieldRefInput<$PrismaModel>
    in?: $Enums.PlanTier[] | ListEnumPlanTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanTier[] | ListEnumPlanTierFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTierWithAggregatesFilter<$PrismaModel> | $Enums.PlanTier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanTierFilter<$PrismaModel>
    _max?: NestedEnumPlanTierFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumStaffRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffRole | EnumStaffRoleFieldRefInput<$PrismaModel>
    in?: $Enums.StaffRole[] | ListEnumStaffRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.StaffRole[] | ListEnumStaffRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumStaffRoleFilter<$PrismaModel> | $Enums.StaffRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TenantScalarRelationFilter = {
    is?: TenantWhereInput
    isNot?: TenantWhereInput
  }

  export type StaffTenantIdEmailCompoundUniqueInput = {
    tenantId: string
    email: string
  }

  export type StaffCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    avatarUrl?: SortOrder
    isActive?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaffMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    avatarUrl?: SortOrder
    isActive?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaffMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    avatarUrl?: SortOrder
    isActive?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumStaffRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffRole | EnumStaffRoleFieldRefInput<$PrismaModel>
    in?: $Enums.StaffRole[] | ListEnumStaffRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.StaffRole[] | ListEnumStaffRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumStaffRoleWithAggregatesFilter<$PrismaModel> | $Enums.StaffRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStaffRoleFilter<$PrismaModel>
    _max?: NestedEnumStaffRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumBillingCycleFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingCycle | EnumBillingCycleFieldRefInput<$PrismaModel>
    in?: $Enums.BillingCycle[] | ListEnumBillingCycleFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillingCycle[] | ListEnumBillingCycleFieldRefInput<$PrismaModel>
    not?: NestedEnumBillingCycleFilter<$PrismaModel> | $Enums.BillingCycle
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type MembershipPlanCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    billingCycle?: SortOrder
    maxClassesPerWeek?: SortOrder
    accessHoursStart?: SortOrder
    accessHoursEnd?: SortOrder
    features?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MembershipPlanAvgOrderByAggregateInput = {
    price?: SortOrder
    maxClassesPerWeek?: SortOrder
    accessHoursStart?: SortOrder
    accessHoursEnd?: SortOrder
  }

  export type MembershipPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    billingCycle?: SortOrder
    maxClassesPerWeek?: SortOrder
    accessHoursStart?: SortOrder
    accessHoursEnd?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MembershipPlanMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    billingCycle?: SortOrder
    maxClassesPerWeek?: SortOrder
    accessHoursStart?: SortOrder
    accessHoursEnd?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MembershipPlanSumOrderByAggregateInput = {
    price?: SortOrder
    maxClassesPerWeek?: SortOrder
    accessHoursStart?: SortOrder
    accessHoursEnd?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumBillingCycleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingCycle | EnumBillingCycleFieldRefInput<$PrismaModel>
    in?: $Enums.BillingCycle[] | ListEnumBillingCycleFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillingCycle[] | ListEnumBillingCycleFieldRefInput<$PrismaModel>
    not?: NestedEnumBillingCycleWithAggregatesFilter<$PrismaModel> | $Enums.BillingCycle
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBillingCycleFilter<$PrismaModel>
    _max?: NestedEnumBillingCycleFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type EnumMemberStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberStatus | EnumMemberStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MemberStatus[] | ListEnumMemberStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberStatus[] | ListEnumMemberStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberStatusFilter<$PrismaModel> | $Enums.MemberStatus
  }

  export type MembershipPlanNullableScalarRelationFilter = {
    is?: MembershipPlanWhereInput | null
    isNot?: MembershipPlanWhereInput | null
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemberTenantIdEmailCompoundUniqueInput = {
    tenantId: string
    email: string
  }

  export type MemberCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    membershipPlanId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    photoUrl?: SortOrder
    qrCode?: SortOrder
    pin?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
    expiresAt?: SortOrder
    frozenAt?: SortOrder
    frozenDays?: SortOrder
    emergencyContact?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberAvgOrderByAggregateInput = {
    frozenDays?: SortOrder
  }

  export type MemberMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    membershipPlanId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    photoUrl?: SortOrder
    qrCode?: SortOrder
    pin?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
    expiresAt?: SortOrder
    frozenAt?: SortOrder
    frozenDays?: SortOrder
    emergencyContact?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    membershipPlanId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    photoUrl?: SortOrder
    qrCode?: SortOrder
    pin?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
    expiresAt?: SortOrder
    frozenAt?: SortOrder
    frozenDays?: SortOrder
    emergencyContact?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberSumOrderByAggregateInput = {
    frozenDays?: SortOrder
  }

  export type EnumMemberStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberStatus | EnumMemberStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MemberStatus[] | ListEnumMemberStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberStatus[] | ListEnumMemberStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberStatusWithAggregatesFilter<$PrismaModel> | $Enums.MemberStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMemberStatusFilter<$PrismaModel>
    _max?: NestedEnumMemberStatusFilter<$PrismaModel>
  }

  export type StaffNullableScalarRelationFilter = {
    is?: StaffWhereInput | null
    isNot?: StaffWhereInput | null
  }

  export type ClassSessionCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    trainerId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    capacity?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    location?: SortOrder
    isRecurring?: SortOrder
    recurrenceRule?: SortOrder
    isCancelled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassSessionAvgOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type ClassSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    trainerId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    capacity?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    location?: SortOrder
    isRecurring?: SortOrder
    recurrenceRule?: SortOrder
    isCancelled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassSessionMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    trainerId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    capacity?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    location?: SortOrder
    isRecurring?: SortOrder
    recurrenceRule?: SortOrder
    isCancelled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassSessionSumOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type MemberScalarRelationFilter = {
    is?: MemberWhereInput
    isNot?: MemberWhereInput
  }

  export type ClassSessionScalarRelationFilter = {
    is?: ClassSessionWhereInput
    isNot?: ClassSessionWhereInput
  }

  export type BookingMemberIdClassSessionIdCompoundUniqueInput = {
    memberId: string
    classSessionId: string
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    classSessionId?: SortOrder
    status?: SortOrder
    bookedAt?: SortOrder
    cancelledAt?: SortOrder
    attendedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    classSessionId?: SortOrder
    status?: SortOrder
    bookedAt?: SortOrder
    cancelledAt?: SortOrder
    attendedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    classSessionId?: SortOrder
    status?: SortOrder
    bookedAt?: SortOrder
    cancelledAt?: SortOrder
    attendedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type EnumCheckInMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckInMethod | EnumCheckInMethodFieldRefInput<$PrismaModel>
    in?: $Enums.CheckInMethod[] | ListEnumCheckInMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.CheckInMethod[] | ListEnumCheckInMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumCheckInMethodFilter<$PrismaModel> | $Enums.CheckInMethod
  }

  export type CheckInCountOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    tenantId?: SortOrder
    method?: SortOrder
    checkedInAt?: SortOrder
    note?: SortOrder
  }

  export type CheckInMaxOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    tenantId?: SortOrder
    method?: SortOrder
    checkedInAt?: SortOrder
    note?: SortOrder
  }

  export type CheckInMinOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    tenantId?: SortOrder
    method?: SortOrder
    checkedInAt?: SortOrder
    note?: SortOrder
  }

  export type EnumCheckInMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckInMethod | EnumCheckInMethodFieldRefInput<$PrismaModel>
    in?: $Enums.CheckInMethod[] | ListEnumCheckInMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.CheckInMethod[] | ListEnumCheckInMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumCheckInMethodWithAggregatesFilter<$PrismaModel> | $Enums.CheckInMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCheckInMethodFilter<$PrismaModel>
    _max?: NestedEnumCheckInMethodFilter<$PrismaModel>
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    tenantId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    gatewayRef?: SortOrder
    gatewayData?: SortOrder
    description?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    tenantId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    gatewayRef?: SortOrder
    description?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    tenantId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    gatewayRef?: SortOrder
    description?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type StaffCreateNestedManyWithoutTenantInput = {
    create?: XOR<StaffCreateWithoutTenantInput, StaffUncheckedCreateWithoutTenantInput> | StaffCreateWithoutTenantInput[] | StaffUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutTenantInput | StaffCreateOrConnectWithoutTenantInput[]
    createMany?: StaffCreateManyTenantInputEnvelope
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
  }

  export type MemberCreateNestedManyWithoutTenantInput = {
    create?: XOR<MemberCreateWithoutTenantInput, MemberUncheckedCreateWithoutTenantInput> | MemberCreateWithoutTenantInput[] | MemberUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutTenantInput | MemberCreateOrConnectWithoutTenantInput[]
    createMany?: MemberCreateManyTenantInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type MembershipPlanCreateNestedManyWithoutTenantInput = {
    create?: XOR<MembershipPlanCreateWithoutTenantInput, MembershipPlanUncheckedCreateWithoutTenantInput> | MembershipPlanCreateWithoutTenantInput[] | MembershipPlanUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: MembershipPlanCreateOrConnectWithoutTenantInput | MembershipPlanCreateOrConnectWithoutTenantInput[]
    createMany?: MembershipPlanCreateManyTenantInputEnvelope
    connect?: MembershipPlanWhereUniqueInput | MembershipPlanWhereUniqueInput[]
  }

  export type ClassSessionCreateNestedManyWithoutTenantInput = {
    create?: XOR<ClassSessionCreateWithoutTenantInput, ClassSessionUncheckedCreateWithoutTenantInput> | ClassSessionCreateWithoutTenantInput[] | ClassSessionUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ClassSessionCreateOrConnectWithoutTenantInput | ClassSessionCreateOrConnectWithoutTenantInput[]
    createMany?: ClassSessionCreateManyTenantInputEnvelope
    connect?: ClassSessionWhereUniqueInput | ClassSessionWhereUniqueInput[]
  }

  export type CheckInCreateNestedManyWithoutTenantInput = {
    create?: XOR<CheckInCreateWithoutTenantInput, CheckInUncheckedCreateWithoutTenantInput> | CheckInCreateWithoutTenantInput[] | CheckInUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutTenantInput | CheckInCreateOrConnectWithoutTenantInput[]
    createMany?: CheckInCreateManyTenantInputEnvelope
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutTenantInput = {
    create?: XOR<PaymentCreateWithoutTenantInput, PaymentUncheckedCreateWithoutTenantInput> | PaymentCreateWithoutTenantInput[] | PaymentUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutTenantInput | PaymentCreateOrConnectWithoutTenantInput[]
    createMany?: PaymentCreateManyTenantInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type StaffUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<StaffCreateWithoutTenantInput, StaffUncheckedCreateWithoutTenantInput> | StaffCreateWithoutTenantInput[] | StaffUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutTenantInput | StaffCreateOrConnectWithoutTenantInput[]
    createMany?: StaffCreateManyTenantInputEnvelope
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
  }

  export type MemberUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<MemberCreateWithoutTenantInput, MemberUncheckedCreateWithoutTenantInput> | MemberCreateWithoutTenantInput[] | MemberUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutTenantInput | MemberCreateOrConnectWithoutTenantInput[]
    createMany?: MemberCreateManyTenantInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type MembershipPlanUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<MembershipPlanCreateWithoutTenantInput, MembershipPlanUncheckedCreateWithoutTenantInput> | MembershipPlanCreateWithoutTenantInput[] | MembershipPlanUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: MembershipPlanCreateOrConnectWithoutTenantInput | MembershipPlanCreateOrConnectWithoutTenantInput[]
    createMany?: MembershipPlanCreateManyTenantInputEnvelope
    connect?: MembershipPlanWhereUniqueInput | MembershipPlanWhereUniqueInput[]
  }

  export type ClassSessionUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<ClassSessionCreateWithoutTenantInput, ClassSessionUncheckedCreateWithoutTenantInput> | ClassSessionCreateWithoutTenantInput[] | ClassSessionUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ClassSessionCreateOrConnectWithoutTenantInput | ClassSessionCreateOrConnectWithoutTenantInput[]
    createMany?: ClassSessionCreateManyTenantInputEnvelope
    connect?: ClassSessionWhereUniqueInput | ClassSessionWhereUniqueInput[]
  }

  export type CheckInUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<CheckInCreateWithoutTenantInput, CheckInUncheckedCreateWithoutTenantInput> | CheckInCreateWithoutTenantInput[] | CheckInUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutTenantInput | CheckInCreateOrConnectWithoutTenantInput[]
    createMany?: CheckInCreateManyTenantInputEnvelope
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<PaymentCreateWithoutTenantInput, PaymentUncheckedCreateWithoutTenantInput> | PaymentCreateWithoutTenantInput[] | PaymentUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutTenantInput | PaymentCreateOrConnectWithoutTenantInput[]
    createMany?: PaymentCreateManyTenantInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumPlanTierFieldUpdateOperationsInput = {
    set?: $Enums.PlanTier
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StaffUpdateManyWithoutTenantNestedInput = {
    create?: XOR<StaffCreateWithoutTenantInput, StaffUncheckedCreateWithoutTenantInput> | StaffCreateWithoutTenantInput[] | StaffUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutTenantInput | StaffCreateOrConnectWithoutTenantInput[]
    upsert?: StaffUpsertWithWhereUniqueWithoutTenantInput | StaffUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: StaffCreateManyTenantInputEnvelope
    set?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    disconnect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    delete?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    update?: StaffUpdateWithWhereUniqueWithoutTenantInput | StaffUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: StaffUpdateManyWithWhereWithoutTenantInput | StaffUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: StaffScalarWhereInput | StaffScalarWhereInput[]
  }

  export type MemberUpdateManyWithoutTenantNestedInput = {
    create?: XOR<MemberCreateWithoutTenantInput, MemberUncheckedCreateWithoutTenantInput> | MemberCreateWithoutTenantInput[] | MemberUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutTenantInput | MemberCreateOrConnectWithoutTenantInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutTenantInput | MemberUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: MemberCreateManyTenantInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutTenantInput | MemberUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutTenantInput | MemberUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type MembershipPlanUpdateManyWithoutTenantNestedInput = {
    create?: XOR<MembershipPlanCreateWithoutTenantInput, MembershipPlanUncheckedCreateWithoutTenantInput> | MembershipPlanCreateWithoutTenantInput[] | MembershipPlanUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: MembershipPlanCreateOrConnectWithoutTenantInput | MembershipPlanCreateOrConnectWithoutTenantInput[]
    upsert?: MembershipPlanUpsertWithWhereUniqueWithoutTenantInput | MembershipPlanUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: MembershipPlanCreateManyTenantInputEnvelope
    set?: MembershipPlanWhereUniqueInput | MembershipPlanWhereUniqueInput[]
    disconnect?: MembershipPlanWhereUniqueInput | MembershipPlanWhereUniqueInput[]
    delete?: MembershipPlanWhereUniqueInput | MembershipPlanWhereUniqueInput[]
    connect?: MembershipPlanWhereUniqueInput | MembershipPlanWhereUniqueInput[]
    update?: MembershipPlanUpdateWithWhereUniqueWithoutTenantInput | MembershipPlanUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: MembershipPlanUpdateManyWithWhereWithoutTenantInput | MembershipPlanUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: MembershipPlanScalarWhereInput | MembershipPlanScalarWhereInput[]
  }

  export type ClassSessionUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ClassSessionCreateWithoutTenantInput, ClassSessionUncheckedCreateWithoutTenantInput> | ClassSessionCreateWithoutTenantInput[] | ClassSessionUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ClassSessionCreateOrConnectWithoutTenantInput | ClassSessionCreateOrConnectWithoutTenantInput[]
    upsert?: ClassSessionUpsertWithWhereUniqueWithoutTenantInput | ClassSessionUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ClassSessionCreateManyTenantInputEnvelope
    set?: ClassSessionWhereUniqueInput | ClassSessionWhereUniqueInput[]
    disconnect?: ClassSessionWhereUniqueInput | ClassSessionWhereUniqueInput[]
    delete?: ClassSessionWhereUniqueInput | ClassSessionWhereUniqueInput[]
    connect?: ClassSessionWhereUniqueInput | ClassSessionWhereUniqueInput[]
    update?: ClassSessionUpdateWithWhereUniqueWithoutTenantInput | ClassSessionUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ClassSessionUpdateManyWithWhereWithoutTenantInput | ClassSessionUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ClassSessionScalarWhereInput | ClassSessionScalarWhereInput[]
  }

  export type CheckInUpdateManyWithoutTenantNestedInput = {
    create?: XOR<CheckInCreateWithoutTenantInput, CheckInUncheckedCreateWithoutTenantInput> | CheckInCreateWithoutTenantInput[] | CheckInUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutTenantInput | CheckInCreateOrConnectWithoutTenantInput[]
    upsert?: CheckInUpsertWithWhereUniqueWithoutTenantInput | CheckInUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: CheckInCreateManyTenantInputEnvelope
    set?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    disconnect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    delete?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    update?: CheckInUpdateWithWhereUniqueWithoutTenantInput | CheckInUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: CheckInUpdateManyWithWhereWithoutTenantInput | CheckInUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: CheckInScalarWhereInput | CheckInScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutTenantNestedInput = {
    create?: XOR<PaymentCreateWithoutTenantInput, PaymentUncheckedCreateWithoutTenantInput> | PaymentCreateWithoutTenantInput[] | PaymentUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutTenantInput | PaymentCreateOrConnectWithoutTenantInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutTenantInput | PaymentUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: PaymentCreateManyTenantInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutTenantInput | PaymentUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutTenantInput | PaymentUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type StaffUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<StaffCreateWithoutTenantInput, StaffUncheckedCreateWithoutTenantInput> | StaffCreateWithoutTenantInput[] | StaffUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutTenantInput | StaffCreateOrConnectWithoutTenantInput[]
    upsert?: StaffUpsertWithWhereUniqueWithoutTenantInput | StaffUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: StaffCreateManyTenantInputEnvelope
    set?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    disconnect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    delete?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    update?: StaffUpdateWithWhereUniqueWithoutTenantInput | StaffUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: StaffUpdateManyWithWhereWithoutTenantInput | StaffUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: StaffScalarWhereInput | StaffScalarWhereInput[]
  }

  export type MemberUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<MemberCreateWithoutTenantInput, MemberUncheckedCreateWithoutTenantInput> | MemberCreateWithoutTenantInput[] | MemberUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutTenantInput | MemberCreateOrConnectWithoutTenantInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutTenantInput | MemberUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: MemberCreateManyTenantInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutTenantInput | MemberUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutTenantInput | MemberUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type MembershipPlanUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<MembershipPlanCreateWithoutTenantInput, MembershipPlanUncheckedCreateWithoutTenantInput> | MembershipPlanCreateWithoutTenantInput[] | MembershipPlanUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: MembershipPlanCreateOrConnectWithoutTenantInput | MembershipPlanCreateOrConnectWithoutTenantInput[]
    upsert?: MembershipPlanUpsertWithWhereUniqueWithoutTenantInput | MembershipPlanUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: MembershipPlanCreateManyTenantInputEnvelope
    set?: MembershipPlanWhereUniqueInput | MembershipPlanWhereUniqueInput[]
    disconnect?: MembershipPlanWhereUniqueInput | MembershipPlanWhereUniqueInput[]
    delete?: MembershipPlanWhereUniqueInput | MembershipPlanWhereUniqueInput[]
    connect?: MembershipPlanWhereUniqueInput | MembershipPlanWhereUniqueInput[]
    update?: MembershipPlanUpdateWithWhereUniqueWithoutTenantInput | MembershipPlanUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: MembershipPlanUpdateManyWithWhereWithoutTenantInput | MembershipPlanUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: MembershipPlanScalarWhereInput | MembershipPlanScalarWhereInput[]
  }

  export type ClassSessionUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ClassSessionCreateWithoutTenantInput, ClassSessionUncheckedCreateWithoutTenantInput> | ClassSessionCreateWithoutTenantInput[] | ClassSessionUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ClassSessionCreateOrConnectWithoutTenantInput | ClassSessionCreateOrConnectWithoutTenantInput[]
    upsert?: ClassSessionUpsertWithWhereUniqueWithoutTenantInput | ClassSessionUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ClassSessionCreateManyTenantInputEnvelope
    set?: ClassSessionWhereUniqueInput | ClassSessionWhereUniqueInput[]
    disconnect?: ClassSessionWhereUniqueInput | ClassSessionWhereUniqueInput[]
    delete?: ClassSessionWhereUniqueInput | ClassSessionWhereUniqueInput[]
    connect?: ClassSessionWhereUniqueInput | ClassSessionWhereUniqueInput[]
    update?: ClassSessionUpdateWithWhereUniqueWithoutTenantInput | ClassSessionUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ClassSessionUpdateManyWithWhereWithoutTenantInput | ClassSessionUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ClassSessionScalarWhereInput | ClassSessionScalarWhereInput[]
  }

  export type CheckInUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<CheckInCreateWithoutTenantInput, CheckInUncheckedCreateWithoutTenantInput> | CheckInCreateWithoutTenantInput[] | CheckInUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutTenantInput | CheckInCreateOrConnectWithoutTenantInput[]
    upsert?: CheckInUpsertWithWhereUniqueWithoutTenantInput | CheckInUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: CheckInCreateManyTenantInputEnvelope
    set?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    disconnect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    delete?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    update?: CheckInUpdateWithWhereUniqueWithoutTenantInput | CheckInUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: CheckInUpdateManyWithWhereWithoutTenantInput | CheckInUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: CheckInScalarWhereInput | CheckInScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<PaymentCreateWithoutTenantInput, PaymentUncheckedCreateWithoutTenantInput> | PaymentCreateWithoutTenantInput[] | PaymentUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutTenantInput | PaymentCreateOrConnectWithoutTenantInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutTenantInput | PaymentUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: PaymentCreateManyTenantInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutTenantInput | PaymentUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutTenantInput | PaymentUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutStaffInput = {
    create?: XOR<TenantCreateWithoutStaffInput, TenantUncheckedCreateWithoutStaffInput>
    connectOrCreate?: TenantCreateOrConnectWithoutStaffInput
    connect?: TenantWhereUniqueInput
  }

  export type ClassSessionCreateNestedManyWithoutTrainerInput = {
    create?: XOR<ClassSessionCreateWithoutTrainerInput, ClassSessionUncheckedCreateWithoutTrainerInput> | ClassSessionCreateWithoutTrainerInput[] | ClassSessionUncheckedCreateWithoutTrainerInput[]
    connectOrCreate?: ClassSessionCreateOrConnectWithoutTrainerInput | ClassSessionCreateOrConnectWithoutTrainerInput[]
    createMany?: ClassSessionCreateManyTrainerInputEnvelope
    connect?: ClassSessionWhereUniqueInput | ClassSessionWhereUniqueInput[]
  }

  export type ClassSessionUncheckedCreateNestedManyWithoutTrainerInput = {
    create?: XOR<ClassSessionCreateWithoutTrainerInput, ClassSessionUncheckedCreateWithoutTrainerInput> | ClassSessionCreateWithoutTrainerInput[] | ClassSessionUncheckedCreateWithoutTrainerInput[]
    connectOrCreate?: ClassSessionCreateOrConnectWithoutTrainerInput | ClassSessionCreateOrConnectWithoutTrainerInput[]
    createMany?: ClassSessionCreateManyTrainerInputEnvelope
    connect?: ClassSessionWhereUniqueInput | ClassSessionWhereUniqueInput[]
  }

  export type EnumStaffRoleFieldUpdateOperationsInput = {
    set?: $Enums.StaffRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TenantUpdateOneRequiredWithoutStaffNestedInput = {
    create?: XOR<TenantCreateWithoutStaffInput, TenantUncheckedCreateWithoutStaffInput>
    connectOrCreate?: TenantCreateOrConnectWithoutStaffInput
    upsert?: TenantUpsertWithoutStaffInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutStaffInput, TenantUpdateWithoutStaffInput>, TenantUncheckedUpdateWithoutStaffInput>
  }

  export type ClassSessionUpdateManyWithoutTrainerNestedInput = {
    create?: XOR<ClassSessionCreateWithoutTrainerInput, ClassSessionUncheckedCreateWithoutTrainerInput> | ClassSessionCreateWithoutTrainerInput[] | ClassSessionUncheckedCreateWithoutTrainerInput[]
    connectOrCreate?: ClassSessionCreateOrConnectWithoutTrainerInput | ClassSessionCreateOrConnectWithoutTrainerInput[]
    upsert?: ClassSessionUpsertWithWhereUniqueWithoutTrainerInput | ClassSessionUpsertWithWhereUniqueWithoutTrainerInput[]
    createMany?: ClassSessionCreateManyTrainerInputEnvelope
    set?: ClassSessionWhereUniqueInput | ClassSessionWhereUniqueInput[]
    disconnect?: ClassSessionWhereUniqueInput | ClassSessionWhereUniqueInput[]
    delete?: ClassSessionWhereUniqueInput | ClassSessionWhereUniqueInput[]
    connect?: ClassSessionWhereUniqueInput | ClassSessionWhereUniqueInput[]
    update?: ClassSessionUpdateWithWhereUniqueWithoutTrainerInput | ClassSessionUpdateWithWhereUniqueWithoutTrainerInput[]
    updateMany?: ClassSessionUpdateManyWithWhereWithoutTrainerInput | ClassSessionUpdateManyWithWhereWithoutTrainerInput[]
    deleteMany?: ClassSessionScalarWhereInput | ClassSessionScalarWhereInput[]
  }

  export type ClassSessionUncheckedUpdateManyWithoutTrainerNestedInput = {
    create?: XOR<ClassSessionCreateWithoutTrainerInput, ClassSessionUncheckedCreateWithoutTrainerInput> | ClassSessionCreateWithoutTrainerInput[] | ClassSessionUncheckedCreateWithoutTrainerInput[]
    connectOrCreate?: ClassSessionCreateOrConnectWithoutTrainerInput | ClassSessionCreateOrConnectWithoutTrainerInput[]
    upsert?: ClassSessionUpsertWithWhereUniqueWithoutTrainerInput | ClassSessionUpsertWithWhereUniqueWithoutTrainerInput[]
    createMany?: ClassSessionCreateManyTrainerInputEnvelope
    set?: ClassSessionWhereUniqueInput | ClassSessionWhereUniqueInput[]
    disconnect?: ClassSessionWhereUniqueInput | ClassSessionWhereUniqueInput[]
    delete?: ClassSessionWhereUniqueInput | ClassSessionWhereUniqueInput[]
    connect?: ClassSessionWhereUniqueInput | ClassSessionWhereUniqueInput[]
    update?: ClassSessionUpdateWithWhereUniqueWithoutTrainerInput | ClassSessionUpdateWithWhereUniqueWithoutTrainerInput[]
    updateMany?: ClassSessionUpdateManyWithWhereWithoutTrainerInput | ClassSessionUpdateManyWithWhereWithoutTrainerInput[]
    deleteMany?: ClassSessionScalarWhereInput | ClassSessionScalarWhereInput[]
  }

  export type MembershipPlanCreatefeaturesInput = {
    set: string[]
  }

  export type TenantCreateNestedOneWithoutMembershipPlansInput = {
    create?: XOR<TenantCreateWithoutMembershipPlansInput, TenantUncheckedCreateWithoutMembershipPlansInput>
    connectOrCreate?: TenantCreateOrConnectWithoutMembershipPlansInput
    connect?: TenantWhereUniqueInput
  }

  export type MemberCreateNestedManyWithoutPlanInput = {
    create?: XOR<MemberCreateWithoutPlanInput, MemberUncheckedCreateWithoutPlanInput> | MemberCreateWithoutPlanInput[] | MemberUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutPlanInput | MemberCreateOrConnectWithoutPlanInput[]
    createMany?: MemberCreateManyPlanInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type MemberUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<MemberCreateWithoutPlanInput, MemberUncheckedCreateWithoutPlanInput> | MemberCreateWithoutPlanInput[] | MemberUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutPlanInput | MemberCreateOrConnectWithoutPlanInput[]
    createMany?: MemberCreateManyPlanInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumBillingCycleFieldUpdateOperationsInput = {
    set?: $Enums.BillingCycle
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MembershipPlanUpdatefeaturesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TenantUpdateOneRequiredWithoutMembershipPlansNestedInput = {
    create?: XOR<TenantCreateWithoutMembershipPlansInput, TenantUncheckedCreateWithoutMembershipPlansInput>
    connectOrCreate?: TenantCreateOrConnectWithoutMembershipPlansInput
    upsert?: TenantUpsertWithoutMembershipPlansInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutMembershipPlansInput, TenantUpdateWithoutMembershipPlansInput>, TenantUncheckedUpdateWithoutMembershipPlansInput>
  }

  export type MemberUpdateManyWithoutPlanNestedInput = {
    create?: XOR<MemberCreateWithoutPlanInput, MemberUncheckedCreateWithoutPlanInput> | MemberCreateWithoutPlanInput[] | MemberUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutPlanInput | MemberCreateOrConnectWithoutPlanInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutPlanInput | MemberUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: MemberCreateManyPlanInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutPlanInput | MemberUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutPlanInput | MemberUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type MemberUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<MemberCreateWithoutPlanInput, MemberUncheckedCreateWithoutPlanInput> | MemberCreateWithoutPlanInput[] | MemberUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutPlanInput | MemberCreateOrConnectWithoutPlanInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutPlanInput | MemberUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: MemberCreateManyPlanInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutPlanInput | MemberUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutPlanInput | MemberUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutMembersInput = {
    create?: XOR<TenantCreateWithoutMembersInput, TenantUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutMembersInput
    connect?: TenantWhereUniqueInput
  }

  export type MembershipPlanCreateNestedOneWithoutMembersInput = {
    create?: XOR<MembershipPlanCreateWithoutMembersInput, MembershipPlanUncheckedCreateWithoutMembersInput>
    connectOrCreate?: MembershipPlanCreateOrConnectWithoutMembersInput
    connect?: MembershipPlanWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutMemberInput = {
    create?: XOR<BookingCreateWithoutMemberInput, BookingUncheckedCreateWithoutMemberInput> | BookingCreateWithoutMemberInput[] | BookingUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutMemberInput | BookingCreateOrConnectWithoutMemberInput[]
    createMany?: BookingCreateManyMemberInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type CheckInCreateNestedManyWithoutMemberInput = {
    create?: XOR<CheckInCreateWithoutMemberInput, CheckInUncheckedCreateWithoutMemberInput> | CheckInCreateWithoutMemberInput[] | CheckInUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutMemberInput | CheckInCreateOrConnectWithoutMemberInput[]
    createMany?: CheckInCreateManyMemberInputEnvelope
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutMemberInput = {
    create?: XOR<PaymentCreateWithoutMemberInput, PaymentUncheckedCreateWithoutMemberInput> | PaymentCreateWithoutMemberInput[] | PaymentUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutMemberInput | PaymentCreateOrConnectWithoutMemberInput[]
    createMany?: PaymentCreateManyMemberInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<BookingCreateWithoutMemberInput, BookingUncheckedCreateWithoutMemberInput> | BookingCreateWithoutMemberInput[] | BookingUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutMemberInput | BookingCreateOrConnectWithoutMemberInput[]
    createMany?: BookingCreateManyMemberInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type CheckInUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<CheckInCreateWithoutMemberInput, CheckInUncheckedCreateWithoutMemberInput> | CheckInCreateWithoutMemberInput[] | CheckInUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutMemberInput | CheckInCreateOrConnectWithoutMemberInput[]
    createMany?: CheckInCreateManyMemberInputEnvelope
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<PaymentCreateWithoutMemberInput, PaymentUncheckedCreateWithoutMemberInput> | PaymentCreateWithoutMemberInput[] | PaymentUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutMemberInput | PaymentCreateOrConnectWithoutMemberInput[]
    createMany?: PaymentCreateManyMemberInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type EnumMemberStatusFieldUpdateOperationsInput = {
    set?: $Enums.MemberStatus
  }

  export type TenantUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<TenantCreateWithoutMembersInput, TenantUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutMembersInput
    upsert?: TenantUpsertWithoutMembersInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutMembersInput, TenantUpdateWithoutMembersInput>, TenantUncheckedUpdateWithoutMembersInput>
  }

  export type MembershipPlanUpdateOneWithoutMembersNestedInput = {
    create?: XOR<MembershipPlanCreateWithoutMembersInput, MembershipPlanUncheckedCreateWithoutMembersInput>
    connectOrCreate?: MembershipPlanCreateOrConnectWithoutMembersInput
    upsert?: MembershipPlanUpsertWithoutMembersInput
    disconnect?: MembershipPlanWhereInput | boolean
    delete?: MembershipPlanWhereInput | boolean
    connect?: MembershipPlanWhereUniqueInput
    update?: XOR<XOR<MembershipPlanUpdateToOneWithWhereWithoutMembersInput, MembershipPlanUpdateWithoutMembersInput>, MembershipPlanUncheckedUpdateWithoutMembersInput>
  }

  export type BookingUpdateManyWithoutMemberNestedInput = {
    create?: XOR<BookingCreateWithoutMemberInput, BookingUncheckedCreateWithoutMemberInput> | BookingCreateWithoutMemberInput[] | BookingUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutMemberInput | BookingCreateOrConnectWithoutMemberInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutMemberInput | BookingUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: BookingCreateManyMemberInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutMemberInput | BookingUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutMemberInput | BookingUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type CheckInUpdateManyWithoutMemberNestedInput = {
    create?: XOR<CheckInCreateWithoutMemberInput, CheckInUncheckedCreateWithoutMemberInput> | CheckInCreateWithoutMemberInput[] | CheckInUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutMemberInput | CheckInCreateOrConnectWithoutMemberInput[]
    upsert?: CheckInUpsertWithWhereUniqueWithoutMemberInput | CheckInUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: CheckInCreateManyMemberInputEnvelope
    set?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    disconnect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    delete?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    update?: CheckInUpdateWithWhereUniqueWithoutMemberInput | CheckInUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: CheckInUpdateManyWithWhereWithoutMemberInput | CheckInUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: CheckInScalarWhereInput | CheckInScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutMemberNestedInput = {
    create?: XOR<PaymentCreateWithoutMemberInput, PaymentUncheckedCreateWithoutMemberInput> | PaymentCreateWithoutMemberInput[] | PaymentUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutMemberInput | PaymentCreateOrConnectWithoutMemberInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutMemberInput | PaymentUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: PaymentCreateManyMemberInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutMemberInput | PaymentUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutMemberInput | PaymentUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<BookingCreateWithoutMemberInput, BookingUncheckedCreateWithoutMemberInput> | BookingCreateWithoutMemberInput[] | BookingUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutMemberInput | BookingCreateOrConnectWithoutMemberInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutMemberInput | BookingUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: BookingCreateManyMemberInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutMemberInput | BookingUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutMemberInput | BookingUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type CheckInUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<CheckInCreateWithoutMemberInput, CheckInUncheckedCreateWithoutMemberInput> | CheckInCreateWithoutMemberInput[] | CheckInUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutMemberInput | CheckInCreateOrConnectWithoutMemberInput[]
    upsert?: CheckInUpsertWithWhereUniqueWithoutMemberInput | CheckInUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: CheckInCreateManyMemberInputEnvelope
    set?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    disconnect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    delete?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    update?: CheckInUpdateWithWhereUniqueWithoutMemberInput | CheckInUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: CheckInUpdateManyWithWhereWithoutMemberInput | CheckInUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: CheckInScalarWhereInput | CheckInScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<PaymentCreateWithoutMemberInput, PaymentUncheckedCreateWithoutMemberInput> | PaymentCreateWithoutMemberInput[] | PaymentUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutMemberInput | PaymentCreateOrConnectWithoutMemberInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutMemberInput | PaymentUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: PaymentCreateManyMemberInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutMemberInput | PaymentUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutMemberInput | PaymentUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutClassSessionsInput = {
    create?: XOR<TenantCreateWithoutClassSessionsInput, TenantUncheckedCreateWithoutClassSessionsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutClassSessionsInput
    connect?: TenantWhereUniqueInput
  }

  export type StaffCreateNestedOneWithoutClassSessionsInput = {
    create?: XOR<StaffCreateWithoutClassSessionsInput, StaffUncheckedCreateWithoutClassSessionsInput>
    connectOrCreate?: StaffCreateOrConnectWithoutClassSessionsInput
    connect?: StaffWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutClassSessionInput = {
    create?: XOR<BookingCreateWithoutClassSessionInput, BookingUncheckedCreateWithoutClassSessionInput> | BookingCreateWithoutClassSessionInput[] | BookingUncheckedCreateWithoutClassSessionInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutClassSessionInput | BookingCreateOrConnectWithoutClassSessionInput[]
    createMany?: BookingCreateManyClassSessionInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutClassSessionInput = {
    create?: XOR<BookingCreateWithoutClassSessionInput, BookingUncheckedCreateWithoutClassSessionInput> | BookingCreateWithoutClassSessionInput[] | BookingUncheckedCreateWithoutClassSessionInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutClassSessionInput | BookingCreateOrConnectWithoutClassSessionInput[]
    createMany?: BookingCreateManyClassSessionInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type TenantUpdateOneRequiredWithoutClassSessionsNestedInput = {
    create?: XOR<TenantCreateWithoutClassSessionsInput, TenantUncheckedCreateWithoutClassSessionsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutClassSessionsInput
    upsert?: TenantUpsertWithoutClassSessionsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutClassSessionsInput, TenantUpdateWithoutClassSessionsInput>, TenantUncheckedUpdateWithoutClassSessionsInput>
  }

  export type StaffUpdateOneWithoutClassSessionsNestedInput = {
    create?: XOR<StaffCreateWithoutClassSessionsInput, StaffUncheckedCreateWithoutClassSessionsInput>
    connectOrCreate?: StaffCreateOrConnectWithoutClassSessionsInput
    upsert?: StaffUpsertWithoutClassSessionsInput
    disconnect?: StaffWhereInput | boolean
    delete?: StaffWhereInput | boolean
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutClassSessionsInput, StaffUpdateWithoutClassSessionsInput>, StaffUncheckedUpdateWithoutClassSessionsInput>
  }

  export type BookingUpdateManyWithoutClassSessionNestedInput = {
    create?: XOR<BookingCreateWithoutClassSessionInput, BookingUncheckedCreateWithoutClassSessionInput> | BookingCreateWithoutClassSessionInput[] | BookingUncheckedCreateWithoutClassSessionInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutClassSessionInput | BookingCreateOrConnectWithoutClassSessionInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutClassSessionInput | BookingUpsertWithWhereUniqueWithoutClassSessionInput[]
    createMany?: BookingCreateManyClassSessionInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutClassSessionInput | BookingUpdateWithWhereUniqueWithoutClassSessionInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutClassSessionInput | BookingUpdateManyWithWhereWithoutClassSessionInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutClassSessionNestedInput = {
    create?: XOR<BookingCreateWithoutClassSessionInput, BookingUncheckedCreateWithoutClassSessionInput> | BookingCreateWithoutClassSessionInput[] | BookingUncheckedCreateWithoutClassSessionInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutClassSessionInput | BookingCreateOrConnectWithoutClassSessionInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutClassSessionInput | BookingUpsertWithWhereUniqueWithoutClassSessionInput[]
    createMany?: BookingCreateManyClassSessionInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutClassSessionInput | BookingUpdateWithWhereUniqueWithoutClassSessionInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutClassSessionInput | BookingUpdateManyWithWhereWithoutClassSessionInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type MemberCreateNestedOneWithoutBookingsInput = {
    create?: XOR<MemberCreateWithoutBookingsInput, MemberUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutBookingsInput
    connect?: MemberWhereUniqueInput
  }

  export type ClassSessionCreateNestedOneWithoutBookingsInput = {
    create?: XOR<ClassSessionCreateWithoutBookingsInput, ClassSessionUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ClassSessionCreateOrConnectWithoutBookingsInput
    connect?: ClassSessionWhereUniqueInput
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type MemberUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<MemberCreateWithoutBookingsInput, MemberUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutBookingsInput
    upsert?: MemberUpsertWithoutBookingsInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutBookingsInput, MemberUpdateWithoutBookingsInput>, MemberUncheckedUpdateWithoutBookingsInput>
  }

  export type ClassSessionUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<ClassSessionCreateWithoutBookingsInput, ClassSessionUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ClassSessionCreateOrConnectWithoutBookingsInput
    upsert?: ClassSessionUpsertWithoutBookingsInput
    connect?: ClassSessionWhereUniqueInput
    update?: XOR<XOR<ClassSessionUpdateToOneWithWhereWithoutBookingsInput, ClassSessionUpdateWithoutBookingsInput>, ClassSessionUncheckedUpdateWithoutBookingsInput>
  }

  export type MemberCreateNestedOneWithoutCheckInsInput = {
    create?: XOR<MemberCreateWithoutCheckInsInput, MemberUncheckedCreateWithoutCheckInsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutCheckInsInput
    connect?: MemberWhereUniqueInput
  }

  export type TenantCreateNestedOneWithoutCheckInsInput = {
    create?: XOR<TenantCreateWithoutCheckInsInput, TenantUncheckedCreateWithoutCheckInsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutCheckInsInput
    connect?: TenantWhereUniqueInput
  }

  export type EnumCheckInMethodFieldUpdateOperationsInput = {
    set?: $Enums.CheckInMethod
  }

  export type MemberUpdateOneRequiredWithoutCheckInsNestedInput = {
    create?: XOR<MemberCreateWithoutCheckInsInput, MemberUncheckedCreateWithoutCheckInsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutCheckInsInput
    upsert?: MemberUpsertWithoutCheckInsInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutCheckInsInput, MemberUpdateWithoutCheckInsInput>, MemberUncheckedUpdateWithoutCheckInsInput>
  }

  export type TenantUpdateOneRequiredWithoutCheckInsNestedInput = {
    create?: XOR<TenantCreateWithoutCheckInsInput, TenantUncheckedCreateWithoutCheckInsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutCheckInsInput
    upsert?: TenantUpsertWithoutCheckInsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutCheckInsInput, TenantUpdateWithoutCheckInsInput>, TenantUncheckedUpdateWithoutCheckInsInput>
  }

  export type MemberCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<MemberCreateWithoutPaymentsInput, MemberUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutPaymentsInput
    connect?: MemberWhereUniqueInput
  }

  export type TenantCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<TenantCreateWithoutPaymentsInput, TenantUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutPaymentsInput
    connect?: TenantWhereUniqueInput
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type MemberUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<MemberCreateWithoutPaymentsInput, MemberUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutPaymentsInput
    upsert?: MemberUpsertWithoutPaymentsInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutPaymentsInput, MemberUpdateWithoutPaymentsInput>, MemberUncheckedUpdateWithoutPaymentsInput>
  }

  export type TenantUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<TenantCreateWithoutPaymentsInput, TenantUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutPaymentsInput
    upsert?: TenantUpsertWithoutPaymentsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutPaymentsInput, TenantUpdateWithoutPaymentsInput>, TenantUncheckedUpdateWithoutPaymentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumPlanTierFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanTier | EnumPlanTierFieldRefInput<$PrismaModel>
    in?: $Enums.PlanTier[] | ListEnumPlanTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanTier[] | ListEnumPlanTierFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTierFilter<$PrismaModel> | $Enums.PlanTier
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumPlanTierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanTier | EnumPlanTierFieldRefInput<$PrismaModel>
    in?: $Enums.PlanTier[] | ListEnumPlanTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanTier[] | ListEnumPlanTierFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTierWithAggregatesFilter<$PrismaModel> | $Enums.PlanTier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanTierFilter<$PrismaModel>
    _max?: NestedEnumPlanTierFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStaffRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffRole | EnumStaffRoleFieldRefInput<$PrismaModel>
    in?: $Enums.StaffRole[] | ListEnumStaffRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.StaffRole[] | ListEnumStaffRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumStaffRoleFilter<$PrismaModel> | $Enums.StaffRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumStaffRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffRole | EnumStaffRoleFieldRefInput<$PrismaModel>
    in?: $Enums.StaffRole[] | ListEnumStaffRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.StaffRole[] | ListEnumStaffRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumStaffRoleWithAggregatesFilter<$PrismaModel> | $Enums.StaffRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStaffRoleFilter<$PrismaModel>
    _max?: NestedEnumStaffRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumBillingCycleFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingCycle | EnumBillingCycleFieldRefInput<$PrismaModel>
    in?: $Enums.BillingCycle[] | ListEnumBillingCycleFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillingCycle[] | ListEnumBillingCycleFieldRefInput<$PrismaModel>
    not?: NestedEnumBillingCycleFilter<$PrismaModel> | $Enums.BillingCycle
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumBillingCycleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingCycle | EnumBillingCycleFieldRefInput<$PrismaModel>
    in?: $Enums.BillingCycle[] | ListEnumBillingCycleFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillingCycle[] | ListEnumBillingCycleFieldRefInput<$PrismaModel>
    not?: NestedEnumBillingCycleWithAggregatesFilter<$PrismaModel> | $Enums.BillingCycle
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBillingCycleFilter<$PrismaModel>
    _max?: NestedEnumBillingCycleFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumMemberStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberStatus | EnumMemberStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MemberStatus[] | ListEnumMemberStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberStatus[] | ListEnumMemberStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberStatusFilter<$PrismaModel> | $Enums.MemberStatus
  }

  export type NestedEnumMemberStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberStatus | EnumMemberStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MemberStatus[] | ListEnumMemberStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberStatus[] | ListEnumMemberStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberStatusWithAggregatesFilter<$PrismaModel> | $Enums.MemberStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMemberStatusFilter<$PrismaModel>
    _max?: NestedEnumMemberStatusFilter<$PrismaModel>
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type NestedEnumCheckInMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckInMethod | EnumCheckInMethodFieldRefInput<$PrismaModel>
    in?: $Enums.CheckInMethod[] | ListEnumCheckInMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.CheckInMethod[] | ListEnumCheckInMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumCheckInMethodFilter<$PrismaModel> | $Enums.CheckInMethod
  }

  export type NestedEnumCheckInMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckInMethod | EnumCheckInMethodFieldRefInput<$PrismaModel>
    in?: $Enums.CheckInMethod[] | ListEnumCheckInMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.CheckInMethod[] | ListEnumCheckInMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumCheckInMethodWithAggregatesFilter<$PrismaModel> | $Enums.CheckInMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCheckInMethodFilter<$PrismaModel>
    _max?: NestedEnumCheckInMethodFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StaffCreateWithoutTenantInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.StaffRole
    phone?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    classSessions?: ClassSessionCreateNestedManyWithoutTrainerInput
  }

  export type StaffUncheckedCreateWithoutTenantInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.StaffRole
    phone?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    classSessions?: ClassSessionUncheckedCreateNestedManyWithoutTrainerInput
  }

  export type StaffCreateOrConnectWithoutTenantInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutTenantInput, StaffUncheckedCreateWithoutTenantInput>
  }

  export type StaffCreateManyTenantInputEnvelope = {
    data: StaffCreateManyTenantInput | StaffCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type MemberCreateWithoutTenantInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    photoUrl?: string | null
    qrCode?: string | null
    pin?: string | null
    status?: $Enums.MemberStatus
    joinedAt?: Date | string
    expiresAt?: Date | string | null
    frozenAt?: Date | string | null
    frozenDays?: number
    emergencyContact?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: MembershipPlanCreateNestedOneWithoutMembersInput
    bookings?: BookingCreateNestedManyWithoutMemberInput
    checkIns?: CheckInCreateNestedManyWithoutMemberInput
    payments?: PaymentCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutTenantInput = {
    id?: string
    membershipPlanId?: string | null
    name: string
    email: string
    phone?: string | null
    photoUrl?: string | null
    qrCode?: string | null
    pin?: string | null
    status?: $Enums.MemberStatus
    joinedAt?: Date | string
    expiresAt?: Date | string | null
    frozenAt?: Date | string | null
    frozenDays?: number
    emergencyContact?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutMemberInput
    checkIns?: CheckInUncheckedCreateNestedManyWithoutMemberInput
    payments?: PaymentUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutTenantInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutTenantInput, MemberUncheckedCreateWithoutTenantInput>
  }

  export type MemberCreateManyTenantInputEnvelope = {
    data: MemberCreateManyTenantInput | MemberCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type MembershipPlanCreateWithoutTenantInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    billingCycle?: $Enums.BillingCycle
    maxClassesPerWeek?: number | null
    accessHoursStart?: number
    accessHoursEnd?: number
    features?: MembershipPlanCreatefeaturesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: MemberCreateNestedManyWithoutPlanInput
  }

  export type MembershipPlanUncheckedCreateWithoutTenantInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    billingCycle?: $Enums.BillingCycle
    maxClassesPerWeek?: number | null
    accessHoursStart?: number
    accessHoursEnd?: number
    features?: MembershipPlanCreatefeaturesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: MemberUncheckedCreateNestedManyWithoutPlanInput
  }

  export type MembershipPlanCreateOrConnectWithoutTenantInput = {
    where: MembershipPlanWhereUniqueInput
    create: XOR<MembershipPlanCreateWithoutTenantInput, MembershipPlanUncheckedCreateWithoutTenantInput>
  }

  export type MembershipPlanCreateManyTenantInputEnvelope = {
    data: MembershipPlanCreateManyTenantInput | MembershipPlanCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type ClassSessionCreateWithoutTenantInput = {
    id?: string
    name: string
    description?: string | null
    capacity?: number
    startTime: Date | string
    endTime: Date | string
    location?: string | null
    isRecurring?: boolean
    recurrenceRule?: string | null
    isCancelled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    trainer?: StaffCreateNestedOneWithoutClassSessionsInput
    bookings?: BookingCreateNestedManyWithoutClassSessionInput
  }

  export type ClassSessionUncheckedCreateWithoutTenantInput = {
    id?: string
    trainerId?: string | null
    name: string
    description?: string | null
    capacity?: number
    startTime: Date | string
    endTime: Date | string
    location?: string | null
    isRecurring?: boolean
    recurrenceRule?: string | null
    isCancelled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutClassSessionInput
  }

  export type ClassSessionCreateOrConnectWithoutTenantInput = {
    where: ClassSessionWhereUniqueInput
    create: XOR<ClassSessionCreateWithoutTenantInput, ClassSessionUncheckedCreateWithoutTenantInput>
  }

  export type ClassSessionCreateManyTenantInputEnvelope = {
    data: ClassSessionCreateManyTenantInput | ClassSessionCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type CheckInCreateWithoutTenantInput = {
    id?: string
    method?: $Enums.CheckInMethod
    checkedInAt?: Date | string
    note?: string | null
    member: MemberCreateNestedOneWithoutCheckInsInput
  }

  export type CheckInUncheckedCreateWithoutTenantInput = {
    id?: string
    memberId: string
    method?: $Enums.CheckInMethod
    checkedInAt?: Date | string
    note?: string | null
  }

  export type CheckInCreateOrConnectWithoutTenantInput = {
    where: CheckInWhereUniqueInput
    create: XOR<CheckInCreateWithoutTenantInput, CheckInUncheckedCreateWithoutTenantInput>
  }

  export type CheckInCreateManyTenantInputEnvelope = {
    data: CheckInCreateManyTenantInput | CheckInCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutTenantInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    gatewayRef?: string | null
    gatewayData?: NullableJsonNullValueInput | InputJsonValue
    description?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    member: MemberCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutTenantInput = {
    id?: string
    memberId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    gatewayRef?: string | null
    gatewayData?: NullableJsonNullValueInput | InputJsonValue
    description?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutTenantInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutTenantInput, PaymentUncheckedCreateWithoutTenantInput>
  }

  export type PaymentCreateManyTenantInputEnvelope = {
    data: PaymentCreateManyTenantInput | PaymentCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type StaffUpsertWithWhereUniqueWithoutTenantInput = {
    where: StaffWhereUniqueInput
    update: XOR<StaffUpdateWithoutTenantInput, StaffUncheckedUpdateWithoutTenantInput>
    create: XOR<StaffCreateWithoutTenantInput, StaffUncheckedCreateWithoutTenantInput>
  }

  export type StaffUpdateWithWhereUniqueWithoutTenantInput = {
    where: StaffWhereUniqueInput
    data: XOR<StaffUpdateWithoutTenantInput, StaffUncheckedUpdateWithoutTenantInput>
  }

  export type StaffUpdateManyWithWhereWithoutTenantInput = {
    where: StaffScalarWhereInput
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyWithoutTenantInput>
  }

  export type StaffScalarWhereInput = {
    AND?: StaffScalarWhereInput | StaffScalarWhereInput[]
    OR?: StaffScalarWhereInput[]
    NOT?: StaffScalarWhereInput | StaffScalarWhereInput[]
    id?: StringFilter<"Staff"> | string
    tenantId?: StringFilter<"Staff"> | string
    name?: StringFilter<"Staff"> | string
    email?: StringFilter<"Staff"> | string
    passwordHash?: StringFilter<"Staff"> | string
    role?: EnumStaffRoleFilter<"Staff"> | $Enums.StaffRole
    phone?: StringNullableFilter<"Staff"> | string | null
    avatarUrl?: StringNullableFilter<"Staff"> | string | null
    isActive?: BoolFilter<"Staff"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"Staff"> | Date | string | null
    createdAt?: DateTimeFilter<"Staff"> | Date | string
    updatedAt?: DateTimeFilter<"Staff"> | Date | string
  }

  export type MemberUpsertWithWhereUniqueWithoutTenantInput = {
    where: MemberWhereUniqueInput
    update: XOR<MemberUpdateWithoutTenantInput, MemberUncheckedUpdateWithoutTenantInput>
    create: XOR<MemberCreateWithoutTenantInput, MemberUncheckedCreateWithoutTenantInput>
  }

  export type MemberUpdateWithWhereUniqueWithoutTenantInput = {
    where: MemberWhereUniqueInput
    data: XOR<MemberUpdateWithoutTenantInput, MemberUncheckedUpdateWithoutTenantInput>
  }

  export type MemberUpdateManyWithWhereWithoutTenantInput = {
    where: MemberScalarWhereInput
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyWithoutTenantInput>
  }

  export type MemberScalarWhereInput = {
    AND?: MemberScalarWhereInput | MemberScalarWhereInput[]
    OR?: MemberScalarWhereInput[]
    NOT?: MemberScalarWhereInput | MemberScalarWhereInput[]
    id?: StringFilter<"Member"> | string
    tenantId?: StringFilter<"Member"> | string
    membershipPlanId?: StringNullableFilter<"Member"> | string | null
    name?: StringFilter<"Member"> | string
    email?: StringFilter<"Member"> | string
    phone?: StringNullableFilter<"Member"> | string | null
    photoUrl?: StringNullableFilter<"Member"> | string | null
    qrCode?: StringNullableFilter<"Member"> | string | null
    pin?: StringNullableFilter<"Member"> | string | null
    status?: EnumMemberStatusFilter<"Member"> | $Enums.MemberStatus
    joinedAt?: DateTimeFilter<"Member"> | Date | string
    expiresAt?: DateTimeNullableFilter<"Member"> | Date | string | null
    frozenAt?: DateTimeNullableFilter<"Member"> | Date | string | null
    frozenDays?: IntFilter<"Member"> | number
    emergencyContact?: StringNullableFilter<"Member"> | string | null
    notes?: StringNullableFilter<"Member"> | string | null
    createdAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeFilter<"Member"> | Date | string
  }

  export type MembershipPlanUpsertWithWhereUniqueWithoutTenantInput = {
    where: MembershipPlanWhereUniqueInput
    update: XOR<MembershipPlanUpdateWithoutTenantInput, MembershipPlanUncheckedUpdateWithoutTenantInput>
    create: XOR<MembershipPlanCreateWithoutTenantInput, MembershipPlanUncheckedCreateWithoutTenantInput>
  }

  export type MembershipPlanUpdateWithWhereUniqueWithoutTenantInput = {
    where: MembershipPlanWhereUniqueInput
    data: XOR<MembershipPlanUpdateWithoutTenantInput, MembershipPlanUncheckedUpdateWithoutTenantInput>
  }

  export type MembershipPlanUpdateManyWithWhereWithoutTenantInput = {
    where: MembershipPlanScalarWhereInput
    data: XOR<MembershipPlanUpdateManyMutationInput, MembershipPlanUncheckedUpdateManyWithoutTenantInput>
  }

  export type MembershipPlanScalarWhereInput = {
    AND?: MembershipPlanScalarWhereInput | MembershipPlanScalarWhereInput[]
    OR?: MembershipPlanScalarWhereInput[]
    NOT?: MembershipPlanScalarWhereInput | MembershipPlanScalarWhereInput[]
    id?: StringFilter<"MembershipPlan"> | string
    tenantId?: StringFilter<"MembershipPlan"> | string
    name?: StringFilter<"MembershipPlan"> | string
    description?: StringNullableFilter<"MembershipPlan"> | string | null
    price?: DecimalFilter<"MembershipPlan"> | Decimal | DecimalJsLike | number | string
    billingCycle?: EnumBillingCycleFilter<"MembershipPlan"> | $Enums.BillingCycle
    maxClassesPerWeek?: IntNullableFilter<"MembershipPlan"> | number | null
    accessHoursStart?: IntFilter<"MembershipPlan"> | number
    accessHoursEnd?: IntFilter<"MembershipPlan"> | number
    features?: StringNullableListFilter<"MembershipPlan">
    isActive?: BoolFilter<"MembershipPlan"> | boolean
    createdAt?: DateTimeFilter<"MembershipPlan"> | Date | string
    updatedAt?: DateTimeFilter<"MembershipPlan"> | Date | string
  }

  export type ClassSessionUpsertWithWhereUniqueWithoutTenantInput = {
    where: ClassSessionWhereUniqueInput
    update: XOR<ClassSessionUpdateWithoutTenantInput, ClassSessionUncheckedUpdateWithoutTenantInput>
    create: XOR<ClassSessionCreateWithoutTenantInput, ClassSessionUncheckedCreateWithoutTenantInput>
  }

  export type ClassSessionUpdateWithWhereUniqueWithoutTenantInput = {
    where: ClassSessionWhereUniqueInput
    data: XOR<ClassSessionUpdateWithoutTenantInput, ClassSessionUncheckedUpdateWithoutTenantInput>
  }

  export type ClassSessionUpdateManyWithWhereWithoutTenantInput = {
    where: ClassSessionScalarWhereInput
    data: XOR<ClassSessionUpdateManyMutationInput, ClassSessionUncheckedUpdateManyWithoutTenantInput>
  }

  export type ClassSessionScalarWhereInput = {
    AND?: ClassSessionScalarWhereInput | ClassSessionScalarWhereInput[]
    OR?: ClassSessionScalarWhereInput[]
    NOT?: ClassSessionScalarWhereInput | ClassSessionScalarWhereInput[]
    id?: StringFilter<"ClassSession"> | string
    tenantId?: StringFilter<"ClassSession"> | string
    trainerId?: StringNullableFilter<"ClassSession"> | string | null
    name?: StringFilter<"ClassSession"> | string
    description?: StringNullableFilter<"ClassSession"> | string | null
    capacity?: IntFilter<"ClassSession"> | number
    startTime?: DateTimeFilter<"ClassSession"> | Date | string
    endTime?: DateTimeFilter<"ClassSession"> | Date | string
    location?: StringNullableFilter<"ClassSession"> | string | null
    isRecurring?: BoolFilter<"ClassSession"> | boolean
    recurrenceRule?: StringNullableFilter<"ClassSession"> | string | null
    isCancelled?: BoolFilter<"ClassSession"> | boolean
    createdAt?: DateTimeFilter<"ClassSession"> | Date | string
    updatedAt?: DateTimeFilter<"ClassSession"> | Date | string
  }

  export type CheckInUpsertWithWhereUniqueWithoutTenantInput = {
    where: CheckInWhereUniqueInput
    update: XOR<CheckInUpdateWithoutTenantInput, CheckInUncheckedUpdateWithoutTenantInput>
    create: XOR<CheckInCreateWithoutTenantInput, CheckInUncheckedCreateWithoutTenantInput>
  }

  export type CheckInUpdateWithWhereUniqueWithoutTenantInput = {
    where: CheckInWhereUniqueInput
    data: XOR<CheckInUpdateWithoutTenantInput, CheckInUncheckedUpdateWithoutTenantInput>
  }

  export type CheckInUpdateManyWithWhereWithoutTenantInput = {
    where: CheckInScalarWhereInput
    data: XOR<CheckInUpdateManyMutationInput, CheckInUncheckedUpdateManyWithoutTenantInput>
  }

  export type CheckInScalarWhereInput = {
    AND?: CheckInScalarWhereInput | CheckInScalarWhereInput[]
    OR?: CheckInScalarWhereInput[]
    NOT?: CheckInScalarWhereInput | CheckInScalarWhereInput[]
    id?: StringFilter<"CheckIn"> | string
    memberId?: StringFilter<"CheckIn"> | string
    tenantId?: StringFilter<"CheckIn"> | string
    method?: EnumCheckInMethodFilter<"CheckIn"> | $Enums.CheckInMethod
    checkedInAt?: DateTimeFilter<"CheckIn"> | Date | string
    note?: StringNullableFilter<"CheckIn"> | string | null
  }

  export type PaymentUpsertWithWhereUniqueWithoutTenantInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutTenantInput, PaymentUncheckedUpdateWithoutTenantInput>
    create: XOR<PaymentCreateWithoutTenantInput, PaymentUncheckedCreateWithoutTenantInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutTenantInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutTenantInput, PaymentUncheckedUpdateWithoutTenantInput>
  }

  export type PaymentUpdateManyWithWhereWithoutTenantInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutTenantInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    memberId?: StringFilter<"Payment"> | string
    tenantId?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    gatewayRef?: StringNullableFilter<"Payment"> | string | null
    gatewayData?: JsonNullableFilter<"Payment">
    description?: StringNullableFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type TenantCreateWithoutStaffInput = {
    id?: string
    name: string
    slug: string
    planTier?: $Enums.PlanTier
    logoUrl?: string | null
    address?: string | null
    phone?: string | null
    email?: string | null
    currency?: string
    timezone?: string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: MemberCreateNestedManyWithoutTenantInput
    membershipPlans?: MembershipPlanCreateNestedManyWithoutTenantInput
    classSessions?: ClassSessionCreateNestedManyWithoutTenantInput
    checkIns?: CheckInCreateNestedManyWithoutTenantInput
    payments?: PaymentCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutStaffInput = {
    id?: string
    name: string
    slug: string
    planTier?: $Enums.PlanTier
    logoUrl?: string | null
    address?: string | null
    phone?: string | null
    email?: string | null
    currency?: string
    timezone?: string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: MemberUncheckedCreateNestedManyWithoutTenantInput
    membershipPlans?: MembershipPlanUncheckedCreateNestedManyWithoutTenantInput
    classSessions?: ClassSessionUncheckedCreateNestedManyWithoutTenantInput
    checkIns?: CheckInUncheckedCreateNestedManyWithoutTenantInput
    payments?: PaymentUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutStaffInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutStaffInput, TenantUncheckedCreateWithoutStaffInput>
  }

  export type ClassSessionCreateWithoutTrainerInput = {
    id?: string
    name: string
    description?: string | null
    capacity?: number
    startTime: Date | string
    endTime: Date | string
    location?: string | null
    isRecurring?: boolean
    recurrenceRule?: string | null
    isCancelled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutClassSessionsInput
    bookings?: BookingCreateNestedManyWithoutClassSessionInput
  }

  export type ClassSessionUncheckedCreateWithoutTrainerInput = {
    id?: string
    tenantId: string
    name: string
    description?: string | null
    capacity?: number
    startTime: Date | string
    endTime: Date | string
    location?: string | null
    isRecurring?: boolean
    recurrenceRule?: string | null
    isCancelled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutClassSessionInput
  }

  export type ClassSessionCreateOrConnectWithoutTrainerInput = {
    where: ClassSessionWhereUniqueInput
    create: XOR<ClassSessionCreateWithoutTrainerInput, ClassSessionUncheckedCreateWithoutTrainerInput>
  }

  export type ClassSessionCreateManyTrainerInputEnvelope = {
    data: ClassSessionCreateManyTrainerInput | ClassSessionCreateManyTrainerInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutStaffInput = {
    update: XOR<TenantUpdateWithoutStaffInput, TenantUncheckedUpdateWithoutStaffInput>
    create: XOR<TenantCreateWithoutStaffInput, TenantUncheckedCreateWithoutStaffInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutStaffInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutStaffInput, TenantUncheckedUpdateWithoutStaffInput>
  }

  export type TenantUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    planTier?: EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUpdateManyWithoutTenantNestedInput
    membershipPlans?: MembershipPlanUpdateManyWithoutTenantNestedInput
    classSessions?: ClassSessionUpdateManyWithoutTenantNestedInput
    checkIns?: CheckInUpdateManyWithoutTenantNestedInput
    payments?: PaymentUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    planTier?: EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUncheckedUpdateManyWithoutTenantNestedInput
    membershipPlans?: MembershipPlanUncheckedUpdateManyWithoutTenantNestedInput
    classSessions?: ClassSessionUncheckedUpdateManyWithoutTenantNestedInput
    checkIns?: CheckInUncheckedUpdateManyWithoutTenantNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type ClassSessionUpsertWithWhereUniqueWithoutTrainerInput = {
    where: ClassSessionWhereUniqueInput
    update: XOR<ClassSessionUpdateWithoutTrainerInput, ClassSessionUncheckedUpdateWithoutTrainerInput>
    create: XOR<ClassSessionCreateWithoutTrainerInput, ClassSessionUncheckedCreateWithoutTrainerInput>
  }

  export type ClassSessionUpdateWithWhereUniqueWithoutTrainerInput = {
    where: ClassSessionWhereUniqueInput
    data: XOR<ClassSessionUpdateWithoutTrainerInput, ClassSessionUncheckedUpdateWithoutTrainerInput>
  }

  export type ClassSessionUpdateManyWithWhereWithoutTrainerInput = {
    where: ClassSessionScalarWhereInput
    data: XOR<ClassSessionUpdateManyMutationInput, ClassSessionUncheckedUpdateManyWithoutTrainerInput>
  }

  export type TenantCreateWithoutMembershipPlansInput = {
    id?: string
    name: string
    slug: string
    planTier?: $Enums.PlanTier
    logoUrl?: string | null
    address?: string | null
    phone?: string | null
    email?: string | null
    currency?: string
    timezone?: string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: StaffCreateNestedManyWithoutTenantInput
    members?: MemberCreateNestedManyWithoutTenantInput
    classSessions?: ClassSessionCreateNestedManyWithoutTenantInput
    checkIns?: CheckInCreateNestedManyWithoutTenantInput
    payments?: PaymentCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutMembershipPlansInput = {
    id?: string
    name: string
    slug: string
    planTier?: $Enums.PlanTier
    logoUrl?: string | null
    address?: string | null
    phone?: string | null
    email?: string | null
    currency?: string
    timezone?: string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: StaffUncheckedCreateNestedManyWithoutTenantInput
    members?: MemberUncheckedCreateNestedManyWithoutTenantInput
    classSessions?: ClassSessionUncheckedCreateNestedManyWithoutTenantInput
    checkIns?: CheckInUncheckedCreateNestedManyWithoutTenantInput
    payments?: PaymentUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutMembershipPlansInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutMembershipPlansInput, TenantUncheckedCreateWithoutMembershipPlansInput>
  }

  export type MemberCreateWithoutPlanInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    photoUrl?: string | null
    qrCode?: string | null
    pin?: string | null
    status?: $Enums.MemberStatus
    joinedAt?: Date | string
    expiresAt?: Date | string | null
    frozenAt?: Date | string | null
    frozenDays?: number
    emergencyContact?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutMembersInput
    bookings?: BookingCreateNestedManyWithoutMemberInput
    checkIns?: CheckInCreateNestedManyWithoutMemberInput
    payments?: PaymentCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutPlanInput = {
    id?: string
    tenantId: string
    name: string
    email: string
    phone?: string | null
    photoUrl?: string | null
    qrCode?: string | null
    pin?: string | null
    status?: $Enums.MemberStatus
    joinedAt?: Date | string
    expiresAt?: Date | string | null
    frozenAt?: Date | string | null
    frozenDays?: number
    emergencyContact?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutMemberInput
    checkIns?: CheckInUncheckedCreateNestedManyWithoutMemberInput
    payments?: PaymentUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutPlanInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutPlanInput, MemberUncheckedCreateWithoutPlanInput>
  }

  export type MemberCreateManyPlanInputEnvelope = {
    data: MemberCreateManyPlanInput | MemberCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutMembershipPlansInput = {
    update: XOR<TenantUpdateWithoutMembershipPlansInput, TenantUncheckedUpdateWithoutMembershipPlansInput>
    create: XOR<TenantCreateWithoutMembershipPlansInput, TenantUncheckedCreateWithoutMembershipPlansInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutMembershipPlansInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutMembershipPlansInput, TenantUncheckedUpdateWithoutMembershipPlansInput>
  }

  export type TenantUpdateWithoutMembershipPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    planTier?: EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: StaffUpdateManyWithoutTenantNestedInput
    members?: MemberUpdateManyWithoutTenantNestedInput
    classSessions?: ClassSessionUpdateManyWithoutTenantNestedInput
    checkIns?: CheckInUpdateManyWithoutTenantNestedInput
    payments?: PaymentUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutMembershipPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    planTier?: EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: StaffUncheckedUpdateManyWithoutTenantNestedInput
    members?: MemberUncheckedUpdateManyWithoutTenantNestedInput
    classSessions?: ClassSessionUncheckedUpdateManyWithoutTenantNestedInput
    checkIns?: CheckInUncheckedUpdateManyWithoutTenantNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type MemberUpsertWithWhereUniqueWithoutPlanInput = {
    where: MemberWhereUniqueInput
    update: XOR<MemberUpdateWithoutPlanInput, MemberUncheckedUpdateWithoutPlanInput>
    create: XOR<MemberCreateWithoutPlanInput, MemberUncheckedCreateWithoutPlanInput>
  }

  export type MemberUpdateWithWhereUniqueWithoutPlanInput = {
    where: MemberWhereUniqueInput
    data: XOR<MemberUpdateWithoutPlanInput, MemberUncheckedUpdateWithoutPlanInput>
  }

  export type MemberUpdateManyWithWhereWithoutPlanInput = {
    where: MemberScalarWhereInput
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyWithoutPlanInput>
  }

  export type TenantCreateWithoutMembersInput = {
    id?: string
    name: string
    slug: string
    planTier?: $Enums.PlanTier
    logoUrl?: string | null
    address?: string | null
    phone?: string | null
    email?: string | null
    currency?: string
    timezone?: string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: StaffCreateNestedManyWithoutTenantInput
    membershipPlans?: MembershipPlanCreateNestedManyWithoutTenantInput
    classSessions?: ClassSessionCreateNestedManyWithoutTenantInput
    checkIns?: CheckInCreateNestedManyWithoutTenantInput
    payments?: PaymentCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    slug: string
    planTier?: $Enums.PlanTier
    logoUrl?: string | null
    address?: string | null
    phone?: string | null
    email?: string | null
    currency?: string
    timezone?: string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: StaffUncheckedCreateNestedManyWithoutTenantInput
    membershipPlans?: MembershipPlanUncheckedCreateNestedManyWithoutTenantInput
    classSessions?: ClassSessionUncheckedCreateNestedManyWithoutTenantInput
    checkIns?: CheckInUncheckedCreateNestedManyWithoutTenantInput
    payments?: PaymentUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutMembersInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutMembersInput, TenantUncheckedCreateWithoutMembersInput>
  }

  export type MembershipPlanCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    billingCycle?: $Enums.BillingCycle
    maxClassesPerWeek?: number | null
    accessHoursStart?: number
    accessHoursEnd?: number
    features?: MembershipPlanCreatefeaturesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutMembershipPlansInput
  }

  export type MembershipPlanUncheckedCreateWithoutMembersInput = {
    id?: string
    tenantId: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    billingCycle?: $Enums.BillingCycle
    maxClassesPerWeek?: number | null
    accessHoursStart?: number
    accessHoursEnd?: number
    features?: MembershipPlanCreatefeaturesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembershipPlanCreateOrConnectWithoutMembersInput = {
    where: MembershipPlanWhereUniqueInput
    create: XOR<MembershipPlanCreateWithoutMembersInput, MembershipPlanUncheckedCreateWithoutMembersInput>
  }

  export type BookingCreateWithoutMemberInput = {
    id?: string
    status?: $Enums.BookingStatus
    bookedAt?: Date | string
    cancelledAt?: Date | string | null
    attendedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    classSession: ClassSessionCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutMemberInput = {
    id?: string
    classSessionId: string
    status?: $Enums.BookingStatus
    bookedAt?: Date | string
    cancelledAt?: Date | string | null
    attendedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutMemberInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutMemberInput, BookingUncheckedCreateWithoutMemberInput>
  }

  export type BookingCreateManyMemberInputEnvelope = {
    data: BookingCreateManyMemberInput | BookingCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type CheckInCreateWithoutMemberInput = {
    id?: string
    method?: $Enums.CheckInMethod
    checkedInAt?: Date | string
    note?: string | null
    tenant: TenantCreateNestedOneWithoutCheckInsInput
  }

  export type CheckInUncheckedCreateWithoutMemberInput = {
    id?: string
    tenantId: string
    method?: $Enums.CheckInMethod
    checkedInAt?: Date | string
    note?: string | null
  }

  export type CheckInCreateOrConnectWithoutMemberInput = {
    where: CheckInWhereUniqueInput
    create: XOR<CheckInCreateWithoutMemberInput, CheckInUncheckedCreateWithoutMemberInput>
  }

  export type CheckInCreateManyMemberInputEnvelope = {
    data: CheckInCreateManyMemberInput | CheckInCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutMemberInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    gatewayRef?: string | null
    gatewayData?: NullableJsonNullValueInput | InputJsonValue
    description?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutMemberInput = {
    id?: string
    tenantId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    gatewayRef?: string | null
    gatewayData?: NullableJsonNullValueInput | InputJsonValue
    description?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutMemberInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutMemberInput, PaymentUncheckedCreateWithoutMemberInput>
  }

  export type PaymentCreateManyMemberInputEnvelope = {
    data: PaymentCreateManyMemberInput | PaymentCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutMembersInput = {
    update: XOR<TenantUpdateWithoutMembersInput, TenantUncheckedUpdateWithoutMembersInput>
    create: XOR<TenantCreateWithoutMembersInput, TenantUncheckedCreateWithoutMembersInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutMembersInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutMembersInput, TenantUncheckedUpdateWithoutMembersInput>
  }

  export type TenantUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    planTier?: EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: StaffUpdateManyWithoutTenantNestedInput
    membershipPlans?: MembershipPlanUpdateManyWithoutTenantNestedInput
    classSessions?: ClassSessionUpdateManyWithoutTenantNestedInput
    checkIns?: CheckInUpdateManyWithoutTenantNestedInput
    payments?: PaymentUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    planTier?: EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: StaffUncheckedUpdateManyWithoutTenantNestedInput
    membershipPlans?: MembershipPlanUncheckedUpdateManyWithoutTenantNestedInput
    classSessions?: ClassSessionUncheckedUpdateManyWithoutTenantNestedInput
    checkIns?: CheckInUncheckedUpdateManyWithoutTenantNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type MembershipPlanUpsertWithoutMembersInput = {
    update: XOR<MembershipPlanUpdateWithoutMembersInput, MembershipPlanUncheckedUpdateWithoutMembersInput>
    create: XOR<MembershipPlanCreateWithoutMembersInput, MembershipPlanUncheckedCreateWithoutMembersInput>
    where?: MembershipPlanWhereInput
  }

  export type MembershipPlanUpdateToOneWithWhereWithoutMembersInput = {
    where?: MembershipPlanWhereInput
    data: XOR<MembershipPlanUpdateWithoutMembersInput, MembershipPlanUncheckedUpdateWithoutMembersInput>
  }

  export type MembershipPlanUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    billingCycle?: EnumBillingCycleFieldUpdateOperationsInput | $Enums.BillingCycle
    maxClassesPerWeek?: NullableIntFieldUpdateOperationsInput | number | null
    accessHoursStart?: IntFieldUpdateOperationsInput | number
    accessHoursEnd?: IntFieldUpdateOperationsInput | number
    features?: MembershipPlanUpdatefeaturesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutMembershipPlansNestedInput
  }

  export type MembershipPlanUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    billingCycle?: EnumBillingCycleFieldUpdateOperationsInput | $Enums.BillingCycle
    maxClassesPerWeek?: NullableIntFieldUpdateOperationsInput | number | null
    accessHoursStart?: IntFieldUpdateOperationsInput | number
    accessHoursEnd?: IntFieldUpdateOperationsInput | number
    features?: MembershipPlanUpdatefeaturesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpsertWithWhereUniqueWithoutMemberInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutMemberInput, BookingUncheckedUpdateWithoutMemberInput>
    create: XOR<BookingCreateWithoutMemberInput, BookingUncheckedCreateWithoutMemberInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutMemberInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutMemberInput, BookingUncheckedUpdateWithoutMemberInput>
  }

  export type BookingUpdateManyWithWhereWithoutMemberInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutMemberInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    memberId?: StringFilter<"Booking"> | string
    classSessionId?: StringFilter<"Booking"> | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    bookedAt?: DateTimeFilter<"Booking"> | Date | string
    cancelledAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    attendedAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type CheckInUpsertWithWhereUniqueWithoutMemberInput = {
    where: CheckInWhereUniqueInput
    update: XOR<CheckInUpdateWithoutMemberInput, CheckInUncheckedUpdateWithoutMemberInput>
    create: XOR<CheckInCreateWithoutMemberInput, CheckInUncheckedCreateWithoutMemberInput>
  }

  export type CheckInUpdateWithWhereUniqueWithoutMemberInput = {
    where: CheckInWhereUniqueInput
    data: XOR<CheckInUpdateWithoutMemberInput, CheckInUncheckedUpdateWithoutMemberInput>
  }

  export type CheckInUpdateManyWithWhereWithoutMemberInput = {
    where: CheckInScalarWhereInput
    data: XOR<CheckInUpdateManyMutationInput, CheckInUncheckedUpdateManyWithoutMemberInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutMemberInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutMemberInput, PaymentUncheckedUpdateWithoutMemberInput>
    create: XOR<PaymentCreateWithoutMemberInput, PaymentUncheckedCreateWithoutMemberInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutMemberInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutMemberInput, PaymentUncheckedUpdateWithoutMemberInput>
  }

  export type PaymentUpdateManyWithWhereWithoutMemberInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutMemberInput>
  }

  export type TenantCreateWithoutClassSessionsInput = {
    id?: string
    name: string
    slug: string
    planTier?: $Enums.PlanTier
    logoUrl?: string | null
    address?: string | null
    phone?: string | null
    email?: string | null
    currency?: string
    timezone?: string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: StaffCreateNestedManyWithoutTenantInput
    members?: MemberCreateNestedManyWithoutTenantInput
    membershipPlans?: MembershipPlanCreateNestedManyWithoutTenantInput
    checkIns?: CheckInCreateNestedManyWithoutTenantInput
    payments?: PaymentCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutClassSessionsInput = {
    id?: string
    name: string
    slug: string
    planTier?: $Enums.PlanTier
    logoUrl?: string | null
    address?: string | null
    phone?: string | null
    email?: string | null
    currency?: string
    timezone?: string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: StaffUncheckedCreateNestedManyWithoutTenantInput
    members?: MemberUncheckedCreateNestedManyWithoutTenantInput
    membershipPlans?: MembershipPlanUncheckedCreateNestedManyWithoutTenantInput
    checkIns?: CheckInUncheckedCreateNestedManyWithoutTenantInput
    payments?: PaymentUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutClassSessionsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutClassSessionsInput, TenantUncheckedCreateWithoutClassSessionsInput>
  }

  export type StaffCreateWithoutClassSessionsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.StaffRole
    phone?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutStaffInput
  }

  export type StaffUncheckedCreateWithoutClassSessionsInput = {
    id?: string
    tenantId: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.StaffRole
    phone?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffCreateOrConnectWithoutClassSessionsInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutClassSessionsInput, StaffUncheckedCreateWithoutClassSessionsInput>
  }

  export type BookingCreateWithoutClassSessionInput = {
    id?: string
    status?: $Enums.BookingStatus
    bookedAt?: Date | string
    cancelledAt?: Date | string | null
    attendedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    member: MemberCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutClassSessionInput = {
    id?: string
    memberId: string
    status?: $Enums.BookingStatus
    bookedAt?: Date | string
    cancelledAt?: Date | string | null
    attendedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutClassSessionInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutClassSessionInput, BookingUncheckedCreateWithoutClassSessionInput>
  }

  export type BookingCreateManyClassSessionInputEnvelope = {
    data: BookingCreateManyClassSessionInput | BookingCreateManyClassSessionInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutClassSessionsInput = {
    update: XOR<TenantUpdateWithoutClassSessionsInput, TenantUncheckedUpdateWithoutClassSessionsInput>
    create: XOR<TenantCreateWithoutClassSessionsInput, TenantUncheckedCreateWithoutClassSessionsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutClassSessionsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutClassSessionsInput, TenantUncheckedUpdateWithoutClassSessionsInput>
  }

  export type TenantUpdateWithoutClassSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    planTier?: EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: StaffUpdateManyWithoutTenantNestedInput
    members?: MemberUpdateManyWithoutTenantNestedInput
    membershipPlans?: MembershipPlanUpdateManyWithoutTenantNestedInput
    checkIns?: CheckInUpdateManyWithoutTenantNestedInput
    payments?: PaymentUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutClassSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    planTier?: EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: StaffUncheckedUpdateManyWithoutTenantNestedInput
    members?: MemberUncheckedUpdateManyWithoutTenantNestedInput
    membershipPlans?: MembershipPlanUncheckedUpdateManyWithoutTenantNestedInput
    checkIns?: CheckInUncheckedUpdateManyWithoutTenantNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type StaffUpsertWithoutClassSessionsInput = {
    update: XOR<StaffUpdateWithoutClassSessionsInput, StaffUncheckedUpdateWithoutClassSessionsInput>
    create: XOR<StaffCreateWithoutClassSessionsInput, StaffUncheckedCreateWithoutClassSessionsInput>
    where?: StaffWhereInput
  }

  export type StaffUpdateToOneWithWhereWithoutClassSessionsInput = {
    where?: StaffWhereInput
    data: XOR<StaffUpdateWithoutClassSessionsInput, StaffUncheckedUpdateWithoutClassSessionsInput>
  }

  export type StaffUpdateWithoutClassSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateWithoutClassSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpsertWithWhereUniqueWithoutClassSessionInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutClassSessionInput, BookingUncheckedUpdateWithoutClassSessionInput>
    create: XOR<BookingCreateWithoutClassSessionInput, BookingUncheckedCreateWithoutClassSessionInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutClassSessionInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutClassSessionInput, BookingUncheckedUpdateWithoutClassSessionInput>
  }

  export type BookingUpdateManyWithWhereWithoutClassSessionInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutClassSessionInput>
  }

  export type MemberCreateWithoutBookingsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    photoUrl?: string | null
    qrCode?: string | null
    pin?: string | null
    status?: $Enums.MemberStatus
    joinedAt?: Date | string
    expiresAt?: Date | string | null
    frozenAt?: Date | string | null
    frozenDays?: number
    emergencyContact?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutMembersInput
    plan?: MembershipPlanCreateNestedOneWithoutMembersInput
    checkIns?: CheckInCreateNestedManyWithoutMemberInput
    payments?: PaymentCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutBookingsInput = {
    id?: string
    tenantId: string
    membershipPlanId?: string | null
    name: string
    email: string
    phone?: string | null
    photoUrl?: string | null
    qrCode?: string | null
    pin?: string | null
    status?: $Enums.MemberStatus
    joinedAt?: Date | string
    expiresAt?: Date | string | null
    frozenAt?: Date | string | null
    frozenDays?: number
    emergencyContact?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    checkIns?: CheckInUncheckedCreateNestedManyWithoutMemberInput
    payments?: PaymentUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutBookingsInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutBookingsInput, MemberUncheckedCreateWithoutBookingsInput>
  }

  export type ClassSessionCreateWithoutBookingsInput = {
    id?: string
    name: string
    description?: string | null
    capacity?: number
    startTime: Date | string
    endTime: Date | string
    location?: string | null
    isRecurring?: boolean
    recurrenceRule?: string | null
    isCancelled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutClassSessionsInput
    trainer?: StaffCreateNestedOneWithoutClassSessionsInput
  }

  export type ClassSessionUncheckedCreateWithoutBookingsInput = {
    id?: string
    tenantId: string
    trainerId?: string | null
    name: string
    description?: string | null
    capacity?: number
    startTime: Date | string
    endTime: Date | string
    location?: string | null
    isRecurring?: boolean
    recurrenceRule?: string | null
    isCancelled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassSessionCreateOrConnectWithoutBookingsInput = {
    where: ClassSessionWhereUniqueInput
    create: XOR<ClassSessionCreateWithoutBookingsInput, ClassSessionUncheckedCreateWithoutBookingsInput>
  }

  export type MemberUpsertWithoutBookingsInput = {
    update: XOR<MemberUpdateWithoutBookingsInput, MemberUncheckedUpdateWithoutBookingsInput>
    create: XOR<MemberCreateWithoutBookingsInput, MemberUncheckedCreateWithoutBookingsInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutBookingsInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutBookingsInput, MemberUncheckedUpdateWithoutBookingsInput>
  }

  export type MemberUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenDays?: IntFieldUpdateOperationsInput | number
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutMembersNestedInput
    plan?: MembershipPlanUpdateOneWithoutMembersNestedInput
    checkIns?: CheckInUpdateManyWithoutMemberNestedInput
    payments?: PaymentUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    membershipPlanId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenDays?: IntFieldUpdateOperationsInput | number
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkIns?: CheckInUncheckedUpdateManyWithoutMemberNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type ClassSessionUpsertWithoutBookingsInput = {
    update: XOR<ClassSessionUpdateWithoutBookingsInput, ClassSessionUncheckedUpdateWithoutBookingsInput>
    create: XOR<ClassSessionCreateWithoutBookingsInput, ClassSessionUncheckedCreateWithoutBookingsInput>
    where?: ClassSessionWhereInput
  }

  export type ClassSessionUpdateToOneWithWhereWithoutBookingsInput = {
    where?: ClassSessionWhereInput
    data: XOR<ClassSessionUpdateWithoutBookingsInput, ClassSessionUncheckedUpdateWithoutBookingsInput>
  }

  export type ClassSessionUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrenceRule?: NullableStringFieldUpdateOperationsInput | string | null
    isCancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutClassSessionsNestedInput
    trainer?: StaffUpdateOneWithoutClassSessionsNestedInput
  }

  export type ClassSessionUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    trainerId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrenceRule?: NullableStringFieldUpdateOperationsInput | string | null
    isCancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberCreateWithoutCheckInsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    photoUrl?: string | null
    qrCode?: string | null
    pin?: string | null
    status?: $Enums.MemberStatus
    joinedAt?: Date | string
    expiresAt?: Date | string | null
    frozenAt?: Date | string | null
    frozenDays?: number
    emergencyContact?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutMembersInput
    plan?: MembershipPlanCreateNestedOneWithoutMembersInput
    bookings?: BookingCreateNestedManyWithoutMemberInput
    payments?: PaymentCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutCheckInsInput = {
    id?: string
    tenantId: string
    membershipPlanId?: string | null
    name: string
    email: string
    phone?: string | null
    photoUrl?: string | null
    qrCode?: string | null
    pin?: string | null
    status?: $Enums.MemberStatus
    joinedAt?: Date | string
    expiresAt?: Date | string | null
    frozenAt?: Date | string | null
    frozenDays?: number
    emergencyContact?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutMemberInput
    payments?: PaymentUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutCheckInsInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutCheckInsInput, MemberUncheckedCreateWithoutCheckInsInput>
  }

  export type TenantCreateWithoutCheckInsInput = {
    id?: string
    name: string
    slug: string
    planTier?: $Enums.PlanTier
    logoUrl?: string | null
    address?: string | null
    phone?: string | null
    email?: string | null
    currency?: string
    timezone?: string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: StaffCreateNestedManyWithoutTenantInput
    members?: MemberCreateNestedManyWithoutTenantInput
    membershipPlans?: MembershipPlanCreateNestedManyWithoutTenantInput
    classSessions?: ClassSessionCreateNestedManyWithoutTenantInput
    payments?: PaymentCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutCheckInsInput = {
    id?: string
    name: string
    slug: string
    planTier?: $Enums.PlanTier
    logoUrl?: string | null
    address?: string | null
    phone?: string | null
    email?: string | null
    currency?: string
    timezone?: string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: StaffUncheckedCreateNestedManyWithoutTenantInput
    members?: MemberUncheckedCreateNestedManyWithoutTenantInput
    membershipPlans?: MembershipPlanUncheckedCreateNestedManyWithoutTenantInput
    classSessions?: ClassSessionUncheckedCreateNestedManyWithoutTenantInput
    payments?: PaymentUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutCheckInsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutCheckInsInput, TenantUncheckedCreateWithoutCheckInsInput>
  }

  export type MemberUpsertWithoutCheckInsInput = {
    update: XOR<MemberUpdateWithoutCheckInsInput, MemberUncheckedUpdateWithoutCheckInsInput>
    create: XOR<MemberCreateWithoutCheckInsInput, MemberUncheckedCreateWithoutCheckInsInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutCheckInsInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutCheckInsInput, MemberUncheckedUpdateWithoutCheckInsInput>
  }

  export type MemberUpdateWithoutCheckInsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenDays?: IntFieldUpdateOperationsInput | number
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutMembersNestedInput
    plan?: MembershipPlanUpdateOneWithoutMembersNestedInput
    bookings?: BookingUpdateManyWithoutMemberNestedInput
    payments?: PaymentUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutCheckInsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    membershipPlanId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenDays?: IntFieldUpdateOperationsInput | number
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutMemberNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type TenantUpsertWithoutCheckInsInput = {
    update: XOR<TenantUpdateWithoutCheckInsInput, TenantUncheckedUpdateWithoutCheckInsInput>
    create: XOR<TenantCreateWithoutCheckInsInput, TenantUncheckedCreateWithoutCheckInsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutCheckInsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutCheckInsInput, TenantUncheckedUpdateWithoutCheckInsInput>
  }

  export type TenantUpdateWithoutCheckInsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    planTier?: EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: StaffUpdateManyWithoutTenantNestedInput
    members?: MemberUpdateManyWithoutTenantNestedInput
    membershipPlans?: MembershipPlanUpdateManyWithoutTenantNestedInput
    classSessions?: ClassSessionUpdateManyWithoutTenantNestedInput
    payments?: PaymentUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutCheckInsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    planTier?: EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: StaffUncheckedUpdateManyWithoutTenantNestedInput
    members?: MemberUncheckedUpdateManyWithoutTenantNestedInput
    membershipPlans?: MembershipPlanUncheckedUpdateManyWithoutTenantNestedInput
    classSessions?: ClassSessionUncheckedUpdateManyWithoutTenantNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type MemberCreateWithoutPaymentsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    photoUrl?: string | null
    qrCode?: string | null
    pin?: string | null
    status?: $Enums.MemberStatus
    joinedAt?: Date | string
    expiresAt?: Date | string | null
    frozenAt?: Date | string | null
    frozenDays?: number
    emergencyContact?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutMembersInput
    plan?: MembershipPlanCreateNestedOneWithoutMembersInput
    bookings?: BookingCreateNestedManyWithoutMemberInput
    checkIns?: CheckInCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutPaymentsInput = {
    id?: string
    tenantId: string
    membershipPlanId?: string | null
    name: string
    email: string
    phone?: string | null
    photoUrl?: string | null
    qrCode?: string | null
    pin?: string | null
    status?: $Enums.MemberStatus
    joinedAt?: Date | string
    expiresAt?: Date | string | null
    frozenAt?: Date | string | null
    frozenDays?: number
    emergencyContact?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutMemberInput
    checkIns?: CheckInUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutPaymentsInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutPaymentsInput, MemberUncheckedCreateWithoutPaymentsInput>
  }

  export type TenantCreateWithoutPaymentsInput = {
    id?: string
    name: string
    slug: string
    planTier?: $Enums.PlanTier
    logoUrl?: string | null
    address?: string | null
    phone?: string | null
    email?: string | null
    currency?: string
    timezone?: string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: StaffCreateNestedManyWithoutTenantInput
    members?: MemberCreateNestedManyWithoutTenantInput
    membershipPlans?: MembershipPlanCreateNestedManyWithoutTenantInput
    classSessions?: ClassSessionCreateNestedManyWithoutTenantInput
    checkIns?: CheckInCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutPaymentsInput = {
    id?: string
    name: string
    slug: string
    planTier?: $Enums.PlanTier
    logoUrl?: string | null
    address?: string | null
    phone?: string | null
    email?: string | null
    currency?: string
    timezone?: string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: StaffUncheckedCreateNestedManyWithoutTenantInput
    members?: MemberUncheckedCreateNestedManyWithoutTenantInput
    membershipPlans?: MembershipPlanUncheckedCreateNestedManyWithoutTenantInput
    classSessions?: ClassSessionUncheckedCreateNestedManyWithoutTenantInput
    checkIns?: CheckInUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutPaymentsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutPaymentsInput, TenantUncheckedCreateWithoutPaymentsInput>
  }

  export type MemberUpsertWithoutPaymentsInput = {
    update: XOR<MemberUpdateWithoutPaymentsInput, MemberUncheckedUpdateWithoutPaymentsInput>
    create: XOR<MemberCreateWithoutPaymentsInput, MemberUncheckedCreateWithoutPaymentsInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutPaymentsInput, MemberUncheckedUpdateWithoutPaymentsInput>
  }

  export type MemberUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenDays?: IntFieldUpdateOperationsInput | number
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutMembersNestedInput
    plan?: MembershipPlanUpdateOneWithoutMembersNestedInput
    bookings?: BookingUpdateManyWithoutMemberNestedInput
    checkIns?: CheckInUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    membershipPlanId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenDays?: IntFieldUpdateOperationsInput | number
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutMemberNestedInput
    checkIns?: CheckInUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type TenantUpsertWithoutPaymentsInput = {
    update: XOR<TenantUpdateWithoutPaymentsInput, TenantUncheckedUpdateWithoutPaymentsInput>
    create: XOR<TenantCreateWithoutPaymentsInput, TenantUncheckedCreateWithoutPaymentsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutPaymentsInput, TenantUncheckedUpdateWithoutPaymentsInput>
  }

  export type TenantUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    planTier?: EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: StaffUpdateManyWithoutTenantNestedInput
    members?: MemberUpdateManyWithoutTenantNestedInput
    membershipPlans?: MembershipPlanUpdateManyWithoutTenantNestedInput
    classSessions?: ClassSessionUpdateManyWithoutTenantNestedInput
    checkIns?: CheckInUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    planTier?: EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: StaffUncheckedUpdateManyWithoutTenantNestedInput
    members?: MemberUncheckedUpdateManyWithoutTenantNestedInput
    membershipPlans?: MembershipPlanUncheckedUpdateManyWithoutTenantNestedInput
    classSessions?: ClassSessionUncheckedUpdateManyWithoutTenantNestedInput
    checkIns?: CheckInUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type StaffCreateManyTenantInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.StaffRole
    phone?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberCreateManyTenantInput = {
    id?: string
    membershipPlanId?: string | null
    name: string
    email: string
    phone?: string | null
    photoUrl?: string | null
    qrCode?: string | null
    pin?: string | null
    status?: $Enums.MemberStatus
    joinedAt?: Date | string
    expiresAt?: Date | string | null
    frozenAt?: Date | string | null
    frozenDays?: number
    emergencyContact?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembershipPlanCreateManyTenantInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    billingCycle?: $Enums.BillingCycle
    maxClassesPerWeek?: number | null
    accessHoursStart?: number
    accessHoursEnd?: number
    features?: MembershipPlanCreatefeaturesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassSessionCreateManyTenantInput = {
    id?: string
    trainerId?: string | null
    name: string
    description?: string | null
    capacity?: number
    startTime: Date | string
    endTime: Date | string
    location?: string | null
    isRecurring?: boolean
    recurrenceRule?: string | null
    isCancelled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CheckInCreateManyTenantInput = {
    id?: string
    memberId: string
    method?: $Enums.CheckInMethod
    checkedInAt?: Date | string
    note?: string | null
  }

  export type PaymentCreateManyTenantInput = {
    id?: string
    memberId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    gatewayRef?: string | null
    gatewayData?: NullableJsonNullValueInput | InputJsonValue
    description?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classSessions?: ClassSessionUpdateManyWithoutTrainerNestedInput
  }

  export type StaffUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classSessions?: ClassSessionUncheckedUpdateManyWithoutTrainerNestedInput
  }

  export type StaffUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenDays?: IntFieldUpdateOperationsInput | number
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: MembershipPlanUpdateOneWithoutMembersNestedInput
    bookings?: BookingUpdateManyWithoutMemberNestedInput
    checkIns?: CheckInUpdateManyWithoutMemberNestedInput
    payments?: PaymentUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    membershipPlanId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenDays?: IntFieldUpdateOperationsInput | number
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutMemberNestedInput
    checkIns?: CheckInUncheckedUpdateManyWithoutMemberNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    membershipPlanId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenDays?: IntFieldUpdateOperationsInput | number
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipPlanUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    billingCycle?: EnumBillingCycleFieldUpdateOperationsInput | $Enums.BillingCycle
    maxClassesPerWeek?: NullableIntFieldUpdateOperationsInput | number | null
    accessHoursStart?: IntFieldUpdateOperationsInput | number
    accessHoursEnd?: IntFieldUpdateOperationsInput | number
    features?: MembershipPlanUpdatefeaturesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUpdateManyWithoutPlanNestedInput
  }

  export type MembershipPlanUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    billingCycle?: EnumBillingCycleFieldUpdateOperationsInput | $Enums.BillingCycle
    maxClassesPerWeek?: NullableIntFieldUpdateOperationsInput | number | null
    accessHoursStart?: IntFieldUpdateOperationsInput | number
    accessHoursEnd?: IntFieldUpdateOperationsInput | number
    features?: MembershipPlanUpdatefeaturesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type MembershipPlanUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    billingCycle?: EnumBillingCycleFieldUpdateOperationsInput | $Enums.BillingCycle
    maxClassesPerWeek?: NullableIntFieldUpdateOperationsInput | number | null
    accessHoursStart?: IntFieldUpdateOperationsInput | number
    accessHoursEnd?: IntFieldUpdateOperationsInput | number
    features?: MembershipPlanUpdatefeaturesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassSessionUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrenceRule?: NullableStringFieldUpdateOperationsInput | string | null
    isCancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainer?: StaffUpdateOneWithoutClassSessionsNestedInput
    bookings?: BookingUpdateManyWithoutClassSessionNestedInput
  }

  export type ClassSessionUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    trainerId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrenceRule?: NullableStringFieldUpdateOperationsInput | string | null
    isCancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutClassSessionNestedInput
  }

  export type ClassSessionUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    trainerId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrenceRule?: NullableStringFieldUpdateOperationsInput | string | null
    isCancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumCheckInMethodFieldUpdateOperationsInput | $Enums.CheckInMethod
    checkedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    member?: MemberUpdateOneRequiredWithoutCheckInsNestedInput
  }

  export type CheckInUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    method?: EnumCheckInMethodFieldUpdateOperationsInput | $Enums.CheckInMethod
    checkedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CheckInUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    method?: EnumCheckInMethodFieldUpdateOperationsInput | $Enums.CheckInMethod
    checkedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    gatewayRef?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayData?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    gatewayRef?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayData?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    gatewayRef?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayData?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassSessionCreateManyTrainerInput = {
    id?: string
    tenantId: string
    name: string
    description?: string | null
    capacity?: number
    startTime: Date | string
    endTime: Date | string
    location?: string | null
    isRecurring?: boolean
    recurrenceRule?: string | null
    isCancelled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassSessionUpdateWithoutTrainerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrenceRule?: NullableStringFieldUpdateOperationsInput | string | null
    isCancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutClassSessionsNestedInput
    bookings?: BookingUpdateManyWithoutClassSessionNestedInput
  }

  export type ClassSessionUncheckedUpdateWithoutTrainerInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrenceRule?: NullableStringFieldUpdateOperationsInput | string | null
    isCancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutClassSessionNestedInput
  }

  export type ClassSessionUncheckedUpdateManyWithoutTrainerInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrenceRule?: NullableStringFieldUpdateOperationsInput | string | null
    isCancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberCreateManyPlanInput = {
    id?: string
    tenantId: string
    name: string
    email: string
    phone?: string | null
    photoUrl?: string | null
    qrCode?: string | null
    pin?: string | null
    status?: $Enums.MemberStatus
    joinedAt?: Date | string
    expiresAt?: Date | string | null
    frozenAt?: Date | string | null
    frozenDays?: number
    emergencyContact?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenDays?: IntFieldUpdateOperationsInput | number
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutMembersNestedInput
    bookings?: BookingUpdateManyWithoutMemberNestedInput
    checkIns?: CheckInUpdateManyWithoutMemberNestedInput
    payments?: PaymentUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenDays?: IntFieldUpdateOperationsInput | number
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutMemberNestedInput
    checkIns?: CheckInUncheckedUpdateManyWithoutMemberNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenDays?: IntFieldUpdateOperationsInput | number
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyMemberInput = {
    id?: string
    classSessionId: string
    status?: $Enums.BookingStatus
    bookedAt?: Date | string
    cancelledAt?: Date | string | null
    attendedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CheckInCreateManyMemberInput = {
    id?: string
    tenantId: string
    method?: $Enums.CheckInMethod
    checkedInAt?: Date | string
    note?: string | null
  }

  export type PaymentCreateManyMemberInput = {
    id?: string
    tenantId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    gatewayRef?: string | null
    gatewayData?: NullableJsonNullValueInput | InputJsonValue
    description?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classSession?: ClassSessionUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    classSessionId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    classSessionId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumCheckInMethodFieldUpdateOperationsInput | $Enums.CheckInMethod
    checkedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    tenant?: TenantUpdateOneRequiredWithoutCheckInsNestedInput
  }

  export type CheckInUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    method?: EnumCheckInMethodFieldUpdateOperationsInput | $Enums.CheckInMethod
    checkedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CheckInUncheckedUpdateManyWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    method?: EnumCheckInMethodFieldUpdateOperationsInput | $Enums.CheckInMethod
    checkedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    gatewayRef?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayData?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    gatewayRef?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayData?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    gatewayRef?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayData?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyClassSessionInput = {
    id?: string
    memberId: string
    status?: $Enums.BookingStatus
    bookedAt?: Date | string
    cancelledAt?: Date | string | null
    attendedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutClassSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutClassSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutClassSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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