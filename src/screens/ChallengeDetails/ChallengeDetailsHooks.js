import {View, Text} from 'react-native';
import React, {useState} from 'react';

const ChallengeDetailsHooks = () => {
  const [showOption, setShowOption] = useState(false);

  const toggleOption = type => {
    if (type == 1) {
      setShowOption(false);
    } else {
      setShowOption(!showOption);
    }
  };
  return {
    toggleOption,
    showOption,
  };
};

export {ChallengeDetailsHooks};
