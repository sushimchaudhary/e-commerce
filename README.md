# apnaSapna - E-Commerce Platform for shopping

## Table of Contents
- 🤖 [Introduction](#introduction)
- ⚙️ [Tech Stack](#tech-stack)
- 🔋 [Features](#features)
- 🤸 [Quick Start](#quick-start)

## 🤖 Introduction

   The apnaSapna project is an e-commerce platform tailored to showcase and sell products, likely centered around Nepali culture or a mix of other categories, as the name might suggest a cultural or localized appeal. Here’s a detailed explanation of the products and features from the code you've shared:

Key Product Categories:

Home Decor:
The home decor section offers products like modern table lamps, minimalist wall clocks, wooden coffee tables, cozy floor rugs, and LED string lights. These are designed to add a modern yet cozy touch to any living space, balancing style and functionality.

Beauty:
This category includes high-end skincare products like the luxury skincare set, matte lipstick pack, perfume collection, organic face mask, and hair straighteners. These products aim to enhance beauty routines and self-care, focusing on quality and aesthetics.

Electronics:
Featuring practical tech gadgets, the electronics section offers wireless headphones, smartwatches, gaming keyboards, 4K smart TVs, Bluetooth speakers, and noise-canceling earbuds. These products cater to both tech enthusiasts and those looking for practical devices for everyday use.

Fashion:
The fashion category includes trendy apparel and accessories such as leather jackets, sneakers, sunglasses, denim jeans, and casual hoodies. These items are geared toward those who want to stay stylish while remaining comfortable.

## ⚙️ Tech Stack

The project uses the following technologies:

- **Next.js**: React framework for building server-side rendered applications.
- **React**: JavaScript library for building user interfaces.
- **Typescript**: Superset of JavaScript that adds static types.
- **TailwindCSS**: Utility-first CSS framework for styling components.
- **ShadCN**: A modern component library for UI components.
- **Redux Toolkit**: A library to manage global state in a predictable way.
- **Express.js**: Web framework for Node.js, used for the backend API.
- **MongoDB**: NoSQL database for storing product, user, and order data.

## 🔋 Features

- Register as an **Admin** or **User** with different access levels.
- View a wide variety of Nepali traditional and modern clothing.
- Add products to the **shopping cart**.
- **Checkout** process with secure payment integration (under development).
- Admins can manage products, orders, and users from an admin panel.
- **Search and filter** products by category, price, and more.
- **User authentication** with JWT for secure login.

## 🤸 Quick Start

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed on your machine:

- **Git**
- **Node.js** (Node Version **v20.18.3** or higher)
- **npm** (Node Package Manager)

### Cloning the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/sushimchaudhary/e-commerce.git
cd apnaSapna
Installation
Install the project dependencies for both the fronted and the backend using npm:

Client-side:

bash

cd fronted/
npm install
Backend-side:

bash

cd ../backend/
npm install
Set Up Environment Variables
Create a new file named .env in the backend root directory. You can refer to .env.sample or add the following content:

bash

PORT=7000
MONGODB_CONNECTION_URI =mongodb://127.0.0.1:27017/e-commerce
NODE_VERSION=20.18.3
CORS_ORIGIN=*
Running the Project
To run both the client and backend servers simultaneously:

bash

npm run dev
Client: Open your browser and go to http://localhost:3000 to view the frontend.
Backend: The backend server will be running on http://localhost:7000.




