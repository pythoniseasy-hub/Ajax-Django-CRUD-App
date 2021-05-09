from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import redirect, render
from django.http import JsonResponse
from .models import *
import json

def home(request):
    st = Student.objects.all()
    return render(request, 'pages/home.html', {'st':st})

@csrf_exempt
def student(request):
    if request.method == 'POST':
        result = request.body
        result = json.loads(result)
        Student(Name = result['Name'], Email = result['Email'], Phone = result['Phone'], Age = result['Age'], Gender = result['Gender'], Habbits = result['Habbits']).save()
        stuObj = Student.objects.values()
        stuObj = list(stuObj)
        return JsonResponse({'stuObj':stuObj})
    else:
        print("error")
    return redirect('/')