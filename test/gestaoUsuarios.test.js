import { login } from "../src/gestaoUsuarios.js";
import assert from "node:assert";

describe("Login de usuário", () => {
  it("Deve validar login com credenciais válidas com sucesso", () => {
    const email = "julio@pgats.com.br";
    const senha = "ss123456";
    const mensagemDeSucesso = "Login realizado com sucesso";

    const validaLogin = login(email, senha);

    assert.equal(validaLogin, mensagemDeSucesso);
  });
  it("Deve retornar erro ao tentar login com senha incorreta", () => {
    const email = "julio@pgats.com.br";
    const senha = "AA123456";
    const mensagemDeErro = "Senha Incorreta";

    assert.throws(
      () => {
        login(email, senha);
      },
      {
        message: mensagemDeErro,
      },
    );
  });
  it("Deve retornar erro quando a credencial do usuário for inválida", () => {
    const email = "gustavo@pgats.com.br";
    const senha = "AA654321";
    const mensagemDeErro = "Credenciais expiradas, renove suas credenciais";

    assert.throws(
      () => {
        login(email, senha);
      },
      {
        message: mensagemDeErro,
      },
    );
  });
  it("Deve retornar erro quando o usuário não for informado", () => {
    
  })
});
