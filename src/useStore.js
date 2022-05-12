import React from "react";
import { ReactReduxContext } from "./Provider";

const useStore = () => {
  return React.useContext(ReactReduxContext).store;
};

export default useStore;
