const brand = document.getElementById('brand');
const model = document.getElementById('model');
const result = document.getElementById('result');

//Модели:
const models = {
  Reno: ['Duster', 'Logan'],
  Opel: ['Astra', 'Meriva'],
  Haval: ['Jolion', 'Dargo'],
  Subaru: ['Forester', 'Stella'],
};

//Обработчик события change:
model.addEventListener('change', function() {

});

//Считаем цену:
const calculatePrice = () => {
  let price = 2000000;

  //Изменение цены в завис. от марки:
  if (brand.value === 'Reno') {
    price += 200000;
  } else if (brand.value === 'Opel') {
    price -= 360000;
  } else if (brand.value === 'Haval') {
    price += 1500000;
  } else if (brand.value === 'Subaru') {
    price += 310000;
  };

  //Изменение цены в завис. от модели:
  if (model.value === 'Duster') {
    price += 210000;
  } else if (model.value === 'Logan') {
    price += 200000;
  } else if (model.value === 'Jolion') {
    price += 1670000;
  } else if (model.value === 'Forester') {
    prise += 330000;
  };

  result.textContent = `Итоговая стоимость авто: ${price} рублей.`
};