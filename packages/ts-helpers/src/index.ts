/**
 * Takes a given type and makes all object properties required
 */
export type Complete<T> = {
  [P in keyof T]-?: T[P];
};
