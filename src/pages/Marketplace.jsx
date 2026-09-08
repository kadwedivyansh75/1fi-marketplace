import BottomNav from "../components/BottomNav";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  Search,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import { marketplaceApi } from "../services/marketplaceApi";

const categories = [
  "All",
  "Mobiles",
  "Laptops",
  "Audio",
  "Wearables",
  "Tablets",
];

function Marketplace() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] =
    useState("All");

  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    try {
      setLoading(true);

      const data =
        await marketplaceApi.getProducts();

      setProducts(data);
    } catch (err) {
      setError(
        "Unable to load products. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All" ||
        product.category === activeCategory;

      const query = search.toLowerCase().trim();

      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [products, activeCategory, search]);

  return (
    <div className="app">
      <main className="marketplace-page">

        {/* Header */}

        <header className="marketplace-header">

          <button
            className="back-button"
            onClick={() =>
              (window.location.href = "/shop")
            }
          >
            <ArrowLeft size={19} />
          </button>

          <div>
            <span>1Fi</span>
            <h1>Marketplace</h1>
          </div>

        </header>

        {/* Intro */}

        <section className="marketplace-intro">

          <div className="section-label">
            <span />

            <div>
              <p>SHOP</p>
              <h2>Buy now. Pay later.</h2>
            </div>
          </div>

          <p className="intro-text">
            Shop your favourite products and pay
            comfortably through your 1Fi EMI plan.
          </p>

        </section>

        {/* Search */}

        <div className="marketplace-search">

          <Search size={18} />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

        {/* Categories */}

        <div className="categories">

          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category
                  ? "category active"
                  : "category"
              }
              onClick={() =>
                setActiveCategory(category)
              }
            >
              {category}
            </button>
          ))}

        </div>

        {/* Products */}

        <section className="products-section">

          <div className="products-heading">

            <div>
              <span>CURATED FOR YOU</span>
              <h2>Products</h2>
            </div>

            {!loading && (
              <small>
                {filteredProducts.length} items
              </small>
            )}

          </div>

          {loading && (
            <div className="loading-state">
              <div className="loader" />
              <p>Finding products for you...</p>
            </div>
          )}

          {error && (
            <div className="error-state">
              <p>{error}</p>

              <button onClick={loadProducts}>
                Try again
              </button>
            </div>
          )}

          {!loading &&
            !error &&
            filteredProducts.length === 0 && (
              <div className="empty-state">
                <h3>No products found</h3>

                <p>
                  Try a different search or category.
                </p>
              </div>
            )}

          {!loading && !error && (
            <div className="product-grid">

              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() =>
                    (navigate(
                      `/product/${product.id}`))
                  }
                />
              ))}

            </div>
          )}

        </section>

      </main>

      <BottomNav />

    </div>
  );
}


export default Marketplace;