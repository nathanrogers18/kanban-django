from .models import Card, TaskList
from rest_framework import serializers


class TaskListSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = TaskList
        fields = ('first_name', 'last_name', 'age', 'favorite_color')


class CardSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Card
        fields = ('first_name', 'last_name', 'age', 'favorite_color')
