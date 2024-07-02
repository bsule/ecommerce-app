from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=50)
    
    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"
    

class items(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30)
    description = models.TextField(blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    review_avg = models.DecimalField(max_digits=2, decimal_places=1)
    total_reviews = models.PositiveSmallIntegerField()
    price = models.DecimalField(max_digits=7, decimal_places=2)
    amount_in_stock = models.PositiveSmallIntegerField()
    image = models.ImageField(upload_to='images/', null=True, blank=True)
    
    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = "item"
        verbose_name_plural = "items"