var elemento = document.querySelector(".container")
let colors = ['red', 'green', 'blue', 'purple', 'gray', 'magenta'];
let girou;
callColor(changecolor, colors)


function callColor(funcao, array) {
    for (var index in array) {
        funcao(array[index])
        console.log(array[index], index);
        changecolor(index, array[index]);
    }

}


function changecolor(index, color) {
    elemento.style.setProperty(`--ring${index}`, `${color}`)

}


function girar() {
    girou = setInterval(girarArray, 1000);
}

function girarArray() {

    for (let i in colors) {
        var indexOf = i;


    }
    for (let i = colors.length - 1; i > -1; i--) {
        var indexIn = i;

    }
    arraymove(colors, indexOf, indexIn)

    function arraymove(arr, fromIndex, toIndex) {
        var element = arr[fromIndex];
        arr.splice(fromIndex, 1);
        arr.splice(toIndex, 0, element);
    }
    callColor(changecolor, colors);



}