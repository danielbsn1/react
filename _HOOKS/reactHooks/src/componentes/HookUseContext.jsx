import { createContext } from "react";

export const SomeContext = createContext();

const HookUseContext = () => {


    const contextValue = "texting context";

  return (
    <SomeContext.Provider value={{ name: "John", age: 30 }}>
      <div>Componente que usa o contexto</div>
    </SomeContext.Provider>
  );
};