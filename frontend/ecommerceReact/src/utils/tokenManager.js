export const getAccessToken = () => localStorage.getItem('accessToken');

export const setAccessToken = (accessToken) => {
    localStorage.setItem('accessToken', accessToken);
};

export const getRefreshToken = () => localStorage.getItem('refreshToken');

export const setRefreshToken = (refreshToken) => {
    localStorage.setItem('refreshToken', refreshToken);
};

export const clearTokens = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
}