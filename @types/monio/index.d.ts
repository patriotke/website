declare module 'monio' {
  export type Maybe<T> = {
    map: <U>(f: (value: T) => U) => Maybe<U>;
    flatMap: <U>(f: (value: T) => Maybe<U>) => Maybe<U>;
    getOrElse: (defaultValue: T) => T;
    orElse: (defaultValue: T) => Maybe<T>;
    filter: (predicate: (value: T) => boolean) => Maybe<T>;
    isDefined: () => boolean;
    isEmpty: () => boolean;
  };

  export const Maybe: {
    from: <T>(value: T) => Maybe<T>;
    of: <T>(value: T) => Maybe<T>;
    empty: <T>() => Maybe<T>;
  };
}
