// Завдання 4
// Напиши скрипт управління формою логіна.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Log in</button>
// </form>

// 1) Обробка відправлення форми form.login-form повинна відбуватися за подією submit.
// 2) Під час відправлення форми сторінка не повинна перезавантажуватися.
// 3)Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All form fields must be filled in'. 
// 4) Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
// 5) Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях. Для доступу до елементів форми використовуй властивість elements.
// 6) При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.


// -------------------РОЗВ'ЯЗАННЯ------------------------

// 1) Отримуємо посилання на клас .login-form
const form = document.querySelector('.login-form');
// 2) Встановлюємо слухача подій на всю форму по submit і другим аргументом - функцію управління формою
form.addEventListener('submit', handleSubmit);

// 3) Функція управління за подією event
function handleSubmit(event) {
    
    event.preventDefault();
// 4) описуємо змінною пароль і пароль
    const emailInput = form.elements.email;
    const passwordInput = form.elements.password;
// 5) за умови , коли очищені значення полів не введені коже у своє поле - виводити повідомлення, що не все заповнено і треба дозаповнити
  if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
    alert('All form fields must be filled in');
  } else {
// 6) інакше, коли введено все правильно, то створюємо об'єк із значенням пошти і пароля
    const formData = {
      email: emailInput.value.trim(),
      password: passwordInput.value.trim()
    };
// 7) виведення в консоль formData у випадку, коли заповнено і пошту і пароль
      console.log(formData); //{email: 'katerinarotan@gmail.com', password: 'іаві'}
    //   очищення форми після введення
    form.reset();
  }
}