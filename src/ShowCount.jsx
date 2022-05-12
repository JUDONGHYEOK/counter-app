import useSelector from "./useSelector";

function ShowCount() {
  const count = useSelector((state) => state.count);
  const diff = useSelector((state) => state.diff);
  return (
    <h1>
      {count} {"&"} {diff}
    </h1>
  );
}

export default ShowCount;
