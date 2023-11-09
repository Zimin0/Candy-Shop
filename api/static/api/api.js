import config from './config.json' assert { type: 'json' };
const apiUrl = config.apiUrl;

// Базовая функция для всех API функций (GET) // 
async function __getDataFromDjangoRest(objectStr, index){
    const endpoint = index ? `${apiUrl}/${objectStr}/${index}` : `${apiUrl}/${objectStr}`;
    try {
        const response = await fetch(endpoint);
        if (response.ok){
            return await response.json();
        } else {
            console.log(`Возникла ошибка при получении "${objectStr}" в API: ` + response.status);
        }
    } catch (error) {
        console.error('Ошибка при запросе к API:', error);
    }
}

// Возвращает json конфет
export function getCandies(index){
    return __getDataFromDjangoRest('candies', index);
}

// Создает новую конфету в БД
export async function createCandy(data, redirectToPageLink){
    try {
        const response = await fetch(`${apiUrl}/candies/`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        if (response.ok) {
            await response.json();
            window.location.href = redirectToPageLink;
        } else {
            console.error('Ошибка при создании конфеты:', response.statusText);
        }
    } catch (error) {
        console.error('Ошибка:', error.message);
    }
}

// Возвращает json производителей
export function getProducers(index){
    return __getDataFromDjangoRest('producers', index);
}

// Возвращает json юзеров
export function getCustomUsers(index){
    return __getDataFromDjangoRest('customusers', index);
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