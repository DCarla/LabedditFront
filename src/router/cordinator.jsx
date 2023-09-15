export const goToLogin = (navigate) => {
  navigate("/login");
};

export const goToCadastro = (navigate) => {
  navigate("/cadastro");
};

export const goToHomePrincipal = (navigate) => {
  navigate("/");
};
export const goToHome = (navigate, id) => {
  navigate("/home/" + id);
};
