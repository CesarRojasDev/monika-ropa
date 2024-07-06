interface Props {
  title: string;
  price: number;
  quantity: number;
  img: string;
}

const CartItem = ({ title, price, quantity, img }: Props) => {
  return (
    <li className="flex items-center justify-between mb-2 gap-4 border-b p-2">
      <div className="flex items-center justify-center w-full">
        <img src={img} alt={title} width={100} height={100} loading="lazy" />
      </div>
      <div className="flex flex-col w-full">
        <span className="font-semibold text-start">{title}</span>
        <span className="text-sm opacity-80">Precio: s/.{price}</span>
        <span className="text-sm opacity-80">Cantidad: {quantity}</span>
      </div>
    </li>
  );
};

export default CartItem;
