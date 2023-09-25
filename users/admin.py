from django.contrib import admin
from users.models import Producer, CustomUser

class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'registered')

class ProducerAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'inn', 'registered')

admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Producer, ProducerAdmin)