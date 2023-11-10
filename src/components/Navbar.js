import { CartIcon } from "../icons";
import { useSelector } from "react-redux";

import React from "react";

const Navbar = () => {
  //   console.log(
  //     useSelector((state) => {
  //       console.log(state);
  //     })
  //   );

  const amount = useSelector((state) => state.cart.amount);
  return (
    <nav>
      <div className="nav-center">
        <h3>redux</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
