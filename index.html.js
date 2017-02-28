export default (initialMarkup, initialData) =>  {
  console.log(initialMarkup, initialData);
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
    </head>
    <body>
      <div id="root">${initialMarkup}</div>
      <script>
        window.__INITIAL_DATA__ = ${JSON.stringify(initialData)};
      </script>
      <script src="/app.js" charset="utf-8"></script>
    </body>
    </html>
  `;
};
