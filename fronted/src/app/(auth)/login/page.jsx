'use client';
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
});

export const Login = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const handleLogin = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post(`http://localhost:7000/login`, values);
      setLoading(false);

      if (data && data.msg) {
        toast.success(data.msg); // Use toast.success for success messages
      } else {
        toast.success(res.data.msg); // Fallback message
        
      }  
      setTimeout(() => {
        router.push('/home');
      }, 10); // 100ms delay     

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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="max-w-md w-full p-8 bg-white shadow-2xl rounded-lg space-y-6">
        <div className="flex justify-center">
          <Image src="/logo.png" alt="Logo" width={100} height={100} className='mr-80  '/>
        </div>
        <h1 className="text-3xl font-bold text-center text-gray-800">Login</h1>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => handleLogin(values)}
        >
          {({ errors, touched }) => (
            <Form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <Field
                  name="email"
                  type="email"
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-3 ${
                    errors.email && touched.email ? 'border-red-500' : ''
                  }`}
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <Field
                  name="password"
                  type="password"
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-3 ${
                    errors.password && touched.password ? 'border-red-500' : ''
                  }`}
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
              </div>
              <button
                  type="submit"
                  className={`w-full py-3 rounded-md text-white font-semibold flex items-center justify-center ${
                     loading
                     ? 'bg-orange-300 cursor-not-allowed'
                     : 'bg-orange-500 hover:bg-orange-600 transition-colors cursor-pointer'
                  }`}
                  disabled={loading} >
                  {loading ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                            <span>Logging in...</span>
                        </div> ) 
                            :(
                    <span>Login</span>
                  )}
                </button>
            </Form>
          )}
        </Formik>
        <p className="mt-6 text-sm text-center text-gray-600">
          Don't have an account?{' '}
          <Link href="/register" className="text-indigo-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;