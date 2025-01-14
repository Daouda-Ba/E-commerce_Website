from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('products/', views.products, name='products'),
    path('categories/', views.categories, name='categories'),
    path('product/<int:product_id>/', views.product_detail, name='product_detail'),
    path('category/<int:category_id>/', views.category_products, name='category_products'),  # Add this line
    path('add-to-cart/<int:product_id>/', views.add_to_cart, name='add_to_cart'),
]