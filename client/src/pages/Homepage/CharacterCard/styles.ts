import styled from 'styled-components';
import { FiHeart } from 'react-icons/fi';
import { BsBoxArrowUpRight } from 'react-icons/bs';

export const LikeIcon = styled(FiHeart)<{ fillcolor: string; strokecolor: string }>`
  width: 15px;
  height: 15px;

  cursor: pointer;

  color: ${props => (props.strokecolor ? `${props.strokecolor}` : 'var(--color-primary)')};
  fill: ${props => (props.fillcolor ? `${props.fillcolor}` : 'var(--color-primary)')};
`;

export const LinkIcon = styled(BsBoxArrowUpRight)`
  width: 15px;
  height: 15px;

  color: var(--color-primary);
  cursor: pointer;
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;

  padding: 15px;

  article + article {
    margin-top: 15px !important;
  }
`;

export const Content = styled.article`
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
