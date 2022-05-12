import useStore from "./useStore";

const useDispatch = () => {
  const store = useStore();
  return store.dispatch;
};
export default useDispatch;
