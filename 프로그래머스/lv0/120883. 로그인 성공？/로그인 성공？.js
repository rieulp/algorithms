function solution(id_pw, db) {
    var answer = 'fail';
    const [my_id,my_pw] = id_pw;
    for([id,pw] of db) {
        if(my_id===id) {
            if(my_pw===pw) return 'login'
            return 'wrong pw';
        }
    }
    return answer;
}