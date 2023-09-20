import { Alert } from 'react-native';

export const handleAxiosResponse = response => {
  return Promise.resolve(response);
};

export const handleAxiosError = error => {
  let errorMessage = error?.response?.data?.message;
  if (error.request.status === 400) {
    Alert.alert('Alert', error?.response?.data?.message);
  }
  if (error.request.status === 404) {
    Alert.alert('Alert', error?.response?.data?.message);
  }
  if (error.request.status >= 400 && error.request.status <= 499) {
    console.log('axios errror');
  } else if (error.request.status === 0)
    errorMessage = 'Please Wait! Server Not Started Yet.';
  else if (error.request.status > 499) {
    errorMessage = 'Internal Server Error';
    Alert.alert(errorMessage);
  }
};
