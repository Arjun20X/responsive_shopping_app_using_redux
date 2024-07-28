import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {

  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc,curr) => acc+curr.price,0));
  },[cart])

  return (

    <div>
      {
      cart.length > 0 ?
      (<div className="flex max-w-6xl justify-between  mx-auto">

        <div className="w-[50%]">
          {
          cart.map((item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          })
          }
        </div>

          <div className="w-[40%] fixed right-0 top-36 flex flex-col justify-between h-[70%] ">
            <div className="flex flex-col gap-y-3">
              <div>
                <div className="text-2xl font-semibold text-green-700 uppercase">Your Cart</div>
                <div className="text-5xl text-green-700 font-semibold uppercase">Summary</div>
              </div>
              <p>
                <span className="text-gray-700 font-semibold text-xl">Total Item: {cart.length} </span>
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <p className="text-lg font-semibold text-gray-800">Total Amount: <span className="font-bold text-gray-900">${totalAmount.toFixed(2)}</span></p>
              <button className="font-bold text-white bg-green-700 w-[60%] px-3 py-3 rounded-md">
                CheckOut Now
              </button>
            </div>

          </div>

      </div>):
      (<div className="flex flex-col gap-y-4 justify-center items-center h-screen">
        <h1 className="text-gray-900 font-semibold text-4xl ">Cart Empty</h1>  
        <Link to={"/"}>
        <button className="bg-green-600 px-5 py-4 rounded-full text-white text-lg font-bold">
          Shop Now
        </button>
        </Link>
      </div>)
}
    </div>
  );
};

export default Cart;
