from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Cart, CartItem, items
from .serializers import CartSerializer, CartItemSerializer

class CartDetailView(generics.RetrieveAPIView):
    serializer_class = CartSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        cart, created = Cart.objects.get_or_create(user=self.request.user)
        return cart

class AddToCartView(generics.CreateAPIView):
    serializer_class = CartItemSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        cart, created = Cart.objects.get_or_create(user=request.user)
        item_id = request.data.get('item')
        quantity = request.data.get('quantity', 1)
        item = items.objects.get(id=item_id)
        cart_item, created = CartItem.objects.get_or_create(cart=cart, item=item)
        if not created:
            cart_item.quantity += int(quantity)
        cart_item.save()
        return Response(CartItemSerializer(cart_item).data, status=status.HTTP_201_CREATED)

class RemoveFromCartView(generics.DestroyAPIView):
    serializer_class = CartItemSerializer
    permission_classes = [IsAuthenticated]

    def delete(self, request, *args, **kwargs):
        cart, created = Cart.objects.get_or_create(user=request.user)
        item_id = request.data.get('item')
        item = items.objects.get(id=item_id)
        cart_item = CartItem.objects.get(cart=cart, item=item)
        cart_item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
