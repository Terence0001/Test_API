from django.urls import path, include
from rest_framework import routers
from .views import JeuViewSet

router = routers.DefaultRouter()
router.register('jeux', JeuViewSet)

urlpatterns = [
    path('', include(router.urls)),
]