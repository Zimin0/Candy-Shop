document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.post-form');
    form.addEventListener('submit', function(event){
        const errorField = document.querySelector('.error');
        const allFields = document.querySelector('.input_custom');

        const name = document.getElementById('id_name').value;
        const weight = document.getElementById('id_weight').value;
        const price = document.getElementById('id_price').value;
        const rate = document.getElementById('id_rate').value;

        for (let i = 0; i < allFields.length; i++){
            if (!allFields[i].value) {
                errorMessages.push('Заполните все поля!');
                break;
            }
        }
        
        let errorMessages = [];
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
    })
})
