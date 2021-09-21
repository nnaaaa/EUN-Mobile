import React from "react";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import Main from "./main";
import { store } from "./src/app/store";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Main />
      </NativeBaseProvider>
    </Provider>
  );
}
