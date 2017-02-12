import React from 'react';
import request from 'superagent';
import Title from 'components/widgets/blog/elements/Title';
import TextBox from 'components/widgets/blog/elements/TextBox';
import { Container } from 'semantic-ui-react';
import { ENDPOINT as url } from 'constants/ApiUrl';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { about: {} };
  }

  componentDidMount() {
    this.fetchAbout();
  }

  fetchAbout() {
    request.get(
      `${url}/about`,
      {},
      (err, res) => {
        if (!err) {
          this.setState({ about: res.body });
        }
      }
    );
  }

  render() {
    const { title, text } = this.state.about;

    return (
      <Container text>
        <Title title={title} />
        <TextBox text={text} />
      </Container>
    );
  }
}

export default About;
