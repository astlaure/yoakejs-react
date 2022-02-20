import express from 'express';
import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import ReactDOMServer from 'react-dom/server';
import App from './App';
import Layout from './core/ssr/Layout';

const app = express();

app.use(express.static('public', { index: false }));

app.get('/', (req, res) => {
  const jsx = (
    <Layout>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </Layout>
  );
  res.send(`<!DOCTYPE html>${ReactDOMServer.renderToString(jsx)}`);
});

app.listen(3000, () => {});
