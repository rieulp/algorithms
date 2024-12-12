function solution(phone_book) {
    var answer = true;
    const len = phone_book.length;
    phone_book.sort();
    for(let i=0; i<len - 1; i++) {
        if(phone_book[i+1].indexOf(phone_book[i])===0){
            return false;
        }
    }
    
    return answer;
}