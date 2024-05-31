interface JwtPayload {
  [key: string]: string; // JWT payload는 다양한 형태의 데이터를 가질 수 있으므로, 이를 허용하기 위해 any 타입을 사용합니다.
}

export const parseJwtPayload = (token: string): JwtPayload | null => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const decodedPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join(''),
    );

    return JSON.parse(decodedPayload);
  } catch (error) {
    return null;
  }
};
