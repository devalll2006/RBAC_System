from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PermissionViewSet, RoleViewSet, UserViewSet, check_permission

router = DefaultRouter()
router.register('permissions', PermissionViewSet)
router.register('roles', RoleViewSet)
router.register('users', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('check-permission/', check_permission),
]