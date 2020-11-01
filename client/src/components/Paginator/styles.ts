import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: center;
  height: 60px;
  font-size: 14px;

  div + div {
    margin-left: 5px;
  }

  .disabled {
    color: var(--disabled);
  }

  .previous {
    width: 25px;
    height: 25px;
    text-align: center;
    cursor: pointer;
    border-radius: 2px;
    border: 1px solid var(--text-color);
  }

  .current {
    width: 25px;
    height: 25px;
    text-align: center;
    cursor: pointer;
    border-radius: 50%;
    background: var(--grey);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .page {
    width: 25px;
    height: 25px;
    text-align: center;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    transition: var(--transition-slow);

    &:hover {
      background-color: var(--grey);
      transition: var(--transition-slow);
    }
  }

  .page-disabled {
    cursor: not-allowed !important;
  }
`;
