import React, { PropTypes } from 'react';
import { Button, Segment, Header, Container } from 'semantic-ui-react';
import Link from 'components/elements/Link';
import history from 'helpers/history';

const MainLayout = ({children}) => (
  <Container>
    <Logo />
    <GoBackButton />
    {children}
    <Footer />
  </Container>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

const GoBackButton = () => (
  <Button onClick={() => history.goBack()}>Back</Button>
);

const Logo = () => (
  <Segment>
    <Header>
      <Link to='/'>SupaBlog</Link>
    </Header>
  </Segment>
);

const Footer = () => (
  <Segment>
    <Link to='/about'>About us</Link>
  </Segment>
);

export default MainLayout;
