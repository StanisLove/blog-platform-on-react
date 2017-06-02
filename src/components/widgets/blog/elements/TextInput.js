import PropTypes from 'prop-types';
import classNames from 'classnames';

const Text = ({ name, value, onChange, label, error }) => (
  <div className={classNames('ui field', { error })}>
    <label htmlFor={name}>{label}</label>
    <input
      name={name}
      className="ui input"
      id={name}
      type="text"
      value={value}
      onChange={onChange}
    />
  </div>
);

Text.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
};

export default Text;
