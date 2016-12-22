const DOM = React.DOM;

const TextBox = ({ text }) => (
  DOM.span(null, `${text}`)
);

TextBox.propTypes = {
  text: React.PropTypes.string
}

TextBox.defaultProps = {
  text: 'You can add some text'
}

ReactDOM.render(
  React.createElement(TextBox, { text: 'Sample string' }),
  document.getElementById('text')
);
