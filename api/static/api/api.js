import {apiUrl} from './config.json' assert { type: 'json' };

// Базовая функция для всех API функций (GET) // 
async function __getDataFromDjangoRest(url, objectStr, index){
    let response = await fetch(`${url}/${objectStr}`);
    if (!(typeof index === 'undefined')){ // если был передан номер объекта
        response = await fetch(`${url}/${objectStr}/${index}`);
    }
    if (response.ok){
        let response_to_json = await response.json();
        return response_to_json;
    }
    else{
        console.log(`Возникла ошибка при получении "${objectStr}" в API: ` + response.status );
    }
}

// Возвращает json конфет //
export async function getCandies(index){
    let json = await __getDataFromDjangoRest(apiUrl, 'candies', index);
    return json;
}

// Создает новую конфету в БД // 
export async function createCandy(data, redirectToPageLink){
    let requestContent = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    };
    fetch('/api/candies/', requestContent)
    .then(response => {
            return response.json();
        })
        .then(data =>{
            window.location.href = redirectToPageLink;  // Перемещено сюда
        })
        .catch(error =>{
            console.error('Ошибка:', error.message);
        });
}

// Возвращает json производителей //
export async function getProducers(index){
    let json = await __getDataFromDjangoRest(apiUrl, 'producers', index);
    return json;
}
// Возвращает json юзеров //  
export async function getCustomUsers(index){
    let json = await __getDataFromDjangoRest(apiUrl, 'customusers', index);
    return json;
}

// Возвращает общее кол-во конфет
export function get_amount(jsonData){
    return jsonData.length;
};
// Возвращает среднюю стоимость конфет
export function get_average_price(jsonData){
    let average = 0
    let count = 0;
    for (let candy of jsonData){
        count++;
        average += parseFloat(candy.price);
    }
    average /= count;
    return average.toFixed(2);
};
// Возвращает минимальную стоимость конфеты  
export function get_lowest_price(jsonData){
    let min = 999999;
    for (let candy of jsonData){
        min = parseFloat(candy.price) < min ? parseFloat(candy.price) : min;
    } 
    return min;
};
// Возвращает максимальную стоимость конфеты 
export function get_highest_price(jsonData){
    let max = -1;
    for (let candy of jsonData){
        max = parseFloat(candy.price) > max ? parseFloat(candy.price) : max;
    } 
    return max;
};