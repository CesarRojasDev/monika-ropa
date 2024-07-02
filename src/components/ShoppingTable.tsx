import { ROPA } from '../services/Ropa'
import ShoppingCartItem from './ShoppingCartItem'

interface Props {
  handleTotal: (totalPrice: number) => void
}

function ShoppingTable({ handleTotal }: Props) {
  return (
    <table className='w-full bg-white shadow-md'>
      <thead>
        <tr className='border-b border-gray-200'>
          <th className='py-3 text-center text-lg '>Producto</th>
          <th className=' py-3  text-center text-lg '>Cantidad</th>
          <th className=' py-3 text-center text-lg'>Precio</th>
        </tr>
      </thead>
      <tbody>
        {ROPA.slice(0, 3).map((item, index) => (
          <ShoppingCartItem
            key={item.id}
            index={index}
            title={item.title}
            img={item.img}
            price={item.price}
            handleTotal={handleTotal}
          />
        ))}
      </tbody>
    </table>
  )
}

export default ShoppingTable
