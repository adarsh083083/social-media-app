import {View, Text} from 'react-native';
import React, {useState} from 'react';

const chooseIntrestHooks = () => {
  const [intrestContent, setAboutContent] = useState([
    {idItem: 1, name: 'one'},
    {idItem: 2, name: 'two'},
    {idItem: 3, name: 'three'},
    {idItem: 4, name: 'four'},
    {idItem: 5, name: 'five'},
    {idItem: 6, name: 'six'},
    {idItem: 7, name: 'seven'},
    {idItem: 8, name: 'eight'},
    {idItem: 9, name: 'nine'},
    {idItem: 10, name: 'ten'},
    {idItem: 11, name: 'eleven'},
    {idItem: 12, name: 'twelve'},
    {idItem: 13, name: 'nine'},
    {idItem: 14, name: 'nine'},
    {idItem: 15, name: 'nine'},
    {idItem: 16, name: 'nine'},
    {idItem: 17, name: 'nine'},
    {idItem: 18, name: 'nine'},
    {idItem: 20, name: 'nine'},
  ]);
  const [selectedIntrest, setSelectedIntrest] = useState([]);

  const toggleSelectIntrest = async id => {
    let intrestData = [...selectedIntrest];
    let isPrestent = intrestData.indexOf(id);
    if (isPrestent == -1) {
      intrestData.push(id);
    } else {
      intrestData.splice(isPrestent, 1);
    }
    setSelectedIntrest(intrestData);
  };
  return {
    toggleSelectIntrest,
    selectedIntrest,
    intrestContent,
  };
};

export {chooseIntrestHooks};
