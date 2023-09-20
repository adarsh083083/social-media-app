import {createAsyncThunk} from '@reduxjs/toolkit';
import {ASYNC_ROUTES} from '../constants';
import {
  CreateAccByEmailService,
  VerifyEmailOtpService,
  CreateAccByPhoneNoService,
  VerifyPhoneNoOtpService,
  LoginByEmailService,
  EmailOtpVerifyService,
  VerifyLoginByPhoneOtpService,
  LoginByPhoneNumService,
  CreateUserIdentityService,
  CreateBackupCodeService,
  UploadProfileImageService,
  VerifyBackupCodeService,
  LogoutService,
  DeleteUserAccountService,
  GetFollowingFeedService,
  GetInterestFeedService,
  LikePostService,
  DisLikePostService,
  PostCommentByIdThunkService,
  GetCommentByIdThunkService,
  GetFollowerListService,
  GetFollowingListService,
  DeleteFollowerService,
  DeleteFollowerByIdService,
  UserPostAndProfileService,
} from '../services/auth.services';

const createAsyncAction = (route, serviceFunction) => {
  return createAsyncThunk(route, async (payload, {rejectWithValue}) => {
    try {
      const response = await serviceFunction(payload);

      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  });
};

export const CreateAccByEmailThunk = createAsyncAction(
  ASYNC_ROUTES.CREATE_ACC_BY_EMAIL,
  CreateAccByEmailService,
);

export const VerifyEmailOtpThunk = createAsyncAction(
  ASYNC_ROUTES.VERIFY_OTP_BY_EMAIL,
  VerifyEmailOtpService,
);

export const CreateAccByPhoneNoThunk = createAsyncAction(
  ASYNC_ROUTES.CREATE_ACC_BY_PHONE,
  CreateAccByPhoneNoService,
);

export const VerifyPhoneNoOtpThunk = createAsyncAction(
  ASYNC_ROUTES.VERIFY_OTP_BY_PHONE,
  VerifyPhoneNoOtpService,
);

export const LoginByEmailThunk = createAsyncAction(
  ASYNC_ROUTES.LOGIN_BY_EMAIL,
  LoginByEmailService,
);

export const EmailOtpVerifyThunk = createAsyncAction(
  ASYNC_ROUTES.EMAIL_OTP_VERIFIY,
  EmailOtpVerifyService,
);

export const VerifyLoginByPhoneOtpThunk = createAsyncAction(
  ASYNC_ROUTES.PHONE_OTP_VERIFIY,
  VerifyLoginByPhoneOtpService,
);

export const LoginByPhoneNoThunk = createAsyncAction(
  ASYNC_ROUTES.LOGIN_BY_PHOME_NUM,
  LoginByPhoneNumService,
);

export const CreateUserIdentityThunk = createAsyncAction(
  ASYNC_ROUTES.CREATE_USER_IDENTITY,
  CreateUserIdentityService,
);

export const CreateBackupCodeThunk = createAsyncAction(
  ASYNC_ROUTES.CREATE_BACKUP_CODE,
  CreateBackupCodeService,
);

export const UploadProfileImageThunk = createAsyncThunk(
  ASYNC_ROUTES.UPLOAD_PROFILE_IMAGE,
  async (payload, {rejectWithValue}) => {
    try {
      const response = await UploadProfileImageService(payload);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const VerifyBackupCodeThunk = createAsyncAction(
  ASYNC_ROUTES.VERIFY_BACKUP_CODE,
  VerifyBackupCodeService,
);
export const LogoutThunk = createAsyncAction(
  ASYNC_ROUTES.LOG_OUT,
  LogoutService,
);

export const DeleteUserAccountThunk = createAsyncAction(
  ASYNC_ROUTES.DELETE_USER_ACCOUNT,
  DeleteUserAccountService,
);

// export const GetInterestFeedThunk = createAsyncAction(
//   ASYNC_ROUTES.FEED_INTEREST,
//   GetInterestFeedService(data),
// );

export const GetInterestFeedThunk = createAsyncThunk(
  ASYNC_ROUTES.FEED_INTEREST,
  async (payload, {rejectWithValue}) => {
    try {
      const response = await GetInterestFeedService(payload);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getFollowingFeed = createAsyncAction(
  ASYNC_ROUTES.FEED_FOLLOWING,
  GetFollowingFeedService,
);

export const GetInterestFeed = createAsyncAction(
  ASYNC_ROUTES.FEED_INTEREST,
  GetInterestFeedService,
);

export const LikePost = createAsyncAction(
  ASYNC_ROUTES.LIKE_POST,
  LikePostService,
);

export const DisLikePost = createAsyncAction(
  ASYNC_ROUTES.DISLIKE_POST,
  DisLikePostService,
);

export const PostCommentByIdThunk = createAsyncThunk(
  ASYNC_ROUTES.POST_COMMENT_BY_ID,
  async (payload, {rejectWithValue}) => {
    try {
      const response = await PostCommentByIdThunkService(payload);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const GetCommentByIdThunk = createAsyncThunk(
  ASYNC_ROUTES.GET_COMMENT_BY_ID,
  async (payload, {rejectWithValue}) => {
    console.log(payload, 'thunk payload');
    try {
      const response = await GetCommentByIdThunkService(payload);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const GetFollowerListThunk = createAsyncAction(
  ASYNC_ROUTES.GET_FOLLOWERS_LIST,
  GetFollowerListService,
);

export const GetFollowingListThunk = createAsyncAction(
  ASYNC_ROUTES.GET_FOLLOWING_LIST,
  GetFollowingListService,
);

export const DeleteFollowerThunkById = createAsyncThunk(
  ASYNC_ROUTES.DELETE_FOLLOWER_BY_ID,
  async (payload, {rejectWithValue}) => {
    try {
      const response = await DeleteFollowerByIdService(payload);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const UserPostAndProfileThunk = createAsyncAction(
  ASYNC_ROUTES.USER_POST_PROFILE_DETAILS,
  UserPostAndProfileService,
);

// export const UserPostAndProfileThunk = () => {
//   ASYNC_ROUTES.USER_POST_PROFILE_DETAILS,
//     async (payload, {rejectWithValue}) => {
//       console.log(payload,"jjjjjjjjjjjjjjjjjjjjjj")
//       try {
//         const response = await UserPostAndProfileService(payload);
//         return response;
//       } catch (error) {
//         return rejectWithValue(error);
//       }
//     };
// };

// export const EditCommentByIdThunk = createAsyncThunk(
//   ASYNC_ROUTES.EDIT_COMMENT_BY_ID,
//   async (payload, {rejectWithValue}) => {
//     try {
//       const response = await EditCommentByIdThunkService(payload);
//       return response;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   },
// );
