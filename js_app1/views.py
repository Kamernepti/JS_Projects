from django.shortcuts import render, redirect
from .models import *

def index(request):
    context = {
        "items": ToDoList.objects.all(),
    }
    return render(request, 'index.html', context)

def add_item(request):
    ToDoList.objects.create(
        item = request.POST["to_do"]
    )
    return redirect('/')