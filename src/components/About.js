import React, { PropTypes } from 'react';
import Title from 'components/widgets/blog/elements/Title';
import TextBox from 'components/widgets/blog/elements/TextBox';
import { Container } from 'semantic-ui-react';

const About = ({title, text}) => (
  <Container text >
    <Title title={title} />
    <TextBox text={text} />
  </Container>
);

About.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
};

export default About;
