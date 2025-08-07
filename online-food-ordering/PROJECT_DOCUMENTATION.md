# TasteStrek - Online Food Ordering System Documentation

## Project Overview

**TasteStrek** is a comprehensive online food ordering platform built with Spring Boot that connects customers with restaurants. The system supports multiple user roles and provides a complete food ordering ecosystem with features for restaurant management, food ordering, cart management, and order tracking.

## Project Theme
- **Domain**: Food & Restaurant Management
- **Type**: Multi-tenant B2C/B2B platform
- **Architecture**: RESTful API backend with JWT authentication
- **Database**: MySQL with JPA/Hibernate ORM

## User Roles & Permissions

### 1. Customer (ROLE_CUSTOMER)
**Primary Users**: End customers who want to order food

**Capabilities**:
- Browse restaurants and food items
- Search restaurants by keywords
- View restaurant details and menus
- Add/remove items to/from favorites
- Manage shopping cart (add, update, remove items)
- Place and track orders
- View order history
- Manage multiple delivery addresses
- Filter food by dietary preferences (vegetarian, seasonal, non-veg)

### 2. Restaurant Owner (ROLE_RESTAURANT_OWNER)
**Primary Users**: Restaurant business owners

**Capabilities**:
- Create and manage restaurant profile
- Update restaurant information (description, cuisine type, hours, contact info)
- Manage restaurant menu and food categories
- Add/edit/delete food items with images and ingredients
- Set food availability and pricing
- Manage ingredient categories and items
- View and process incoming orders
- Update order status

### 3. Admin (ROLE_ADMIN)
**Primary Users**: Platform administrators

**Capabilities**:
- Full system oversight and management
- Manage all restaurants on the platform
- Delete restaurants if necessary
- Monitor platform-wide orders
- System maintenance and user management

## Core Features & Requirements

### Authentication & Security
- JWT-based authentication system
- Role-based access control
- Secure password encryption
- Email validation for unique accounts

### Restaurant Management
- **Restaurant Registration**: Name, description, cuisine type, address, contact information
- **Operating Hours**: Configurable opening hours
- **Media Management**: Multiple restaurant images
- **Contact Information**: Mobile, email, social media (Twitter, Instagram)
- **Location Services**: Address management for delivery zones

### Food & Menu Management
- **Food Items**: Name, description, pricing, availability status
- **Categories**: Restaurant-specific food categories
- **Dietary Options**: Vegetarian, seasonal marking
- **Ingredients**: Detailed ingredient lists with categories
- **Media**: Multiple food images per item
- **Search & Filter**: By name, category, dietary preferences

### Order Management
- **Cart System**: Add, update, remove items with quantity management
- **Order Placement**: Multiple items from single restaurant per order
- **Order Tracking**: Status updates throughout fulfillment
- **Order History**: Complete customer order history
- **Delivery Address**: Multiple saved addresses per customer

### Business Logic Requirements
- One cart per customer
- Order totals calculated automatically
- Item availability checking
- Restaurant-specific ordering (no mixed restaurant orders)
- Timestamps for all critical operations

## Frontend Design Requirements

### Customer Interface Requirements

#### 1. Landing/Home Page
- **Hero Section**: Search bar for restaurants/food
- **Featured Restaurants**: Grid/carousel layout
- **Categories**: Food type filters (vegetarian, cuisines, etc.)
- **Location Selector**: Current delivery address
- **Navigation**: Search, favorites, cart, profile

#### 2. Restaurant Listing & Search
- **Search Results**: Restaurant cards with ratings, cuisine type, delivery time
- **Filters**: Cuisine type, dietary options, price range, ratings
- **Map Integration**: Restaurant locations (future enhancement)
- **Sorting**: By popularity, rating, delivery time, price

#### 3. Restaurant Detail Page
- **Restaurant Info**: Name, description, images, contact, hours
- **Menu Categories**: Tabbed or sidebar navigation
- **Food Items**: Cards with images, descriptions, price, add-to-cart
- **Reviews & Ratings**: Customer feedback (future enhancement)
- **Favorites Toggle**: Heart icon to save restaurant

#### 4. Food Item Detail
- **Image Gallery**: Multiple food images
- **Detailed Description**: Ingredients, dietary info
- **Customization Options**: Ingredients selection
- **Quantity Selector**: Increment/decrement controls
- **Add to Cart**: Prominent CTA button

#### 5. Cart & Checkout
- **Cart Summary**: Items, quantities, prices
- **Modification Controls**: Edit quantities, remove items
- **Order Total**: Itemized pricing with taxes/fees
- **Address Selection**: Saved addresses or add new
- **Payment Integration**: Payment method selection (future)
- **Order Confirmation**: Summary before placement

#### 6. Order Tracking
- **Order Status**: Visual progress indicator
- **Order Details**: Items, restaurant, delivery address
- **Estimated Time**: Delivery time estimates
- **Order History**: Past orders with reorder option

#### 7. User Profile
- **Account Info**: Name, email, profile picture
- **Address Management**: Add, edit, delete addresses
- **Favorites**: Saved restaurants
- **Order History**: Past orders
- **Preferences**: Dietary restrictions, notifications

### Restaurant Owner Interface Requirements

#### 1. Dashboard
- **Quick Stats**: Today's orders, revenue, popular items
- **Recent Orders**: Order queue with status management
- **Restaurant Status**: Open/closed toggle
- **Quick Actions**: Add food item, update info

#### 2. Restaurant Management
- **Profile Edit**: Name, description, cuisine, images
- **Contact Information**: Phone, email, social media
- **Operating Hours**: Daily schedule settings
- **Address Management**: Location and delivery zones

#### 3. Menu Management
- **Category Management**: Create, edit, organize categories
- **Food Item Management**: CRUD operations for menu items
- **Bulk Actions**: Import/export menu, bulk pricing updates
- **Availability Toggle**: Quick enable/disable items

#### 4. Order Management
- **Order Queue**: Incoming orders with priority
- **Order Details**: Full order breakdown
- **Status Updates**: Accept, prepare, ready, delivered
- **Order History**: Analytics and reporting

#### 5. Inventory Management
- **Ingredient Categories**: Organize ingredients
- **Ingredient Items**: Stock levels and management
- **Recipe Management**: Link ingredients to food items

### Admin Interface Requirements

#### 1. Admin Dashboard
- **Platform Overview**: Total restaurants, orders, users
- **Analytics**: Revenue, growth metrics, popular cuisines
- **System Health**: Performance monitoring
- **Quick Actions**: User management, restaurant approval

#### 2. Restaurant Management
- **Restaurant Directory**: All platform restaurants
- **Approval Workflow**: New restaurant verification
- **Performance Monitoring**: Restaurant analytics
- **Compliance Management**: Quality standards

#### 3. User Management
- **User Directory**: All platform users by role
- **Account Management**: Suspend, activate accounts
- **Support Tools**: Customer service features

## Technical Specifications

### Technology Stack
- **Backend**: Spring Boot 3.x, Spring Security, Spring Data JPA
- **Database**: MySQL 8.0+
- **Authentication**: JWT tokens
- **API**: RESTful web services
- **Build Tool**: Maven

### API Endpoints Structure
- `/auth/*` - Authentication endpoints
- `/api/restaurants/*` - Public restaurant operations
- `/api/admin/restaurants/*` - Admin restaurant management
- `/api/food/*` - Food browsing and search
- `/api/admin/food/*` - Restaurant food management
- `/api/cart/*` - Cart operations
- `/api/order/*` - Order management
- `/api/admin/orders/*` - Admin order oversight

### Database Schema
- Users table with role-based access
- Restaurants with owner relationships
- Food items linked to restaurants and categories
- Shopping carts with item relationships
- Orders with items and delivery addresses
- Ingredient management system

## Development Priorities

### Phase 1 (MVP)
1. User authentication and registration
2. Basic restaurant listing and search
3. Menu browsing and food item details
4. Cart functionality
5. Order placement and basic tracking

### Phase 2 (Enhanced Features)
1. Advanced search and filtering
2. Favorites and user preferences
3. Order history and reordering
4. Restaurant dashboard improvements
5. Admin management tools

### Phase 3 (Advanced Features)
1. Payment integration
2. Real-time order tracking
3. Reviews and ratings system
4. Mobile app development
5. Analytics and reporting

## Design Considerations

### User Experience
- **Mobile-First Design**: Responsive for all devices
- **Intuitive Navigation**: Clear user flows
- **Fast Loading**: Optimized images and lazy loading
- **Accessibility**: WCAG compliance for all users

### Performance
- **Image Optimization**: Compressed images with multiple sizes
- **Caching Strategy**: API response caching
- **Database Optimization**: Efficient queries and indexing
- **CDN Integration**: Fast global content delivery

### Security
- **Data Protection**: Secure user data handling
- **Payment Security**: PCI compliance (future)
- **API Security**: Rate limiting and validation
- **Privacy**: GDPR compliance considerations

This documentation provides a comprehensive overview of the TasteStrek platform requirements and serves as a guide for frontend designers and developers to create an effective user interface that meets all business and user needs.
