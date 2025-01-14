from django.shortcuts import render
from .models import Product, Category, Order
from django.shortcuts import render, get_object_or_404

def home(request):
    featured_products = Product.objects.filter(is_featured=True)[:4]  # Adjust the query as needed
    womens_products = Product.objects.filter(category__name="Women")[:4]  # Adjust the query as needed
    return render(request, 'store/index.html', {
        'featured_products': featured_products,
        'womens_products': womens_products,
        'hero_image': 'image/c.png',  # Replace with your hero image path
    })


def products(request):
    products = Product.objects.all()
    return render(request, 'store/products.html', {'products': products})

def categories(request):
    categories = Category.objects.all()
    return render(request, 'store/categories.html', {'categories': categories})

def product_detail(request, product_id):
    # Fetch the product or return a 404 error if it doesn't exist
    product = get_object_or_404(Product, id=product_id)
    return render(request, 'store/product_detail.html', {'product': product})

def category_products(request, category_id):
    # Fetch the category or return a 404 error if it doesn't exist
    category = get_object_or_404(Category, id=category_id)
    # Fetch all products in this category
    products = Product.objects.filter(category=category)
    return render(request, 'store/category_products.html', {'category': category, 'products': products})

def add_to_cart(request, product_id):
    # Fetch the product or return a 404 error if it doesn't exist
    product = get_object_or_404(Product, id=product_id)
    
    # Check if the product is already in the cart
    order, created = Order.objects.get_or_create(product=product)
    
    # If the product is already in the cart, increase the quantity
    if not created:
        order.quantity += 1
        order.save()
    
    # Render the add_to_cart template
    return render(request, 'store/add_to_cart.html', {'order': order})