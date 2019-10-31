import React from 'react';
import ReactDom from 'react-dom';
import App from "./components/app";

//render обрабатывает элемент, не компонент!
ReactDom.render(<App/>, document.getElementById('root'));
