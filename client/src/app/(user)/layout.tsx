"use client";
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}  {/* This will render any content passed into the layout */}
    </div>
  );
}

export default Layout;
