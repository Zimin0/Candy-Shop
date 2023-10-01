import { getCandies, getProducers, getCustomUsers } from "../api/api.js";

// Выводит конфету в html шаблон //
function printCandyHTML(candy){
    let imgPath = candy.img;
    if (typeof candy.img == 'undefined'){
        imgPath = 'static/candy/img/blank.avif';
    }
    let htmlText = `
        <div class="candy-block">
            <img src="${imgPath}" alt="Конфета">
            <div class="candy-info">
                <h2>${candy.name}</h2>
                <p><span class="property-name">Производитель:</span> <span class="candy-manufacturer"> ${candy.producer.username}</span></p>
                <p><span class="property-name">Пользователь:</span>${candy.owner.username}</p>
                <p><span class="property-name">Вес:</span>${candy.weight} грамм</p>
                <p><span class="property-name">Стоимость:</span>${candy.price}р</p>
                <p><span class="property-name">Рейтинг:</span>${candy.rate}</p>
            </div>
        </div>`;
    document.getElementById('main-content').innerHTML += htmlText;
};

let data = await getCandies();
for (let candy of data){
    // console.log(candy.name + "; price = " + candy.price);
    let producer = await getProducers(candy.producer);
    let owner = await getCustomUsers(candy.owner);
    candy.producer = producer;
    candy.owner = owner;
    console.log(candy);
    printCandyHTML(candy);
}
