import styled from "styled-components";
import header from '../assets/header.png';

export const HomeStyle = styled.section`
    * {
        font-family: 'Poppins', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
        scroll-padding-top: 4rem;
        list-style: none;
        text-decoration: none;
    }
    img {
        width: 100%;
    }
    body {
        color: #dbdbdb;
        background: #000000;
    }
    section {
        padding: 4.5rem 0 3rem;
    }
    .container {
        max-width: 1068px;
        margin: 0 auto;
    }
    .home {
        margin-top: 5rem;
        background-color: #000000;
        background: url(${header});
        background-size: cover;
        background-position: center;
        height: 440px;
        border-radius: 1.5rem;
        display: flex;
        align-items: center;
    }
    .home-text {
        padding-left: 35px;
    }
    .home-text h1 {
        color: #fff;
        font-size: 2rem;
        margin-bottom: 1rem;
    }
    .about {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
        gap: 2rem;
    }
    .about-img img {
        border-radius: 2rem 0 2rem 2rem;
    }
    .about-text span {
        font-size: 1rem;
        text-transform: uppercase;
        font-weight: 500;
        color: #0bc4ca;
    }
    .about-text h2 {
        font-size: 1.7rem;
    }
    .about-text p {
        font-size: 0.938rem;
        margin: 1rem 0;
    }
    .about-text ul {
        margin-bottom: 4%;
    }
    .about-img2 img {
        border-radius: 3rem;
        width: 100%;
    }
    .about-text2 {
        padding-top: 8%;
    }
    .about-text2 span {
        font-size: 1rem;
        font-weight: 500;
        color: #0bc4ca;
    }
    .about-text2 h2 {
        font-size: 1.7rem;
    }
    .about-text2 p {
        font-size: 0.938rem;
        margin: 1rem 0;
    }
    .acoes {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 2.4rem;
    }
    .acoes .box {
        padding: 20px;
        box-shadow: 2px 2px 18px rgb(14 52 54 / 15%);
        text-align: center;
        border-radius: 2rem;
    }
    .acoes .box:hover {
        background: #0bc4ca;
        color: #fff;
        transition: 0.4s all linear;
    }
    .acoes .box .bx {
        padding: 10px;
        border-radius: 50%;
        background: #f6f6fe;
        color: #2288ff;
        font-size: 20px;
    }
    .sistema-recompensa {
        text-align: center;
    }
    .sistema-recompensa h2 {
        font-size: 1.7rem;
        padding-top: 4%;
    }
    .sistema-recompensa p {
        font-size: 0.938rem;
        padding-bottom: 4%;
    }
    .sistema-recompensa span {
        font-size: 1rem;
        font-weight: 500;
        color: #0bc4ca;
    }
    .pontos-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 3rem;
        padding: 0 50px;
    }
    .pontos-container .box {
        padding: 10px;
        border-radius: 1rem;
        box-shadow: 2px 2px 18px rgb(14 52 54 / 15%);
    }
    .pontos-container .box:hover {
        transform: translateY(-10px);
        transition: 0.5s;
    }
    .pontos-container .box img {
        border-radius: 1rem;
        height: 220px;
        object-fit: cover;
        object-position: center;
    }
    .pontos-container .text h3 {
        font-size: 1rem;
        font-weight: 600;
        float: right;
    }
    .pontos-container .box .content {
        display: flex;
        justify-content: space-between;
        margin-top: 2rem;
    }
`;