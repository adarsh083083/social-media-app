// Service Routes
export const ASYNC_ROUTES = {
  CREATE_ACC_BY_EMAIL: 'LoginByEmail',
  VERIFY_OTP_BY_EMAIL: 'VerifyOtpByEmail',
  CREATE_ACC_BY_PHONE: 'CreateAccByPhone',
  VERIFY_OTP_BY_PHONE: 'VerifyOtpByPhone',
  LOGIN_BY_EMAIL: 'LoginByEmail',
  EMAIL_OTP_VERIFIY: 'EmailOtpVerify',
  PHONE_OTP_VERIFIY: 'PhoneOtpVerify',
  LOGIN_BY_PHOME_NUM: 'LoginByPHoneNum',
  CREATE_USER_IDENTITY: 'CreateUserIdentity',
  CREATE_BACKUP_CODE: 'CreateBackupCode',
  UPLOAD_PROFILE_IMAGE: 'UploadProfileImage',
  VERIFY_BACKUP_CODE: 'VerifyBackupCode',
  LOG_OUT: 'Logout',
  DELETE_USER_ACCOUNT: 'DeleteUserAccount',
  // 
  FEED_FOLLOWING: 'FeedFollowing',
  FEED_INTEREST: 'FeedInterest',
  LIKE_POST: 'LikePost',
  DISLIKE_POST: 'DisLikePost',
  POST_COMMENT_BY_ID:'PostCommentById',
  GET_COMMENT_BY_ID:'GetCommentById',
  EDIT_COMMENT_BY_ID:'EditCommentById',
  GET_FOLLOWERS_LIST:'GetFollowerList',
  GET_FOLLOWING_LIST:'GetFollowingList',
  DELETE_FOLLOWER_BY_ID:'DeleteFollower',
  USER_POST_PROFILE_DETAILS:'UserPostAndProfileDetails'
};

//  Methods
export const METHODS = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
  PUT: 'PUT',
  PATCH: 'PATCH',
};

//  ReplaceUrl
export const replaceUrl = (url, data) => {
  var regex = new RegExp(':(' + Object.keys(data).join('|') + ')', 'g');
  return url?.replace(regex, (m, $1) => data[$1] || m);
};
