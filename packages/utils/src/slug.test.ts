import { toSlug } from "./slug";

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
