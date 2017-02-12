import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Form, Button, Icon } from 'semantic-ui-react';
import 'styles/search_form.css';

class SearchForm extends React.Component {
  handleSubmit(e, { formData }) {
    e.preventDefault();
    browserHistory.push(`/posts/${formData.blog}`);
  }

  render() {
    const blogNames = this.props.items.map(obj =>
      ({
        key: obj.id,
        text: obj.title,
        value: obj.id
      })
    );

    return (
      <Form
        onSubmit={this.handleSubmit}
        className='search-form'
      >
        <Form.Select
          name='blog'
          options={blogNames}
          search
        />
        <Button type='submit' icon className='search-button' >
          <Icon name='search' />
        </Button>
      </Form>
    );
  }
}

SearchForm.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string
      })
    })
  )
};

export default SearchForm;
