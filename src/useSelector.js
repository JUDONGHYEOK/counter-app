import useStore from "./useStore";

const useSelector = (callback) => {
  const store = useStore();
  return callback(store.getState());
};

export default useSelector;
