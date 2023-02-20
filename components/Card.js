export default class Card {
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