import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
 

// Importation de la config dans le code afin de paramétrer l'authentification.
require('dotenv').config()
var domain = process.env.AUTH0_DOMAIN;
var clientid = process.env.AUTH0_CLIENT_ID;
var client = "dThgRmV2DHfJ1wSQ20vIw2M6sGDubxZE";
var domainName = "dev-7kvuudkt.us.auth0.com";
console.log(clientid, domain, client, domainName);

ReactDOM.render(
  <Auth0Provider
    domain = {domainName}
    clientId = {client}
    redirectUri = {window.location.origin}>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);



