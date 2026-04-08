from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import HttpResponse

from .models import Permission, Role, User
from .serializers import PermissionSerializer, RoleSerializer, UserSerializer


def home(request):
    return HttpResponse("RBAC Backend Running")


class PermissionViewSet(viewsets.ModelViewSet):
    queryset = Permission.objects.all()
    serializer_class = PermissionSerializer


class RoleViewSet(viewsets.ModelViewSet):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


@api_view(['POST'])
def check_permission(request):
    user_id = request.data.get('user_id')
    permission_code = request.data.get('permission_code')

    try:
        user = User.objects.get(id=user_id)

        if not user.role:
            return Response({
                "has_permission": False,
                "message": "User has no role assigned"
            })

        permissions = user.role.permissions.all()

        has_perm = permissions.filter(code=permission_code).exists()

        return Response({
            "has_permission": has_perm,
            "user": user.username,
            "role": user.role.name,
            "checked_permission": permission_code
        })

    except User.DoesNotExist:
        return Response({
            "error": "User not found"
        }, status=404)