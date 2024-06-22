from rest_framework import generics
from .permissions import IsAdminOrReadOnly
from .models import items
from .serializers import ItemsSerializer


# view for all items. Only admins can add items.
class ItemListCreateView(generics.ListCreateAPIView):
    permission_classes = [IsAdminOrReadOnly]
    
    queryset = items.objects.all()
    serializer_class = ItemsSerializer
    
    
# view for a specific item. Only admins can update or delete items.
class ItemDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAdminOrReadOnly]
    
    queryset = items.objects.all()
    serializer_class = ItemsSerializer
    