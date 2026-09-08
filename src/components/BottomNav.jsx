import { Home, ShoppingBag, CreditCard, Wallet, User } from "lucide-react";

const navItems = [
  {
    label: "Home",
    icon: Home,
  },
  {
    label: "Shop",
    icon: ShoppingBag,
    active: true,
  },
  {
    label: "EMI Dues",
    icon: CreditCard,
  },
  {
    label: "Limit",
    icon: Wallet,
  },
  {
    label: "Profile",
    icon: User,
  },
];

function BottomNav() {
  return (
    <nav className="bottom-nav">
      {navItems.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className={`nav-item ${
              item.active ? "active" : ""
            }`}
          >
            <Icon
              className="nav-icon"
              size={18}
              strokeWidth={1.8}
            />

            <small>{item.label}</small>
          </div>
        );
      })}
    </nav>
  );
}

export default BottomNav;