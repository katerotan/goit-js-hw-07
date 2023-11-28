function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Завдання 6
// 1) Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.

// 2) Є input, у який користувач вводить бажану кількість елементів. 
// 3) Після натискання на кнопку Create має рендеритися(додаватися в DOM) колекція з відповідною кількістю елементів і очищатися значення в інпуті.
// 4) При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова.Після натискання на кнопку Destroy колекція елементів має очищатися.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// 5) Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно має бути в межах від 1 до 100 включно.Тільки якщо воно задоволяє умову, мають додаватися нові < div > елементи в DOM.

// 6) Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає один параметр — число, що зберігає кількість елементів для рендеру.
// 7) Функція має створювати стільки < div > елементів, скільки вказано в параметрі amount і додавати їх у DOM дочірніми елементами для div#boxes.

// 8) Розміри першого <div> елемента мають бути 30px на 30px.
// 9) Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// 10) Усі елементи повинні мати випадковий колір фону. Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.


// 11) Для очищення колекції після натискання на кнопку Destroy створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.


document.addEventListener('DOMContentLoaded', function () {
  const inputElement = document.querySelector('#controls input');
  const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');
  const boxesContainer = document.querySelector('#boxes');

  createButton.addEventListener('click', createBoxes);
  destroyButton.addEventListener('click', destroyBoxes);
});


// // Якщо пункт очищаємо і робимо новий варіант кольорових блоків
// function createBoxes() {
//   const inputNumber = Number(document.querySelector('#controls input').value);
  
//   if (inputNumber >= 1 && inputNumber <= 100) {
//     const boxesContainer = document.querySelector('#boxes');
//     boxesContainer.innerHTML = ''; // Очищаємо попередні елементи

//     let size = 30;
//     for (let i = 0; i < inputNumber; i++) {
//       const box = document.createElement('div');
//       box.style.width = `${size}px`;
//       box.style.height = `${size}px`;
//       box.style.backgroundColor = getRandomHexColor();
//       boxesContainer.appendChild(box);
//       size += 10;
//     }

//     inputElement.value = ''; // Очищаємо значення input
//   } else {
//     alert('Please enter a number between 1 and 100.');
//   }
// }


// Якщо пункт 3 означав, що треба, щоб додавалося ще і ще нові до старого результату
function createBoxes() {
  const inputNumber = Number(document.querySelector('#controls input').value);

  if (inputNumber >= 1 && inputNumber <= 100) {
    const boxesContainer = document.querySelector('#boxes');

    let size = 30;
    for (let i = 0; i < inputNumber; i++) {
      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);
      size += 10;
    }

    // Очищаємо значення input
    document.querySelector('#controls input').value = '';
  } else {
    alert('Please enter a number between 1 and 100.');
  }
}


function destroyBoxes() {
  const boxesContainer = document.querySelector('#boxes');
  boxesContainer.innerHTML = ''; // Очищаємо всі елементи
}

