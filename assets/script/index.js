const brand = document.getElementById('brand');
const model = document.getElementById('model');
const result = document.getElementById('result');
const volume = document.getElementById('volume');
const newCar = document.getElementById('new');
const used = document.getElementById('used');
const oneTwo = document.getElementById('one-two');
const three = document.getElementById('three');

//Модели:
const models = {
  Reno: ['Duster', 'Logan'],
  Opel: ['Astra', 'Meriva'],
  Haval: ['Jolion', 'Dargo'],
  Subaru: ['Forester', 'Stella'],
};

//Убираем поле владельцев, если машина новая:
const ownersField = document.querySelector('.form__owners');
const ownersRemove = () => {
if (newCar.checked) {
  ownersField.style.display = 'none';
} else if (used.checked) {
  ownersField.style.display = 'block';
}
};

newCar.addEventListener('change', () => {
  ownersRemove(); 
  calculatePrice(); 
});

used.addEventListener('change', () => {
  ownersRemove(); 
  calculatePrice(); 
});


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
    price += 330000;
  };

  //Изменение цены в завис. от V двигателя:
const volumeNumber = parseFloat(volume.value);

if (volumeNumber) {
  price += volumeNumber * 10000;
};

//Изменение цены в завис. от состояния:
if (used.checked) {
  price -= 380000;
}

//Изменение цены в завис. от количества владельцев:
if (oneTwo.checked) {
  price -= 100000;
};

if(three.checked) {
  price -= 350000;
};

  result.textContent = `Итоговая стоимость авто: ${price} рублей.`
};
