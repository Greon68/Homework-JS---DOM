        // Находим список элементов "rotator__case"
     let rotatorCases = document.querySelectorAll(".rotator__case");
        // console.log(rotatorCases);
    let interval = 1000;


//  Функция перебора элементов "rotator__case"
function rotator() {

    for (let i=0; i < rotatorCases.length; i++) {
            setTimeout(() => {

            // Деактивируем активную запись:
            // 1) Находим активный элемент :
            let activElement = document.querySelector(".rotator__case_active");
            // 2) Деактивируем его:
            activElement.classList.toggle("rotator__case_active");

            // Делаем активным текущий элемент :
            rotatorCases[i].classList.toggle("rotator__case_active"); 
            // console.log(rotatorCase.textContent)

            // меняем цвет :                    
            rotatorCases[i].style.color = rotatorCases[i].getAttribute('data-color');

            // меняем время показа:
            // interval = rotatorCases[i].getAttribute('data-speed');
            
            }, interval*i);
    } 
};

rotator();

// 3.Смена текстовых блоков должна быть бесконечной:
setInterval(() => {
    rotator();

},  interval*rotatorCases.length); 
