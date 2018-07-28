from django.urls import path
from django.conf.urls import url
from . import views
from django.views.generic import TemplateView

app_name = 'user'
urlpatterns = [
    path('', views.login_user, name='login'),
    path(r'^activate/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
        views.activate, name='activate'),
    path('user/', views.homeuser, name='homeuser'),
    path('user/tu_xu_ly', views.homeuser_data_tu_xu_ly, name='homeuser_data_tu_xu_ly'),
    path('logout/', views.logout_user, name='logout'),
    path('profile', views.detail_user, name='detail_user'),
    path('closed_ticket', views.closed_ticket, name='closed_ticket'),
    path('closed_ticket_data', views.closed_ticket_data, name='closed_ticket_data'),
    path('user/history_<int:id>', views.history, name='history'),
]