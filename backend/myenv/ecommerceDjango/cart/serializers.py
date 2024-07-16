from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Cart, CartItem
from items.models import items

class CartItemSerializer(serializers.ModelSerializer):
    item_name = serializers.ReadOnlyField(source='item.name')
    item_price = serializers.ReadOnlyField(source='item.price')

    class Meta:
        model = CartItem
        fields = ['id', 'item', 'item_name', 'item_price', 'quantity', 'total_price']
        read_only_fields = ['total_price']

class CartSerializer(serializers.ModelSerializer):
    items = CartItemSerializer(many=True, read_only=True)
    total_price = serializers.ReadOnlyField()

    class Meta:
        model = Cart
        fields = ['id', 'user', 'created_at', 'items', 'total_price']
        read_only_fields = ['created_at', 'total_price']
