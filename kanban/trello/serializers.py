from .models import Card, TaskList
from rest_framework import serializers


class TaskListSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = TaskList
        fields = ('name',)


class CardSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Card
        fields = ('task_list', 'name', 'description', 'timestamp',
                  'due_date', 'activity_log')
