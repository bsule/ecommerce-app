from django.urls import path
from .views import *

urlpatterns = [
    path('', ItemListCreateView.as_view(), name='item-list'),
    path('<int:pk>', ItemDetailView.as_view(), name='item-detail'),
]