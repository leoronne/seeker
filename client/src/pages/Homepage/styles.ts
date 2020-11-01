import styled from 'styled-components';
import { FiSearch, FiHeart } from 'react-icons/fi';
import { BsBoxArrowUpRight } from 'react-icons/bs';

export const LikeIcon = styled(FiHeart)<{ fillColor: string; strokeColor: string }>`
  width: 15px;
  height: 15px;

  cursor: pointer;

  color: ${props => (props.strokeColor ? `${props.strokeColor}` : 'var(--color-primary)')};
  fill: ${props => (props.fillColor ? `${props.fillColor}` : 'var(--color-primary)')};
`;

export const LinkIcon = styled(BsBoxArrowUpRight)`
  width: 15px;
  height: 15px;

  color: var(--color-primary);
  cursor: pointer;
`;

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

  .characters-container {
    height: 100%;
    width: 100%;
    overflow-y: auto;

    padding: 15px;

    div + div {
      margin-top: 15px !important;
    }
  }
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

export const CharacterCard = styled.div`
  width: 100%;

  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: var(--border-radius);

  box-shadow: var(--box-shadow);

  position: relative;

  .left {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    position: relative;
  }

  .right {
    margin-right: 15px;

    height: 60px;

    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    flex-direction: column;

    a,
    .link-button {
      width: 25px;
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;

      transition: background var(--transition-slow);

      border-radius: 50%;

      &:hover {
        background: var(--grey);

        transition: background var(--transition-slow);
      }
    }
  }

  a {
    height: 100%;

    display: flex;
    align-items: center;
  }

  img {
    max-width: 50px;
    max-height: 50px;

    border-radius: 50%;
  }

  .info {
    margin-left: 25px;
    max-width: 250px;

    p {
      font-size: 14px;
      color: var(--text-color);

      strong {
        color: var(--color-primary-dark);
        font-size: 18px;
      }

      &.publisher {
        max-width: 80px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
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

export const PaginationArea = styled.div`
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
