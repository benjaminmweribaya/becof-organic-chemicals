from app import app
from models import db, User, Product, Order, OrderItem, Article, Cart, CartItem
from werkzeug.security import generate_password_hash

def seed_data():
    with app.app_context():
        db.create_all()

        # Create sample users
        user1 = User(name="John Doe", email="john@example.com", password=generate_password_hash("password123"))
        user2 = User(name="Jane Smith", email="jane@example.com", password=generate_password_hash("securepass"))

        db.session.add_all([user1, user2])
        db.session.commit()  # Commit to get user IDs

        # Create sample products
        product1 = Product(name="Organic Fertilizer", description="Eco-friendly plant nutrition.", price=19.99, stock=10)
        product2 = Product(name="Pesticide-Free Spray", description="Safe alternative for pest control.", price=9.99, stock=5)

        db.session.add_all([product1, product2])
        db.session.commit()  # Commit to get product IDs

        # Create and assign carts
        cart1 = Cart(user_id=user1.id)
        cart2 = Cart(user_id=user2.id) 

        db.session.add_all([cart1, cart2])
        db.session.commit()  # Commit to get cart IDs

        # Create sample cart items
        cart_item1 = CartItem(cart_id=cart1.id, product_id=product1.id, quantity=2)
        cart_item2 = CartItem(cart_id=cart2.id, product_id=product2.id, quantity=1)

        # Create sample orders
        order1 = Order(user_id=user1.id, status="pending")
        order2 = Order(user_id=user2.id, status="completed")

        db.session.add_all([order1, order2])
        db.session.commit()  # Commit to get order IDs

        # Create sample order items
        order_item1 = OrderItem(order_id=order1.id, product_id=product1.id, quantity=1)
        order_item2 = OrderItem(order_id=order2.id, product_id=product2.id, quantity=1)

        # Create sample articles
        article1 = Article(title="Benefits of Organic Fertilizers", content="Organic fertilizers improve soil health.", author_id=user1.id)
        article2 = Article(title="How to Use Pesticide-Free Spray", content="A step-by-step guide on using safe pest control.", author_id=user2.id)

        db.session.add_all([
            cart_item1, cart_item2, order_item1, order_item2, article1, article2
        ])
        db.session.commit()

        print("Database seeded successfully!")

if __name__ == "__main__":
    seed_data()
