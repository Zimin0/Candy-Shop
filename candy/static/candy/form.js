import {createCandy} from "../api/api.js";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.post-form');
    form.addEventListener('submit', function(event){
        event.preventDefault();
        const errorField = document.querySelector('.error');
        const allFields = document.querySelector('.input_custom');

        const name = document.getElementById('id_name').value;
        const weight = document.getElementById('id_weight').value;
        const price = document.getElementById('id_price').value;
        const rate = document.getElementById('id_rate').value;
        
        // Обработка ошибок //
        let errorMessages = [];
        for (let i = 0; i < allFields.length; i++){
            if (!allFields[i].value) {
                errorMessages.push('Заполните все поля!');
                break;
            }
        }
        if (name.length >= 50){
            errorMessages.push('Длина имени не должна превышать 50 символов!');
        }
        if (rate > 10 || rate < 1){ // !parseInt(rate) &&
            errorMessages.push('Введенный рейтинг должен быть от 1 до 10!');
        }
        if (weight > 1000 || weight < 0 || price < 0 || price > 1000000){
            errorMessages.push('Значения слишком большие или слишком маленькие!');
        }
        if (errorMessages.length > 0){
            event.preventDefault(); 
            errorField.style.display = 'block';
            errorField.innerHTML = errorMessages.join('<br>\n'); 
        }
        /////////////////////////////////////////////////
        // Если нет ошибок, отправить данные на сервер // 
        if (errorMessages.length === 0){
            let formData = {
                name: name,
                weight: weight,
                price: price,
                rate:rate,
            };

            createCandy(formData, 'https://4370-91-238-229-3.ngrok-free.app');
        } 
    })
})



// let formData = {
//     name: 'name12121',
//     weight: '111',
//     price: '222',
//     rate:'3',
// };

// let requestContent = {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify(formData)
// };

// fetch('/api/candies/', requestContent)
//     .then(response => {
//         if (!response.ok) {
//             return response.json().then(error => {
//                 throw new Error(error.detail || 'Что-то пошло не так');
//             });
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log('Успех:', data);
//     })
//     .catch(error => {
//         console.error('Ошибка:', error.message);
//     });
