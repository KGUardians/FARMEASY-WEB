import banana from '../../public/image/banana.png';
import lettuce from '../../public/image/lettuce.png';
import strawberry from '../../public/image/strawberry.png';
import sweetPotato from '../../public/image/sweetpotato.png';

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
    weight: 750,
    farmName: '민석농장',
    place: '경기도 화성시 반월동',
  },
];
