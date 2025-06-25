window.addEventListener('click', function (event) {
    // обьявляем пременному для счетчика
    let counter;

    //проверяем клик строго по кнопкам плюс или минус
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        // находим обертку счетчика
         const counterWrapper = event.target.closest('.counter-wrapper'); 
        // находим див с числом счетчика
         counter = counterWrapper.querySelector('[data-counter]');  

    }

    //проверяем является ли элемент  по которому был совершен клик кнопкной плюс
    if (event.target.dataset.action === 'plus') {
         counter.innerText = ++counter.innerText;    
    }

    //проверяем является ли элемент по которому был совершен клик кнопкной минус
     if (event.target.dataset.action === 'minus') {
            //проверка на товар находится в корзине
        
            // проверяем чтобы счетчик был болше 1
        if( parseInt(counter.innerText) >1 ) {
            //изменяем текст в счетчике уменьшая его на 1
            counter.innerText = --counter.innerText;
        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1 ) {
            //проверка на товар находится в корзине
            console.log('IN CART!!!!!');
            
            //удаляем товар из корзине
            event.target.closest('.cart-item').remove();
            //отображентя статуса корзины Пустая / Полная
            toggleCartStatus();
            //пересчет обшей стоимости товаров в корзине
            calcCartPriceAndDelivery()


        }
    }

    //проверяем клик на + или - внутри корзину
     if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
        //пересчет обшей стоимости товаров в корзине
        calcCartPriceAndDelivery()

     }
    
});