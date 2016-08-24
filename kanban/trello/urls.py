from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^logout/$', views.signout, name='logout'),
    url(r'^login/$', views.signin, name='login'),
    url(r'^register/$', views.register, name='register'),
    url(r'^search/$', views.search_page, name='search')
    ]
