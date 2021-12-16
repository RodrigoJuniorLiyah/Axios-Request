import styled from 'styled-components';

export const AxiosRequestStyle = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: #fafafa;
`;

export const Header = styled.div`
  flex: 1;
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  button {
    width: 180px;
    height: 40px;

    border: 1px solid #1976D2;
    border-radius: 5px;

    background: #FFF;

    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: #1976D2;
    font-weight: 400;

    cursor: pointer;

    transition: all ease 0.2s;
  }

  button:hover {
    box-shadow: 2px 2px 3px 0px;
    transform: scale(1.02);
  }
`;

export const Body = styled.div`
  flex: 5;

  width: 500px;
  height: 500px;

  display: flex;
  justify-content: center;
  align-items: center;

  .table {
    width: 500px;
    height: 500px;

    .header {
      height: 50px;
      display: flex;
      justify-content: space-around;
      align-items: center;

      background: #1976D2;

      p {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 14px;
        color: #FFF;
      }
    }
  }
`;