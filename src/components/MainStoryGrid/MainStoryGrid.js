import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES } from '../../constants';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
    grid-template-columns: 2fr 1fr;
    gap: 48px 0;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';
    grid-template-columns: 1fr 0.8fr 0.6fr;
    gap: 16px 0;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    padding-right: 16px;
    margin-right: 16px;
    border-right: 1px solid var(--color-gray-500);
  }

  @media ${QUERIES.laptopAndUp} {
    margin-right: 16px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.tabletAndUp} {

  }

  @media ${QUERIES.laptopAndUp} {
    padding-right: 16px;
    border-right: 1px solid var(--color-gray-500);
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${QUERIES.laptopAndUp} {
    padding-left: 16px;
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;

  ${OpinionSection} & {
    @media ${QUERIES.tabletOnly} {
      flex-direction: row;
      gap: 32px;
    }
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.laptopAndUp} {

    border-top: 1px solid var(--color-gray-500);
    padding-top: 16px;
  }
`;

export default MainStoryGrid;
