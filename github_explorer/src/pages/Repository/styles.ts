import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: all 0.2s;

    svg {
      margin-right: 5px;
    }

    &:hover {
      color: #666;
    }

    &:hover svg {
      transform: translateX(-5px);
    }
    cursor: pointer;
  }
`;

export const RepositoryInfo = styled.section`
  header {
    display: flex;
    align-items: center;
    margin-top: 80px;
    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
  }
  ul {
    display: flex;
    margin-top: 40px;
    list-style: none;

    li {
      & + li {
        margin-left: 80px;
      }

      display: flex;
      flex-direction: column;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }
      span {
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.section`
  margin-top: 80px;
  max-width: 700px;
  a {
    display: flex;
    background: #fff;
    width: 100%;
    border-radius: 5px;
    padding: 24px;
    text-decoration: none;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
