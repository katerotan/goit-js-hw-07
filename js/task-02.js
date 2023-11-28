

// 1) Напиши скрипт для створення галереї зображень на основі масиву даних. HTML містить список ul.gallery.
// <ul class="gallery"></ul>

// 2) Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>.
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// 3) Ти можеш створити й додати HTML-елементи, використовуючи:
// - document.createElement() і elem.append() 
// - або шаблонні рядки і elem.insertAdjacentHTML().

// 4) Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// 5) Додай мінімальне оформлення галереї флексбоксами через CSS класи.

//-------------------------РОЗВ'ЯЗАННЯ------------------------------

// 1) Отримати посилання до  <ul class="gallery"></ul>
const gallery = document.querySelector('.gallery');
// 2) в масиві об'єктів, для кожного окремого об'єкту створити <li> та <img>
images.forEach(({ url, alt }) => {
  const listItem = document.createElement('li');
  const image = document.createElement('img');
  
// 3) Додаємо атрибути src та alt для тегу <img>. src - це шлях до зображення, а alt - альтернативний текст для зображення.
  image.src = url;
  image.alt = alt;

  // 4) Приєднуємо класи в СSS до новостворених <li> та <img>
  image.classList.add('gallery-image'); // Додати клас для стилізації <img>
  listItem.classList.add('gallery-item'); // Додати клас для стилізації <li> щоб можна було встановити margin

  //5) Вкладаємо тег <img> до тегу <li> , а потім додаємо цей пункт списку до <ul> галереї. Це відбувається в кожній ітерації циклу, створюючи повну галерею зображень.
  listItem.append(image); // "...після всіх дітей istItem", але дітей у <li> поки що нема, тепер будуть
  gallery.append(listItem); // тепер вкладаємо всі <li> в <ul>
});


