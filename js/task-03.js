// Завдання 3
// 1) Напиши скрипт,
// 2) який під час набору тексту в інпуті input#name - input(подія input) підставляє його поточне значення в span#name - output як ім’я для привітання.
// 3) Обов’язково очищай значення в інпуті по краях від пробілів.
// 4) Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', updateName); // Мені поки що подоюається більше так, я знаю, що можна стрілочною, але я поки плутаюся

function updateName() {
    const inputText = nameInput.value.trim(); // Очистка від всіх пробілів по краях
    // value звертається до значення, яке введено в елемент введення з ідентифікатором name-input.
    
  let outputName; // заготовили outputName
  if (inputText === '') {
    outputName = 'Anonymous';
  } else {
    outputName = inputText;
  }

  nameOutput.textContent = outputName; // передаємо контекст тексту ввода в рядок з привітанням
}


// // -------------------СТРІЛОЧНИЙ ВАРІАНТ------------------------

// nameInput.addEventListener('input', () => {
//    const inputText = nameInput.value.trim();
    
//   let outputName; 
//   if (inputText === '') {
//     outputName = 'Anonymous';
//   } else {
//     outputName = inputText;
//   }
//   nameOutput.textContent = outputName; 
// });