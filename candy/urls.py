# candy/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from candy.views import index

router = DefaultRouter()
# router.register(r'candies', CandyViewSet)

urlpatterns = [
    path('', index, name='index'),
    path('', include(router.urls)),
]
