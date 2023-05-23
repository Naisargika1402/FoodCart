import { useRef,useState} from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const InputAmountRef = useRef();
  const [amountIsvalid, setamointIsvalid]=useState(false);

  const submitHandler=(event)=>{
    
    event.preventDefault();

    const enteredAmount = InputAmountRef.current.value;
    const enteredAmountNum = +enteredAmount;
    if(enteredAmount.trim().length===0 || enteredAmountNum<1 || enteredAmountNum>5){
      setamointIsvalid(true);
      return;
    }
    props.onAddtoCart(enteredAmountNum);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={InputAmountRef}
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {amountIsvalid && <p>Enter Valid Amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
