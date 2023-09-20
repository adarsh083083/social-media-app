import {View, Text} from 'react-native';
import React, {useState} from 'react';

const notificationPreferenceHooks = () => {
  const [notificationState, setNotificationState] = useState([
    {
      title: 'You are challenged',
      para: 'Get notifications when you are challenged.',
      state: false,
    },
    {
      title: 'You challenged someone',
      para: 'Get notifications on your challenges you created',
      state: false,
    },
    {
      title: 'Validated challenges',
      para: 'Get notifications when your proof has been validated or invalidated',
      state: false,
    },
    {
      title: 'Reactions',
      para: 'Get a notification when you get reactions on your content',
      state: false,
    },
    {
      title: 'Following updates',
      para: 'Get notifications when someone follows you',
      state: false,
    },
    {
      title: 'Blockchain',
      para: 'Get notifications when your blockchain transactions did not complete succesfully (recommended)',
      state: false,
    },
    {
      title: 'Affiliate updates',
      para: 'Get notifications when you receive affiliate rewards',
      state: false,
    },
  ]);

  const toggleNotification = async index => {
    let notifications = [...notificationState];
    notifications[index].state = !notifications[index].state;
    setNotificationState(notifications);

    console.log(notificationState);
  };

  return {
    toggleNotification,
    notificationState,
  };
};

export {notificationPreferenceHooks};
