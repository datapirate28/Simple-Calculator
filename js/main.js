let total = 0 

document.querySelector('#firstli').addEventListener('click', restulZero)
document.querySelector('#secondli').addEventListener('click', result4)
document.querySelector('#thirdli').addEventListener('click', result10)
document.querySelector('#fourthli').addEventListener('click', sub2)

function restulZero () {
    total = 0 
    document.querySelector('#showResult').innerHTML = total
}

function result4 () {
 total = total + 4
 document.querySelector('#showResult').innerHTML = total  
}

function result10 () {
    total = total + 6
    document.querySelector('#showResult').innerText = total
}

function sub2 () {
    total = total - 2
    document.querySelector('#showResult').innerHTML = total
}

