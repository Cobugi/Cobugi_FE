import { RulerPen } from 'iconsax-react';
import { Book } from 'iconsax-react';
const CATEGORY = [
    { id: 0, text: '전체', name: 'all', icon: <RulerPen size="32" color="#333333" variant="Outline" /> },
    { id: 1, text: '주방용품', name: 'kitchen' },
    { id: 2, text: '문구/오피스', name: 'stationery', icon: <RulerPen size="32" color="#333333" variant="Outline" /> },
    { id: 3, text: '가전디지털', name: 'homeElectronic' },
    { id: 4, text: '가구', name: 'furniture' },
    { id: 5, text: '도서/음반/dvd', name: 'book',icon : <Book size="32" color="#333333" variant="Outline"/> },
    { id: 6, text: '스포츠/레저', name: 'sport' },
    { id: 7, text: '여행', name: 'travel' },
    { id: 8, text: '취미/악기/게임', name: 'hobby' },
    { id: 9, text: '기타', name: 'etc' },
  ];
  export default CATEGORY;