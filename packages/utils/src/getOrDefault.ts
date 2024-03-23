/**
 * Returns the value of a variable if it is not undefined, otherwise returns a default value.
 *
 * @template T - The type of the variable and default value.
 * @param {T | undefined} variable - The variable to check.
 * @param {T} defaultValue - The default value to return if the variable is undefined.
 * @returns {T} - The value of the variable if it is not undefined, otherwise the default value.
 */
export function getOrDefault<T>(variable: T | undefined, defaultValue: T): T {
  if (variable !== undefined) {
    return variable;
  }
  return defaultValue;
}

export const ged = getOrDefault;
