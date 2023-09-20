import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
const Shimmer = ({internalStuff = null}) => {
  return <SkeletonPlaceholder>{internalStuff}</SkeletonPlaceholder>;
};
export default Shimmer;
