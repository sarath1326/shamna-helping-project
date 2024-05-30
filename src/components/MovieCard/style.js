import styledComponents from "styled-components";
 
export const Container = styledComponents.div`
    
.movieCards1 {
    display: flex;   
    flex-wrap: wrap;
}

.movieCards2 {
    display: flex;
    padding-top: 10px;
}

.movieImage {
    height: 250px;
    width: 100%;
    object-fit: cover;
}

.movieCard { 
    background: #a19898;
    height: 370px;
    width: 220px;
    margin-left: 10px;
    font-size: 20px;
    font-weight: bold;
    border: solid;
    border-color: wheat;
}

.showBtn {
    background-color: yellow;
    margin-top: 10px;
    margin-left: 70px;
}

.show {
    margin-top: 10px;
    margin-left: 70px;
    background-color: yellow;
    }

`;

