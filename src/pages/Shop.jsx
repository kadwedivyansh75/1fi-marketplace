import { Store, MapPin, ShoppingBag } from "lucide-react";
import BottomNav from "../components/BottomNav";
import { useNavigate } from "react-router-dom";

const shopOptions = [
  {
    id: "brands",
    title: "Top Brands",
    icon: Store,
  },
  {
    id: "nearby",
    title: "Nearby Stores",
    icon: MapPin,
  },
  {
    id: "marketplace",
    title: "1Fi Marketplace",
    icon: ShoppingBag,
  },
];

function Shop() {
  const navigate = useNavigate();
  return (
    <div className="app">
      <main className="shop-page">

        {/* Hero */}
        <section className="shop-hero">
          <div className="hero-badge">
            SHOP WITH 1Fi
          </div>

          <h1>
            Shop today,
            <br />
            <span>Pay later.</span>
          </h1>

          <p>
            Get what you need today and pay later
            <br />
            using your 1Fi limit.
          </p>

          <div className="hero-circle hero-circle-one" />
          <div className="hero-circle hero-circle-two" />
        </section>

        {/* Shop options */}
        <section className="shop-content">

          <div className="section-label">
            <span />
            <div>
              <p>EXPLORE</p>
              <h2>Shop</h2>
            </div>
          </div>

          <div className="shop-options">
            {shopOptions.map((option) => {
              const Icon = option.icon;

              return (
                <button
                  key={option.id}
                  className="shop-option"
                  onClick={() => {
                    if (option.id === "marketplace") {
                      navigate("/marketplace");
                    }
                  }}
                >
                  <div className="option-icon">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <div className="option-text">
                    <span>{option.title}</span>

                    {option.id === "marketplace" && (
                      <small>
                        Browse products & EMI plans
                      </small>
                    )}
                  </div>

                  <span className="option-arrow">
                    →
                  </span>
                </button>
              );
            })}
          </div>

        </section>

      </main>

      <BottomNav />
    </div>
  );
}


export default Shop;