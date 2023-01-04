let input = document.querySelectorAll('input');
let button = document.querySelector('.output');
let form = document.querySelector('form')
let num = 734342;
let flag = true;

button.addEventListener('click', () => {
    

        if (input[0].value == '') {
            document.querySelector('.footer').insertAdjacentHTML("beforeend", "<p>Вы не ввели фамилию</p>");
        } 
         if (input[1].value == '') {
            document.querySelector('.footer').insertAdjacentHTML("beforeend", "<p>Вы не ввели имя</p>");
        } 
         if (input[2].value == '') {
            document.querySelector('.footer').insertAdjacentHTML("beforeend", "<p>Вы не ввели телефон</p>");
        } 
         if (input[3].value == '') {
            document.querySelector('.footer').insertAdjacentHTML("beforeend", "<p>Вы не ввели адрес</p>");
        } 
         if (input[4].value == '') {
            document.querySelector('.footer').insertAdjacentHTML("beforeend", "<p>Вы не ввели номер карты</p>");
        } 
         if (input[5].value == '') {
            document.querySelector('.footer').insertAdjacentHTML("beforeend", "<p>Вы не ввели дату выдачи</p>");
        } 
         if (input[6].value == '') {
            document.querySelector('.footer').insertAdjacentHTML("beforeend", "<p>Вы не ввели пин-код))</p>");
        } 
         if (input[7].value == '') {
            document.querySelector('.footer').insertAdjacentHTML("beforeend", "<p>Вы не ввели CVV-код)))</p>");
        }
    
    if (flag) {
        document.querySelector('.footer').insertAdjacentHTML('beforeend',
            `
            <p>-----------Номер товара ${num++}------------</p>
                <h2> </h2>
                <p>Фамилия: ${input[0].value}</p>
                <p>Имя: ${input[1].value}</p>
                <p>Телефон: ${input[2].value}</p>
                <p>Адрес: ${input[3].value}</p>
                <p>Номер карты: ${input[4].value}</p>
                <p>Дата выдачи: ${input[5].value}</p>
                <p>Пин-код)): ${input[6].value}</p>
                <p>СVV-код))): ${input[7].value}</p>
            <p>---------------------------------------------------</p>
            `)
    }
    
})


