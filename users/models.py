from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser
from django.dispatch import receiver
from django.db.models.signals import post_save, pre_delete 
from django.contrib import admin

class AbstractCustomUser(models.Model):
    def __str__(self): 
        return f'Профиль {self.username}' 
    
    class Meta:
        abstract = True
        verbose_name = 'Юзер'
        verbose_name_plural = 'Юзер'

    username = models.CharField(max_length=200, verbose_name="Никнейм", unique=True)
    email = models.EmailField(verbose_name="Почта", unique=True)
    registered = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")

class CustomUser(AbstractCustomUser):
    def __str__(self): 
        return f'{self.username}' 

    class Meta:
        verbose_name = 'Владелец конфеты'
        verbose_name_plural = 'Владельцы конфет'
     
class Producer(AbstractCustomUser):
    def __str__(self): 
        return f'{self.username}' 

    class Meta:
        verbose_name = 'Производитель'
        verbose_name_plural = 'Производители'
    
    inn = models.CharField(max_length=13, verbose_name="ИНН")