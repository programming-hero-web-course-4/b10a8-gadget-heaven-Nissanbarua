# Dashboard Management System

A web application built with React to manage a user's cart and wishlist. This dashboard allows users to add items to their cart or wishlist, view them dynamically, and manage their data seamlessly.

---

## Features

1. **Cart Management**:  
   Users can add items to the cart and view them on the dashboard. Items in the cart can be purchased with a single click.

2. **Wishlist Management**:  
   Users can save items to their wishlist, view them dynamically, and manage their favorite items separately from the cart.

3. **Dynamic Tab Switching**:  
   The application features a user-friendly interface with tabs to toggle between cart and wishlist views.

4. **Persistent Storage**:  
   Data is stored using the browser's `localStorage`, ensuring that cart and wishlist items persist even after refreshing the page.

5. **Interactive Notifications**:  
   Real-time notifications are implemented using `toast` to inform users about actions like adding items or warnings for duplicate entries.

---

## List of React Fundamental Concepts Used

1. **Components**:  
   - Reusable components such as `Dashboard`, `Cart`, and `Wishlist` simplify code maintenance and improve modularity.

2. **State Management**:  
   - The `useState` hook is used to manage states for cart, wishlist, and active tabs.

3. **Effect Hook**:  
   - The `useEffect` hook ensures data is loaded from `localStorage` when the component mounts.

4. **Props**:  
   - Props are used to pass data between components, maintaining separation of concerns.

5. **Conditional Rendering**:  
   - Conditional statements are used to toggle views and display content dynamically.

---

## Data Handling and Management

- **Local Storage**:  
  Data is handled and managed using the browser's `localStorage`. This approach is chosen to ensure persistence of cart and wishlist data even after the user refreshes or closes the page.

- **Toast Notifications**:  
  User actions such as adding to the cart or wishlist are managed interactively with notifications.

---

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
