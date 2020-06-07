const clearAuthData = () => localStorage.removeItem('token');

const setAuthData = (tokenData: {token: string, uid: string}) => localStorage.setItem('token', JSON.stringify({
  token: tokenData.token,
  createdAt: new Date().getTime(),
  userId: tokenData.uid,
}));

const getAuthData = (): string => localStorage.getItem('token') || "";

export {
  clearAuthData,
  setAuthData,
  getAuthData,
};
