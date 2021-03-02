import React from 'react';
import AppBar from '../AppBar';
import Container from '../Container';

const Layout = ({ children }) => (
  <>
    <AppBar text="React. HomeWork-2.1. Feedback." />
    <Container>{children}</Container>
    <AppBar text="" />
  </>
);

export default Layout;
