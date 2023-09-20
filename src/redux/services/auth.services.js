// Importing necessary constants and functions
import Axios from 'axios';
import {HEADERS, METHODS, SERVICE_ROUTES, replaceUrl} from '../constants';
import {sendRequest} from '../fetchApiHandler';

export const CreateAccByEmailService = data => {
  return sendRequest(SERVICE_ROUTES.CREATE_ACC_BY_EMAIL, METHODS.POST, data);
};

export const VerifyEmailOtpService = data => {
  return sendRequest(SERVICE_ROUTES.VERIFY_OTP_BY_EMAIL, METHODS.POST, data);
};

export const CreateAccByPhoneNoService = data => {
  console.log(data, 'axiso data');
  return sendRequest(SERVICE_ROUTES.CREATE_ACC_BY_PHONE, METHODS.POST, data);
};

export const VerifyPhoneNoOtpService = data => {
  return sendRequest(SERVICE_ROUTES.VERIFY_OTP_BY_PHONE, METHODS.POST, data);
};

export const LoginByEmailService = data => {
  return sendRequest(SERVICE_ROUTES.LOGIN_BY_EMAIL, METHODS.POST, data);
};

export const EmailOtpVerifyService = data => {
  return sendRequest(SERVICE_ROUTES.EMAIL_OTP_VERIFIY, METHODS.POST, data);
};

export const LoginByPhoneNumService = data => {
  return sendRequest(SERVICE_ROUTES.LOGIN_BY_PHOME_NUM, METHODS.POST, data);
};

export const VerifyLoginByPhoneOtpService = data => {
  return sendRequest(SERVICE_ROUTES.PHONE_OTP_VERIFIY, METHODS.POST, data);
};

export const CreateUserIdentityService = data => {
  return sendRequest(SERVICE_ROUTES.CREATE_USER_IDENTITY, METHODS.POST, data);
};

export const CreateBackupCodeService = data => {
  return sendRequest(SERVICE_ROUTES.CREATE_BACKUP_CODE, METHODS.POST, data);
};

export const GetFollowingFeedService = data => {
  return sendRequest(SERVICE_ROUTES.FOLLOWING_FEED, METHODS.POST, data);
};

export const GetInterestFeedService = data => {
  console.log(data, 'interest data');
  return sendRequest(SERVICE_ROUTES.INTEREST_FEED, METHODS.POST, data);
};

export const LikePostService = (postId, data) => {
  return sendRequest(SERVICE_ROUTES.LIKE_POST + postId, METHODS.POST, data);
};

export const DisLikePostService = (postId, data) => {
  return sendRequest(SERVICE_ROUTES.DISLIKE_POST + postId, METHODS.POST, data);
};

export const UploadProfileImageService = data => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.UPLOAD_PROFILE_IMAGE,
      method: METHODS.POST,
      headers: {'Content-Type': 'multipart/form-data'},
      data,
    };
    Axios.request(config)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const VerifyBackupCodeService = data => {
  return sendRequest(SERVICE_ROUTES.VERIFY_BACKUP_CODE, METHODS.POST, data);
};

export const LogoutService = data => {
  return sendRequest(SERVICE_ROUTES.LOG_OUT, METHODS.POST, data);
};

export const DeleteUserAccountService = data => {
  return sendRequest(SERVICE_ROUTES.DELETE_USER_ACCOUNT, METHODS.POST, data);
};

export const PostCommentByIdThunkService = data => {
  const {postId, comment} = data;
  console.log('Comment', data);
  return sendRequest(
    replaceUrl(SERVICE_ROUTES.POST_COMMENT_BY_ID, {postId}),
    METHODS.POST,
    {comment},
  );
};
export const GetCommentByIdThunkService = data => {
  const {postId} = data;
  console.log(postId, 'post id');
  return sendRequest(
    replaceUrl(SERVICE_ROUTES.GET_COMMENT_BY_ID, {postId}),
    METHODS.GET,
    data,
  );
};

export const GetFollowerListService = data => {
  return sendRequest(SERVICE_ROUTES.GET_FOLLOWERS_LIST, METHODS.POST, data);
};

export const GetFollowingListService = data => {
  return sendRequest(SERVICE_ROUTES.GET_FOLLOWING_LIST, METHODS.POST, data);
};

export const DeleteFollowerByIdService = data => {
  const {followerId} = data;

  return sendRequest(
    replaceUrl(SERVICE_ROUTES.DELETE_FOLLOWER_BY_ID, {followerId}),
    METHODS.POST,
    data,
  );
};

export const UserPostAndProfileService = data => {
  return sendRequest(
    SERVICE_ROUTES.USER_POST_PROFILE_DETAILS,
    METHODS.POST,
    data,
  );
};

// export const EditCommentByIdThunkService = data => {
//   const {postId} = data;
//   return sendRequest(
//     replaceUrl(SERVICE_ROUTES.EDIT_COMMENT_BY_ID, {postId}),
//     METHODS.GET,
//     data,
//   );
// };
