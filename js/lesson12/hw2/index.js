//провести фильтрацию массива от  NaN;
// Привести каждый элемент к числу. 
// Указать что каждая сумма должна быть отмечена до двух знаков после запятой.
// произвести конкатинацию каждого элемента массива со знаком $ и приведение к строке.


let arr = ['  1.9 ', '16.4', 17, ' 1 dollar '];

const cleanTransactionsList = arr => {
        let a = [];
        a.push(arr.map(el => Number(el)).filter(Boolean));
        let b = a.flat().map(el => '$' + el.toFixed(2));
        return b;
    }
    // console.log(cleanTransactionsList(arr))