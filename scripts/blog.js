import React from "react";
import ReactDOM from "react-dom";
import BlogAPI from "./Components/BlogAPI";

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

// Set Client
const client = new ApolloClient({
      uri: 'https://trackpatch.myshopify.com/api/2020-10/graphql.json',
      headers: {
            "X-Shopify-Storefront-Access-Token": '3907c861d058700a3b2a1e3191232d54',
            'Content-Type': 'application/json'
      }

      
});

const ALL_POSTS_QUREY = "blog_title:'Alerta Blog'";

const rootEl = document.getElementById("test");

ReactDOM.render(
      <ApolloProvider client={client}>
            
            <BlogAPI />
            
      </ApolloProvider>
       ,
      rootEl
);