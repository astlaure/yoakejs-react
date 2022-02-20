import express from 'express';
import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import ReactDOMServer from 'react-dom/server';
import IndexHtml from 'server/IndexHtml';
import App from 'src/App';

const app = express();

app.use(express.static('public', { index: false }));

app.get('*', (req, res) => {
  const jsx = (
    <IndexHtml>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </IndexHtml>
  );
  res.send(`<!DOCTYPE html>${ReactDOMServer.renderToString(jsx)}`);
});

app.listen(3000, () => {});
