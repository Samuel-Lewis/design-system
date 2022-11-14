export const toSlug = (str: string) => {
  return str
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/--+/g, "-");
};

export const camelToSlug = (str: string) => {
  return toSlug(str.replace(/([a-z])([A-Z])/g, "$1-$2"));
};
