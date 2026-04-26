import {login} from '../src/gestaoUsuarios.js';
import assert from 'node:assert';

describe('Login de usuário', () => {
    it('Deve validar login com credenciais válidas com sucesso', () => {
        const email = "julio@pgats.com.br";
        const senha = "ss123456";
        const mensagemDeSucesso = "Login realizado com sucesso"

        const validaLogin = login(email,senha);

        assert.equal(validaLogin, mensagemDeSucesso)
    })
})