from django.db import models


class items(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30)
    description = models.TextField(blank=True, null=True)
    price = models.DecimalField(max_digits=7, decimal_places=2)
    amount_in_stock = models.PositiveSmallIntegerField()
    
    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = "item"
        verbose_name_plural = "items"