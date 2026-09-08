import { CheckCircle2, Package, ArrowRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";

function formatPrice(price) {
  return `₹${Math.round(price).toLocaleString("en-IN")}`;
}

function OrderConfirmation() {
  const navigate = useNavigate();
  const location = useLocation();

  const product = location.state?.product;
  const variant = location.state?.variant;
  const plan = location.state?.plan;
  const monthlyEmi = location.state?.monthlyEmi;

  if (!product || !variant || !plan) {
    return (
      <div className="app">
        <div className="error-state">
          <h3>Order information is missing.</h3>

          <button onClick={() => navigate("/marketplace")}>
            Back to Marketplace
          </button>
        </div>
      </div>
    );
  }

  const totalPayment =
    monthlyEmi * plan.duration + plan.processingFee;

  return (
    <div className="app">
      <main className="confirmation-page">

        {/* Success */}

        <section className="confirmation-success">
          <div className="success-icon">
            <CheckCircle2 size={34} />
          </div>

          <span>ORDER READY</span>

          <h1>You're all set.</h1>

          <p>
            Your EMI plan has been selected successfully.
          </p>
        </section>

        {/* Product */}

        <section className="confirmation-card">

          <div className="confirmation-product">
            <img
              src={product.image}
              alt={product.name}
            />

            <div>
              <span>{product.brand}</span>

              <h2>{product.name}</h2>

              <p>{variant.name}</p>
            </div>
          </div>

          <div className="confirmation-divider" />

          {/* EMI details */}

          <div className="confirmation-details">

            <div>
              <span>EMI duration</span>
              <strong>{plan.duration} months</strong>
            </div>

            <div>
              <span>Monthly EMI</span>
              <strong>{formatPrice(monthlyEmi)}</strong>
            </div>

            <div>
              <span>Processing fee</span>
              <strong>
                {formatPrice(plan.processingFee)}
              </strong>
            </div>

            <div className="confirmation-total">
              <span>Total payable</span>
              <strong>{formatPrice(totalPayment)}</strong>
            </div>

          </div>

        </section>

        {/* Delivery */}

        <section className="delivery-card">

          <div className="delivery-icon">
            <Package size={20} />
          </div>

          <div>
            <strong>Ready for checkout</strong>

            <p>
              Your selected product and EMI plan are
              ready to proceed.
            </p>
          </div>

        </section>

        {/* CTA */}

        <button
          className="primary-cta"
          onClick={() => navigate("/marketplace")}
        >
          Continue Shopping
          <ArrowRight size={17} />
        </button>

      </main>

      <BottomNav />
    </div>
  );
}


export default OrderConfirmation;