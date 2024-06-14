
const cv = document.querySelector('#ctt');
const inc = function() {
    let v = parseInt(cv.innerText);
    v = v + 1;
    cv.innerText = v;
};
const dec = function() {
    let v = parseInt(cv.innerText);
    v = v - 1;
    cv.innerText = v;
};
document.querySelector('#incre').addEventListener('click', inc);
document.querySelector('#decre').addEventListener('click', dec);
