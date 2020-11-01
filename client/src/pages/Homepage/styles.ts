import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

export const SearchIcon = styled(FiSearch)`
  width: 15px;
  height: 15px;
`;

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 90px);
`;

export const Content = styled.div`
  padding: 20px;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

export const Main = styled.main`
  width: 100%;
  height: 100%;

  overflow-y: auto;

  margin-top: 20px;

  border-radius: var(--border-radius);
  background-color: white;
  box-shadow: var(--box-shadow);

  padding: 15px;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  flex-direction: column;

  position: relative;
`;

export const Header = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  flex-direction: column;

  position: relative;

  .results {
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column;

    p {
      color: var(--text-color);
      font-size: 14px;
      strong {
        color: var(--color-primary-dark);
      }
    }

    p + p {
      margin-top: 5px;
    }
  }
`;

export const Row = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    margin-left: 20px;
    border-radius: 50%;
  }

  .checkbox-span {
    font-size: 14px;
    color: var(--text-color);
  }
`;
