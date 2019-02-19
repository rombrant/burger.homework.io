
     console.log();
     const section = $('section');
      const sectionHeight = $('section').outerHeight(true);
      let curTop = 0;
      const maxTop = (section.length- 1)* sectionHeight;
      console.log(maxTop);
      var inScroll = false;
      $(window).on('wheel', e => {
          if (!inScroll) {
              inScroll = true;
            if (event.deltaY < 0 && curTop < 0 ) {
                curTop= curTop + sectionHeight;
                $('.wrapper').css('top', curTop+'px');
            } else if (event.deltaY > 0 && curTop > -maxTop) {
              curTop = curTop - sectionHeight;
              $('.wrapper').css('top', curTop+'px');
            }
            setTimeout(function(){
                inScroll= false;
              },900);
          }
          });
          
          $(window).on({'touchmove': e => {
              console.log(e.touchstat);
            if (!inScroll) {
                inScroll = true;
              if (event.deltaY < 0 && curTop < 0 ) {
                  curTop= curTop + sectionHeight;
                  $('.wrapper').css('top', curTop+'px');
              } else if (event.deltaY > 0 && curTop > -maxTop) {
                curTop = curTop - sectionHeight;
                $('.wrapper').css('top', curTop+'px');
              }
              setTimeout(function(){
                  inScroll= false;
                },900);
            }
            }});
        
       
       
       
       
       
       
       
       
       
       
       
       //МОБИЛЬНОЕ МЕНЮ, МЕНЮ ГАМБУРГЕР, ГЛАВНОЕ МЕНЮ

        const methodClose = openMenu();
        function openMenu(){
            const openBtn = document.querySelector('.burgers-menu-button');
            const closeBtn = document.querySelector('.burgers-menu-closed');
            const menu = document.querySelector('.hide-menu');
            


                openBtn.addEventListener('click', function () {
                    removeActiveLink(menuLinks);
                    menu.classList.remove('hide-menu');
                    menu.classList.add('visible');
                    menu.style.opacity= 0;
                    let op = 0.1;
                    setTimeout (function foo(){
                        if (op < 1) {
                            op += 0.1;
                            menu.style.opacity= op;
                            setTimeout (foo, 50);
                        }
                    }, 50);
                });
                closeBtn.addEventListener('click', function () {
                    menu.style.opacity= 1;
                    let op = 1;
                    setTimeout (function doo(){
                        if (op > 0) {
                            op -= 0.1;
                            menu.style.opacity= op;
                            setTimeout (doo, 50);
                        }
                    },50)
                    setTimeout (function (){
                        menu.classList.add('hide-menu');
                    }, 1000);
                })
                
                return  {
                    close() {
                        closeBtn.click();
                    }
                }
        }
        
        const menuLinks = document.querySelectorAll('.hide__list__item-link');
        for (const link of menuLinks) {
            link.addEventListener('click', e=> {
                const curLink = e.currentTarget;
                const isClosedLink = curLink.classList.contains("active-link");
                if (isClosedLink) {
                    removeActiveLink(menuLinks);
                } else {
                    removeActiveLink(menuLinks);
                    curLink.classList.add('active-link');
                    setTimeout(methodClose.close(), 1000);
                }
            })
        }

        function removeActiveLink(menuLinks) {
            Array.from(menuLinks).forEach(link=>{
                link.classList.remove('active-link');
            })
        }
        openMenu();


        //АККОРДЕОН МЕНЮ КОММАНДЫ

        const menuItems = document.querySelectorAll('.team-block__content-accordeon__list-item');


        for (const item of  menuItems) {
            item.addEventListener('click', e=> {
                const curItem = e.currentTarget;
                const isClosedItem = curItem.classList.contains("team-block__content-accordeon__list-item--active");
                if (isClosedItem) {
                    removeActiveClass(menuItems);
                }
                else {
                    removeActiveClass(menuItems);
                    openSlider(item);
                }
            
                
            })
        }


        function openSlider(item) {
            const photo = item.querySelector('.team-block__content-accordeon__list-item__photo');
            const photoBlock = photo.firstElementChild;
            const reqPhotoHeight = photoBlock.getBoundingClientRect().height;
            photo.style.height = reqPhotoHeight+'px';
            const content = item.querySelector('.team-block__content-accordeon__list-item__description');
            const textBlock = content.lastElementChild;
            const reqHeight = textBlock.getBoundingClientRect().height;
            content.style.height = reqHeight+'px';
            item.classList.add('team-block__content-accordeon__list-item--active');
        }
    
        function removeActiveClass(menuItems) {
            Array.from(menuItems).forEach(elem => {
                elem.classList.remove("team-block__content-accordeon__list-item--active");
                elem.querySelector('.team-block__content-accordeon__list-item__photo').style.height=0;
                elem.querySelector('.team-block__content-accordeon__list-item__description').style.height=0;
            });
        }


        // АККОРДЕОН МЕНЮ


        const menuOffers = document.querySelectorAll('.menu-accordeon__list-item');
        
        for ( const offer of menuOffers) {
            offer.addEventListener('click', e=>{
                const curOffer = e.currentTarget;
                const active = curOffer.classList.contains('menu-accordeon__list-item--active');
                if  (active) {
                    offerRemoveActiveClass(menuOffers);
                }
                else {
                    offerRemoveActiveClass(menuOffers);
                    openOfferMenu(offer);
                }
            })
        }

        function openOfferMenu(offer) {
            const contentBlock = offer.querySelector('.menu-accordeon__list-item__content');
            const textBlock = contentBlock.firstElementChild;
            const reqWidth = textBlock.getBoundingClientRect().width;
            contentBlock.style.width = reqWidth+'px';
            offer.classList.add('menu-accordeon__list-item--active');
        }

        function offerRemoveActiveClass(menuOffers) {
            Array.from(menuOffers).forEach(elem=>{
                elem.classList.remove("menu-accordeon__list-item--active");
                elem.querySelector('.menu-accordeon__list-item__content').style.width=0;
            })
        }



        //СЛАЙДЕР МЕНЮ БУРГЕРОВ


        const btnLeft = document.querySelector('.slider__scroll-btn-left');
        const btnRight = document.querySelector('.slider__scroll-btn-right');
        const itemSlide = document.querySelector('.slider__list');
        let curSwitch = 0;
        const minSwitch = 0;
       
        

        btnRight.addEventListener('click', e=> {
            const stepSwitch = itemSlide.firstElementChild.getBoundingClientRect().width;
            const maxSwitch = (itemSlide.children.length -1) * stepSwitch;
            if (curSwitch < maxSwitch) {
                curSwitch += stepSwitch;
                itemSlide.style.right = curSwitch+'px';
            }
            else {
                curSwitch = minSwitch;
                itemSlide.style.right= 0;
            }
            console.log(curSwitch);
            console.log(maxSwitch);
            console.log(stepSwitch);
            console.log();
        })
        btnLeft.addEventListener('click', e=>{
            const stepSwitch = itemSlide.firstElementChild.getBoundingClientRect().width;
            const maxSwitch = (itemSlide.children.length -1) * stepSwitch;
            if (curSwitch > minSwitch) {
                curSwitch -= stepSwitch;
                itemSlide.style.right = curSwitch+'px';
            }
            else {
                curSwitch = maxSwitch;
                itemSlide.style.right = maxSwitch+'px';
            }
            console.log(curSwitch);
            console.log(maxSwitch);
            console.log(stepSwitch);
        })








        //МОДАЛЬНЫЕ ОКНА


        const modalButtons = document.querySelectorAll('.feedback-container-button');//кнопки модальных окон
        const template = document.querySelector('#modal-template').innerHTML;//тэмплейт заготовка 
        const modal = templateCreator();//обЪект и методы возвращенные из функции
        //заведение обработчика события
        for (const curBtn of modalButtons){
            curBtn.addEventListener('click', e=>{
                const paragraph = e.target.previousElementSibling.innerHTML;//извлечение текста отзыва
                const headline = e.target.parentNode.firstElementChild.innerHTML;
                modal.setContent(paragraph, headline);
                modal.open();
            })
        }
        //создание модального окна
        function templateCreator() {
            const container = document.createElement('div');//блок обертка
            container.className = 'popup';//класс обертки
            container.innerHTML = template;//вкладка тэмплейта в блок обертки
            const contentBlock = container.querySelector('.popup__content-text');//блок отзыва-текст
            const headlineBlock = container.querySelector('.popup__content-headline');//блок отзыва заголовок
            const closeBtn = container.querySelector('.popup__close');//кнопка закртия
                closeBtn.addEventListener('click', e=>{//обработчик закрытия
                    document.querySelector('.wrapper').removeChild(container);
                })
            const overlay = container.querySelector('.overlay');//закрытие по клику фона
                overlay.addEventListener('click', e=>{//обработчик закрытия по фону 
                    if (e.target === overlay) {//условие закрытия
                        closeBtn.click();//метод закрытия
                      }
                })
            //возвращение методов
            return {
                open() {
                    document.querySelector('.wrapper').appendChild(container);//метод обЪекта для открытия
                },
                setContent(text, user) {
                    contentBlock.innerHTML = text;//метод присвыивания текста отзыва
                    headlineBlock.innerHTML = user;
                },
                close() {
                    document.querySelector('.wrapper').removeChild(container);
                }
            };
        }

        //ВАЛИДАЦИЯ ДАННЫХ  ФОРМЫ, ОТПРАВКА НА СЕРВЕР, ЗАПРОС ОТВЕТА СЕРВЕРА, МОАДЛЬНОЕ ОКНО С ОТВЕТОМ

        const myForm = document.querySelector('.main-form');
        const orderBtn = myForm.querySelector('.main-form__second__buttons-order');
        const clearBtn = myForm.querySelector('#reset');
        orderBtn.addEventListener('click', e=>{
            event.preventDefault();
            if (validateForm(myForm)) {
                const name = myForm.elements.name.value;
                const phone = myForm.elements.phone.value;
                const comment = myForm.elements.comment.value;
                const to = 'test@mail.com';
                var formData = new FormData();
                    formData.append('name',name);
                    formData.append('phone', phone);
                    formData.append('comment', comment);
                    formData.append('to', to);
                    console.log(formData);
                    const xhr = new XMLHttpRequest();
                    xhr.responseType = 'json';
                    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
                    xhr.send(formData);
                    xhr.addEventListener('load', e =>{
                        if (xhr.response.status){
                            const response = 'сообщение отправлено';
                                modal.setContent('',response);
                                modal.open();
                                setTimeout(e=>{
                                    clearBtn.click();
                                    modal.close();
                                },2000);
                                
                        } else {
                            const rejected = 'сообщение отклонено';
                            modal.setContent('',rejected);
                            modal.open();
                            clearBtn.click();
                        }
                        
                    })
            }
        })

        function validateForm(myForm) {
            let valid = true;
            
            if (!validateField(myForm.elements.name)) {
                valid = false;
            }

            if (!validateField(myForm.elements.phone)) {
                valid = false;
            }

            if (!validateField(myForm.elements.comment)) {
                valid = false;
            }
            return valid;
        }

        function validateField(field) {
            if (!field.checkValidity()){
                field.nextElementSibling.textContent = field.validationMessage;
                return false;
            }
            else {
                field.nextElementSibling.textContent = '';
                return true;
            }
        }



        //yandex maps location



        ymaps.ready(init);

var placemarks = [
    {
        latitude: 59.97,
        longitude: 30.31,

    },
    {
        latitude: 59.94,
        longitude: 30.25,

    },
    {
        latitude: 59.93,
        longitude: 30.34,
       
    },
    {
        latitude: 59.87,
        longitude: 30.46,
    }
],
    geoObjects= [];

function init() {
    var map = new ymaps.Map('map', {
        center: [59.94, 30.32],
        zoom: 11,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    for (var i = 0; i < placemarks.length; i++) {
            geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude], {
                hintContent: '<p class="hint">this is the hint</p>',
                baloonContent: '<p class="baloon">this is baloon</p>'
            },
                
            {
                iconLayout: 'default#image',
                iconImageHref: 'img/map-marker.svg',
                iconImageOffset: [-23, -57],
                iconImageSize: [46, 57]
            });
            map.geoObjects.add(geoObjects[i]);
    };


}