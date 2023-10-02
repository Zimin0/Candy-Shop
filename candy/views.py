from django.shortcuts import render, redirect
from django.views.generic import TemplateView
from candy.forms import CandyForm
from candy.models import Candy

def index(request):
    return render(request, 'candy/index.html')

def candy_new(request):
    if request.method == 'POST':
        print(request.POST)
    form = CandyForm()
    return render(request, 'candy/candyForm.html', {'form': form})

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
    
    def get(self, request):
        form = CandyForm()
        return render(request, CreateNewCandy.template_name, {'form': form})