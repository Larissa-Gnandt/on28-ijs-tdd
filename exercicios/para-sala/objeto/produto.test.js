const produto = require("./produto");

describe("produto", () => {
  let empada;

  beforeEach(() => {
    empada = new produto("Empada", 7, 25);
  });
  test("Validar adição ao estoque", () => {
    expect(empada.adicionarAoEstoque(2)).toEqual(27);
  });

  test("Validar estoque", () => {
    expect(empada.consultarEstoque(25)).toEqual(25);
  });

  test("Remover do estoque, enquanto tiver estoque suficiente", () => {
    expect(empada.removerDoEstoque(2)).toEqual(23);
  });

  test("Remover do estoque, quando não tem estoque suficiente", () => {
    expect(() => {
      empada.removerDoEstoque(40);
    }).toThrow();
  });
});
