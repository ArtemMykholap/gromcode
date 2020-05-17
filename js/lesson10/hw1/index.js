//input:array
//output:string

//Algo
//1.Пишем функцию для суммирования чисел
// 2. Используем метод округления числа в меньшую сторону.
// 3. Указываем, что округление идет до 2-х знаков.
// 4. Приводим число к строке и конкатинируем со знаком доллар.
// 5. Возварщаем результат

let arr = [10, 21.76, 17.118];

const getTotalPrice = arr => {
    const sum = arr.reduce((sum, current) => sum + current);
    let newArr = Math.floor(sum * 100) / 100;
    return '$' + newArr;
}


console.log(getTotalPrice(arr));