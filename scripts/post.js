import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import PostAPI from './Components/PostAPI';

// Set Client
const client = new ApolloClient({
      uri: 'https://trackpatch.myshopify.com/api/2020-10/graphql.json',
      headers: {
            "X-Shopify-Storefront-Access-Token": '3907c861d058700a3b2a1e3191232d54',
            'Content-Type': 'application/json'
      }

      
});

const rootEl = document.getElementById("post");
const url = window.location.pathname.split("/");
const blogHandle = url[2];
const postHandle = url[3];

ReactDOM.render(
      <ApolloProvider client={client}>

        <PostAPI blogHandle={blogHandle} postHandle={postHandle}  />
        
      </ApolloProvider>
       ,
      rootEl
);