var sum_to_n_a = function(n) {
    // your code here
    if(n !== '' && Number(n)){
        let numb = 0
        for(let i = 1 ; i <= Number(n) ; i++){
            numb += i
        }
        document.getElementById('way-1').innerHTML = numb
    }
};

var sum_to_n_b = function(n) {
    // your code here
    if(n !== '' && Number(n)){
        let numb = 0
        for(let i = Number(n) ; i <= Number(n) && i >= 0 ; i--){
            numb += i
        }
        document.getElementById('way-2').innerHTML = numb
    }
};

var sum_to_n_c = function(n) {
    // your code here
    if(n !== '' && Number(n)){
        let numb = 0
        let i = 0
        while(i <= Number(n)){
            numb += (Number(n) - i)
            i++
        }
        document.getElementById('way-3').innerHTML = numb
    }
};