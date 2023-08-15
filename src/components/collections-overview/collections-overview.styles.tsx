import styled from 'styled-components';

export const CollectionsOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1em;
    row-gap: 1em;
  }
`;