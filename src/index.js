import Heading from './components/heading/heading';
import HelloWorldButton from "./components/hello-world-button/hello-world-button";

//import _ from 'lodash';
import React from 'react';

const heading = new Heading();
heading.render('index');

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

console.log(process.env.NODE_ENV);

//helloWorldButton.false();
