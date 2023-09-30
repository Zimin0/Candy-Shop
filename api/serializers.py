from rest_framework import serializers
from django.contrib.auth.models import User
from candy.models import Candy
from users.models import Producer, CustomUser

class CandySerializer(serializers.ModelSerializer):
    class Meta:
        model = Candy
        fields = ['id', 'name', 'producer', 'weight', 'price', 'rate']

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'registered']

class ProducerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producer
        fields = ['username', 'email', 'inn', 'registered']