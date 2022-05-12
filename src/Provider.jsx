import React from "react";

export const ReactReduxContext = React.createContext(null);

const ReactRedux = {
  Provider: ({ store, children }) => {
    return (
      <ReactReduxContext.Provider value={{ store }}>
        {children}
      </ReactReduxContext.Provider>
    );
  },
};

export default ReactRedux;
