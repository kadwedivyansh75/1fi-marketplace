import { Check } from "lucide-react";

import {
  calculateEmi,
  formatPrice,
} from "../utils/emi";

function EmiPlanCard({
  plan,
  price,
  selected,
  onSelect,
}) {
  const emi = calculateEmi(
    price,
    plan.duration,
    plan.interestRate
  );

  return (
    <button
      className={`emi-plan ${
        selected ? "selected" : ""
      }`}
      onClick={onSelect}
    >
      <div className="emi-plan-left">

        <div className="emi-radio">
          {selected && <Check size={13} />}
        </div>

        <div>
          <strong>
            {plan.duration} months
          </strong>

          <small>
            {plan.interestRate === 0
              ? "No interest"
              : `${plan.interestRate}% p.a. interest`}
          </small>
        </div>

      </div>

      <div className="emi-plan-right">
        <strong>{formatPrice(emi)}</strong>
        <small>/ month</small>
      </div>
    </button>
  );
}

export default EmiPlanCard;