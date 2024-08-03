from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Cart, CartItem
from items.models import items

class CartItemSerializer(serializers.ModelSerializer):
    item_name = serializers.ReadOnlyField(source='item.name')
    item_price = serializers.ReadOnlyField(source='item.price')
    item_image = serializers.SerializerMethodField()

    class Meta:
        model = CartItem
        fields = ['id', 'item', 'item_name', 'item_price', 'quantity', 'total_price', 'item_image']
        read_only_fields = ['total_price']

    def get_item_image(self, obj):
        request = self.context.get('request')
        if obj.item.image and request:
            return request.build_absolute_uri(obj.item.image.url)
        return None

class CartSerializer(serializers.ModelSerializer):
    items = CartItemSerializer(many=True, read_only=True)
    total_price = serializers.ReadOnlyField()

    class Meta:
        model = Cart
        fields = ['id', 'user', 'created_at', 'items', 'total_price']
        read_only_fields = ['created_at', 'total_price']
