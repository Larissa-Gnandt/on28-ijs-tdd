const { allKeys, isObject } = require("./checarObjeto");

describe("Verificar objeto", () => {
  const pessoa = {
    nome: "Larissa",
    idade: 31,
  };

  const arrayPessoa = ["nome", "idade"];

  test("Validar se não é objeto", () => {
    expect(allKeys("batata")).toEqual([]);
  });

  test("Verificar se estamos retornando as chaves", () => {
    expect(allKeys(pessoa)).toEqual(arrayPessoa);
  });

  test("Verifica se o parâmetro é um objeto", () => {
    expect(isObject(pessoa)).toEqual(true);
  });
});
