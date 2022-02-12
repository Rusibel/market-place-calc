import React from "react";
import './link-block.scss'

export default function LinkBlock () {
    return (
        <div className="link__block">
            <div>
                <div className="link__block__item">
                    <span><b>Категория на OZON и комиссия </b></span>
                </div>
                <div className="link__block__item">
                    <span><b>Категория на WB и комиссия      </b></span>
                </div>
                <div className="link__block__item">
                    <span><b>Комиссии на Яндекс.Маркете   </b></span>
                </div>
            </div>
            <div>
                <div className="link__block__item">
                   
                    <a href="https://calculator.ozon.ru">Калькулятор OZON</a>
                </div>
                <div className="link__block__item">
                    
                    <a href="https://seller.wildberries.ru/dynamic-product-categories">Калькулятор WILDBERRIES</a>
                </div>
                <div className="link__block__item">
                   
                    <a href="https://yandex.ru/legal/marketplace_services_rate_table/">Комиссии Яндекс.Маркет</a>
                </div>
            </div>
        </div>
        
    )
}