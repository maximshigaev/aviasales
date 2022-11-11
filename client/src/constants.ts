export enum SearchBtns {
  Avia,
  Hotel,
}

export enum FieldLabels {
  From = 'Откуда',
  To = 'Куда',
  Where = 'Когда',
  Back = 'Обратно',
}

export enum Classes {
  Economy = 'эконом',
  Comfort = 'комфорт',
  Business = 'бизнес',
  First = 'первый класс',
}

export enum HttpStatusCodes  {
  SUCCESS = 200,
}

export const BASE_URL = 'http://localhost:8000';

export const passengersOptions = [{
  name: 'Взрослые',
  hint: 'Старше 12 лет',
  title: 'adults',
}, {
  name: 'Дети',
  hint: 'От 2 до 12 лет',
  title: 'children'
}, {
  name: 'Младенцы',
  hint: 'До 2 лет',
  title: 'infants',
}];

export const classOptions = ['Эконом', 'Комфорт', 'Бизнес', 'Первый класс'];
