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
import { graphQLAlbumClient, graphQLArtistClient, graphQLGenreClient, graphQLSongClient } from './Data/DataSource/GraphQL/Client/client';




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
     <ApolloProvider client={graphQLAlbumClient}>
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
