//  Async Routes
export const SERVICE_ROUTES = {
  CREATE_ACC_BY_EMAIL: '/api/user/signup',
  VERIFY_OTP_BY_EMAIL: '/api/user/verify-otp',
  CREATE_ACC_BY_PHONE: '/api/user/signup',
  VERIFY_OTP_BY_PHONE: 'api/user/verify-otp',
  LOGIN_BY_EMAIL: '/api/user/send-otp',
  EMAIL_OTP_VERIFIY: '/api/user/login',
  LOGIN_BY_PHOME_NUM: '/api/user/login',
  PHONE_OTP_VERIFIY: '/api/user/send-otp',
  CREATE_USER_IDENTITY: '/api/user/update-user',
  CREATE_BACKUP_CODE: '/api/user/backup-Codes',
  UPLOAD_PROFILE_IMAGE: '/api/upload-image',
  VERIFY_BACKUP_CODE: '/api/user/verify-backup-Codes',
  LOG_OUT: '/api/user/logout',
  DELETE_USER_ACCOUNT: '/api/user/delete-account',

  FOLLOWING_FEED: '/api/user/feed/following',
  INTEREST_FEED: '/api/user/feed/interest',
  LIKE_POST: '/api/post/like/',
  DISLIKE_POST: '/api/post/dislike/',
  POST_COMMENT_BY_ID: '/api/post/comment/:postId',
  GET_COMMENT_BY_ID: '/api/post/comment/:postId',
  GET_FOLLOWERS_LIST: '/api/user/own-followers-list',
  GET_FOLLOWING_LIST: '/api/user/own-followings-list',
  DELETE_FOLLOWER_BY_ID: '/api/user/delete-follower',
  USER_POST_PROFILE_DETAILS:'/api/user/search-user',
  EDIT_COMMENT_BY_ID: '',

  // VERIFY_BACKUP_CODE:'/api/user/verify-backup-Codes',
  // VERIFY_BACKUP_CODE:'/api/user/verify-backup-Codes',
};

// Thunk Status
export const THUNK_STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  FAILED: 'failed',
};
