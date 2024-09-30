import styled from 'styled-components';

export const NavStyle = styled.section`
  header {
    display: block;
    width: 100%;
    background: #000000;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: center; 
    padding: 20px 35px;
    max-width: 1200px; 
    margin: 0 auto; 
  }

  .logo {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    font-size: 1rem;
    font-weight: 700;
    color: #0bc4ca;
    text-transform: uppercase;
    margin-right: auto; 
  }

  .logo .bx {
    font-size: 24px;
    color: #ececec;
  }

  .navbar {
    display: flex;
    align-items: center; 
  }

  .navbar a {
    padding: 8px 17px;
    color: #c4c4c4;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 500;
    margin: 0 10px; 
  }

  .navbar a:hover {
    color: #0bc4ca;
  }

  #menu-icon {
    font-size: 24px;
    cursor: pointer;
    display: none;
  }

  #menu {
    display: none;
  }

  .btn {
    padding: 8px 22px;
    background: #0bc4ca;
    color: #fff;
    border-radius: 5rem;
    margin-left: 20px; 
  }

  .btn:hover {
    color: #131313;
  }

  @media (max-width: 768px) {
    .nav {
      padding: 10px 0;
      justify-content: space-between; 
    }

    #menu-icon {
      display: initial;
    }

    .navbar {
      position: absolute;
      top: 100%;
      right: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      background: #444444;
      text-align: center;
      clip-path: circle(0% at 100% 1%);
      transition: 0.6s;
    }

    .navbar a {
      display: block;
      margin: 1rem;
      padding: 20px;
      color: #fff;
    }

    .navbar a:hover {
      background: #2288ff;
      color: #fff;
      transition: 0.2s;
    }

    #menu:checked ~ .navbar {
      clip-path: circle(144% at 100% 1%);
    }
  }
`;