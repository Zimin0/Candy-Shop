# candy/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from candy.views import CandyViewSet

router = DefaultRouter()
router.register(r'candies', CandyViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
