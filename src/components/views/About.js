import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/widgets/blog/elements/Title';
import TextBox from 'components/widgets/blog/elements/TextBox';
import { Container } from 'semantic-ui-react';
import Helmet from 'react-helmet';

const About = ({title, text}) => (
  <div>
    <Container text >
      <Title title={title} />
      <TextBox text={text} />
    </Container>
    <Helmet title={title} />
  </div>
);

About.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
};

export default About;
