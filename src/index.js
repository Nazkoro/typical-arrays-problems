exports.min = function min (array) {
  if(array ===undefined )return 0;
  let temp = array
  if( temp.length === 0 ||temp=== 0  )return 0;
  
   else return  Math.min(...array); 
  
}

exports.max = function max (array) {
  
  if(array ===undefined )return 0;
  let temp = array
  if( temp.length === 0 ||temp=== 0  )return 0;
    else return Math.max(...array); 
  
}

exports.avg = function avg (array) {
  
  if(array ===undefined )return 0;
  let temp = array
  if( temp.length === 0 ||temp=== 0  )return 0;

  else return array.reduce((a, b) => (a + b)) / array.length;
}
