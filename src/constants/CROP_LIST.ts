import strawberryIcon from '/cropIcon/strawberry.svg';
import carrotIcon from '/cropIcon/carrot.svg';
import grapeIcon from '/cropIcon/grape.svg';
import appleIcon from '/cropIcon/apple.svg';
import orangeIcon from '/cropIcon/orange.svg';
import lettuceIcon from '/cropIcon/lettuce.svg';
import potatoIcon from '/cropIcon/potato.svg';
import tomatoIcon from '/cropIcon/tomato.svg';
import eggplantIcon from '/cropIcon/eggplant.svg';
import cucumberIcon from '/cropIcon/cucumber.svg';

export const CROP_LIST = [
  { name: '딸기', value: 'STRAWBERRY', icons: strawberryIcon },
  { name: '당근', value: 'CARROT', icons: carrotIcon },
  { name: '포도', value: 'GRAPE', icons: grapeIcon },
  { name: '사과', value: 'APPLE', icons: appleIcon },
  { name: '오렌지', value: 'ORANGE', icons: orangeIcon },
  { name: '상추', value: 'LETTUCE', icons: lettuceIcon },
  { name: '감자', value: 'POTATO', icons: potatoIcon },
  { name: '토마토', value: 'TOMATO', icons: tomatoIcon },
  { name: '가지', value: 'EGGPLANT', icons: eggplantIcon },
  { name: '오이', value: 'CUCUMBER', icons: cucumberIcon },
  // { name: '배', value: 'PEAR' },
  // { name: '수박', value: 'WATERMELON' },
  // { name: '기타', value: 'OTHER' },
] as const;
