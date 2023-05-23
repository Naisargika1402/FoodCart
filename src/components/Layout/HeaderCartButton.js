import { useContext,useEffect,useState} from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnHigh,setbtnHigh]=useState(false);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnHigh ? classes.bump : ''}`;

  useEffect(()=>{
    if(items.length===0)return

    console.log("on");
    setbtnHigh(true);

    const timer = setTimeout(()=>{
      console.log("hiii");
      setbtnHigh(false);
    },300)

    return()=>{
      console.log("byeee");
      clearTimeout(timer);
    }

  },[items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
