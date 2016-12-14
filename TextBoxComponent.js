const DOM = React.DOM;

const TextBox = ({ string }) => (
  DOM.span(null, `${string}`)
);

ReactDOM.render(
  React.createElement(TextBox, { string: 'Sample string' }),
  document.getElementById('str')
);
