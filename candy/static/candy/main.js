const apiUrl = "https://b739-91-238-229-3.ngrok-free.app";

async function __getDataFromDjangoRest(url, objectStr){
    let response = await fetch(url + '/' + objectStr);
    if (response.ok){
        let response_to_json = await response.json();
        return response_to_json;
    }
    else{
        console.log("Возникла ошибка в обращении к API: " + response.status );
    }
}

async function getCandies(){
    let json = await __getDataFromDjangoRest(apiUrl, 'candies');
    return json;
}

let data = await getCandies();
for (let candy of data){
    console.log(candy.name + "; price = " + candy.price);
}

