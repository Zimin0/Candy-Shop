from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.contrib.auth.models import User
from users.models import CustomUser, Producer

class Candy(models.Model):
    def __str__(self) -> str:
        return f"Конфета - {self.name}"
    
    class Meta:
        verbose_name = "Конфета"
        verbose_name_plural = "Конфеты"

    name = models.CharField(max_length=50, verbose_name="Название")
    img = models.ImageField(verbose_name="Фотография", upload_to='candies/', blank=True)
    producer = models.ForeignKey(Producer, on_delete=models.SET_NULL, null=True, verbose_name="Производитель", blank=True)
    owner = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, verbose_name="Кто выложил конфету", blank=False, null=True)
    weight = models.DecimalField(verbose_name="Вес (грамм)", max_digits=8, decimal_places=2, default=1)
    price = models.DecimalField(verbose_name="Цена (руб)", max_digits=8, decimal_places=2, default=1)
    rate = models.IntegerField(verbose_name="Оценка от владельца", validators=[MinValueValidator(1), MaxValueValidator(10)], default=1, help_text="От 1 до 10")