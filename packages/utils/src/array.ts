/**
 * Splits two arrays into three parts, left, right, and intersect.
 * Left contains all elements in the first array that are not in the second.
 * Right contains all elements in the second array that are not in the first.
 * Intersect contains all elements that are in both arrays.
 * Expects `leftValues` and `rightValue` to be sorted
 *
 * @param leftValues
 * @param rightValues
 */
export const split = <T>(
  leftValues: T[],
  rightValues: T[]
): { left: T[]; intersect: T[]; right: T[] } => {
  const leftPart = [];
  const intersect = [];
  const rightPart = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftValues.length && rightIndex < rightValues.length) {
    const left = leftValues[leftIndex];
    const right = rightValues[rightIndex];

    if (left === right) {
      intersect.push(left);
      leftIndex++;
      rightIndex++;
    } else if (left < right) {
      leftPart.push(left);
      leftIndex++;
    } else {
      rightPart.push(right);
      rightIndex++;
    }
  }

  return {
    left: leftPart.concat(leftValues.slice(leftIndex)),
    right: rightPart.concat(rightValues.slice(rightIndex)),
    intersect,
  };
};

/**
 * divide is similar to filter, where it takes a predicate and returns a list of items that match the predicate (`included`).
 * Additionally, it returns the items that do not match the predicate (`excluded`).
 */

/**
 * This function divides an array into two new arrays based on the predicate function.
 * The predicate function is used to determine whether an element should be included in the
 * first array (included) or the second array (excluded).
 *
 * The includes array contains all elements for which the predicate function returns true.
 * The excluded array contains all elements for which the predicate function returns false.
 *
 * @param array The array to be divided into two arrays
 * @param predicate The function used to determine which elements go in which array
 * @returns An object containing the two new arrays, one with the included elements, and one with the excluded elements
 */
export const divide = <T>(
  array: T[],
  predicate: (t: T) => boolean
): { included: T[]; excluded: T[] } => {
  const included: T[] = [];
  const excluded: T[] = [];

  for (const item of array) {
    if (predicate(item)) {
      included.push(item);
    } else {
      excluded.push(item);
    }
  }
  return { included, excluded };
};
