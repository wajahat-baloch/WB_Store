import React from "react";
import "./Cart.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long sleeve Graphic T-Shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor perferendis illo blanditiis corporis minima necessitatibus vero veritatis eveniet laudantium. Similique amet aliquid rem dolorem repellat tempore eum inventore nemo iste.",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long sleeve Graphic T-Shirt",
      isNew: false,
      oldPrice: 22,
      price: 18,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor perferendis illo blanditiis corporis minima necessitatibus vero veritatis eveniet laudantium. Similique amet aliquid rem dolorem repellat tempore eum inventore nemo iste.",
    },
  ];
  return (
    <div className="cart">
      <h1>Products in your Cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutlineIcon className="delete" />
        </div>
      ))}

      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
