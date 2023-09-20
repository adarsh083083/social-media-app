import {createSlice} from '@reduxjs/toolkit';
import {UserPostAndProfileThunk} from '../asyncThunks/auth.asyncThunk';
import {THUNK_STATUS} from '../constants';

const initialState = {
  Userdata: [],
  isLoading: false,
  isError: false,
  status: null,
  isAuthenticated: false,
};

const setLoadingState = state => {
  state.status = THUNK_STATUS.LOADING;
  state.isLoading = true;
  state.isAuthenticated = false;
  state.isError = false;
};

const setSuccessState = (state, action) => {
  state.status = THUNK_STATUS.SUCCESS;
  state.Userdata = action?.payload?.data?.data;
  state.isLoading = false;
  state.isAuthenticated = true;
  state.isError = false;
};

const setFailedState = state => {
  state.status = THUNK_STATUS.FAILED;
  state.isLoading = false;
  state.isError = true;
  state.isAuthenticated = false;
};

const ProfileDetailsSlice = createSlice({
  name: 'UserProfileDetails',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(UserPostAndProfileThunk.pending, setLoadingState)
      .addCase(UserPostAndProfileThunk.fulfilled, setSuccessState)
      .addCase(UserPostAndProfileThunk.rejected, setFailedState);
  },
});

export const UserProfileDetails = state => state.status;
export default ProfileDetailsSlice.reducer;
