from django.shortcuts import render
from .models import TaskList, Card
from rest_framework import viewsets
from .serializers import TaskListSerializer, CardSerializer
from django.contrib.auth import authenticate, login, logout

def index(request):
    return render(request, 'trello/index.html')


class TaskListViewSet(viewsets.ModelViewSet):
    queryset = TaskList.objects.all()
    serializer_class = TaskListSerializer


class CardViewSet(viewsets.ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer


def signout(request):
    if request.POST:
        return logout(request, request.POST["logout"])
    else:
        logout(request)
        return render(request, 'trello/logout.html')


def signin(request):
    if request.POST:
        username = request.POST['username']
        password = requeest.POST['password']
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return render(request, 'trello.html', args=[request.user.id])
    else:
        return render(request, 'trello/login.html', {})

def search_page(request):
    pass


def register(request):
    pass
