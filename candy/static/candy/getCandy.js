import { getCandies, getProducers, getCustomUsers } from "../api/api.js";


async function loadCandyData(index){
    const candy = await getCandies(index);
    console.log(candy);

    // Установка изображения конфеты или значения по умолчанию
    const imgPath = candy.img ?? 'static/candy/img/blank.avif';
    let producer = {name:'Неизвестный производитель'};
    let owner = {name:'Неизвестный пользователь'};

    if (!(candy.producer === null)){
        producer = await getProducers(candy.producer);
    }
    if (!(candy.owner === null)){
        owner = await getCustomUsers(candy.owner);
    }
    candy.producer = producer.username;
    candy.owner = owner.username;

    const htmlText = `
        <div class="candy-block">
            <img src="${imgPath}" alt="Конфета">
            <div class="candy-info">
                <h2><a href="/candy/${candy.id}">${candy.name}</a></h2>
                <p><span class="property-name">Производитель:</span> <span class="candy-manufacturer">${producer.name}</span></p>
                <p><span class="property-name">Пользователь:</span>${owner.username}</p>
                <p><span class="property-name">Вес:</span>${candy.weight} грамм</p>
                <p><span class="property-name">Стоимость:</span>${candy.price}р</p>
                <p><span class="property-name">Рейтинг:</span>${candy.rate}</p>
            </div>
        </div>`;

    // Безопасное добавление HTML в DOM
    const mainContent = document.getElementById('main-content');
    mainContent.insertAdjacentHTML('beforeend', htmlText);
}

// Получение индекса конфеты из URL
const currentUrl = window.location.href.split("/");
const candyIndex = currentUrl.at(-2);
console.log(candyIndex);

// Загрузка данных о конфете
loadCandyData(candyIndex);
