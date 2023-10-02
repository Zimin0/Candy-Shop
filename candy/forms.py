from django import forms
from candy.models import Candy

class CandyForm(forms.ModelForm):
    class Meta:
        model = Candy
        fields = ('name', 'weight', 'price', 'rate')