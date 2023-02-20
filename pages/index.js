// import Card from '../components/Card.js';
const messageListRu = [{
    image: './../images/cards/circli.jpg',
    text: 'Шиномонтаж любой сложности',
    description: 'Колесо'
  },
  {
    image: './../images/cards/engine.jpg',
    text: 'Техническое обслуживание',
    description: 'Мотор под капотом'
  },
  {
    image: './../images/cards/filter.jpg',
    text: 'Замена всех жидкостей и фильтров',
    description: 'Фильтры и масла'
  },
  {
    image: './../images/cards/chassis.jpg',
    text: 'Ремонт ходовой части',
    description: 'Вид колеса снизу'
  },
];

const messageListEn = [{
  image: './../images/cards/circli.jpg',
  text: 'Tire fitting of any complexity',
  description: 'Wheel'
  },
  {
    image: './../images/cards/engine.jpg',
    text: 'Maintenance',
    description: 'Motor under the hood'
  },
  {
    image: './../images/cards/filter.jpg',
    text: 'Changing all fluids and filters',
    description: 'Filters and oils'
  },
  {
    image: './../images/cards/chassis.jpg',
    text: 'Running gear repair',
    description: 'Wheel view from below'
  },
];


class Card {
    // в конструкторе будут динамические данные,
    // для каждого экземпляра свои
    constructor(text, image, description) {
        // text и image — приватные поля, 
        // они нужны только внутри класса
        this._text = text;
        this._image = image;
        this._description = description;
    }

    _getTemplate() {
        // забираем разметку из HTML и клонируем элемент
          const cardElement = document
          .querySelector('.template-cards')
          .content
          .querySelector('.cards__item')
          .cloneNode(true);
          
        // вернём DOM-элемент карточки
          return cardElement;
    } 
    generateCard() {
    // Запишем разметку в приватное поле _element. 
    // Так у других элементов появится доступ к ней.
    this._element = this._getTemplate();
    this._img  = this._element.querySelector('.cards__image');
    
    // Добавим данные
    this._img.alt = this._description
    this._img.src = this._image;
    this._element.querySelector('.cards__description').textContent = this._text;
    
    // Вернём элемент наружу
    return this._element;
    } 
}


messageListRu.forEach((item) => {
    // Создадим экземпляр карточки
    const card = new Card(item.text, item.image, item.description);
    // Создаём карточку и возвращаем наружу
    const cardElement = card.generateCard();
  
    // Добавляем в DOM
    document.querySelector('.cards').append(cardElement);
  }); 

  const getValue = string => Number(string.substring(0, string.length-2));

  const container = document.querySelector('.cards');
  const scrollLeftButton = document.querySelector('.collection__arrow-left');
  const scrollRightButton = document.querySelector('.collection__arrow-right');
  const cardItem = document.querySelector('.cards__item')
  const cardWidth = getComputedStyle(cardItem);
  const containerGap = getComputedStyle(container);
  const scrollStep = content => {
    const cardItem = document.querySelector('.cards__item')
    const cardWidth = getComputedStyle(cardItem);
    const containerGap = getComputedStyle(content);
    return window.matchMedia("(max-width: 554px)").matches ?
          getValue(cardWidth.width) + getValue(containerGap.rowGap) : 2 * getValue(cardWidth.minWidth) + getValue(containerGap.rowGap);
};
  

  
  scrollLeftButton.addEventListener('click', () => {
    container.scrollLeft -= scrollStep(container); // scroll scrollStep pixels to the left
  });
  
  scrollRightButton.addEventListener('click', () => {
    container.scrollLeft += scrollStep(container); // scroll scrollStep pixels to the right
  });