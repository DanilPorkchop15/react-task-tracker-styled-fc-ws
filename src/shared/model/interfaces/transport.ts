export type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";


export type Request<T extends {
  headers?: Record<string, string>;
  body?: unknown;
}> = {
  [K in keyof T]: T[K];
}