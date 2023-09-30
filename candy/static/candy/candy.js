import { getCandies } from "../api/api.js";

function printCandyHTML(candy){
    let htmlText = `
        <div class="candy-block">
            <img src="img/${candy.img}" alt="Конфета">
            <div class="candy-info">
                <h2>${candy.name}</h2>
                <p><span class="property-name">Производитель:</span> <span class="candy-manufacturer"> ${null}</span></p>
                <p><span class="property-name">Пользователь:</span>${null}</p>
                <p><span class="property-name">Вес:</span>${candy.weight} грамм</p>
                <p><span class="property-name">Стоимость:</span>${candy.price}р</p>
                <p><span class="property-name">Рейтинг:</span>${candy.rate}</p>
            </div>
        </div>`;
    document.write(htmlText);
};

let data = await getCandies();
console.log(data);
for (let candy of data){
    console.log(candy.name + "; price = " + candy.price);
    printCandyHTML(candy);
}



