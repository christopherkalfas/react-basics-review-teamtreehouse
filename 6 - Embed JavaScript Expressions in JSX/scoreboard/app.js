const title = 'First React Element!';
const desc = 'I just learned how to create a React node and render it into the DOM.';
const myTitleId = 'main-title'
const name = 'Chris'
const header = (
<header>
<h1 id={myTitleId}>{name}'s {title}</h1>
<p className='main-desc'>{desc}</p>
<input value={10 *20} />
</header>
);

ReactDOM.render(
  header,
  document.getElementById('root')
);