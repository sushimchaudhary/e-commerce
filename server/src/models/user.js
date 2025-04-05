const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Basic email validation
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: /^[+]?[1-9][0-9]{7,14}$/, // Basic phone number validation (adapt to your region)
  },
  password: {
    type: String,
    required: true,
    minlength: 8, // Enforce minimum password length
  },
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  address: {
    street: String,
    city: String,
    state: String,
    postalCode: String,
    country: String,
  },
  profilePicture: {
    type: String, // Store the URL or path to the profile picture
  },
  dateOfBirth: {
    type: Date,
  },
 
  role: { // Example: 'customer', 'admin', 'seller'
    type: String,
    enum: ['customer', 'admin', 'seller'], // Restrict possible roles
    default: 'customer',
  },
 
});

const User = mongoose.model('User', userSchema);

module.exports = User;