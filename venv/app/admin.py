from django.contrib import admin
from .models import *

@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ['Name', 'Email', 'Phone', 'Age', 'Gender']