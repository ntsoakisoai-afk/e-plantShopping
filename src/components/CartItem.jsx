import { useDispatch, useSelector } from "react-redux";
import {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
} from "../redux/CartSlice";
import { Link } from "react-router-dom";

function CartNavbar() {
    const totalQuantity = useSelector(
        (state) => state.cart.totalQuantity
    );

    return (
        <nav className="navbar">
        <Link to="/" className="nav-logo">
            🌿 Paradise Nursery
        </Link>

        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/plants">Plants</Link>
            <Link to="/cart">
            🛒 Cart ({totalQuantity})
            </Link>
        </div>
        </nav>
    );
}

function CartItem() {
    const dispatch = useDispatch();

    const cartItems = useSelector(
        (state) => state.cart.items
    );

    const totalQuantity = useSelector(
        (state) => state.cart.totalQuantity
    );

    const totalAmount = useSelector(
        (state) => state.cart.totalAmount
    );

    const handleIncrease = (id) => {
        dispatch(increaseQuantity(id));
    };

    const handleDecrease = (id) => {
        dispatch(decreaseQuantity(id));
    };

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleCheckout = () => {
        alert("Coming Soon!");
    };

    return (
        <div className="cart-page">
        <CartNavbar />

        <main className="cart-container">
            <h1>Shopping Cart</h1>

            {cartItems.length === 0 ? (
            <div className="empty-cart">
                <h2>Your cart is empty</h2>

                <p>
                Browse our beautiful houseplants and add
                something to your collection.
                </p>

                <Link
                to="/plants"
                className="continue-shopping-btn"
                >
                Continue Shopping
                </Link>
            </div>
            ) : (
            <>
                <div className="cart-summary">
                <div>
                    <strong>Total Plants:</strong>{" "}
                    {totalQuantity}
                </div>

                <div>
                    <strong>Total Cost:</strong>{" "}
                    R{totalAmount.toFixed(2)}
                </div>
                </div>

                <div className="cart-items">
                {cartItems.map((item) => (
                    <article
                    key={item.id}
                    className="cart-item"
                    >
                    <img
                        src={item.image}
                        alt={item.name}
                        className="cart-item-image"
                    />

                    <div className="cart-item-details">
                        <h2>{item.name}</h2>

                        <p>
                        Unit Price:{" "}
                        <strong>
                            R{item.price.toFixed(2)}
                        </strong>
                        </p>

                        <p>
                        Item Total:{" "}
                        <strong>
                            R{item.totalPrice.toFixed(2)}
                        </strong>
                        </p>

                        <div className="quantity-controls">
                        <button
                            onClick={() =>
                            handleDecrease(item.id)
                            }
                            disabled={item.quantity === 1}
                        >
                            −
                        </button>

                        <span>{item.quantity}</span>

                        <button
                            onClick={() =>
                            handleIncrease(item.id)
                            }
                        >
                            +
                        </button>
                        </div>

                        <button
                        onClick={() =>
                            handleRemove(item.id)
                        }
                        className="delete-btn"
                        >
                        Delete
                        </button>
                    </div>
                    </article>
                ))}
                </div>

                <div className="cart-bottom">
                <h2>
                    Total: R{totalAmount.toFixed(2)}
                </h2>

                <div className="cart-actions">
                    <Link
                    to="/plants"
                    className="continue-shopping-btn"
                    >
                    Continue Shopping
                    </Link>

                    <button
                    onClick={handleCheckout}
                    className="checkout-btn"
                    >
                    Checkout
                    </button>
                </div>
                </div>
            </>
            )}
        </main>
        </div>
    );
}

export default CartItem;