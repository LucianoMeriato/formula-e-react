import styled from "styled-components";

const colors = {
    primary: '#0bc4ca',
    hover: '#3492fd',
    background: '#000000', 
    text: '#8a8a8a',
    boxShadow: 'rgba(0, 0, 0, 0.1)',
};

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    background-color: ${colors.background};
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px ${colors.boxShadow};
    width: 300px;
    margin: auto;
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