import requests
import json     

data = {
    "name": "Новая конфета2",
    "producer": 1,  # ID производителя
    "owner": 1,     # ID владельца
    "weight": 10330,
    "price": 503,
    "rate": 6
}

response = requests.post(url='https://3d20-91-238-229-3.ngrok-free.app/api/candies/', json=data)
print(response.status_code)
print(response.text)