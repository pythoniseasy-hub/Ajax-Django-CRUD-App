# Generated by Django 3.2.2 on 2021-05-09 03:32

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=30)),
                ('Email', models.EmailField(max_length=254)),
                ('Phone', models.CharField(max_length=10)),
                ('Age', models.CharField(max_length=2)),
                ('Gender', models.CharField(max_length=6)),
                ('Habbits', models.CharField(max_length=50)),
            ],
        ),
    ]
