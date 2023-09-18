const generateCombinations = require("./generateCombinations");

describe("Verificação de palavra", () => {
  test("Deve retornar uma matriz vazia para uma string vazia", () => {
    const result = generateCombinations("");
    expect(result).toEqual([]);
  });

  test("Deve checar as combinações por tamanho", () => {
    expect(generateCombinations("lua")).toHaveLength(7);
  });
});
