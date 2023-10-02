# candy/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from candy.views import index, candy_new, CreateNewCandy

router = DefaultRouter()
# router.register(r'candies', CandyViewSet)
app_name = 'candy'

urlpatterns = [
    path('', index, name='index'),
    path('', include(router.urls)),
    path('candy/new/', CreateNewCandy.as_view(), name='candy_new'),
]
