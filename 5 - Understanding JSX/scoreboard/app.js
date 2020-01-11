const title = <h1>My First React Element!</h1>

const desc = <p>Just did some more JSX!</p>

const header = React.createElement(
  'header',
  null,
  title,
  desc
);

ReactDOM.render(
  header,
  document.getElementById('root'),
  console.log(title)
);