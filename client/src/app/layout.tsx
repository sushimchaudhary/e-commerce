'use client'

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import toast, { Toaster } from 'react-hot-toast';
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../lib/redux/store";
import Header from "./(user)/header/page";
import Footer from "./(user)/footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <Header/>
        <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
           {children}
          </PersistGate>
        </Provider>      
        
        <Toaster/>
        <Footer/>
      </body>
    </html>
  );
}
