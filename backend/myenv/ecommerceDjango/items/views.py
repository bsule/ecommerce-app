from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from .models import items
from .serializers import ItemsSerializer


class ItemListCreateView(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    
    queryset = items.objects.all()
    serializer_class = ItemsSerializer
    

class ItemDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    
    queryset = items.objects.all()
    serializer_class = ItemsSerializer