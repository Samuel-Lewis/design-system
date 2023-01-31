import { nanoid } from "nanoid";

export type SlugOptions = {
  separator?: string;
  ignoreCase?: boolean;
  useCamel?: boolean;
};

const defaultSlugOptions = {
  separator: "-",
  ignoreCase: false,
  useCamel: false,
};

export const toSlug = (
  inputStr: string,
  options: SlugOptions = defaultSlugOptions
) => {
  const {
    separator = defaultSlugOptions.separator,
    ignoreCase = defaultSlugOptions.ignoreCase,
    useCamel = defaultSlugOptions.useCamel,
  } = options;

  const repeated = new RegExp(`[${separator}]{2,}`, "g");

  let str = inputStr.toString();

  if (useCamel) {
    str = str.replace(/([a-z])([A-Z])/g, "$1-$2");
  }

  str = str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .replace(/\s+/g, separator)
    .replace(/[^\w\s-]/g, "")
    .replace(/^-+|-+$/g, "")
    .replace(/[._-]/g, separator);

  str = str.replace(repeated, separator);

  if (!ignoreCase) {
    str = str.toLowerCase();
  }

  return str;
};

export type IdOptions = {
  idLength?: number;
  usePostfix?: boolean;
};

const defaultIdOptions = {
  idLength: 5,
  usePostfix: false,
};

export const uniqueSlug = (
  inputString: string,
  options: SlugOptions & IdOptions = {
    ...defaultSlugOptions,
    ...defaultIdOptions,
  }
) => {
  const id = nanoid(options.idLength);
  const separator = options.separator ?? defaultSlugOptions.separator;

  if (options.usePostfix) {
    return `${inputString}${separator}${id}`;
  } else {
    return `${id}${separator}${inputString}`;
  }
};
