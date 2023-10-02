from django.test import TestCase
from candy.models import Candy
from users.models import Producer, CustomUser
from django.core.exceptions import ValidationError

class CandyModelTest(TestCase):
    def setUp(self):
        self.producer = Producer.objects.create(username="Valera", email="test@gmail.com")
        self.customuser = CustomUser.objects.create(username="User1", email="newtest@gmail.com")
    def test_create_candy(self):
        candy = Candy.objects.create(
            name='Валидная конфета',
            producer=self.producer,
            owner=self.customuser,
            weight=10,
            price=40,
            rate=7 
        )
        self.assertEqual(str(candy), "Конфета - Конфета1")
    
    def test_rate_validation(self):
        candy = Candy.objects.create(
            name="Рейтинг не в пределах от 1 до 10",
            producer=self.producer,
            owner=self.customuser,
            rate=16 # недопустимое
        )
        with self.assertRaises(ValidationError) as context:
            candy.full_clean()
        self.assertIn('Убедитесь, что это значение меньше либо равно 10.', str(context.exception))
