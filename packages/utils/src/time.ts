/**
 * Converts seconds to milliseconds
 */
export const seconds = (seconds: number) => seconds * 1000;
/**
 * Converts minutes to milliseconds
 */
export const minutes = (minutes: number) => seconds(minutes * 60);

/**
 * Converts hours to milliseconds
 */
export const hours = (hours: number) => minutes(hours * 60);

/**
 * Converts days to milliseconds
 */
export const days = (days: number) => hours(days * 24);
