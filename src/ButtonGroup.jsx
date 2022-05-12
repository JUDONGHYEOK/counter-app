import { decrement, increment, reset } from "./actions";
import ButtonItem from "./ButtonItem";
import useDispatch from "./useDispatch";

function ButtonGroup() {
  const dispatch = useDispatch();

  const onIncrement = () => dispatch(increment());
  const onDecrement = () => dispatch(decrement());
  const onReset = () => dispatch(reset());

  return (
    <div>
      <ButtonItem onAction={onDecrement}>-</ButtonItem>
      <ButtonItem onAction={onReset}>Reset</ButtonItem>
      <ButtonItem onAction={onIncrement}>+</ButtonItem>
    </div>
  );
}

export default ButtonGroup;
