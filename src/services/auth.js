//export o token do ache barato
export const TOKEN_KEY = "@ache-Barato";
// o token que esta no cach é diferente de null
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
//export o token apra autenticação
export const getToken = () => localStorage.getItem(TOKEN_KEY);

//logar =  insere o token
export const login = token =>{
  localStorage.setItem(TOKEN_KEY,token);
};
//logout =  retira o token
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

