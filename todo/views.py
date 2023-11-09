from rest_framework import viewsets
from todo.serializers import TodoSerializer, CategorySerializer
from todo.models import Todo, Category


class TodoViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows todos to be viewed or edited.
    """
    # Changed from .all() to .select_related('category') to reduce the number of queries
    # See https://docs.djangoproject.com/en/4.2/ref/models/querysets/#select-related
    # "Returns a QuerySet that will “follow” foreign-key relationships, selecting additional
    # related-object data when it executes its query"
    queryset = Todo.objects.select_related('category')
    print(queryset)
    serializer_class = TodoSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows choices to be viewed or edited.
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
