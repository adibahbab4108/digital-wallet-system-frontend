# **Digital Wallet System - Frontend**

A secure, responsive, and role-based digital wallet application built with **React.js**, **Redux Toolkit**, **RTK Query**,**shadcn/ui** and **Tailwind CSS**, designed to provide Users, Agents, and Admins with seamless financial operations and wallet management.

---

## **📌 Project Overview**

This application serves as the **frontend** for a Digital Wallet System (similar to bKash or Nagad). It offers:
✅ A **public landing section** to introduce the service
✅ **Role-based dashboards** for **Users**, **Agents**, and **Admins**
✅ **Secure authentication** using JWT
✅ **Robust state management** with Redux Toolkit and RTK Query
✅ **Responsive design** with Tailwind CSS

The app integrates with a backend API (Node.js/Express + MongoDB) or a mocked API for testing purposes.

---

## **🛠 Tech Stack**

### **Frontend**

* **React.js** (UI)
* **React Router** (Navigation)
* **Redux Toolkit** + **RTK Query** (State & API management)
* **TypeScript** (Type safety)
* **Tailwind CSS** (Styling)

### **Backend**

* **Node.js / Express** (REST API)
* **MongoDB / Mongoose** (Database)
* **JWT + bcrypt** (Authentication & security)

---
### **For Testing**
Email: super.admin@gmail.com
Password: super.admin

## **✅ Minimum Functional Requirements**

### **1️⃣ Public Landing Section**

Accessible without login:

* **Home Page**:

  * Sticky navbar with at least 3 functional routes
  * Hero banner with tagline and CTA buttons
  * Responsive design with skeleton loading and smooth transitions
* **About Page**: Service story, mission, and team
* **Features Page**: Feature list with icons
* **Pricing Page** *(optional)*
* **Contact Page**: Inquiry form (simulated submission)
* **FAQ Page**: Common questions & answers

---

### **2️⃣ Authentication**

* Login with **JWT-based authentication**
* Registration with role selection (**User** or **Agent**)
* Role-based dashboard redirection
* Persistent authentication state (remains logged in after refresh)
* Logout functionality

---

### **3️⃣ User Dashboard**

* Wallet overview: **balance, quick actions, recent transactions**
* Deposit money (**cash-in simulation**)
* Withdraw money
* Send money to another user (search by phone/email)
* Transaction history with:

  * **Pagination**
  * **Filters** (type/date range)
* Profile management (update name, phone, password)

---

### **4️⃣ Agent Dashboard**

* Overview with **cash-in/out summary**
* Add money to user wallet
* Withdraw money from user wallet
* View all transactions handled by the agent
* Profile management

---

### **5️⃣ Admin Dashboard**

* Overview with **total users, agents, transactions, volume**
* Manage users (view, block/unblock)
* Manage agents (approve/suspend)
* View all transactions with advanced filters
* Implement **search bars, multiple filters, and pagination**
* Profile management

---

### **6️⃣ General Features**

* Role-based navigation menu
* Loading indicators & global error handling
* Form validations (required fields, positive numbers)
* **Dynamic data visualization** (cards, tables)
* **Toast Notifications** for success/error
* Responsive UI for all devices

---


## **🚀 Getting Started**

### **1️⃣ Clone the repository**

```bash
git clone https://github.com/your-username/digital-wallet-frontend.git
cd digital-wallet-frontend
```

### **2️⃣ Install dependencies**

```bash
npm install
```

### **3️⃣ Set up environment variables**

Create a `.env` file in the root directory:

```
VITE_API_BASE_URL=http://localhost:5000/api
```

### **4️⃣ Run the development server**

```bash
npm run dev
```

---

## **🔐 Authentication Flow**

* Users register or log in with email/phone
* JWT is stored in **HTTP-only cookies** or local storage (based on backend)
* Redux Toolkit persists authentication state
* Role-based routing ensures only authorized users access specific dashboards

---

## **📊 UI & UX Features**

✔ Smooth navigation & transitions
✔ Toast notifications for actions
✔ Responsive design for mobile, tablet, and desktop
✔ Modern and clean Tailwind styling

---


## **🛡 Security Considerations**

* JWT-based authentication
* Form validation for all inputs
* Role-based access control
* Prevent XSS and CSRF attacks (based on backend config)

---

## **📌 Future Enhancements**

* Dark mode toggle
* Advanced reporting for Admin
* Multi-language support

---

