# candy/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from candy.views import MainCandy, CreateNewCandy

router = DefaultRouter()
# router.register(r'candies', CandyViewSet)
app_name = 'candy'

urlpatterns = [
    path('', MainCandy.as_view(), name='index'),
    path('', include(router.urls)),
    path('candy/new/', CreateNewCandy.as_view(), name='candy_new'),
]
