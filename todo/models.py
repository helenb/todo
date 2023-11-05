import datetime

from django.db import models
from django.utils import timezone


class Category(models.Model):
    text = models.CharField(max_length=200)

    class Meta:
        verbose_name_plural = "categories"

    def __str__(self):
        return self.text


class Todo(models.Model):
    text = models.CharField(max_length=200)
    due_date = models.DateTimeField(default=timezone.now() + datetime.timedelta(days=2))
    done = models.BooleanField(default=False)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.text
