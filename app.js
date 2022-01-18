
/**
 *  DIGITAL CLOCK
 */
const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');
const fullDate = document.querySelector('#fullDate');
const mainDate = document.querySelector('.mainDate');

setInterval( function () {

    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let ampm = h > 12 ? 'PM' :  'AM';

    let hours = '';
    if( h == '' ){
        hours = 12;
    }else if( h > 0 && h <= 12 ){
        hours = h;
    }else{
        hours = h - 12;
    }

    hour.innerHTML = `${ fulltime(hours) }:${ ampm }`;
    minute.innerHTML = `${ fulltime(m) }`;
    second.innerHTML = `${ fulltime(s) }`;
    
    mainDate.innerHTML = `<p> ${ fulltime(date.getMonth() +1) }/${ fulltime(date.getDate()) }/${ date.getFullYear() } <i style="padding-left: 10px;" class="fab fa-apple"></i> </p>`;

}, 1000);


/**
 *  COUNTER LOADER 
 */
const inputCount = document.querySelector('#inputCount');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');
const h1 = document.querySelector('#value');
const widthPro = document.querySelector('#widthPro');

   let counter_value;
   let counter;
    
start.addEventListener('click', function(){
    counter_value = inputCount.value; 

    counter = setInterval(() => {
        h1.innerHTML = counter_value;
    
        widthPro.style.width = `${ counterLoader(inputCount.value, counter_value)}% `;

        

        if( counter_value == 0 ){
            clearInterval(counter);
        }

        counter_value--;

    }, 1000);
});

stop.addEventListener('click', function(){
    clearInterval(counter);
});
    
reset.addEventListener('click', function(){
    counter_value = 0;
    h1.innerHTML = counter_value;
    clearInterval(counter);
});
    

/**
 *  TODO APP
 */
const todoOutput = document.querySelector('.todoOutput');
const todo = document.getElementById('todo');
const add = document.getElementById('add');
const listAdd = document.getElementById('listAdd');

add.addEventListener('click', function(){
    
    todo.style.border = ( todo.value == '' ) ? "1px solid red" : "1px solid grey";

    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerText = todo.value;
    listAdd.appendChild(li);

    todo.value = '';
    
});


/**
 *  SUBJECT MARKS
 */
const mesge = document.querySelector('#mesge');
const youName = document.querySelector('#youName');
const subject = document.querySelector('#subject');
const mark = document.querySelector('#mark');
const submit = document.querySelector('#submit');

    let anyNames ;
    let anySubject ;
    let anyMarks ;

submit.addEventListener('click', function(){
    anyNames = youName.value ;
    anySubject = subject.value ;
    anyMarks = mark.value ;
    

    youName.style.border = ( youName.value == '' ) ? "1px solid red" : "1px solid grey";
    subject.style.border = ( subject.value == '' ) ? "1px solid red" : "1px solid grey";
    mark.style.border = ( mark.value == '' ) ? "1px solid red" : "1px solid grey";

    if( anyNames == '' || anySubject == '' || anyMarks == '' ){
        mesge.innerHTML = `<p class="alert alert-danger">All fields are required</p>`;
    }else{
        mesge.innerHTML = result(anyNames, anySubject, anyMarks);
    }

    youName.value = '';
    subject.value = '';
    mark.value = '';

});
