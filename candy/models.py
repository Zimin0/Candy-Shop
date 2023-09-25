from django.db import models
from django.contrib.auth.models import User
from users.models import CustomUser

class Candy(models.Model):
    name = models.CharField(max_length=50, verbose_name="Название")
    img = models.ImageField(verbose_name="Фотография", blank=True)
    # producer = models.
    owner = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, verbose_name="Кто выложил конфету", blank=False, null=True)
    