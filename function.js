
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

