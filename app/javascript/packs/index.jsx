// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from '../components/App'
import manageAnimals from '../reducers/manageAnimals'
import configureStore, { history } from '../store/configureStore'

const store = createStore(manageAnimals)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App history={history} />
    </Provider>,
    document.body.appendChild(document.createElement("div"))
  );
})
