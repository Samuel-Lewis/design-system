import { test, describe, expect } from "vitest";

import { toSlug, toUniqueSlug } from "./slug";

describe("toSlug", () => {
  test("sets to lower case", () => {
    const result = toSlug("THIS Is MY conTENt");
    expect(result).toBe("this-is-my-content");
  });

  test("ignores case if specified", () => {
    const result = toSlug("THIS Is MY conTENt", {
      ignoreCase: true,
    });
    expect(result).toBe("THIS-Is-MY-conTENt");
  });

  test("allows custom separator", () => {
    const result = toSlug("this is my content", { separator: "_" });
    expect(result).toBe("this_is_my_content");
  });

  test("removes double dashes", () => {
    const result = toSlug("this - is-my- -content");
    expect(result).toBe("this-is-my-content");
  });

  test("transforms existing separators", () => {
    const result = toSlug("this_is_my_content");
    expect(result).toBe("this-is-my-content");
  });

  test("removes special characters", () => {
    const result = toSlug("Exportação de peças avícolas para Você");
    expect(result).toBe("exportacao-de-pecas-avicolas-para-voce");
  });

  test("removes punctuation", () => {
    const result = toSlug("this_!is %%my c(on)te&nt., ");
    expect(result).toBe("this-is-my-content");
  });

  test("combined test", () => {
    const result = toSlug("Café é o combustível 1561 programação!!");
    expect(result).toBe("cafe-e-o-combustivel-1561-programacao");
  });

  describe("camel case", () => {
    test("use camelCase", () => {
      const result = toSlug("thisIsMyContent", { useCamel: true });
      expect(result).toBe("this-is-my-content");
    });

    test("use UpperCamelCase", () => {
      const result = toSlug("ThisIsMyContent", { useCamel: true });
      expect(result).toBe("this-is-my-content");
    });

    test("use UpperCamelCase with ignorecase", () => {
      const result = toSlug("ThisIsMyContent", {
        useCamel: true,
        ignoreCase: true,
      });
      expect(result).toBe("This-Is-My-Content");
    });
  });

  test("preserves special characters if requested", () => {
    const result = toSlug("cap$stan hogs:matey", {
      ignoreCharacters: [":"],
    });
    expect(result).toBe("capstan-hogs:matey");
  });

  describe("max length", () => {
    test("over total words", () => {
      const result = toSlug("capstan hogs matey", {
        maxLength: 10000,
      });
      expect(result).toBe("capstan-hogs-matey");
    });

    test("mid word", () => {
      const result = toSlug("capstan hogs matey", {
        maxLength: 7,
      });
      expect(result).toBe("capstan");
    });

    test("shorter than first word", () => {
      const result = toSlug("capstan hogs matey", {
        maxLength: 2,
      });
      expect(result).toBe("ca");
    });

    test("really long string", () => {
      const result = toSlug(
        "scourge of the seven seas boatswain Schooner gaff booty. Ho Corsair red. Ensign hulk smartly boom jib rum gangway",
        {
          maxLength: 15,
        },
      );
      expect(result).toBe("scourge-of-the");
    });
  });
});

describe("toUniqueSlug", () => {
  const alphabet = "5";

  test("adds id to a slug", () => {
    const result = toUniqueSlug("this-is-my-content", { alphabet });
    expect(result).toBe("55555555-this-is-my-content");
  });

  test("postfixes ID if specified", () => {
    const result = toUniqueSlug("content", {
      alphabet,
      usePostfix: true,
    });
    expect(result).toBe("content-55555555");
  });

  test("uses specified separator", () => {
    const result = toUniqueSlug("content", {
      alphabet,
      separator: ":",
    });
    expect(result).toBe("55555555:content");
  });

  test("allows different id lengths", () => {
    const result = toUniqueSlug("content", {
      alphabet,
      idLength: 1,
    });
    expect(result).toBe("5-content");
  });

  test("removes the id if idLength is 0 or less", () => {
    const result = toUniqueSlug("content", {
      alphabet,
      idLength: 0,
    });
    expect(result).toBe("content");
  });
});
