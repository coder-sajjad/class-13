
/**
 * TIME FUNCTION
 * @param {*} time 
 * @returns 
 */
function fulltime (time) {
    return time < 10 ? '0'+time : time;
};


/**
 * LOADER FUNCTION
 * @param {*} start_val 
 * @param {*} current_val 
 * @returns 
 */
function counterLoader ( start_val, current_val ) {
    return (current_val * 100) / start_val;
}

/**
 * 
 * @param {*} marks 
 * @returns 
 */
function result (name, subject, marks) {
    
    if( marks > 0 && marks < 33 ){
        return `<p class="alert alert-danger">"Hi ${ name } Your are failed" Your Subject : ${ subject }, Marks : ${ marks } </p>`;
    }else if( marks => 33 && marks < 40 ){
        return `<p class="alert alert-primary">"Hi ${ name } Your are Passed" Your Subject : ${ subject }, Marks : ${ marks } </p>`;
    }else if( marks => 40 && marks < 50 ){
        return `<p class="alert alert-info">"Hi ${ name } Your are Passed" Your Subject : ${ subject }, Marks : ${ marks } </p>`;
    }else if( marks => 50 && marks < 60 ){
        return `<p class="alert alert-warning">"Hi ${ name } Your are Passed" Your Subject : ${ subject }, Marks : ${ marks } </p>`;
    }else if( marks => 70 && marks < 80 ){
        return `<p class="alert alert-black">"Hi ${ name } Your are Passed" Your Subject : ${ subject }, Marks : ${ marks } </p>`;
    }else if( marks => 80 && marks <= 100 ){
        return `<p class="alert alert-success">"Hi ${ name } Your are Golden" Your Subject : ${ subject }, Marks : ${ marks } </p>`;
    }
}
