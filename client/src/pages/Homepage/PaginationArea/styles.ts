import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: calc(100%);

  margin-top: 15px;

  .view {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    font-size: 14px;
    margin: 0 !important;
  }
`;
