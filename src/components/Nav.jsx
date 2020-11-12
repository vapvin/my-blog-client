import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 25px 150px 0;
`

const Navigation = styled.nav`
  max-width: 1470px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.h1`
  width: 150px;
  height: 37px;
  font-size: 28px;
  font-weight: 600; 
  color: #fff;
`

const Point = styled.span`
  color: red;
`;

const Ul = styled.ul`
  width: 500px;
  display: flex;
  align-items:center;
  justify-content: flex-end;
  height: 100%;
`

const Li = styled.li`
  width: auto;
  height: 100%;
  display: flex;
  align-items:center;
  justify-content: center;
  margin-left: 50px;
`

const StyleLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: 600;
  &:hover {
    text-decoration: none;
    color: #fff;
  }
`;

const Nav = () => (
    <Header>
      <Navigation>
        <Logo>BLACK HA<Point>T</Point></Logo>
        <Ul>
          <Li>
            <StyleLink to="/">Home</StyleLink>
          </Li>
          <Li>
            <StyleLink to="/blog">Blog</StyleLink>
          </Li>
          <Li>
            <StyleLink to="/portfolio">PortFolio</StyleLink>
          </Li>
          <Li>
            <StyleLink to="/contact">Contact</StyleLink>
          </Li>
        </Ul>
      </Navigation>
    </Header>
)

export default Nav;
