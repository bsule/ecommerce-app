from .models import items
from rest_framework import serializers

class ItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = items
        fields = ['id', 'name', 'description', 'price', 'amount_in_stock']