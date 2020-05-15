import React from 'react';
import styled from "styled-components";
// Images
import atb from "../assets/img/atb.svg";
import atb_945  from "../assets/img/atb_945.svg";
import visa from "../assets/img/visa.png";
import mastercard from "../assets/img/mastercard.png";
import maestro from "../assets/img/maestro.png";
import electronVisa from "../assets/img/electron_visa.png";
import receipt from "../assets/img/receipt.svg";

function Payment() {

    return (
        <Container className="d-flex">
            <div className="price-block">
                <div className="price-header d-flex">
                    <div className="price-left">
                        <img src={atb} alt=""/>
                    </div>
                    <div className="price-right d-flex">
                        <img src={atb_945} alt=""/>
                    </div>
                </div>
                <div className="price-second-content">
                    <span>
                        ONLAYN ÖDƏNİŞ SƏHİFƏSİ
                    </span>
                </div>
                <div className="price-third-content">
                    <div className="d-flex">
                        <img src={receipt} alt=""/>
                        <span>Qaimə</span>
                    </div>
                    <ul className="price-list">
                        <li className="d-flex">
                            <span>Ödəyən</span>
                            <span>Həşimzadə Ramin</span>
                        </li>
                        <li className="d-flex">
                            <span>Mobil nömrə</span>
                            <span>+994 (50) 123 45 67</span>
                        </li>
                        <Divider/>
                        <li className="d-flex">
                            <span>Kimə ödənilir</span>
                            <span>Jumeyrah Hotel LLC</span>
                        </li>
                        <li className="d-flex">
                            <span>Təyinat</span>
                            <span>2 nəfərlik otaq (Kind Bed)</span>
                        </li>
                    </ul>
                </div>
                <div className="price-fourth-content d-flex">
                    <div className="price-left">
                        Məbləğ
                    </div>
                    <div className="price-right">
                        43.00 AZN
                    </div>
                </div>
                <div className="price-triangle"/>
                <div className="price-fifth-content">
                    <span>ÖDƏNİŞ NÖVLƏRİ</span>
                </div>
                <div className="price-sixth-content d-flex">
                    <img src={visa} alt=""/>
                    <img src={mastercard} alt=""/>
                    <img src={maestro} alt=""/>
                    <img src={electronVisa} alt=""/>
                </div>
                <div className="price-seventh-content">
                    <span>
                        Ödə düyməsinə basaraq yuxarıda göstərilən məlumatlarla tanış olduğumu təsdiq edirəm
                    </span>
                </div>
                <div className="price-eighth-content d-flex">
                    <a href="https://atb.az/ru/" target="_blank" rel="noopener noreferrer" className="d-flex">ÖDƏ</a>
                </div>
                <Divider/>
                <div className="price-ninth-content">
                    <span>
                        2020 | Azər Türk Bank tərəfindən təmin edilən 3D-Secure ödəmə xidmətləri
                    </span>
                </div>
            </div>
        </Container>
    );
}

const Container = styled.div.attrs({
    className: "app-css-container"
})`
    &.app-css-container {
        align-items: center;
        justify-content: center;
        background-color: grey;
        height: 100vh;
        overflow: auto;
        flex: 1;
        flex-wrap: wrap;
        padding: 1rem;
        .price-block {
            border-radius: 20px;
            background-color: #fff;
            width: 100%;
            max-width: 483px;
            padding: 30px 33px 12px;
        }
        .price-header {
            justify-content: space-between;
            margin-bottom: 23px;
            .price-left,
            .price-right {
                flex: 1;
            }
            .price-left {
                img {
                    max-width: 71px;
                }
            }
            .price-right {
                justify-content: flex-end;
                img {
                    max-width: 61px;
                    height: 26px;
                }
            }
        }
        .price-second-content {
            text-align: center;
            font-weight: 300;
            font-size: 20px;
            line-height: 23px;
            color: #7F7F7F;
            margin-bottom: 29px;
        }
        .price-third-content {
            width: 100%;
            border: 2px dashed #F3F3F3;
            border-bottom: none;
            padding: 18px 10px 13px;
            &>div:first-child {
                margin-bottom: 34px;
                img {
                width: 27px;
                height: 27px;
                margin-right: 14px;
                }
                span {
                    font-weight: 300;
                    font-size: 22px;
                    line-height: 26px;
                    color: #7F7F7F;
                }
            }
            .price-list {
                li {
                    margin: 8px 0;
                    padding: 5px 0;
                    justify-content: space-between;
                    span:first-child {
                        font-size: 14px;
                        line-height: 16px;
                        color: #7F7F7F;
                        flex: 1;
                    }
                    span:last-child {
                        font-weight: 600;
                        font-size: 14px;
                        line-height: 16px;
                        text-align: right;
                        color: #3E3E3E;
                        flex: 1;
                    }
                }
                li:last-child {
                    margin-bottom: 0;
                }
            }
        }
        .price-fourth-content {
            width: 100%;
            height: 60px;
            background-color: #F3F3F3;
            padding: 13px 10px 5px;
            align-items: center;
            justify-content: space-between;
            font-weight: 600;
            .price-left {
                font-size: 18px;
                line-height: 21px;
                color: #3E3E3E;
            }
            .price-right {
                font-size: 22px;
                line-height: 26px;
                font-feature-settings: 'pnum' on, 'lnum' on;
                color: #306D00;
            }
        }
        .price-triangle {
            width: 100%;
            height: 17px;
            background: linear-gradient(#F3F3F3 0%, transparent 0%), linear-gradient(135deg, #fff 33.33%, transparent 33.33%) 0 0%, #fff linear-gradient(45deg, #fff 33.33%, #F3F3F3 33.33%) 0 0%;
            background: -webkit-linear-gradient(#F3F3F3 0%, transparent 0%), -webkit-linear-gradient(135deg, #fff 33.33%, transparent 33.33%) 0 0%, #fff -webkit-linear-gradient(45deg, #fff 33.33%, #F3F3F3 33.33%) 0 0%;
            background-repeat: repeat-x;
            background-size: 0 100%, 22px 20px, 22px 20px;
            margin-bottom: 16px;
        }
        .price-fifth-content {
            color: #7F7F7F;
            font-size: 16px;
            line-height: 19px;
            text-align: center;
            position: relative;
            z-index: 1;
            margin-bottom: 28px;
            &:before {
                position: absolute;
                top: 48%;
                left: 0;
                z-index: -1;
                right: 0;
                width: 100%;
                height: 1px;
                content: '\\a0';
                background-color: #D7D7D7;
            }
        span {
            background-color: #fff;
            padding: 0 20px;
        }
        }
        .price-sixth-content {
            justify-content: center;
            margin-bottom: 25px;
            img {
                max-width: 32px;
                height: 20px;
            }
            img:not(:last-child) {
                margin-right: 11px;
            }
        }
        .price-seventh-content {
            font-size: 10px;
            line-height: 12px;
            text-align: center;
            color: #C2C2C2;
            margin-bottom: 9px;
        }
        .price-eighth-content {
            justify-content: center;
            margin-bottom: 41px;
            a {
                background-color: #61259E;
                border: 0.5px solid #7F7F7F;
                box-sizing: border-box;
                border-radius: 5px;
                width: 166px;
                height: 39px;
                font-size: 16px;
                line-height: 19px;
                color: #FFFFFF;
                font-weight: bold;
                align-items: center;
                justify-content: center;
            }
        }
        .price-ninth-content {
            margin-top: 7px;
            color: #C2C2C2;
            font-size: 10px;
            line-height: 12px;
        }
        @media(max-width: 768px) {
            .price-third-content {
                 &>div {
                      justify-content: center; 
                 }
                 .price-list {
                      li {
                           text-align: center;
                           flex-direction: column;
                           span:first-child {
                                margin-bottom: .5rem;
                           }
                           span:last-child {
                                text-align: center;
                           }
                      }
                 }
            }
            .price-fourth-content {
                 flex-direction: column;
            }
            .price-fifth-content {
                 font-size: 12px;
            }
            .price-ninth-content {
                text-align: center;
            }
        }
    }
`;

const Divider = styled.div.attrs({
    className: "app-css-divider"
})`
    &.app-css-divider {
        border: 0.3px solid #D7D7D7;
    }
`;

export default Payment;