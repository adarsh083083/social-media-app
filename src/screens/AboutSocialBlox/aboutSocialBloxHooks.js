import {View, Text} from 'react-native';
import React, {useState} from 'react';

const aboutSocialBloxHooks = () => {
  const [aboutContent, setAboutContent] = useState([
    {
      title: 'Transparant',
      desc: 'The transparant nature of blockchain technology ensures a secure  and open  community based voting system.',
    },
    {
      title: 'Challenges',
      desc: 'Smart contracts enable new ways to interact with other users. Challenge them to create content or accept a challenge yourself and collect SBLX-tokens.',
    },
    {
      title: 'Privacy First',
      desc: 'This next generation all-in-one platform allows you to secure and control your own private data or earn from ads selected by you.',
    },
    {
      title: 'Reverse marketplace',
      desc: 'Let sellers contact you with their offers, review them and buy your desired product with SBLX.',
    },
    {
      title: 'NFT',
      desc: 'Create, upload and sell your unique NFT or limited edition items in the SocialBlox Marketplace.',
    },
  ]);
  return {
    aboutContent,
  };
};

export {aboutSocialBloxHooks};
