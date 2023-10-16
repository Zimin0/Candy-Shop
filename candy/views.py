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

    def post(self, request):
        form = CandyForm(request.POST)
        if form.is_valid():
            new_candy = form.save(commit=False)
            new_candy.save()
            print("Форма валидна!")
        else:
            print("Форма невалидна!")
        return redirect("candy:index")
    