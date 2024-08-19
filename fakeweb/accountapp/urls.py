from django.urls import path

from accountapp.views import hello_world, redirect_404

app_name="accountapp"

urlpatterns = [
    path('', hello_world, name='hello_world'),
    path('dologin.action/', redirect_404, name='redirect_404'),
]
