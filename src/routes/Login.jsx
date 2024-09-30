import styled from "styled-components";
import carro from '../assets/AbstractShape.png';

const colors = {
    primary: '#0bc4ca',
    hover: '#3492fd',
    background: 'rgba(255, 255, 255, 0.9)',
    text: '#8a8a8a',
    boxShadow: 'rgba(0, 0, 0, 0.1)',
};

const LoginWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr; 
    align-items: center;
    justify-content: center;
    height: 200vh; 
    padding: 16rem;
`;

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    background-color: ${colors.background};
    padding: 2rem;
    border-radius: 5px;
    box-shadow: 0 4px 8px ${colors.boxShadow};
    width: 350px;
    text-align: center;

    h2 {
        font-size: 1.4rem;
    }

    form {
        display: flex;
        flex-direction: column;

        input {
            border: 1px solid ${colors.text};
            padding: 10px;
            margin-bottom: 1rem;
            background: #ffffff;
        }

        .button {
            background-color: ${colors.primary};
            color: white;
            padding: 10px;
            border: none;
            cursor: pointer;

            &:hover {
                background-color: ${colors.hover};
            }
        }
    }
`;

const ImageContainer = styled.div`
    img {
        max-width: 90%; 
        height: auto;
        margin-left: 20px; 
    }
`;

const Login = () => {
    return (
        <LoginWrapper>
            <LoginContainer>
                <h2>Seja Bem-Vindo(a)!</h2>
                <form id="registro-form">
                    <label htmlFor="nome">Nome Completo</label>
                    <input type="text" name="nome" id="nome" minLength="6" placeholder="John Doe" required />

                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" placeholder="seuemail@gmail.com" required />

                    <label htmlFor="telefone">Telefone</label>
                    <input type="tel" name="telefone" id="telefone" placeholder="(11) 99999-6666" minLength="11" maxLength="11" required />

                    <label htmlFor="cpf">CPF</label>
                    <input type="text" name="cpf" id="cpf" placeholder="111.222.333-55" minLength="11" maxLength="11" required />

                    <input type="submit" value="Registrar" className="button" />
                </form>
            </LoginContainer>
            <ImageContainer>
                <img src={carro} alt="Login Illustration" />
            </ImageContainer>
        </LoginWrapper>
    );
};

export default Login;