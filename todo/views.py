from rest_framework import viewsets
from todo.serializers import TodoSerializer, CategorySerializer
from todo.models import Todo, Category


# see https://www.django-rest-framework.org/tutorial/1-serialization/
# and https://www.django-rest-framework.org/tutorial/2-requests-and-responses/
# for how to write the views by hand without the shortcuts that ModelViewSet provides

class TodoViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows todos to be viewed or edited.
    """
    # Changed from .all() to .select_related('category') to reduce the number of queries
    # See https://docs.djangoproject.com/en/4.2/ref/models/querysets/#select-related
    # "Returns a QuerySet that will “follow” foreign-key relationships, selecting additional
    # related-object data when it executes its query"
    queryset = Todo.objects.select_related('category')
    serializer_class = TodoSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows choices to be viewed or edited.
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
