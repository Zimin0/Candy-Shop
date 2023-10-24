from django.shortcuts import render, redirect
from django.views.generic import TemplateView
from candy.forms import CandyForm
from candy.models import Candy

class MainCandy(TemplateView):
    """ Главная страница """
    template_name = "candy/index.html"
    
class CreateNewCandy(TemplateView):
    """ Страница с формой создания новой конфеты """
    template_name = "candy/candyForm.html"

class DisplayCandy(TemplateView):
    """ Страница с отображением определенной конфеты """
    template_name = "candy/particularCandy.html"
