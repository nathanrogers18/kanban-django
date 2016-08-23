from django.shortcuts import render
from .models import TaskList, Card
from rest_framework import viewsets
from .serializers import TaskListSerializer, CardSerializer

# Create your views here.
def index(request):
    return render(request, 'editable/index.html')


class TaskListViewSet(viewsets.ModelViewSet):
    queryset = TaskList.objects.all()
    serializer_class = TaskListSerializer


class CardViewSet(viewsets.ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer
