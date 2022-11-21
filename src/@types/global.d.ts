export {};

declare global {
  type Truthy<T> = false extends T
    ? never
    : 0 extends T
    ? never
    : '' extends T
    ? never
    : null extends T
    ? never
    : undefined extends T
    ? never
    : T;

  type Falsy = false | 0 | '' | null | undefined;
  type Maybe<T> = T | undefined;

  type EmptyCallback = () => void;

  type HttpMethod = `GET` | `POST` | `PUT` | 'PATCH' | 'DELETE' | 'HEAD';

  //
  var prisma: PrismaClient;
}

declare module 'react' {
  type FCC<Props = Record<string, unknown>> = React.FC<
    React.PropsWithChildren<Props>
  >;
}
