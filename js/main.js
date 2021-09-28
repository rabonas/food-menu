let dishes = [
  new Dish('Mampar', '15000 sum', 1, 'img/mampar.jpg', 2),
  new Dish('Xamir xasip', '17500 sum', 2, 'img/xamirXasip.png', 0),
  new Dish('Qovurdoq', '19000 sum', 3, 'img/qovurdoq.jpg', 3),
  new Dish('Cho’zma lag’mon', '19500 sum', 4, 'img/lagman.png', 0),
  new Dish('Norin', '16000 sum', 5, 'img/norin.jpg', 1),
  new Dish('Somsa', '9000 sum', 6, 'img/somsa.jpg', 1),
  new Dish('Mastava', '14000 sum', 7, 'img/mastava.jpg', 2),
  new Dish('To`y oshi', '14000 sum', 8, 'img/osh.jpg', 0),
  new Dish('Dimlama', '13000 sum', 9, 'img/dimlama.jpg', 0),
  new Dish('Manti', '10000 sum', 10, './img/manti.png', 0),
  new Dish('Moxora', '22000 sum', 11, './img/moxora.jpg', 2),
  new Dish('Xalim', '18000 sum', 12, './img/xalim.jpg', 0),
  new Dish('Qozon kabob', '36000 sum', 13, './img/qozonKabob.jpg', 3),
  new Dish('Oliviye salati', '14000 sum', 14, './img/olive.jpg', 4),
  new Dish('Kapriz salati', '7000 sum', 15, './img/kaoriz.jpg', 4),
  new Dish('Do`lma', '18000 sum', 16, './img/dolma.jpg', 0),
  new Dish('Kabob', '9000 sum', 17, './img/kabob.jpeg', 3),
  new Dish('Blinchik', '3500 sum', 18, './img/blinchik.jpg', 1),
  new Dish('Tovuq sho`rva', '12000 sum', 19, './img/bulon.jpg', 2),
  new Dish('Baqlajonli salat', '7000 sum', 20, './img/salat.jpg', 4),
  new Dish('Chizkeyk', '13000 sum', 21, './img/chizkeyk.jpg', 5),
  new Dish('Puding', '15000 sum', 22, './img/puding.jpg', 5),
  new Dish('Tiramisu', '24000 sum', 23, './img/tiramisu.jpg', 5),
  new Dish('Ekler', '25000 sum', 24, './img/ekler.jpg', 5),
  new Dish('Paxlava', '29000 sum', 25, './img/paxlava.jpg', 5),
  new Dish('Sushi', '60000 sum', 26, './img/sushi.jpg', 1),
  new Dish('Kimbap', '40000 sum', 27, './img/kimbap.jpg', 1),
  new Dish('Snaklar', '11000 sum', 28, './img/snack.jpg', 1),
  new Dish('Kartoshka fri', '15000 sum', 29, './img/fri.jpg', 1),
  new Dish('Pure', '5000 sum', 30, './img/pure.jpg', 1)
];

let dishTypes = [ 'hot', 'cold', 'soup', 'grill', 'salads', 'desserts'];

function Dish(name, price, count, photo, dishType) {
  this.name = name;
  this.price = price;
  this.count = count;
  this.photo = photo;
  this.dishType = dishType;
}

// document dan element olish

const tableEl = document.getElementById('table'); // column ni bosh sahifadagi otasi   
const dishesEl = document.getElementsByClassName('confirmation__dishes')[0]; // column ni checkout sahifasidagi otasi
const navEl = document.getElementById('myNavbar'); // linklani otasi (navbar)

 // bosh sahifadagi ovqatlar ko'rinishi 

function createDishDiv(el) { 
  let dish = document.createElement('div');
  dish.className = 'column';

  let name = document.createElement('h4');
  name.className = 'food__name';
  name.innerText = el.name;

  let span = document.createElement('span');
  span.className = 'food__price';
  span.innerText = el.price;

  let image = document.createElement('img');
  image.className = 'dish__img';
  image.src = el.photo;

  let btn = document.createElement('button');
  btn.className = 'add-dish';
  btn.setAttribute('data-count', el.count);
  btn.innerText = 'Add to cart';

  dish.appendChild(image);
  dish.appendChild(name);
  dish.appendChild(span);
  dish.appendChild(btn)

  tableEl.appendChild(dish);
}


// linklani bosganda o'sha linkdagi ovqatlani chiqazib qoganlarini o'chirish

function appendDishes(dish) {
  tableEl.innerHTML = '';
  dish.forEach((el) => {
    createDishDiv(el);
  })
}

navEl.addEventListener('click', function(e) {
  let type = e.target.getAttribute('data-type');
  const links = document.getElementsByClassName('header__link');

  for(let i = 0;i < links.length; i++) {
    links[i].classList.remove('active__link');
  }

  e.target.classList.add('active__link');

  if(type == -1) {
    appendDishes(dishes);
  } else {
    let filteredDishes = dishes.filter(function(el) {
      return el.dishType == type;
    });

    appendDishes(filteredDishes);
  }
});

appendDishes(dishes);

// search qismi

const inpEl = document.getElementsByClassName('search__inp')[0];
const cards = document.getElementsByClassName('column');

function search() {
    for(el of cards) {
        if (el.innerText.toLowerCase().includes(inpEl.value)) {
            el.style.display = 'block';
        } else {
            el.style.display = 'none'
        }
    }
}

inpEl.addEventListener('keyup', search)

// checkout sahifasini ochilib yopilishi

const openCheck = document.getElementById('openCheckout');
const closeCheck = document.getElementsByClassName('back')[0];
const check = document.getElementsByClassName('bg-checkout')[0];

openCheck.addEventListener('click', function() {
  check.style.display = 'block';
})

closeCheck.addEventListener('click', function() {
  check.style.display = 'none';
})




function createCart(el) { 
  const prod = document.createElement('div');
  prod.className = 'prod';

  const prodInfo = document.createElement('div');
  prodInfo.className = 'prod__info'

  const img = document.createElement('img');
  img.className = 'prod__img';
  img.src = el.photo;

  const prodText = document.createElement('div');
  prodText.className = 'prod__text';

  const prodName = document.createElement('h3');
  prodName.className = 'prod__name';
  prodName.innerText = el.name;

  const prodPrice = document.createElement('span');
  prodPrice.className = 'prod__price';
  prodPrice.innerText = el.price;

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn__delete';
  deleteBtn.setAttribute('data-id', el.count);

  const deleteImg = document.createElement('img');
  deleteImg.className = 'delete__img'
  deleteImg.src = './img/delete.svg'

  prod.appendChild(prodInfo);
  prodInfo.appendChild(img);
  prodText.appendChild(prodName);
  prodText.appendChild(prodPrice);
  prodInfo.appendChild(prodText);
  deleteBtn.appendChild(deleteImg);
  prod.appendChild(deleteBtn);
  // if(dishesEl) {
    dishesEl.appendChild(prod);
  // }
};

let myCheck = JSON.parse(localStorage.getItem('myCheck')) ? JSON.parse(localStorage.getItem('myCheck')) : [];

tableEl.addEventListener('click', function(event) {
  if(event.target.className == 'add-dish') {
    let btnCount = +event.target.getAttribute('data-count');
    event.target.innerText = 'In cart!';
    addDishToCart(btnCount);
    showCheckItems();
  }
})

function addDishToCart(id) {
  if(!myCheck.includes(id)) {
    myCheck.push(id);
    localStorage.setItem('myCheck', JSON.stringify(myCheck));
  }
}

function showCheckItems() {
  dishesEl.innerHTML = '';
    myCheck.forEach((el) => {
      let item = dishes.filter((dish) => {
        return dish.count == el;
      })
      createCart(item[0]);
      openCheck.innerText = myCheck.length;
      total.innerText = showTotal() + ' sum';
    })
}

dishesEl.addEventListener('click', function(event) {
  if(event.target.className == 'btn__delete' || event.target.className == 'delete__img') {
    let elId = +event.target.getAttribute('data-id');
    let parent = event.target.closest('.prod');

    myCheck.splice(myCheck.indexOf(elId), 1);
    localStorage.setItem('myCheck', JSON.stringify(myCheck));
    dishesEl.removeChild(parent);
    openCheck.innerText = myCheck.length;
    total.innerText = showTotal() + ' sum';
  }
})

openCheck.innerText = myCheck.length;

const total = document.getElementsByClassName('price__sum')[0];

function showTotal() {
  let total = 0;
  myCheck.forEach((el) => {
    let item = dishes.filter((dish) => {
      return dish.count == el;
    });
    total += Number.parseFloat(item[0].price);
  })
  return total;
}

total.innerText = showTotal() + ' sum';