function solution(denum1, num1, denum2, num2) {
    var answer = [];
    let num = num1*num2;
    let denum = num1*denum2 + num2*denum1;
    let div = num;
    while(div>1) {
        if(denum%div===0 && num%div===0) {
            denum/=div;
            num/=div;
            div=num;
        }else div--;
        
    }
    answer.push(denum,num)
    return answer;
}