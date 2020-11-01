import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  padding: 40px 10px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 490px) {
    padding: 40px;
  }

  @media (min-width: 1024px) {
    padding: 40px 130px;
  }

  @media (min-width: 1366px) {
    height: 100%;
  }
`;

export const Main = styled.div`
  height: 100%;
  /* height: calc(100vh - 128px); */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
