# OLX App - Online Marketplace Platform

A modern, responsive React-based online marketplace application built with Vite, Material-UI, and Tailwind CSS. This platform enables users to browse, search, and post classified advertisements for various product categories.

---

## 🎯 Features

- ✅ **Multi-category Marketplace** - Browse products across different categories
- ✅ **Advanced Search & Filtering** - Search listings by keywords, location, price range
- ✅ **Responsive Design** - Optimized for mobile, tablet, and desktop devices
- ✅ **Multi-language Support** - Arabic and English language options
- ✅ **Product Listings** - View detailed product information with images, specifications, and seller info
- ✅ **Contact Options** - Direct phone, WhatsApp, and chat communication with sellers
- ✅ **Post Advertisements** - Users can list their own products for sale
- ✅ **Favorite/Bookmark Listings** - Save favorite items for later
- ✅ **Dynamic Carousels** - Featured and recommended listings
- ✅ **Agency Support** - Display verified business listings with agency information
- ✅ **Real-time Data** - Powered by React Query for efficient data fetching
- ✅ **Form Validation** - Robust form validation using React Hook Form and Yup

---

## 🔓 User Access & Pages

### **1. Home Page (`/`)**
The landing page showcasing the marketplace's main offerings:
- **Featured Listings Carousel** - Elite and featured product listings
- **Category Selection** - Browse products by category (Mobile Phones, Cars, Apartments, etc.)
- **Popular Listings** - Trending items displayed in carousels
- **Download App Section** - Promote mobile application download
- **Navigation Bar** - Search bar and language switcher
- **Footer** - Links and company information

**What Users Can Access:**
- View featured products without login
- Browse categories
- Switch between Arabic and English
- View popular/trending items

---

### **2. Mobile Listing Page (`/mobile-phones-accessories`)**

#### **Phone Listing (`/mobile-phones-accessories`)**
Browse mobile phone listings.

**What Users Can Access:**
- View all mobile phone listings
- Sort listings (newest, price low-to-high, etc.)
- Pagination through listings

#### **Phone Details (`/mobile-phones-accessories/:slug` or `/:id`)**
Comprehensive product detail page for individual phone listings.

**What Users Can Access:**
- **Product Images**
- **Product Specifications:**
- **Product Information:**
- **Pricing Information:**
- **Seller Information:**
- **Contact Options:**
- **Additional Actions:**
- **Safety Tips Section** 
- **Featured/Elite Badge** 

---

### **3. Post Advertisement Page (`/post-ad`)**

Create and submit new product listings.

**What Users Can Access:**
- **Category Selection** - Choose product category
- **Dynamic Form** - Form fields adapt based on category selection
- **Product Information Form:**
  - Title/headline
  - Detailed description
  - Category-specific fields (brand, model, condition, etc.)
  - Pricing information
  - Location/area selection
- **Image Upload** - Upload product photos (primary and gallery)
- **Seller Information** - Provide contact details
- **Form Validation** - Real-time validation feedback
- **Submit Listing** - Publish advertisement to marketplace

**Supported Categories:**
- Mobile Phones & Accessories
- Cars for Sale
- Apartments & Real Estate
- And more...

---

### **4. Additional Pages**

#### **Not Found Page (`/404` or undefined routes)**
Error page displayed when users navigate to non-existent routes.

---

## 🏗️ Technology Stack

### **Frontend Framework**
- **React 19.2.1** - UI library
- **React Router v7.10.0** - Client-side routing
- **Vite 7.2.4** - Build tool and dev server

### **UI Components & Styling**
- **Material-UI (MUI) 7.3.6** - Component library
- **Tailwind CSS 3.4.8** - Utility-first CSS framework
- **Emotion** - CSS-in-JS library for MUI styling
- **Sass 1.94.2** - CSS preprocessing

### **State Management**
- **Redux Toolkit 2.11.0** - State management
- **React-Redux 9.2.0** - React bindings for Redux
- **Redux-Persist 6.0.0** - Persist Redux state to localStorage

### **Data Fetching & API**
- **TanStack React Query 5.90.11** - Server state management
- **Axios 1.13.2** - HTTP client

### **Forms & Validation**
- **React Hook Form 7.67.0** - Performant form handling
- **@hookform/resolvers 5.2.2** - Form validation resolvers
- **Yup 1.7.1** - Schema validation library

### **Internationalization**
- **i18next 25.7.1** - Internationalization framework
- **react-i18next 16.3.5** - React integration for i18next

### **Date & Time**
- **Day.js 1.11.19** - Date manipulation and formatting

### **Carousel & Sliders**
- **React Slick 0.31.0** - Carousel component
- **Slick Carousel 1.8.1** - Carousel CSS

### **Notifications**
- **React-Toastify 11.0.5** - Toast notifications

### **Icons**
- **MUI Icons Material 7.3.6** - Material Design icons

### **Environment Management**
- **env-cmd 11.0.0** - Environment variable management

### **Code Quality**
- **ESLint 9.39.1** - Code linting
- **ESLint Plugin React Hooks** - React hooks linting rules
- **ESLint Plugin React Refresh** - Vite React refresh plugin

---

## 📁 Project Structure

```
olx-app/
├── public/
│   ├── config.dev.js          # Development configuration
│   └── olx-logo.png           # Application logo
│
├── src/
│   ├── assets/                # Static assets (SVGs, images)
│   │   └── react.svg
│   │
│   ├── components/            # Reusable React components
│   │   ├── DynamicForm.jsx    # Form component that adapts to categories
│   │   ├── ScrollToTop.jsx    # Auto-scroll to top on navigation
│   │   ├── Footer/
│   │   │   └── Footer.jsx     # Footer component
│   │   ├── FormComponents/
│   │   │   └── FormComponents.jsx  # Reusable form input components
│   │   └── Navbar/
│   │       └── Navbar.jsx     # Navigation bar with search & language switch
│   │
│   ├── core/
│   │   ├── apis/              # API integration
│   │   │   ├── API.jsx        # Base API configurations & image endpoints
│   │   │   ├── homeAPI.jsx    # Home page API calls
│   │   │   └── ReactQueryInstance.jsx  # React Query setup
│   │   │
│   │   ├── data/              # Mock data for development
│   │   │   ├── CarouselApartmentsData.jsx
│   │   │   ├── CarouselCarsForSaleData.jsx
│   │   │   ├── CarouselPhoneData.jsx
│   │   │   └── PhoneData.jsx  # Mobile phone listings data
│   │   │
│   │   └── helpers/           # Utility helpers
│   │       └── CommonHelpers.jsx
│   │
│   ├── hooks/                 # Custom React hooks
│   │   └── useCategories.jsx  # Hook for fetching categories
│   │
│   ├── layout/                # Layout components
│   │   └── Layout.jsx         # Main app layout wrapper
│   │
│   ├── locales/               # Internationalization
│   │   ├── ar.jsx             # Arabic translations
│   │   ├── en.jsx             # English translations
│   │   └── i18n.jsx           # i18next configuration
│   │
│   ├── pages/                 # Page components
│   │   ├── Home/              # Home page section
│   │   │   ├── Home.jsx       # Main home page
│   │   │   ├── Categories.jsx # Category selection
│   │   │   ├── CustomSlider.jsx    # Custom carousel
│   │   │   ├── DownloadOlxApp.jsx  # App download promo
│   │   │   └── ListingCarousel.jsx # Product carousels
│   │   │
│   │   ├── MobileListing/     # Mobile phone listing pages
│   │   │   ├── PhoneListing.jsx    # Phone listings grid
│   │   │   └── PhoneDetails.jsx    # Individual phone details
│   │   │
│   │   ├── PostAd/            # Advertisement posting
│   │   │   ├── PostAd.jsx     # Main post ad page
│   │   │   ├── PostAdForm.jsx # Form for posting ads
│   │   │   └── CategorySelector.jsx # Category selection for posting
│   │   │
│   │   └── test.jsx           # Testing page
│   │
│   ├── redux/                 # Redux state management
│   │   ├── store.jsx          # Redux store configuration
│   │   └── reducers/
│   │       └── categoriesReducer.jsx  # Categories state reducer
│   │
│   ├── theme/
│   │   └── theme.jsx          # MUI theme configuration
│   │
│   ├── utils/                 # Utility functions
│   │   ├── categoryHelper.jsx # Category-related utilities
│   │   ├── fieldProcessor.jsx # Form field processing
│   │   └── validationSchema.jsx    # Yup validation schemas
│   │
│   ├── App.jsx                # Main app component
│   ├── App.css                # App styles
│   ├── index.css              # Global styles
│   └── main.jsx               # React entry point
│
├── eslint.config.js           # ESLint configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── vite.config.js             # Vite configuration
├── package.json               # Project dependencies
└── README.md                  # This file
```

---

## 🚀 Installation & Setup

### **Prerequisites**
- Node.js 16+ (or latest LTS version)
- npm or yarn package manager

### **Step 1: Clone the Repository**
```bash
git clone https://github.com/rayanraiyeh/olx-app.git
cd olx-app
```

### **Step 2: Install Dependencies**
```bash
npm install
```

### **Step 3: Environment Configuration**
Create a `.env` file in the root directory (or use environment-specific configs):
```env
# API Configuration
VITE_API_BASE_URL=http://your-api-endpoint
VITE_IMAGE_BASE_URL=http://your-image-endpoint

# App Configuration
VITE_APP_NAME=OLX
```

---

## ▶️ Running the Application

### **Development Mode**
Start the development server with hot module replacement (HMR):
```bash
npm run dev
```
The app will be available at `http://localhost:5173/`

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## 🎨 Key Features by Module

### **Home Module**
- **Browse Categories** - View all product categories
- **Featured Listings** - Elite and featured items carousel
- **Popular Products** - Trending items by category
- **Download App** - Promote mobile app download

### **Mobile Listing Module**
- **Product Grid** - Paginated list of all phones
- **Advanced Filters** - Filter by brand, model, price, condition
- **Product Details** - Comprehensive product information
- **Seller Information** - Agency details and verification status
- **Contact Options** - Multiple ways to reach the seller
- **Favorites** - Save favorite listings

### **Post Ad Module**
- **Category Selection** - Choose from available categories
- **Dynamic Forms** - Category-specific form fields
- **Image Upload** - Add product photos
- **Validation** - Real-time form validation
- **Publishing** - Submit listings to marketplace

### **Components**
- **Navbar** - Search, language switcher, navigation
- **Footer** - Company links and information
- **Carousel** - Reusable carousel for product displays
- **DynamicForm** - Adaptive forms based on category
- **FormComponents** - Reusable form inputs

---

## 🎛️ State Management
### **Redux Store**
### **Redux Persist**
---

## 🎨 Styling
### **Tailwind CSS**
### **Material-UI (MUI)**
### **Styling Approach**

---

## 🔧 Configuration Files

### **vite.config.js**
- Vite build configuration
- React plugin setup
- Port and alias configuration

### **tailwind.config.js**
- Tailwind CSS theme customization
- Custom colors and spacing

### **postcss.config.js**
- PostCSS plugins (Tailwind, Autoprefixer)

### **eslint.config.js**
- ESLint rules and configurations
- React and React Hooks linting

### **public/config.dev.js**
- Development environment configuration

---

## 📱 Responsive Design

The application is fully responsive:
- **Mobile** - Optimized for phones (320px and up)
- **Tablet** - Optimized for tablets (768px and up)
- **Desktop** - Optimized for desktop displays (1024px and up)

Built with:
- Tailwind CSS responsive utilities (`sm:`, `md:`, `lg:`, `xl:`)
- MUI Grid system
- Flexible component layouts

---


**Last Updated:** December 7, 2025  
**Version:** 0.0.0
