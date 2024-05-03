import banana from '../../public/image/banana.png';
import lettuce from '../../public/image/lettuce.png';
import strawberry from '../../public/image/strawberry.png';
import sweetPotato from '../../public/image/sweetpotato.png';
import strawberryIcon from '../../public/cropIcon/strawberry.svg';
import carrotIcon from '../../public/cropIcon/carrot.svg'
import grapeIcon from '../../public/cropIcon/grape.svg'
import appleIcon from '../../public/cropIcon/apple.svg'
import orangeIcon from '../../public/cropIcon/orange.svg'
import lettuceIcon from '../../public/cropIcon/lettuce.svg'
import potatoIcon from '../../public/cropIcon/potato.svg'
import tomatoIcon from '../../public/cropIcon/tomato.svg'
import eggplantIcon from '../../public/cropIcon/eggplant.svg'
import cucumberIcon from '../../public/cropIcon/cucumber.svg'

export const communityData = [
  { id: 1, text: '딸기 수익성 관련 질문', like: 4 },
  { id: 2, text: '딸기 키우기가 너무 힘들어요..', like: 7 },
  { id: 3, text: '요즘 장마철이라 영 별로네요', like: 134 },
  { id: 4, text: '조언 부탁드립니다', like: 3 },
  { id: 5, text: '잡초 제거 방법 질문', like: 67 },
];

export const marketData = [
  {
    id: 3,
    url: strawberry,
    like: false,
    liked: 220,
    type: '딸기',
    price: 12400,
    weight: 750,
    farmName: '민석농장',
    place: '경기도 화성시 반월동',
  },
  {
    id: 1,
    url: banana,
    like: false,
    liked: 167,
    type: '바나나',
    price: 12400,
    weight: 750,
    farmName: '민석농장',
    place: '경기도 화성시 반월동',
  },
  {
    id: 2,
    url: lettuce,
    like: true,
    liked: 150,
    type: '상추',
    price: 12400,
    weight: 750,
    farmName: '민석농장',
    place: '경기도 화성시 반월동',
  },
  {
    id: 4,
    url: sweetPotato,
    like: false,
    type: '고구마',
    liked: 97,
    price: 12400,
    weight: 750,
    farmName: '민석농장',
    place: '경기도 화성시 반월동',
  },
  {
    id: 5,
    url: banana,
    type: '바나나',
    price: 12400,
    like: true,
    liked: 62,
    weight: 750,
    farmName: '민석농장',
    place: '경기도 화성시 반월동',
  },
];

export const cropData = [
  { id: 1, title: '딸기', icons: strawberryIcon },
  { id: 2, title: '당근', icons: carrotIcon },
  { id: 3, title: '포도', icons: grapeIcon },
  { id: 4, title: '사과', icons: appleIcon },
  { id: 5, title: '오렌지', icons: orangeIcon },
  { id: 6, title: '상추', icons: lettuceIcon },
  { id: 7, title: '감자', icons: potatoIcon },
  { id: 8, title: '토마토', icons: tomatoIcon },
  { id: 9, title: '가지', icons: eggplantIcon },
  { id: 10, title: '오이', icons: cucumberIcon },
];
