from rest_framework import serializers
from todo.models import Todo, Category


class TodoSerializer(serializers.ModelSerializer):
    # sorts out the value of category as a foreign key - gets category.text instead of a number
    category_origin = serializers.CharField(source='category', read_only=True)

    class Meta:
        model = Todo
        fields = ('text', 'due_date', 'done', 'category', 'id', 'category_origin')

    def create(self, validated_data):
        return Todo.objects.create(**validated_data)


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ['text', 'id']
