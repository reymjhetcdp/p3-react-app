import { useRef, useState } from 'react';
import classes from './ProductsForm.module.css';

import Input from './Input';

function ProductsForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 10
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAdd(enteredAmountNumber);
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input
        ref={amountInputRef}
        label="Quantity: "
        input={{
          id: 'amount' + props.id,
          type: 'number',
          min: '1',
          max: '10',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button className={classes.addButton}>Add To Cart</button>
    </form>
  );
}

export default ProductsForm;
