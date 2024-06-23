from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import *

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('user/', UserView.as_view(), name='user'),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('logout/', LogoutView.as_view(), name='logout'),
]


# Register: POST, username password password2 email firstname lastname required, returns nothing
# Token Refresh: POST, refresh token required, returns new access and refresh token
# user: GET, Authorization Bearer <access token>
# login: POST, username password, returns access and refresh tokens
# logout: POST, Authorization Bearer <access token>, refresh