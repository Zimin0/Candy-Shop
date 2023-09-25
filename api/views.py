from django.shortcuts import render
from rest_framework import generics
from api.serializers import UserSerializer, CandySerializer, ProducerSerializer, CustomUserSerializer
from django.contrib.auth.models import User
from candy.models import Candy
from users.models import Producer, CustomUser

#### Build-in USER ####
class UserList(generics.ListAPIView): 
    """ ListAPIView используется для эндпоинтов с доступом только для чтения """
    queryset = User.objects.all() # переменная queryset содержит коллекцию экземпляров модели
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveAPIView): # ListCreateAPIView используется для эндпоинтов с разрешением чтения-записи, а также обработчики get и post
    """ UserDetails — к одному пользователю. """
    queryset = User.objects.all()
    serializer_class = UserSerializer
###################
###### CANDY ######
class CandyList(generics.ListAPIView):
    queryset = Candy.objects.all()
    serializer_class = CandySerializer

class CandyDetail(generics.RetrieveAPIView):
    queryset = Candy.objects.all()
    serializer_class = CandySerializer
####################
#### CustomUser ####
class CustomUserList(generics.ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer

class CustomUserDetail(generics.RetrieveAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
####################
##### Producer #####
class ProducerList(generics.ListAPIView):
    queryset = Producer.objects.all()
    serializer_class = ProducerSerializer

class ProducerDetail(generics.RetrieveAPIView):
    queryset = Producer.objects.all()
    serializer_class = ProducerSerializer
####################