import {combineReducers} from '@reduxjs/toolkit';
import authSlices from './auth.slices';
import ProfileDetailsSlice from './userPostAndProfileDetails.slice';

export default combineReducers({
  authSlice: authSlices,
  userProfileDetails: ProfileDetailsSlice,
});
