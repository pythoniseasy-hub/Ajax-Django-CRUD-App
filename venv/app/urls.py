from django.urls import path
from .views import *

urlpatterns = [
    path('', home),
    path('student', student),
    path('delete-data', deleteData),
    path('edit-data', editData),
]
