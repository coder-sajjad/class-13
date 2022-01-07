
const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');
const fullDate = document.querySelector('#fullDate');
const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');

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
        
    
    }, 1000);
        
    

    
    