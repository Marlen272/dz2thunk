
import React from 'react';
import store from '../src/page/store';
import {Provider} from "react-redux";
import RegistrationForm from "./page/RegistrationForm";

const App = () => {
  return (
      <Provider store={store}>
        <div>
          <h1>Форма регистрации</h1>
          <RegistrationForm/>
        </div>
      </Provider>
  );
};

export default App;
