'use client';
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';



const RegisterSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  phoneNumber: Yup.string()
    .matches(/\+?[1-9][0-9]{7,14}/, 'Invalid phone number')
    .required('Required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
  firstName: Yup.string(),
  lastName: Yup.string(),
  'address.street': Yup.string(),
  'address.city': Yup.string(),
  'address.state': Yup.string(),
  'address.postalCode': Yup.string(),
  'address.country': Yup.string(),
  profilePicture: Yup.string().url('Invalid URL'),
  dateOfBirth: Yup.date(),
  role: Yup.string().oneOf(['customer', 'admin', 'seller']),
});

export const Register = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const handelRegister = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post(`http://localhost:7000/register`, values);
      setLoading(false);

      if (data && data.msg) {
        toast.success(data.msg); // Use toast.success for success messages
      } else {
        toast.success(res.data.msg); // Fallback message
        
      }
       // Delay before redirecting (optional)
       setTimeout(() => {
        router.push('/login');
      }, 100); // 100ms delay

    } catch (err) {
      setLoading(false);
      if (err.response && err.response.data && err.response.data.msg) {
        toast.error(err.response.data.msg); // Display server-side error message
      } else {
        toast.error(err.message || "An error occurred during registration."); // Display general error message
      }
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
    <div className="max-w-md w-full p-8 bg-white shadow-2xl rounded-lg space-y-6">
      <div className="flex justify-center mb-4">
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
      </div>
      <h1 className="text-3xl font-bold text-center text-gray-800">Register</h1>
      <Formik
        initialValues={{
          email: '',
          phoneNumber: '',
          password: '',
          firstName: '',
          lastName: '',
          address: {
            street: '',
            city: '',
            state: '',
            postalCode: '',
            country: '',
          },
          profilePicture: '',
          dateOfBirth: '',
          role: 'customer',
        }}
        validationSchema={RegisterSchema}
        onSubmit={(values) => {
          handelRegister(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="space-y-4">
            {[
              { label: 'Email', name: 'email', type: 'email' },
              { label: 'Phone Number', name: 'phoneNumber', type: 'tel' },
              { label: 'Password', name: 'password', type: 'password' },
              { label: 'First Name', name: 'firstName', type: 'text' },
              { label: 'Last Name', name: 'lastName', type: 'text' },
              { label: 'City', name: 'address.city', type: 'text' },
              { label: 'Date of Birth', name: 'dateOfBirth', type: 'date' },
            ].map(({ label, name, type }) => (
              <div key={name} className="space-y-1">
                <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                  {label}
                </label>
                <Field
                  name={name}
                  type={type}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-3 ${
                    errors[name] && touched[name] ? 'border-red-500' : ''
                  }`}
                />
                <ErrorMessage name={name} component="div" className="text-red-500 text-xs mt-1" />
              </div>
            ))}

            <div className="space-y-1">
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <Field
                name="role"
                as="select"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-3"
              >
                <option value="customer">Customer</option>
                <option value="admin">Admin</option>
                <option value="seller">Seller</option>
              </Field>
              <ErrorMessage name="role" component="div" className="text-red-500 text-xs mt-1" />
            </div>

            <button
              type="submit"
              className={`w-full py-3 rounded-md text-white font-semibold flex items-center justify-center ${
                loading
                  ? 'bg-orange-300 cursor-not-allowed'
                  : 'bg-orange-500 hover:bg-orange-600 transition-colors cursor-pointer'
              }`}
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                  <span>Registering...</span>
                </div>
              ) : (
                <span>Register</span>
              )}
            </button>
          </Form>
        )}
      </Formik>
      <p className="mt-6 text-sm text-center text-gray-600">
        Already have an account?{' '}
        <Link href="/login" className="text-indigo-600 hover:underline">
          Login here
        </Link>
      </p>
    </div>
  </div>
  );
};

export default Register;