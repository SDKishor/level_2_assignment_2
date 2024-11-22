export type TCarCategory = 'Sedan' | 'SUV' | 'Truck' | 'Coupe' | 'Convertible'

// Car interface
export interface ICar {
  brand: string
  model: string
  year: number
  price: number
  category: TCarCategory
  description: string
  quantity: number
  inStock: boolean
}
