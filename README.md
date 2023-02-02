# @samuel-lewis/utils

## Array

### `split()`

```ts
const split: <T>(
  leftValues: T[],
  rightValues: T[]
) => {
  left: T[];
  intersect: T[];
  right: T[];
};
```

split takes two arrays, and finds unique elements between two arrays, and any common elements expects leftValues and rightValue to be sorted

### `divide()`

```ts
const divide: <T>(
  array: T[],
  predicate: (t: T) => boolean
) => {
  included: T[];
  excluded: T[];
};
```

divide is similar to filter, where it takes a predicate and returns a list of items that match the predicate (included). Additionally, it returns the items that do not match the predicate (excluded).

## Slug

### `toSlug()`

```ts
const toSlug: (inputStr: string, options?: SlugOptions) => string;
```

toSlug converts a string to a url safe slug (by default)

### `toUniqueSlug()`

```ts
const toUniqueSlug: (
  inputString: string,
  options?: SlugOptions & IdOptions
) => string;
```

Takes a string and returns a URL safe slug (by default) which is prefix by a short randomly generated id

## Time

### `seconds()`

Converts seconds to milliseconds

### `minutes()`

Converts minutes to milliseconds

### `hours()`

Converts hours to milliseconds

### `days()`

Converts days to milliseconds
