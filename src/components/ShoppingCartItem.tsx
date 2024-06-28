import { useState, useEffect } from 'react'

interface Props {
  index: number
  title: string
  img: string
  price: number
  handleTotal: (totalPrice: number) => void
}

const ShoppingCartItem: React.FC<Props> = ({
  title,
  img,
  price,
  handleTotal,
}) => {
  const [quantity, setQuantity] = useState(1)

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value))
  }

  const totalPrice = quantity * price

  const calculateTotal = () => {
    handleTotal(totalPrice)
  }

  useEffect(() => {
    calculateTotal()
  }, [quantity, price, handleTotal])

  return (
    <section className='flex flex-col md:flex-row items-center p-4 justify-center gap-6 border-b-2 border-gray-400 pb-6'>
      <div className='flex flex-col items-center justify-center '>
        <img src={img} alt='Product-Image' className='w-full h-auto' />
      </div>
      <div className='flex flex-col items-center md:items-start justify-center w-full md:w-1/3'>
        <h3 className='text-center md:text-start font-semibold text-lg'>
          {title}
        </h3>
        <p className='text-center md:text-start text-base'>Color: Azul</p>
        <p className='text-center md:text-start text-base'>Talla: M</p>
      </div>
      <div className='flex flex-col items-center md:items-start justify-center w-full md:w-1/3'>
        <h4 className='text-center md:text-start font-semibold text-lg'>
          Cantidad
        </h4>
        <input
          type='number'
          className='w-full md:w-1/2 p-2 border rounded-lg text-center'
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>
      <div className='flex flex-col items-center md:items-start justify-center w-full md:w-1/3'>
        <h4 className='text-center md:text-start font-semibold text-lg'>
          Precio Total
        </h4>
        <span className='text-center md:text-start'>s/.{totalPrice}</span>
      </div>
    </section>
  )
}

export default ShoppingCartItem
