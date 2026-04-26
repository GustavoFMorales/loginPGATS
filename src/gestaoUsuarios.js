const usuarios = [
  {
    id: 1,
    nome: "Julio",
    email: "julio@pgats.com.br",
    senha: "ss123456",
    expirado: false,
  },
  {
    id: 2,
    nome: "Gustavo",
    email: "gustavo@pgats.com.br",
    senha: "AA654321",
    expirado: true,
  },
   {
    id: 3,
    nome: "Matheus",
    email: "matheus@pgats.com.br",
    senha: "Ab23456",
    expirado: false,
  },
];

export const login = (email, senha) => {
    if(!email || email.trim() === ''){
        throw new Error('O e-mail não foi informado');
    } else if(!senha || senha.trim() === ''){
      throw new Error('A senha não foi informado');
    }
    for(let i = 0; i < usuarios.length; i++){
        if(usuarios[i].email === email){
            if(usuarios[i].senha !== senha){
                throw new Error('Senha Incorreta');
            } else if(usuarios[i].expirado === true){
                throw new Error('Credenciais expiradas, renove suas credenciais');
            } else {
                return 'Login realizado com sucesso';
            }
        }
    }
    throw new Error('Usuário não encontrado');
};

console.log(login('gustavo@pgats.com.br','AA654321'))
