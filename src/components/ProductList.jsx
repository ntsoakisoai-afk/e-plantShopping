import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const plantCategories = [
    {
        id: 1,
        name: "Indoor Plants",
        plants: [
        {
            id: 1,
            name: "Snake Plant",
            price: 120,
            image:
            "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
        },
        {
            id: 2,
            name: "Peace Lily",
            price: 150,
            image:
            "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
        },
        {
            id: 3,
            name: "Spider Plant",
            price: 100,
            image:
            "https://images.unsplash.com/photo-1572688484438-313a6e50c333",
        },
        {
            id: 4,
            name: "ZZ Plant",
            price: 180,
            image:
            "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
        },
        {
            id: 5,
            name: "Rubber Plant",
            price: 220,
            image:
            "https://images.unsplash.com/photo-1604762524889-3e2fcc145683",
        },
        {
            id: 6,
            name: "Chinese Evergreen",
            price: 190,
            image:
            "https://images.unsplash.com/photo-1597055181300-6f4f5e9e1f52",
        },
        ],
    },

    {
        id: 2,
        name: "Succulents",
        plants: [
        {
            id: 7,
            name: "Aloe Vera",
            price: 90,
            image:
            "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
        },
        {
            id: 8,
            name: "Jade Plant",
            price: 110,
            image:
            "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
        },
        {
            id: 9,
            name: "Echeveria",
            price: 85,
            image:
            "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
        },
        {
            id: 10,
            name: "Haworthia",
            price: 95,
            image:
            "https://images.unsplash.com/photo-1497250681960-ef046c08a56e",
        },
        {
            id: 11,
            name: "Zebra Haworthia",
            price: 105,
            image:
            "https://images.unsplash.com/photo-1512428813834-c702c7702b78",
        },
        {
            id: 12,
            name: "Burro's Tail",
            price: 130,
            image:
            "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
        },
        ],
    },

    {
        id: 3,
        name: "Tropical Plants",
        plants: [
        {
            id: 13,
            name: "Monstera Deliciosa",
            price: 250,
            image:
            "https://images.unsplash.com/photo-1614594575793-3e8c4b1c1a7a",
        },
        {
            id: 14,
            name: "Bird of Paradise",
            price: 280,
            image:
            "https://images.unsplash.com/photo-1598880940080-ff9a29891b85",
        },
        {
            id: 15,
            name: "Calathea",
            price: 210,
            image:
            "https://images.unsplash.com/photo-1603436326446-7e8d8b6a1f37",
        },
        {
            id: 16,
            name: "Philodendron",
            price: 230,
            image:
            "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
        },
        {
            id: 17,
            name: "Croton",
            price: 175,
            image:
            "https://images.unsplash.com/photo-1597055181300-6f4f5e9e1f52",
        },
        {
            id: 18,
            name: "Alocasia",
            price: 260,
            image:
            "https://images.unsplash.com/photo-1545241047-6083a3684587",
        },
        ],
    },
];

function Navbar() {
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

function ProductList() {
    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.cart.items);

    const isInCart = (id) => {
        return cartItems.some((item) => item.id === id);
    };

    const handleAddToCart = (plant) => {
        dispatch(addToCart(plant));
    };

    return (
        <div className="products-page">
        <Navbar />

        <main className="products-container">
            <h1>Our Houseplants</h1>

            <p className="products-intro">
            Discover beautiful plants for every room and every plant lover.
            </p>

            {plantCategories.map((category) => (
            <section
                key={category.id}
                className="plant-category"
            >
                <h2>{category.name}</h2>

                <div className="plant-grid">
                {category.plants.map((plant) => (
                    <article
                    key={plant.id}
                    className="plant-card"
                    >
                    <img
                        src={plant.image}
                        alt={plant.name}
                        className="plant-image"
                    />

                    <div className="plant-info">
                        <h3>{plant.name}</h3>

                        <p className="plant-price">
                        R{plant.price.toFixed(2)}
                        </p>

                        <button
                        onClick={() => handleAddToCart(plant)}
                        disabled={isInCart(plant.id)}
                        className="add-cart-btn"
                        >
                        {isInCart(plant.id)
                            ? "Added to Cart"
                            : "Add to Cart"}
                        </button>
                    </div>
                    </article>
                ))}
                </div>
            </section>
            ))}
        </main>
        </div>
    );
}

export default ProductList;