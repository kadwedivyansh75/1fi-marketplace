import { useMemo, useState } from "react";
import { ArrowLeft, Check, CreditCard } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import { emiPlans } from "../data/emiPlans";
import EmiPlanCard from "../components/EmiPlanCard";

import {
  calculateEmi,
  formatPrice,
} from "../utils/emi";

function EmiSelection() {
  const navigate = useNavigate();
  const location = useLocation();

  const product = location.state?.product;
  const variant = location.state?.variant;

  const [selectedPlan, setSelectedPlan] = useState(
    emiPlans[0]
  );

  const price = variant?.price || product?.price || 0;

  const monthlyEmi = useMemo(() => {
    return calculateEmi(
      price,
      selectedPlan.duration,
      selectedPlan.interestRate
    );
  }, [price, selectedPlan]);

  const totalPayment =
    monthlyEmi * selectedPlan.duration;

  if (!product || !variant) {
    return (
      <div className="app">
        <div className="error-state">
          <h3>Product information is missing.</h3>

          <button
            onClick={() => navigate("/marketplace")}
          >
            Back to Marketplace
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <main className="emi-page">

        {/* Header */}

        <header className="emi-header">
          <button
            className="back-button"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={19} />
          </button>

          <div>
            <span>1Fi</span>
            <h1>Choose EMI</h1>
          </div>
        </header>

        {/* Product summary */}

        <section className="emi-product-card">

          <img
            src={product.image}
            alt={product.name}
          />

          <div>
            <span>{product.brand}</span>

            <h2>{product.name}</h2>

            <p>{variant.name}</p>

            <strong>
              {formatPrice(price)}
            </strong>
          </div>

        </section>

        {/* EMI plans */}

        <section className="emi-section">

          <div className="emi-section-heading">
            <span>SELECT A PLAN</span>
            <h2>EMI options</h2>
          </div>

          <div className="emi-plan-list">

            {emiPlans.map((plan) => (
              <EmiPlanCard
                key={plan.id}
                plan={plan}
                price={price}
                selected={selectedPlan.id === plan.id}
                onSelect={() => setSelectedPlan(plan)}
              />
            ))}

          </div>

        </section>

        {/* Payment breakdown */}

        <section className="payment-summary">

          <div className="summary-heading">
            <CreditCard size={18} />

            <h2>Payment summary</h2>
          </div>

          <div className="summary-row">
            <span>Product price</span>
            <strong>{formatPrice(price)}</strong>
          </div>

          <div className="summary-row">
            <span>Processing fee</span>
            <strong>
              {formatPrice(selectedPlan.processingFee)}
            </strong>
          </div>

          <div className="summary-divider" />

          <div className="summary-row total">
            <span>Total payable</span>

            <strong>
              {formatPrice(
                totalPayment +
                  selectedPlan.processingFee
              )}
            </strong>
          </div>

        </section>

        {/* CTA */}

        <button
          className="primary-cta"
          onClick={() =>
            navigate("/order-confirmation", {
              state: {
                product,
                variant,
                plan: selectedPlan,
                monthlyEmi,
              },
            })
          }
        >
          Proceed with EMI
        </button>

      </main>

      <BottomNav />
    </div>
  );
}


export default EmiSelection;