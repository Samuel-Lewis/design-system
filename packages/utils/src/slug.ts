import { nanoid } from "nanoid";

export type SlugOptions = {
  /**
   * Delimiter to use between words
   * @default "-"
   */
  separator?: string;

  /**
   * Ignore case when converting to slug. If false, the slug will be lowercased.
   * @default false
   * @example if `true`
   * ```ts
   * toSlug("Prow Scuttle", { ignoreCase: true });
   * // "Prow-Scuttle"
   * ```
   * @example if `false`
   * ```ts
   * toSlug("Prow Scuttle", { ignoreCase: false });
   * // "prow-scuttle"
   * ```
   */
  ignoreCase?: boolean;

  /**
   * Convert camelCase to slug
   * @default false
   * @example
   * ```ts
   * toSlug("jackLadColours", { useCamel: true });
   * // "jack-lad-colours"
   * ```
   */
  useCamel?: boolean;

  /**
   * Shorten the slug to a maximum length, if the slug is longer than the maximum length, it will be truncated to the previous separator.
   * If the first separator is still too long, the first word will be truncated.
   * When used in conjunction with `toUniqueSlug()`, the id is not included in the maximum length.
   * If `undefined` or less than or equal to zero, the slug will not be truncated.
   *
   * @default false
   * @example
   * ```ts
   * toSlug("timbers gangplank crack", { maxLength: 17 });
   * //      ^---------------^
   * // "timbers-gangplank"
   *
   * toSlug("timbers gangplank crack", { maxLength: 12 });
   * //      ^----------^
   * // "timbers"
   *
   * toSlug("timbers gangplank crack", { maxLength: 3 });
   * //      ^-^
   * // "tim"
   * ```
   */
  maxLength?: number;

  /**
   * Characters to ignore when converting to slug. Normally all special characters are removed, but if you want to keep some, you can specify them here.
   * @default []
   * @example
   * ```ts
   * toSlug("cap$stan hogs:matey", { ignoreCharacters: [":"] });
   * // "capstan-hogs:matey"
   */
  ignoreCharacters?: string[];
};

const toSlugDefaultOptions = {
  separator: "-",
  ignoreCase: false,
  useCamel: false,
  maxLength: -1,
  ignoreCharacters: [],
};

/**
 * toSlug converts a string to a url safe slug (by default)
 */
export const toSlug = (inputStr: string, options?: SlugOptions) => {
  const { separator, ignoreCase, useCamel, maxLength, ignoreCharacters } = {
    ...toSlugDefaultOptions,
    ...options,
  };

  const ignoreGroup = `(?![${ignoreCharacters.join("")}])`;
  const commonSeparators = new RegExp(`${ignoreGroup}[\\s-_.: ]`, "g");
  const badCharsRegex = new RegExp(`${ignoreGroup}[^\\w]`, "g");
  const camelRegex = new RegExp("(?=[A-Z])", "g");

  let wordCountRunningTotal = 0;

  const words = inputStr
    .toString()
    .normalize("NFD")
    .split(commonSeparators)
    .map((w) => w.replace(badCharsRegex, ""))
    // Clear bad chars
    .reduce<string[]>((acc, cur) => {
      // Split at camel case
      if (!useCamel) {
        return [...acc, cur];
      }

      const camelWords = cur.split(camelRegex);
      return [...camelWords, ...acc];
    }, [])
    .filter(String)
    .reduce<string[]>((acc, cur, index) => {
      if (maxLength <= 0) {
        return [...acc, cur];
      }

      if (index === 0) {
        wordCountRunningTotal += cur.length;
        const trimmedFirst = cur.slice(0, maxLength);
        wordCountRunningTotal = trimmedFirst.length;
        return [...acc, trimmedFirst];
      }

      // Trim to max length
      const newTotal = wordCountRunningTotal + cur.length;
      if (newTotal > maxLength) {
        return acc;
      }
      wordCountRunningTotal = newTotal;

      return [...acc, cur];
    }, []);

  if (ignoreCase) {
    return words.join(separator);
  } else {
    return words.join(separator).toLowerCase();
  }
};

export type IdOptions = {
  idLength?: number;
  usePostfix?: boolean;
};

/**
 * Takes a string and returns a URL safe slug (by default) which is prefix by a short randomly generated id
 */
export const toUniqueSlug = (
  inputString: string,
  options: SlugOptions & IdOptions = {
    idLength: 5,
    usePostfix: false,
  }
) => {
  const id = nanoid(options.idLength);
  const separator = options.separator ?? "-";
  const slugString = toSlug(inputString, options);

  if (options.usePostfix) {
    return `${slugString}${separator}${id}`;
  } else {
    return `${id}${separator}${slugString}`;
  }
};
