import styled from "styled-components";


export const Container = styled.div`

    width: 100%;
    height:100px;
    background-color: #333333;

    ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        list-style: none;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        height: 100%;
        padding: 0px 10px;

        li {
            color: #ededef;
            font-size: 35px;
            font-weight: 300;

            :nth-child(2) {
                font-size: 45px;
                cursor: pointer;
                transition: 0.2s;

                :hover {
                    transform: scale(1.2);
                }
                
            }

            :nth-child(1) {
                
                @media (min-width: 768px){
                    display: none;
                }
            }

            :nth-child(3) {
                @media (min-width: 768px) {
                    display: contents !important;
                    font-size: 20px;
                    font-weight: 200;
                }

                @media (min-width: 1200px) {
                    font-size: 30px;
                }
            }
            :nth-child(4) {
                cursor: pointer;
                
                div {
                    width: 18px;
                    height: 18px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background-color: #ededef;
                    position: absolute;
                    top: 50px;
                    font-size: 14px;
                    font-weight: 700;
                    color: #333333;
                    cursor: pointer;
                }
            }
        }
    }



`