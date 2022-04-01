import styled from "styled-components";
import { keyframes } from "styled-components";

export const Animated = keyframes`

    from {
        opacity: 0;
        transform: translateX(550px);
    }

    to {
        opacity: 1;
        transform: translateX(0px);
    }

`

export const AnimatedEmpty = keyframes`

    from {
        opacity: 0;
        transform: scale(0)
    }

    to {
        opacity: 1;
        transform: scale(1)
    }

`


export const Subtotal = styled.div`

    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #333;
    border-top: 5px solid #ededef;
    color: #ededef;


    h1 {
        font-size: 20px;
        font-weight: 400;
    }

`

export const ContainerEmpty = styled.div`

    width: 100%;
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: ${AnimatedEmpty} 0.3s;

    h2 {
        color: #333;
        font-size: 25px;
    }
    button {
        width: 150px;
        height: 30px;
        border: none;
        border-radius: 10px;
        background-color: #333;
        font-size: 15px;
        color: #ededef;
        transition: 0.2s;

        :hover {
            background-color: #6b6b6b;
        }
    }
`


export const ProductList = styled.div`

    width: 100%;
    height: 100%;
    max-width: 425px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
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
    /* height: 100%; */
    display: flex;
    align-items: center;
    margin: 0 auto;
    position: relative;

    svg {
        position: absolute;
        top: 10px;
        right: 0;
        font-size: 20px;
        font-weight: 700;
        color: #ededef;
        background-color: #333;
        border-radius: 50%;
        cursor: pointer;
        transition: 0.2s;

        :hover {
            transform: scale(1.2);
            color: red;
            background-color: transparent;
        }
    }

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
            height: 35px;
            padding: 0px 5px;
            background-color: #0071e3;
            color: #ededef;
            font-weight: 700;
            border-radius: 1.5rem;
            border: none;
            font-size: 12px;

            @media (min-width: 1200px) {
                font-size: 15px;
            }
        }
    }

`