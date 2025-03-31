'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const AdminLayout = ({children}) => {
 const router = useRouter()
  return (
    <div>
      <div>
        <button onClick={()=> router.push('/admin/categories')}>Categories</button>
        <button onClick={()=> router.push('/admin/product')}>Products</button>
        
       </div>
       {children}
    </div>
    
  )
}

export default AdminLayout