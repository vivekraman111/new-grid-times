import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES } from '../../constants';

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <StoryLink href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </StoryLink>
  );
};

const StoryLink = styled.a`
  border-bottom: 1px solid var(--color-gray-500);
  padding-top: 16px;
  padding-bottom: 16px;

  &:first-child{
    padding-top: 0;
  }

  &:last-child{
    border-bottom: revert;
    padding-bottom: 0;
  }

  @media ${QUERIES.tabletOnly} {
    border-bottom: revert;
    padding-bottom: 0;
    padding-top: 0;
    flex: 1;
  }
`;

const Wrapper = styled.article`
  color: var(--color-gray-900);
  display: flex;
  flex-direction: row-reverse;
  gap: 16px;
  justify-content: space-between;

  @media ${QUERIES.tabletOnly} {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
