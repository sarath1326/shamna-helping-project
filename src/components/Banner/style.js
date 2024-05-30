import styledComponents from "styled-components";
 
export const Container = styledComponents.div`

background-image: url('https://external-preview.redd.it/OvxztWPgCqBhYIzx7AIVhpcVpxUfnJwhOGupoik7L-k.jpg?width=640&crop=smart&auto=webp&s=12d86344bb43d08396fac8c7d2eb87a3f14c6dcc');
    height: 100vh;
    width: 100%;
    background-size: cover;
    position:relative ;
    &:before {
        content:"";
        position: absolute;
        width: 100%;
        height: 100%;
        background: black;
        opacity: 0.5;    
    }
    & > div {
        position: relative;
    }

    .button {
        display:flex;
        justify-content: flex-end;
        padding:20px;
        color: white;
        marginLeft: 20px;
        backgroundColor: red;
    }

    .logo {
        position: absolute;
        left: 50px;
        width: 100px;
        padding: 20px 50px;
    }
    
    .title {
        color: yellow;
        display:flex;
        flex-direction: column;
        align-items: center;
        padding-top: 150px;
        font-size: 50px; 
        font-weight: bold;
    }

    .subTitle1 {
        color: yellow;
        display:flex;
        flex-direction: column;
        align-items: center;  
        padding-top: 10px;
        font-size: 25px;
    }

    .subTitle2 {
        color: yellow;
        display: flex;
        flex-direction: column;
        align-items: center;        
        font-size: 20px;
        padding-top: 20px;  
    }

    .buttons {
        display: flex;
        justify-content: center;
        padding-top: 20px;
    }

    .b1 {
        width: 500px;
        height: 50px;
        display: flex;
        justify-content: flex-start;
        padding-top: 10px;
    }

    .b2 {
        background-color: red;
        color: white;
        width: 100px;
        height: 50px;
    }
`;
