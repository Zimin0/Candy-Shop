const apiUrl = "https://b739-91-238-229-3.ngrok-free.app"; // URL сайта 

// Базовая функция для всех API функций // 
async function __getDataFromDjangoRest(url, objectStr){
    let response = await fetch(url + '/' + objectStr);
    if (response.ok){
        let response_to_json = await response.json();
        return response_to_json;
    }
    else{
        console.log(`Возникла ошибка при получении "${objectStr}" в API: ` + response.status );
    }
}

// Возвращает json конфет //
export async function getCandies(){
    let json = await __getDataFromDjangoRest(apiUrl, 'candies');
    return json;
}