import {createSlice} from '@reduxjs/toolkit';
import {THUNK_STATUS} from '../constants';
import {
  EmailOtpVerifyThunk,
  LoginByPhoneNoThunk,
  LogoutThunk,
  VerifyBackupCodeThunk,
  VerifyEmailOtpThunk,
  VerifyPhoneNoOtpThunk,
} from '../asyncThunks/auth.asyncThunk';
import axios from 'axios';
import storage from 'redux-persist/lib/storage';
import {persistor} from '../store';

const initialState = {
  user: [],
  accessToken: null,
  authStatus: null,
  isLoading: false,
  isAllChecked: false,
  isAuthenticated: false,
  isError: false,
  screenLoader: false,
};

const setLoadingState = state => {
  state.authStatus = THUNK_STATUS.LOADING;
  state.isLoading = true;
  state.isAuthenticated = false;
  state.isError = false;
  console.log(state);
};

const setSuccessState = (state, action) => {
  state.authStatus = THUNK_STATUS.SUCCESS;
  state.user = action?.payload?.data;
  state.accessToken = action.payload?.data?.data.access_token;
  state.isLoading = false;
  state.isAuthenticated = true;
  state.isError = false;
  axios.defaults.headers.common['access_token'] =
    action.payload?.data?.data.access_token;
};

const setFailedState = state => {
  state.authStatus = THUNK_STATUS.FAILED;
  state.isLoading = false;
  state.isError = true;
  state.isAuthenticated = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    allScreensChecked: (state, action) => {
      state.isAllChecked = true;
    },

    clearData: (state, action) => {
      persistor.purge();
      storage.removeItem(`persist:root`);
    },

    setScreenLoader: (state, action) => {
      const {type, payload} = action;
      state.screenLoader = payload;
    },
  },
  extraReducers: builder => {
    builder
      //Login using phone number builder
      .addCase(LoginByPhoneNoThunk.pending, setLoadingState)
      .addCase(LoginByPhoneNoThunk.fulfilled, setSuccessState)
      .addCase(LoginByPhoneNoThunk.rejected, setFailedState)
      //Create Account using Phone builder
      .addCase(VerifyPhoneNoOtpThunk.pending, setLoadingState)
      .addCase(VerifyPhoneNoOtpThunk.fulfilled, setSuccessState)
      .addCase(VerifyPhoneNoOtpThunk.rejected, setFailedState)
      //VerifyEmailOtpThunk
      .addCase(VerifyEmailOtpThunk.pending, setLoadingState)
      .addCase(VerifyEmailOtpThunk.fulfilled, setSuccessState)
      .addCase(VerifyEmailOtpThunk.rejected, setFailedState)
      //Create account using email builder
      .addCase(EmailOtpVerifyThunk.pending, setLoadingState)
      .addCase(EmailOtpVerifyThunk.fulfilled, setSuccessState)
      .addCase(EmailOtpVerifyThunk.rejected, setFailedState)
      //verifiy otp using backupcode
      .addCase(VerifyBackupCodeThunk.pending, setLoadingState)
      .addCase(VerifyBackupCodeThunk.fulfilled, setSuccessState)
      .addCase(VerifyBackupCodeThunk.rejected, setFailedState)
      //Logout
      .addCase(LogoutThunk.fulfilled, (state, action) => {
        state.user = [];
        state.isAllChecked = false;
        state.accessToken = null;
      });
  },
});

export const {addToken, allScreensChecked, setScreenLoader, clearData} =
  authSlice.actions;

export const authStatusSelector = state => state.auth.authStatus;

export default authSlice.reducer;
