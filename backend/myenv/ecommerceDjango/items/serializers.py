from .models import items
from rest_framework import serializers

class ItemsSerializer(serializers.ModelSerializer):
    category_name = serializers.SerializerMethodField()
    
    class Meta:
        model = items
        fields = ['id', 'name', 'description', 'category', 'review_avg', 'total_reviews', 'category_name', 'price', 'amount_in_stock', 'image']
    
    def get_category_name(self, obj):
        if obj.category:
            return obj.category.name
        return None
