import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import { bind } from 'lodash/function';
import { range } from 'lodash/util';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activePage: '1' };
    this.handlePageClick = bind(this.handlePageClick, this);
  }

  handlePageClick(e, { name }) {
    this.setState({ activePage: name });
    this.props.changePage(Number(name));
  }

  render() {
    const { activePage } = this.state;
    const pagesNumbers = range(1, this.props.pagesCount + 1);

    return (
      <Menu pagination>
        {
          pagesNumbers.map(pageNumber =>
            <Menu.Item
              key={pageNumber}
              name={pageNumber.toString()}
              active={activePage === pageNumber.toString()}
              onClick={this.handlePageClick}
            />
          )
        }
      </Menu>
    );
  }
}

Pagination.propTypes = {
  pagesCount: PropTypes.number,
  changePage: PropTypes.func
};

export default Pagination;
