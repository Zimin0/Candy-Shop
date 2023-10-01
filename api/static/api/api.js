const apiUrl = "https://b739-91-238-229-3.ngrok-free.app"; // URL сайта 

// Базовая функция для всех API функций // 
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