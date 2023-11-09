from rest_framework import serializers
from todo.models import Todo, Category


# using ModelSerializer means we don't need to add create() and update() methods by hand
# Also gives an automatically determined set of fields.

class TodoSerializer(serializers.ModelSerializer):
    # sorts out the value of category as a foreign key - gets category.text instead of a number
    # StringRelatedField used to represent the target of the relationship using its __str__ method
    # Note that StringRelatedField is read only
    category_origin = serializers.StringRelatedField(source='category', read_only=True)

    class Meta:
        model = Todo
        fields = ('text', 'due_date', 'done', 'category', 'id', 'category_origin')


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ['text', 'id']
