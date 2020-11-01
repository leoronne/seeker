import styled from 'styled-components';
import { FiArrowLeft, FiEdit, FiHeart } from 'react-icons/fi';
import { BsBoxArrowUpRight } from 'react-icons/bs';

export const ReturnIcon = styled(FiArrowLeft)`
  width: 20px;
  height: 20px;

  color: var(--color-primary);
  cursor: pointer;
`;

export const LinkIcon = styled(BsBoxArrowUpRight)`
  width: 15px;
  height: 15px;

  color: var(--color-primary);
  cursor: pointer;
`;

export const EditIcon = styled(FiEdit)`
  width: 15px;
  height: 15px;

  color: var(--color-primary);
  cursor: pointer;
`;

export const LikeIcon = styled(FiHeart)<{ fillColor: string; strokeColor: string }>`
  width: 15px;
  height: 15px;

  cursor: pointer;

  color: ${props => (props.strokeColor ? `${props.strokeColor}` : 'var(--color-primary)')};
  fill: ${props => (props.fillColor ? `${props.fillColor}` : 'var(--color-primary)')};
`;

export const Container = styled.div`
  padding: 15px;

  width: 100%;
  height: 100%;

  margin-top: 40px;

  border-radius: var(--border-radius);
  background-color: white;
  box-shadow: var(--box-shadow);

  color: var(--text-color);

  hr {
    margin: 15px 0;
    border: 1px solid var(--color-primary-lighter);
  }

  @media (min-width: 450px) {
    padding: 50px;
  }
`;

export const Header = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  position: relative;

  height: 60px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;

    transition: background var(--transition-slow);

    border-radius: 50%;

    &.link-button {
      margin-left: 5px;
      width: 25px;
      height: 25px;
    }

    &:hover {
      background: var(--grey);

      transition: background var(--transition-slow);
    }
  }

  h1 {
    font-size: 24px;
    color: var(--color-primary-dark);

    margin-left: 20px;
  }

  .header-right {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;

    flex-direction: column;

    height: 100%;

    .hover-button + .hover-button {
      margin-top: 5px;
    }

    .hover-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;

      cursor: pointer;

      transition: background var(--transition-slow);

      border-radius: 50%;

      &:hover {
        background: var(--grey);

        transition: background var(--transition-slow);
      }
    }
  }

  @media (min-width: 350px) {
    height: auto;
    .header-right {
      flex-direction: row;
      .hover-button + .hover-button {
        margin-top: 0;
        margin-left: 5px;
      }
    }
  }
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 35px;

  overflow-y: auto;

  @media (min-width: 1366px) {
    margin-top: 0px;
    height: 100%;
  }
`;

export const TableInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  width: 100%;

  margin-top: 25px;

  table {
    width: 100%;
    td {
      border: 1px solid var(--grey);
      padding: 5px;
      &.column-header {
        min-width: 150px;
      }
    }
    a {
      text-decoration: none;
      color: var(--color-primary-lighter);
      transition: color var(--transition-slow);

      &:hover {
        transition: color var(--transition-slow);
        color: var(--color-primary);
      }
    }
  }
  @media (min-width: 868px) {
    margin-top: 0;
  }
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .bio {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
      max-width: 240px;
    }
    p {
      margin-top: 25px;
    }
  }

  @media (min-width: 868px) {
    display: grid;
    flex-direction: row;
    grid-template-columns: repeat(auto-fill, minmax(47.5%, 1fr));
    grid-gap: 5%;
  }

  @media (min-width: 1366px) {
    .bio {
      flex-direction: row;
      p {
        margin-top: 0;
        margin-left: 25px;
      }
    }
  }
`;
