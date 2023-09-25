from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views
from api.views import UserDetail, UserList, CandyList, CandyDetail, CustomUserList, CustomUserDetail, ProducerList, ProducerDetail

urlpatterns = [
    path('users/', UserList.as_view()),
    path('users/<int:pk>/', UserDetail.as_view()),
    path('candies/', CandyList.as_view()),
    path('candies/<int:pk>', CandyDetail.as_view()),
    path('customusers/', CustomUserList.as_view()),
    path('customusers/<int:pk>', CustomUserDetail.as_view()),
    path('producers/', ProducerList.as_view()),
    path('producers/<int:pk>', ProducerDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)