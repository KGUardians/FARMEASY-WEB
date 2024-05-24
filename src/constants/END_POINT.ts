export const END_POINT = {
  // 커뮤니티 관련 엔드포인트
  DELETE_BOARD: (id: number) => `/community/${id}`,
  GET_BOARDS_BY_COMMUNITY_TYPE: (type: string) => `/community/${type}`,
  GET_BOARD: (id: number) => `/community/${id}`,
  POST_BOARD: (type: string) => `/community/post/${type}`,
  POST_COMMENT: (id: number) => `/community/comment/${id}`,
  UPDATE_BOARD: (id: number) => `/community/update/${id}`,

  // 농촌체험 관련 엔드포인트
  DELETE_EXPERIENCE_BOARD: (id: number) => `/experience/${id}`,
  GET_APPLY_FORM: (id: number) => `/experience/application/${id}`,
  GET_EXPERIENCE_LIST: '/experience',
  GET_EXPERIENCE_BOARD: (id: number) => `/experience/${id}`,
  POST_EXPERIENCE_BOARD: '/experience/post',
  APPLY_EXPERIENCE: (id: number) => `/experience/application/${id}`,
  UPDATE_EXPERIENCE_BOARD: (id: number) => `/experience/update/${id}`,

  // 메인페이지 정보 불러오기
  GET_MAIN_PAGE: '/',

  // 직거래 관련 엔드포인트
  DELETE_MARKET_BOARD: (id: number) => `/market/${id}`,
  GET_MARKET_LIST: '/market',
  GET_MARKET_BOARD: (id: number) => `/market/${id}`,
  POST_MARKET_BOARD: '/market/post',
  UPDATE_MARKET_BOARD: (id: number) => `/market/update/${id}`,

  // 유저 관련 엔드포인트
  SIGN_IN: '/users/sign-in',
  SIGN_UP: '/users/join',
  REGISTER_FARMER: '/users/farm/register',
};
