/*1)
  Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
  Возвращает true, если все аргументы, кроме первого, входят в первый.
  Первым всегда должен быть массив.
*/

export function isInArray<T>(arr: T[], ...args: T[]): boolean {
   return args.every((el: T) => arr.indexOf(el) !== -1);
}

// tslint:disable-next-line
console.log(isInArray([1, 2, 3, 4, 5, 6], 2, 3, 4));
// tslint:disable-next-line
console.log(isInArray([1, 'hoh', 3, 4, 5, 6], 2, 3, 4));

/*2)
  Написать функцию summator(), которая суммирует переданые ей аргументы.
  Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено.
*/

type sn = string | number;

function isNumber(a: sn): a is number {
    return typeof a !== 'string';
}

export function summator(...args: sn[]): number {
    return args.reduce<number>((acc: number, next: sn) => {
        if (isNumber(next)) {
            return acc += next;
        } else {
            if (!isNaN(Number(next))) {
                return acc += Number(next);
            } else {
                return acc;
            }
        }
    }, 0);
}

// tslint:disable-next-line
console.log(summator(1, 2, 3, 4));
// tslint:disable-next-line
console.log(summator(1, 10, 2, '3'));
// tslint:disable-next-line
console.log(summator(1, 'hoh', 2, '3'));

/*3)
  Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
  и возвращает массив уникальных элементов. Аргумент не должен изменяться.
  Порядок элементов результирующего массива должен совпадать с порядком,
  в котором они встречаются в оригинальной структуре.
*/

export function getUnique(...arr: sn[]): sn[] {
    const result: sn[] = [];
    arr.forEach((el: sn) => {
        if (result.indexOf(el) === -1) {
            result.push(el);
        }
    });
    return result;
}

// tslint:disable-next-line
console.log(getUnique(1, 2, 3, 3, 'four', 5, 'four', 6, 'six', 6));

/*4)
  Написать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
  возвращает новый массив. Число показывает количество элементов в подмассивах,
  элементы подмассивов берутся из массива data. Оригинальный массив не должен быть изменен.
*/

export function toMatrix<T>(data: T[], rowSize: number): T[][] {
    const matrix: T[][] = [];
    for (let i = 0; i < data.length; i += rowSize) {
        const row: T[] = data.slice(i, i + rowSize);
        matrix.push(row);
    }
    return matrix;
}

// tslint:disable-next-line
console.log(toMatrix([1, 2, 3, 4, 5, 6, 7], 3));
// tslint:disable-next-line
console.log(toMatrix([1, 2, 3, 4, 5, 6, 7], 4));
