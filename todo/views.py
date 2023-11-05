from rest_framework import viewsets
from todo.serializers import TodoSerializer, CategorySerializer
from todo.models import Todo, Category


class TodoViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows todos to be viewed or edited.
    """
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows choices to be viewed or edited.
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
