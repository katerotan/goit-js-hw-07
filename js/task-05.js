

// Напиши скрипт, який змінює колір фону елемента <body> 
// через інлайн - стиль по кліку на button.change - color 
// і задає це значення кольору текстовим вмістом для span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>


// Для генерування випадкового кольору використовуй функцію getRandomHexColor().
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Зверни увагу, що функція getRandomHexColor() повертає колір у hex-форматі, в той час як колір фону на <body> буде у форматі rgb. Це нормально й не потребує якихось правок.



// 'DOMContentLoaded' - кнопка почне працювати тільки після того як весь код буде прочитаний
document.addEventListener('DOMContentLoaded', changeColorRandom());

function changeColorRandom() {
  // доступ до body
  const bodyElement = document.body;
  // доступ до класу .color
  const colorSpan = document.querySelector('.color');
  // доступ до класу .change-color
  const changeColorButton = document.querySelector('.change-color');




  function changeBackgroundColor() {
// Викликає функцію getRandomHexColor(), яка генерує випадковий колір у форматі hex 
    const randomColor = getRandomHexColor();
// Змінюємо властивість backgroundColor елемента <body>, встановлюючи фоновий колір сторінки на колір з getRandomHexColor()
    bodyElement.style.backgroundColor = randomColor;
// Змінюємо текстовий вміст елемента <span class="color"> на випадковий колір, щоб відобразити цей колір на сторінці
    colorSpan.textContent = randomColor;
  }

  // Змінюємо по кліку колір
  changeColorButton.addEventListener('click', changeBackgroundColor);
};

