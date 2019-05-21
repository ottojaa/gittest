let any = ['31', '2', '3'];

function arraySort (any) {
    return any.sort(function (a, b) {
        return a.localeCompare(b);
    })
}

const testi = arraySort(any);
console.log(testi)