import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from './HoCs/Errors/WithErrorBoundary';
import { ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import { Provider } from 'react-redux';
import { store } from './StateManagement/redux/store';

const artistsQL = new HttpLink({
  uri: 'https://9ee7-102-70-3-142.ngrok-free.app/api/artistql',
})
const genreQL = new HttpLink({
  uri: 'https://9ee7-102-70-3-142.ngrok-free.app/api/genreql',
})
const albumsQL = new HttpLink({
  uri: 'https://9ee7-102-70-3-142.ngrok-free.app/api/albumql',
})
const client = new ApolloClient({
  link: ApolloLink.from([artistsQL, genreQL,albumsQL])
  ,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
     <ApolloProvider client={client}>
      <ErrorBoundary>
       <Provider store={store}>
           <App />
        </Provider>
      </ErrorBoundary>        
      </ApolloProvider>
    </BrowserRouter>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
