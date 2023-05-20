from django.contrib import admin
from django.urls import path

from main import views

urlpatterns= [
    path('projects/',views.projects,name='projects'),
    path('certifications/',views.certifications,name='certifications'),
    path('achievements/',views.achievements,name='achievements'),
    path('',views.home,name='home')
    
]