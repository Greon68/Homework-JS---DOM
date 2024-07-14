  // Находим список элементов , которые необходимо выделить ( класс '.reveal')

  let blocks = document.querySelectorAll('.reveal')
  // console.log(blocks)

  // Высота окна экрана :
  let windowHeight = document.documentElement.clientHeight;
  console.log(`Высота экрана windowHeight - ${windowHeight}`);

  // Реагируем на событие scroll :
  window.addEventListener('scroll', function() {

    // Проходим циклом по выделяемым блокам
    
    for ( let block of blocks) {

      // Координаты верхней части  блока reveal 
      // при скролле страницы относительно верхней границы окна браузера:
      let blockTop = block.getBoundingClientRect().top;
      console.log(`Координата верхней части блока blockTop- ${blockTop}`);
     
      if ( blockTop <= windowHeight ) {
          // Производим изменение цвета активного блока
          block.classList.toggle('reveal_active')
        }
    }

  })