import { useState } from 'react'
import ShoppingCartCheckout from './ShoppingCartCheckout'
import ShoppingTable from './ShoppingTable'

const ShoppingWrapper = () => {
  const [totalShopping, setTotalShopping] = useState(0)

  const handleTotal = (totalPrice: number) => {
    setTotalShopping(totalPrice)
  }

  return (
    <section className='flex flex-col items-center justify-center p-4 md:p-0 '>
      <h2 className='text-center md:text-left font-semibold text-4xl my-6'>
        Termina tu pedido
      </h2>
      <div className='flex flex-col md:flex-row items-center justify-center md:px-[80px] gap-3 w-full mt-8'>
        <div className='flex flex-col items-center justify-center gap-6 w-full md:w-1/2'>
          <ShoppingTable handleTotal={handleTotal} />
        </div>
        <div className='flex justify-center w-full md:w-1/2'>
          <ShoppingCartCheckout totalShopping={totalShopping} />
        </div>
      </div>
    </section>
  )
}

export default ShoppingWrapper
