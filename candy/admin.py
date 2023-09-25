from django.contrib import admin
from candy.models import Candy

class CandyAdmin(admin.ModelAdmin):
    list_display = ('name', 'producer', 'owner', 'weight', 'price', 'rate')

admin.site.register(Candy, CandyAdmin)