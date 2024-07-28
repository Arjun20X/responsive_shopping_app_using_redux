import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { remove } from "../redux/Slices/CartSlice";
import { MdDelete } from "react-icons/md";

const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed")
  }

  return (
    <div className="w-full border-b-4 mb-12 mt-10">
      <div className="flex w-full gap-14 mb-8">
        <div className="h-[230px] w-[30%]">
          <img src={item.image} className="h-full w-full" />
        </div>

        <div className="h-[180px] flex flex-col gap-y-4 w-[70%] ">
          <h1 className="text-gray-700 font-semibold text-lg text-left w-[95%] ">{item.title}</h1>
          <h1 className="text-gray-600 text-[15px] w-[95%] ">{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>
          <div className="flex justify-between items-center w-[95%] px-2">
            <p className="text-green-500 font-bold text-lg">${item.price}</p>
            <div onClick={removeFromCart} className="bg-pink-300 p-3 rounded-full bg-opacity-90 cursor-pointer">
            <MdDelete className="w-4 h-4"/>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CartItem;
