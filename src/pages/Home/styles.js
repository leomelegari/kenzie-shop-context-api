import styled, { keyframes } from "styled-components";

export const Animated = keyframes`

    from {
        opacity: 0;
        transform: translateX(-550px);
    }

    to {
        opacity: 1;
        transform: translateX(0px);
    }

`

export const Container = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;



`

export const ProductList = styled.div`

    width: 100%;
    max-width: 425px;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${Animated} 0.5s;
    /* justify-content: center; */

    @media (min-width: 768px) {
        max-width: 768px;
        flex-direction: row;
        flex-wrap: wrap;
    }

    @media (min-width: 1200px) {
        max-width: 1200px;
        flex-direction: row;
        flex-wrap: wrap;
    }

`

export const ContainerProduct = styled.div`

    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;

    @media (min-width: 768px) {
        width: 200px;
        flex-direction: row;
        flex-wrap: wrap;
    }
    @media (min-width: 1200px) {
        width: 400px;
        padding: 25px;
        flex-direction: row;
        flex-wrap: wrap;
        font-size: 19px;
    }

    .image {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        @media (min-width: 768px) {
            justify-content: center;
        }

        img {
            width: 150px;

            @media (min-width: 1200px) {
                width: 250px;
            }
        }
    }

    .info {
        width: 100%;
        height: 180px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        
        span:nth-child(1) {
            font-weight: 700;
        }
        span:nth-child(2) {
            font-weight: 300;
        }

        button {
            width: 100%;
            height: 40px;
            padding: 0px 5px;
            background-color: #333;
            color: #ededef;
            font-weight: 700;
            border-radius: 1.5rem;
            border: none;
            font-size: 12px;
            transition: 0.3s;

            :hover {
                background-color: #6b6b6b;
            }

            @media (min-width: 1200px) {
                font-size: 15px;
            }
        }
    }

`