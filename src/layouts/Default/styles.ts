import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to top, var(--color-primary) 2%, var(--color-primary-lighter) 173%);

  padding: 40px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .navigation-links,
  .navigation-links-active {
    color: var(--text-color);
    text-decoration: none;
    font-size: 17px;
    font-weight: 500;
    transition: var(--transition);
    position: relative;
  }

  .navigation-links-active:before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--text-color);
    transition: all var(--transition);
    width: 100%;
  }

  .navigation-links:before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--text-color);
    visibility: hidden;
    transition: all var(--transition);
  }

  .navigation-links:hover:before {
    visibility: visible;
    width: 100%;
  }

  .navigation-links:hover {
    transition: var(--transition);
  }

  @media (min-width: 890px) {
  background: linear-gradient(to top, var(--color-primary) 2%, var(--color-primary-lighter) 173%);
  }

  @media (min-width: 1024px) {
    padding: 40px 130px;
  }
`;

export const Main = styled.div`
  /* header / padding values */
  height: calc(100vh - 80px - 80px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    /* header / padding values */
    height: calc(100vh - 115px - 80px);
  }
`;
