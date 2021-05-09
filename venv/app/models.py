from django.db import models

class Student(models.Model):
    Name = models.CharField(max_length=30)
    Email = models.EmailField()
    Phone = models.CharField(max_length=10)
    Age = models.CharField(max_length=2)
    Gender = models.CharField(max_length=6)
    Habbits = models.CharField(max_length=50)

    def __str__(self):
        return self.Name