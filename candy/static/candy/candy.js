import { getCandies, getProducers, getCustomUsers, get_amount, get_average_price, get_lowest_price, get_highest_price } from "../api/api.js";

// Выводит конфету в html шаблон //
function printCandyHTML(candy){
    let imgPath = candy.img;
    if (typeof candy.img == 'undefined'){
        imgPath = 'static/candy/img/blank.avif';
    }
    
    imgPath = candy.img ?? 'static/candy/img/blank.avif';
    console.log(imgPath);
    let htmlText = `
        <div class="candy-block">
            <img src="${imgPath}" alt="Конфета">
            <div class="candy-info">
                <h2><a href="/candy/${candy.id}">${candy.name}</a></h2>
                <p><span class="property-name">Пользователь:</span>${candy.owner.username}</p>
                <p><span class="property-name">Стоимость:</span>${candy.price}р</p>
                <p><span class="property-name">Рейтинг:</span>${candy.rate}</p>
            </div>
        </div>`;
    document.getElementById('main-content').innerHTML += htmlText;
};
showLoader();
let data = await getCandies();
// Отображение конфет в шаблоне //
for (let candy of data){
    // console.log(candy.name + "; price = " + candy.price);
    let producer = {name:"Неизвестный производитель"}
    let owner = {name:"Неизвестный пользователь"}
    
    if (!(candy.producer === null)){
        producer = await getProducers(candy.producer);
    }
    if (!(candy.owner === null)){
        owner = await getCustomUsers(candy.owner);
    }
    candy.producer = producer;
    candy.owner = owner;
    printCandyHTML(candy);
}
//////////////////////////////////

// Заполнение данных о конфетах //
const amount_el = document.getElementById("totalCandies");
const average_price_el = document.getElementById("averagePrice");
const lowes_price_el = document.getElementById("lowestPrice");
const highest_price_el = document.getElementById("highestPrice");

amount_el.textContent = get_amount(data);
average_price_el.textContent = get_average_price(data)
lowes_price_el.textContent = get_lowest_price(data);
highest_price_el.textContent = get_highest_price(data);
//////////////////////////////////
hideLoader()

function showLoader() {
    const loader = document.getElementById('loader');
    loader.classList.remove('hidden'); // удаляем класс hidden, чтобы отобразить лоадер
}
function hideLoader() {
    const loader = document.getElementById('loader');
    loader.classList.add('hidden'); // добавляем класс hidden, чтобы скрыть лоадер
}
