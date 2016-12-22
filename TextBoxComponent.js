const DOM = React.DOM;

const TextBox = ({ text }) => (
  DOM.span(null, `${text}`)
);

ReactDOM.render(
  React.createElement(TextBox, { text: 'Sample string' }),
  document.getElementById('text')
);
