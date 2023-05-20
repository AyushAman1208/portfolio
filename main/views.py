from django.shortcuts import render

# Create your views here.

def home(request):
    context={}
    return render(request,'main/home.html',context)

def projects(request):
    context={}
    return render(request,'main/projects.html',context)

def certifications(request):
    context={}
    return render(request,'main/certifications.html',context)

def achievements(request):
    context={}
    return render(request,'main/achievements.html',context)
