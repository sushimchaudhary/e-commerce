"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

interface Product {
  _id: string
  name: string
  category: string
  description: string
  price: number
  stock: number
  image: string
  ratings: number
  reviews: any[]
  createdAt: string
  updatedAt: string
  __v: number
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:9000/products")
        if (!response.ok) {
          throw new Error("Failed to fetch products")
        }
        const data = await response.json()
        setProducts(data)
      } catch (err) {
        setError("Error loading products. Please try again later.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  // Function to render star ratings
  const renderRating = (rating: number) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5
    const stars = []

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-4 h-4 fill-primary text-primary" />)
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-4 h-4 text-muted-foreground" />
          <div className="absolute top-0 left-0 overflow-hidden w-1/2">
            <Star className="w-4 h-4 fill-primary text-primary" />
          </div>
        </div>,
      )
    }

    const emptyStars = 5 - stars.length
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-muted-foreground" />)
    }

    return stars
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center p-6 max-w-md">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
          <p className="text-gray-700">{error}</p>
          <Button className="mt-4" onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">No products available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product._id} className="flex flex-col h-full hover:shadow-lg transition-shadow">
              <div className="aspect-square relative overflow-hidden rounded-t-lg">
                <img
                  src={product.image || "/placeholder.svg?height=300&width=300"}
                  alt={product.name}
                  className="object-cover w-full h-full transition-transform hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.svg?height=300&width=300"
                  }}
                />
                {product.stock <= 5 && product.stock > 0 && (
                  <Badge className="absolute top-2 right-2 bg-orange-500">Only {product.stock} left</Badge>
                )}
                {product.stock === 0 && <Badge className="absolute top-2 right-2 bg-red-500">Out of Stock</Badge>}
                <Badge className="absolute top-2 left-2">{product.category}</Badge>
              </div>

              <CardHeader className="pb-2">
                <h2 className="text-xl font-semibold line-clamp-1">{product.name}</h2>
                <div className="flex items-center gap-1 mt-1">
                  {renderRating(product.ratings)}
                  <span className="text-sm text-muted-foreground ml-1">({product.ratings.toFixed(1)})</span>
                </div>
              </CardHeader>

              <CardContent className="pb-2 flex-grow">
                <p className="text-muted-foreground line-clamp-2">{product.description}</p>
              </CardContent>

              <CardFooter className="flex justify-between items-center pt-2">
                <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
                <Button disabled={product.stock === 0} variant={product.stock === 0 ? "outline" : "default"}>
                  {product.stock === 0 ? "Sold Out" : "Add to Cart"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

