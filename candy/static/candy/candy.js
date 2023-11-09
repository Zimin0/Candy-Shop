import { getCandies, getProducers, getCustomUsers, get_amount, get_average_price, get_lowest_price, get_highest_price } from "../api/api.js";

// Выводит конфету в html шаблон
async function printCandyHTML(candy) {
    const imgPath = candy.img ?? 'static/candy/img/blank.avif';
    const mainContent = document.getElementById('main-content');
    const candyBlock = document.createElement('div');
    candyBlock.className = 'candy-block';
    candyBlock.innerHTML = `
        <img src="${imgPath}" alt="Конфета">
        <div class="candy-info">
            <h2><a href="/candy/${candy.id}">${candy.name}</a></h2>
            <p><span class="property-name">Пользователь:</span>${candy.owner.username}</p>
            <p><span class="property-name">Стоимость:</span>${candy.price}р</p>
            <p><span class="property-name">Рейтинг:</span>${candy.rate}</p>
        </div>`;
    mainContent.appendChild(candyBlock);
}


async function loadCandies() {
    showLoader();
    const data = await getCandies();
    for (const candy of data) {
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
        await printCandyHTML(candy);
    }
    // Заполнение данных о конфетах //
    document.getElementById("totalCandies").textContent = get_amount(data);
    document.getElementById("averagePrice").textContent = get_average_price(data);
    document.getElementById("lowestPrice").textContent = get_lowest_price(data);
    document.getElementById("highestPrice").textContent = get_highest_price(data);
    //////////////////////////////////
    hideLoader();
}
function showLoader() {
    document.getElementById('loader').classList.remove('hidden'); // удаляем класс hidden, чтобы отобразить лоадер
}
function hideLoader() {
    document.getElementById('loader').classList.add('hidden'); // добавляем класс hidden, чтобы скрыть лоадер
}
// Вызовите эту функцию, когда DOM будет полностью загружен или когда это будет необходимо
loadCandies();
