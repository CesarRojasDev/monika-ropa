import  { useState, useEffect, useRef } from 'react';
import CartItem from './CartItem.tsx';
import CartLogo from './Icons/CartLogo.tsx';

const Cart: React.FC = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const cartButtonRef = useRef<HTMLButtonElement>(null);
  const cartPopoverRef = useRef<HTMLDivElement>(null);

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      cartButtonRef.current &&
      cartPopoverRef.current &&
      !cartButtonRef.current.contains(event.target as Node) &&
      !cartPopoverRef.current.contains(event.target as Node)
    ) {
      setIsPopoverOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block">
      <button
        ref={cartButtonRef}
        className="relative z-10 block p-2 focus:outline-none"
        onClick={togglePopover}
      >
        <CartLogo />
      </button>
      {/* Popover */}
      <div
        ref={cartPopoverRef}
        className={`absolute md:right-0 z-20 w-64 p-4 mt-2 text-black bg-white border border-gray-200 rounded-lg shadow-lg transition-opacity duration-200 ease-in-out ${
          isPopoverOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        } max-w-full md:max-w-xs`}
        style={{ maxWidth: 'calc(100vw - 16px)' }} // Adjust max-width for mobile view
      >
        <h3 className="text-lg font-semibold mb-4 text-center">Carrito de Compras</h3>
        <ul>
          <CartItem
            title="Blusa Abombada"
            price={140}
            quantity={1}
            img="/clothes/blusa-abombada-roja.webp"
          />
          <CartItem
            title="Falda Short"
            price={171}
            quantity={1}
            img="/clothes/falda-short.webp"
          />
          <CartItem
            title="Blusa"
            price={120}
            quantity={3}
            img="/clothes/blusa.webp"
          />
        </ul>
        <div className="pt-2 mt-2">
          <div className="flex items-center justify-between">
            <span className="font-semibold">Total:</span>
            <span className="font-semibold">s/.431.00</span>
          </div>
          <button className="w-full px-4 py-2 mt-4 text-white bg-[#fe353c] rounded hover:bg-[#ec161e] active:bg-[#c70e15] focus:outline-none">
            <a href="/shop/shoppingCart">Ir a Pagar</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
