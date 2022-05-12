import { setDiff } from "./actions";
import useDispatch from "./useDispatch";
import useSelector from "./useSelector";

function InputRange() {
  const diff = useSelector((state) => state.diff);
  const dispatch = useDispatch();
  const handleDiff = ({ target }) => dispatch(setDiff(target.valueAsNumber));

  return <input type="range" max={10} onChange={handleDiff} value={diff} />;
}

export default InputRange;
