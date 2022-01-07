import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const SearchAndMenu = () => {
  return (
    <ActionGroup>
      <button>
        <Search size={24} />
      </button>
      <button>
        <Menu size={24} />
      </button>
    </ActionGroup>
  )
}

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <SearchAndMenu />
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <TopLeftMenu>
          <SearchAndMenu />
        </TopLeftMenu>
        <Logo />
        <TopRightMenu>
          <Button>SUBSCRIBE</Button>
          <AlreadySubscribed href="/subscribed">Already a subscriber?</AlreadySubscribed>
        </TopRightMenu>
      </MainHeader>
    </header>
  );
};

const AlreadySubscribed = styled.a`
  font-weight: var(--font-weight-normal);
  font-style: italic;
  text-decoration: underline;
  text-underline-offset: 1px;
`;

const TopLeftMenu = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: revert;
  }
`

const TopRightMenu = styled.div`
  display: none;
  text-align: center;

  @media ${QUERIES.laptopAndUp} {
    display: revert;
  }
`

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    justify-content: space-between;
  }
`;

export default Header;
