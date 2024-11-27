# 🛒 Moto-Gear Store

**Moto-Gear Store** is a robust e-commerce platform designed for motorcycle enthusiasts, offering a seamless shopping experience with modern web technologies. This project includes user and admin functionalities, secure payment integration, and dynamic data management.

---

## 🌍 Live Demo

Check out PenFlow in action at [Moto-Gear](https://moto-gear.onrender.com/)

---

## 🌟 **Features**

### **User Functionality**

- 🛍️ Product Browsing
- 🛒 Add to Cart
- 💳 Secure Stripe Payments
- 🏷️ Apply Coupon Codes
- 🔐 JWT-based Authentication

### **Admin Functionality**

- 👑 Manage Products & Categories
- 📊 View Sales Analytics
- 🛡️ Monitor User Activity

### **Core Technologies**

- **Backend**: Node.js, Express.js
- **Frontend**: React.js, Tailwind CSS
- **Database**: MongoDB, Redis for caching
- **Authentication**: JWT (Access & Refresh Tokens)
- **Payments**: Stripe Integration
- **Image Management**: Cloudinary
- **Analytics**: Admin dashboard with real-time insights

---

## 🚀 **Getting Started**

### **1. Clone the Repository**

```bash
git clone https://github.com/asim1909/Moto-Gear.git
cd Moto-gear
```

### **2. Install Dependencies**

```bash
npm install
```

### **3. Configure Environment Variables**

Create a `.env` file in the root directory with the following keys:

```env
PORT=5000  
MONGO_URI=<your_mongodb_connection_string>  
UPSTASH_REDIS_URL=<your_redis_connection_string>  
ACCESS_TOKEN_SECRET=<your_access_token_secret>  
REFRESH_TOKEN_SECRET=<your_refresh_token_secret>  
CLOUDINARY_CLOUD_NAME=<your_cloud_name>  
CLOUDINARY_API_KEY=<your_cloudinary_api_key>  
CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>  
STRIPE_SECRET_KEY=<your_stripe_secret_key>  
CLIENT_URL=http://localhost:5173  
NODE_ENV=development
```

### **4. Build the Application**

```bash
npm run build
```

### **5. Start the Application**

```bash
npm run start
```

---

## 🛠️ **Project Structure**

```plaintext
Moto-Gear/
│
├── backend/            # Server-side code
├── frontend/           # Client-side code
├── .env                # Environment variables
├── package.json        # Dependencies and scripts
└── README.md           # Project documentation
```

---

## 📦 **Key Features Breakdown**

- **Product Management**: Admin can create, edit, and delete product categories and items.
- **Cart & Checkout**: Users can add/remove items, view the cart, and securely check out with Stripe.
- **Coupon System**: Discount functionality for promotional campaigns.
- **Admin Dashboard**: Insights into user activity, sales trends, and revenue.

---

## 🔒 **Security**

- Data protection with JWT for authentication.
- Redis for caching to improve app performance.

---

## 🛡️ **Contributing**

Contributions are welcome! Please fork the repo and create a pull request.

