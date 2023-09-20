import IMAGES from './images';
const STATIC_DATA = {
  carousel_data: [
    IMAGES.OnBoardingImage1,
    IMAGES.OnBoardingImage2,
    IMAGES.OnBoardingImage3,
  ],
  backup_data: ['342425', '342425', '342425', '342425'],
  profile_data: [
    {id: '1', challenges: IMAGES.Challenges},
    {id: '2', challenges: IMAGES.Challenges},
    {id: '3', challenges: IMAGES.Challenges},
  ],
  reactions_data: [
    {
      id: '1',
      up: IMAGES.Up_Arrow,
      title: '121',
      down: IMAGES.Down_Arrow,
      graph_title1: '8',
      graph_tile2: '2',
    },
    {
      id: '2',
      up: IMAGES.Message,
      title: '8',
      graph_title1: '8',
      graph_tile2: '2',
    },
    {
      id: '3',
      up: IMAGES.Fire,
      title: '21',
      graph_title1: '8',
      graph_tile2: '2',
    },
    {
      id: '4',
      up: IMAGES.Smile,
      title: '11',
      graph_title1: '8',
      graph_tile2: '2',
    },
  ],
};
export const challengeUser = [
  {
    id: '1',
    name: 'Michael',
    profile: '@michielipenburg',
    image: IMAGES.ProfilePicture,
  },
  {
    id: '2',
    name: 'Jack',
    profile: '@jackblox',
    image: IMAGES.ProfilePicture,
  },
  {
    id: '3',
    name: 'Cora',
    profile: '@coracoin1',
    image: IMAGES.ProfilePicture,
  },
  {
    id: '4',
    name: 'Tom',
    profile: '@tomcrypto',
    image: IMAGES.ProfilePicture,
  },
];

export const addRequireMents = [
  {
    id: '1',
    title: 'Jump your shoes on',
  },
  {
    id: '2',
    title: `Don't stop jumping`,
  },
  {
    id: '3',
    title: 'Set a Requirements',
  },
];
export default STATIC_DATA;
