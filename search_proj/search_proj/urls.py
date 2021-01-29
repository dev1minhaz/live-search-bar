from django.contrib import admin
from django.urls import path
from infos.views import InfoListView, details
from django.conf import settings
from django.conf.urls.static import static






urlpatterns = [
    path('admin/', admin.site.urls),
    path('', InfoListView.as_view(), name="main-view"),
    path('details/<int:pk>/', details, name="details"),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
