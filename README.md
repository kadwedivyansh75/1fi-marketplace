# 1Fi Marketplace

A responsive 1Fi Marketplace experience built as part of the 1Fi SDE Intern Assignment.

The project extends the existing 1Fi Shop experience with a dedicated Marketplace where users can browse products, select variants, choose flexible EMI plans, and complete a simulated purchase flow.

## 🚀 Live Demo

Coming soon.

## ✨ Features

* Product marketplace with category filtering
* Product search
* Product details and descriptions
* Product variant selection
* Dynamic product pricing based on selected variant
* Multiple EMI plans
* EMI selection with monthly payment calculation
* Payment summary
* Order confirmation flow
* Loading, error and empty states
* Responsive mobile-first UI
* Reusable React components
* Mock API/service layer for product retrieval

## 🛒 User Flow

```text
Shop
  ↓
1Fi Marketplace
  ↓
Browse / Search Products
  ↓
Product Details
  ↓
Select Variant
  ↓
Choose EMI Plan
  ↓
Payment Summary
  ↓
Order Confirmation
```

## 🧱 Tech Stack

* React
* Vite
* React Router
* JavaScript
* CSS
* Lucide React

## 📁 Project Structure

```text
src/
├── components/
│   ├── BottomNav.jsx
│   ├── EmiPlanCard.jsx
│   └── ProductCard.jsx
│
├── data/
│   ├── emiPlans.js
│   └── products.js
│
├── pages/
│   ├── Shop.jsx
│   ├── Marketplace.jsx
│   ├── ProductDetails.jsx
│   ├── EmiSelection.jsx
│   └── OrderConfirmation.jsx
│
├── services/
│   └── marketplaceApi.js
│
├── utils/
│   └── emi.js
│
├── App.jsx
├── index.css
└── main.jsx
```

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate into the project

```bash
cd 1fi-marketplace
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Create a production build

```bash
npm run build
```

## 🧠 Engineering Approach

Product and EMI information is separated from the UI through dedicated data modules and a mock service layer. This keeps the Marketplace structured so the mock data can later be replaced with a real backend API without tightly coupling data retrieval to the components.

Reusable components are used for recurring UI patterns such as product cards, EMI plan cards and bottom navigation.

Business logic such as EMI calculation and price formatting is isolated into reusable utilities.

## 🎨 Design

The Marketplace follows the visual language of the existing 1Fi product experience, including:

* Mobile-first layout
* Purple primary accent
* Rounded cards and controls
* Minimal borders and shadows
* Compact typography
* Floating bottom navigation
* Clear financial/EMI-focused information hierarchy

The existing 1Fi experience was kept intact while the Marketplace was added as the new Shop destination.

## 📌 Assignment Scope

This project focuses specifically on the **1Fi Marketplace** portion of the Shop experience and uses mock product/EMI data as permitted by the assignment.

## 👨‍💻 Author

Divyansh Kadwe
