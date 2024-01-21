// Задача 1. Замовлення дроїдів
// Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне забезпечення для відділу продажів.

// Оголоси функцію makeTransaction, яка очікує два параметри, значення яких будуть задаватися під час її виклику:
// quantity— перший параметр, число, що містить кількість замовлених дроїдів
// pricePerDroid — другий параметр, число, що містить вартість одного дроїда

// Доповни код функції так, щоб вона повертала рядок з повідомленням про покупку ремонтних дроїдів: "You ordered <quantity> droids worth <totalPrice> credits!", де:
// <quantity> — це кількість замовлених дроїдів
// <totalPrice> — це загальна вартість замовлення, тобто вартість усіх замовлених дроїдів

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.
// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

// На що буде звертати увагу ментор при перевірці:
// Оголошена функція makeTransaction(quantity, pricePerDroid)
// Виклик makeTransaction(5, 3000) повертає "You ordered 5 droids worth 15000 credits!"
// Виклик makeTransaction(3, 1000) повертає "You ordered 3 droids worth 3000 credits!"
// Виклик makeTransaction(10, 500) повертає "You ordered 10 droids worth 5000 credits!"
// В консоль виведині всі результаті викликів
// Виклик makeTransaction з будь якими-валідними аргументами повертає правильне значення

// Рішення:

function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  result = `Your ordered ${quantity} droids worth ${totalPrice} credits!`;
  return result;
}
makeTransaction(5, 3000);
console.log(makeTransition(5, 3000));
makeTransaction(3, 1000);
console.log(makeTransition(3, 1000));
makeTransaction(10, 500);
console.log(makeTransition(10, 500));
