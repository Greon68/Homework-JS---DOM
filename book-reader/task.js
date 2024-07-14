// ***********************************************************

// РАБОТАЕМ С РАЗМЕРОМ ШРИФТА 

        // Создаём псевдомассив кнопок размера шрифта 
        let fontSizes = document.querySelectorAll('.font-size');
        // console.log(fontSizes)

        // Ищем элемент с классом (и id) book
        let book = document.getElementById('book');
        // console.log(book)


        // Реагируем на клик по кнопкам размера шрифта:
        for (let fontSize of fontSizes) {

        // Реагируем на клик по текущей кнопке:
        fontSize.addEventListener( 'click',  (event)=> {
            // Снимаем поведение ссылок по умолчанию 
            event.preventDefault();
            //  Ищем активную кнопку:
            let fontSizeActive = document.querySelector('.font-size_active');
            // console.log(fontSizeActive)

            // Деактивируем её:
            fontSizeActive.classList.toggle('font-size_active');

            // Делаем текущую кнопку активной:
            fontSize.classList.toggle('font-size_active');

            // Оставляем в списке классов элемента book только класс "book"
            book.classList.remove ('book_fs-small','book_fs-big')

             // Определяем , какая именно кнопка нажата и ,соответственно , реагируем :

            //  Если нажата кнопка маленького шрифта :
             if ( fontSize.classList.contains('font-size_small')) {
                       
                // добавляем в элемент book класс 'book_fs-small'
                book.classList.add("book_fs-small")
             }

            //  Если нажата кнопка большого шрифта :
             else if (fontSize.classList.contains('font-size_big')){
                
                //добавляем в элемент book класс "book_fs-big"    
                book.classList.add("book_fs-big")
             }
           
             
            })
  
         }
// *****************************************************************************

        // РАБОТАЕМ С КНОПКАМИ ЦВЕТА ШРИФТА И ФОНА

       // Создаём псевдомассив кнопок цвета шрифта и фона 
       let сolorControl  = document.querySelectorAll('.color');
        // console.log(сolorControl);

        // arr.slice([start], [end])
        // возвращает новый массив, в который копирует все элементы с индекса start до end (не включая end). 

        
        // Создаём  массив кнопок контроля цвета из псевдомассива:
        let сolorControlArray = Array.from(сolorControl);
        // console.log( сolorControlArray);



        // +++++++++++++++++++++++++++++++++++++++++++++++++++++

        // РАБОТАЕМ С КНОПКАМИ ЦВЕТА ШРИФТА

        //  Выделяем массив для кнопок цвета шрифта 
        let fontColors = сolorControlArray.slice(0,3)
        // console.log( fontColors);

        // Ищем активную кнопку цвета шрифта:
        function getFontColorActive() {

            for (let fontColor of fontColors){

                if ( fontColor.classList.contains('color_active') ){

                    let buttomActive = fontColor;

                    return buttomActive
                }               
            }           
        }
        // console.log (getFontColorActive())

        // Реагируем на клик по кнопкам цвета шрифта:
        for (let fontColor of fontColors) {

            // console.log (getFontColorActive())
           
        //    console.log (fontColorActive )

         // Реагируем на клик по текущей кнопке:
            fontColor.addEventListener( 'click',  (event)=> {
             // Снимаем поведение ссылок по умолчанию 
            event.preventDefault();    

            // Находим активную кнопку:
            let fontColorActive = getFontColorActive()
            
             // Деактивируем активную кнопку :
            fontColorActive.classList.toggle('color_active');

             // Делаем текущую кнопку активной:
            fontColor.classList.toggle('color_active');

            // Убираем активные классы для цвета шрифта из головного элемента "book"
            book.classList.remove ('book_color-gray','book_color-whitesmoke','book_color-black')

            

             // Определяем , какая именно кнопка нажата и ,соответственно , реагируем :

            //  Если нажата кнопка черного цвета  :
             if ( fontColor.classList.contains('text_color_black')) {
                       
                // добавляем в элемент book класс 'book_color-black'
                book.classList.add("book_color-black")
             }


            //  Если нажата кнопка серого  цвета  :
             if ( fontColor.classList.contains('text_color_gray')) {
                       
                // добавляем в элемент book класс 'book_color-gray'
                book.classList.add("book_color-gray")
            }


             //  Если нажата кнопка белого цвета  :
             if ( fontColor.classList.contains('text_color_whitesmoke')) {
                       
                // добавляем в элемент book класс 'book_color-whitesmoke'
                book.classList.add("book_color-whitesmoke")
            }           
           
             
            })
  
         }

            // +++++++++++++++++++++++++++++++++++++++++++++++++++++

        // // РАБОТАЕМ С КНОПКАМИ ЦВЕТА ФОНА

         //  Выделяем массив для кнопок цвета фона
         let backgroundColors = сolorControlArray.slice(3)
        console.log( backgroundColors);

        // Ищем активную кнопку цвета шрифта:
        function getBackgroundColorActive() {

            for (let backgroundColor of backgroundColors){

                if ( backgroundColor.classList.contains('color_active') ){
                    let buttomActive = backgroundColor;
                return buttomActive
                }               
            }           
        }
    // console.log (getBackgroundColorActive())

    // Реагируем на клик по кнопкам цвета фона:
        for (let backgroundColor of backgroundColors) {

             // Реагируем на клик по текущей кнопке:
             backgroundColor.addEventListener('click', (event)=>{

                // Снимаем поведение ссылок по умолчанию 
                event.preventDefault(); 

                // Находим активную кнопку:
                let backgroundColorActive = getBackgroundColorActive();
                console.log (backgroundColorActive)

                // Деактивируем активную кнопку :
                backgroundColorActive.classList.toggle('color_active');

                // Делаем текущую кнопку активной:
                backgroundColor.classList.toggle('color_active');

                // Убираем активные классы для цвета шрифта из головного элемента "book"
                book.classList.remove ('book_bg-black','book_bg-gray','book_bg-white');

                // Определяем , какая именно кнопка нажата и ,соответственно , реагируем :

                //  Если нажата кнопка фона черного цвета  :
                if ( backgroundColor.classList.contains('bg_color_black')) {
                       
                 // добавляем в элемент book класс 'book_color-black'
                       book.classList.add("book_bg-black")
                }

                  //  Если нажата кнопка фона серого цвета  :
                if ( backgroundColor.classList.contains('bg_color_gray')) {
                       
                    // добавляем в элемент book класс 'book_color-black'
                    book.classList.add("book_bg-gray")
                }

                   //  Если нажата кнопка фона белого цвета  :
                   if ( backgroundColor.classList.contains('bg_color_white')) {
                       
                       // добавляем в элемент book класс 'book_color-black'
                       book.classList.add("book_bg-white")
                   }                
             })

        }
