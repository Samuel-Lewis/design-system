/**
 * split takes two arrays, and finds unique elements between two arrays, and any common elements
 * expects `leftValues` and `rightValue` to be sorted
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
