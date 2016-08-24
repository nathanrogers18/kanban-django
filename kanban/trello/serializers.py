from .models import Card, TaskList
from rest_framework import serializers


class CardSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Card
        fields = ('task_list', 'name', 'description', 'timestamp',
                  'due_date', 'activity_log')


class TaskListSerializer(serializers.HyperlinkedModelSerializer):
    card_set = CardSerializer(many=True)

    class Meta:
        model = TaskList
        fields = ('name', 'card_set')
