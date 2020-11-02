import styled, { css } from 'styled-components';
import { FiArrowLeft, FiEdit, FiHeart, FiSave } from 'react-icons/fi';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { MdCancel } from 'react-icons/md';

const iconCss = css`
  width: 15px;
  height: 15px;

  color: var(--color-primary);
  cursor: pointer;
`;

export const ReturnIcon = styled(FiArrowLeft)`
  width: 20px;
  height: 20px;

  color: var(--color-primary);
  cursor: pointer;
`;

export const LinkIcon = styled(BsBoxArrowUpRight)`
  ${iconCss}
`;

export const EditIcon = styled(FiEdit)`
  ${iconCss}
`;

export const CancelIcon = styled(MdCancel)`
  ${iconCss}
`;

export const SaveIcon = styled(FiSave)`
  ${iconCss}
`;

export const LikeIcon = styled(FiHeart)<{ fillcolor: string; strokecolor: string }>`
  width: 15px;
  height: 15px;

  cursor: pointer;

  color: ${props => (props.strokecolor ? `${props.strokecolor}` : 'var(--color-primary)')};
  fill: ${props => (props.fillcolor ? `${props.fillcolor}` : 'var(--color-primary)')};
`;

export const Container = styled.div`
  padding: 15px;

  width: 100%;
  height: 100%;

  margin-top: 30px;

  border-radius: var(--border-radius);
  background-color: white;
  box-shadow: var(--box-shadow);

  color: var(--text-color);

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

  @media (min-width: 350px) {
    height: auto;
  }
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 35px;

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

  margin-top: 20px;

  padding: 20px;

  width: 100%;

  .field {
    width: 100%;
  }

  .field + .field {
    margin-top: 25px;
  }

  @media (min-width: 868px) {
    padding: 50px;
    display: grid;
    flex-direction: row;
    grid-template-columns: repeat(auto-fill, minmax(35%, 1fr));
    grid-gap: 25px;

    .field + .field {
      margin-top: 0;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  button {
    min-width: 150px;
  }

  .bio {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    position: relative;

    img {
      max-width: 240px;
      border-radius: var(--border-radius);
    }
    p {
      font-size: 17px;
      margin-top: 25px;
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
  }

  @media (min-width: 686px) {
    .bio {
      flex-direction: row;
      p {
        margin-top: 0;
        margin-left: 25px;
      }
    }
  }

  @media (min-width: 1366px) {
    height: 100%;
  }
`;
