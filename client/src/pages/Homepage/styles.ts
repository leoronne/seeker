import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

export const SearchIcon = styled(FiSearch)`
  width: 15px;
  height: 15px;
`;

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 128px);
`;

export const Content = styled.div`
  padding: 15px;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 450px) {
    padding: 50px;
  }
`;

export const Form = styled.form`
  width: 100%;

  border-radius: var(--border-radius);
  background-color: white;
  box-shadow: var(--box-shadow);

  padding: 40px 30px 30px 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  > div + div {
    margin-top: 15px;
  }
`;

export const Row = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  button {
    margin-left: 20px;
    border-radius: 50%;
  }

  .checkbox-span {
    font-size: 14px;
    color: var(--text-color);
  }
`;
