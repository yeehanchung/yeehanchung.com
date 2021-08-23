import styled from 'styled-components';

export const TopicTag = styled.h2`
  /* color: ${(props) => props.theme.colors.font}; */
  color: var(--font-color-topic-header);
  /* border-bottom: 1px solid #f3f3f3; */
  /* border-bottom: 1px solid #7d7d7d; */
  display: flex;
  align-items: center;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0.3rem;
  line-height: 1.6;
  font-size: 1rem;
  /* padding-bottom: 0.25rem; */
  /* line-height: 1; */
  /* font-size: 72pt; */
  /* display: inline-block; */
  /* text-decoration: underline; */
  /* border: 1px solid red; */
  /* margin: 10px; */
  /* text-align: center; */

  /* margin-left: 0; */
  /* margin-right: 0; */
  /* margin-top: 1.6rem; */
  /* padding-bottom: 0; */
  /* padding-left: 0;
  padding-right: 0;
  padding-top: 0; */

  @media ${(props) => props.theme.breakpoints.mobile} {
    /* margin-top: 1.6rem; */
  }
`;
