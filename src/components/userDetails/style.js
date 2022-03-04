import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    heigth: 100px;
    display: flex;
    align-items: center; 
    flex-direction: column
`

export const Name = styled.h1`
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-weigth:700;
    color: #444;
`
export const UserName = styled.h2`
width: 100%;
text-align: center;
font-size: 13px;
font-weigth:500;
color: #777;
padding: 5px;
`
export const Description = styled.p`
    width: 300px;
    heigth: 30px;
    margin: 10px 0;
    font-size: 12px;
    text-align: justify;
    color: #777;
    line-heigth: 1.3;
    overflow: hidden;


    @media (max-width){
        width: 250px;
    }
`
