export const setAuthData = (email?: string, token?: string): void =>{
  localStorage.setItem("token",token || "");
  localStorage.setItem("email", email || "");
}

export const removeAuthData = (): void =>{
  localStorage.removeItem("token");
  localStorage.removeItem("email");
}