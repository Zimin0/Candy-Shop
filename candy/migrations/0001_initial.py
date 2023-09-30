# Generated by Django 4.2.3 on 2023-09-25 06:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Candy',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='Название')),
                ('img', models.ImageField(blank=True, upload_to='', verbose_name='Фотография')),
                ('owner', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='users.customuser', verbose_name='Кто выложил конфету')),
            ],
        ),
    ]