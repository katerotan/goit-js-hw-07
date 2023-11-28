

// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// 1) Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// 2) Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

// 3) Кількість категорій, їх назва та кількість елементів отримані за допомогою властивостей і методів DOM-елементів
// 4) Дані за кожною категорією були отримані й виведені в консоль у тілі циклу або методу forEach()



// 1) Шукаємо всі категорії, виводимо їх в масив і рахуємо довжин масиву.
// #categories - означає пошук по id і одночасно з .item
const categoriesCount = document.querySelectorAll('#categories .item').length;
console.log(`Number of categories: ${categoriesCount}`);

// 2)У множині категорій (у дереві) для кожної категорії зробити наступне:
document.querySelectorAll('#categories .item').forEach((category) => {
// змінній присвоюємо значення: у кожній категорії шукаємо вкладені h2 і беремо його текстову частину.
    const title = category.querySelector('h2').textContent;
// змінній присвоюємо значення: у кожній категорії шукаємо вкладені ul li і вимірюємо довжину масиву.
    const elementsInCategory = category.querySelectorAll('ul li').length;
// Виводимо в консоль по черзі
    console.log(`Category: ${title}`);
    console.log(`Elements: ${elementsInCategory}`);
    
});
