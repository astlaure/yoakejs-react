import React from 'react';

export interface Props {
  children: React.ReactElement;
}

function IndexHtml(props: Props): React.ReactElement {
  const { children } = props;
  return (
    <html lang="en">
      <head>
        <base href="/" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>YoakeJS</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Poppins:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="css/app.css" />
      </head>
      <body>

        <div id="root">{children}</div>

        <script src="js/app.js" />
      </body>
    </html>
  );
}

export default IndexHtml;
