import { getCandies, getProducers, getCustomUsers } from "../api/api.js";


async function loadCandyData(index){
    let candy = await getCandies(index);
    console.log(candy);


    let imgPath = candy.img;
    if (typeof candy.img == 'undefined'){
        imgPath = 'static/candy/img/blank.avif';
    }

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

    imgPath = candy.img ?? 'static/candy/img/blank.avif';
    console.log(imgPath);
    let htmlText = `
        <div class="candy-block">
            <img src="${imgPath}" alt="Конфета">
            <div class="candy-info">
                <h2><a href="/candy/${candy.id}">${candy.name}</a></h2>
                <p><span class="property-name">Производитель:</span> <span class="candy-manufacturer"> ${candy.producer}</span></p>
                <p><span class="property-name">Пользователь:</span>${candy.owner}</p>
                <p><span class="property-name">Вес:</span>${candy.weight} грамм</p>
                <p><span class="property-name">Стоимость:</span>${candy.price}р</p>
                <p><span class="property-name">Рейтинг:</span>${candy.rate}</p>
            </div>
        </div>`;
    document.getElementById('main-content').innerHTML += htmlText;
}

const currentUrl = window.location.href.split("/");
let candyIndex = currentUrl.at(-2);
console.log(candyIndex);
loadCandyData(candyIndex);
