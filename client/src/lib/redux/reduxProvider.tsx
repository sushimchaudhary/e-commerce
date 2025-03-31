"use client"; // Ensures this component runs only on the client side

import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store"; // Import the Redux store

// Define props type for the ReduxProvider component
interface ReduxProviderProps {
  children: ReactNode;
}

// ReduxProvider component wraps the application with the Redux store
const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
  return (
    // Provider makes the Redux store available to the entire app
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default ReduxProvider; // Export the component for use in the app
