from app import app
from models import db, User, Product, Order, OrderItem, Article, Cart, CartItem

def seed_data():
    with app.app_context():
        db.create_all()

        # Create sample users
        user1 = User(name="John Doe", email="john@example.com", password="password123")
        user2 = User(name="Jane Smith", email="jane@example.com", password="securepass")

        # Create sample products
        product1 = Product(name="Organic Fertilizer", description="Eco-friendly plant nutrition.", price=19.99, stock=10)
        product2 = Product(name="Pesticide-Free Spray", description="Safe alternative for pest control.", price=9.99, stock=5)

        # Create and assign carts
        cart1 = Cart(user=user1)
        cart2 = Cart(user=user2) 

        # Create sample cart items
        cart_item1 = CartItem(cart=cart1, product=product1, quantity=2)
        cart_item2 = CartItem(cart=cart2, product=product2, quantity=1)

        # Create sample orders
        order1 = Order(user=user1, status="pending")
        order2 = Order(user=user2, status="completed")

        # Create sample order items
        order_item1 = OrderItem(order=order1, product=product1, quantity=1)
        order_item2 = OrderItem(order=order2, product=product2, quantity=1)

        # Create sample articles
        article1 = Article(title="Benefits of Organic Fertilizers", content="Organic fertilizers improve soil health.")
        article2 = Article(title="How to Use Pesticide-Free Spray", content="A step-by-step guide on using safe pest control.")

        db.session.add_all([
            user1, user2, product1, product2, cart1, cart2, 
            cart_item1, cart_item2, order1, order2, 
            order_item1, order_item2, article1, article2
        ])
        db.session.commit()

        print("Database seeded successfully!")

if __name__ == "__main__":
    seed_data()
