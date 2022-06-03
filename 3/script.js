let box_class = document.querySelector('.box')
let elem = document.querySelector('.elem')

console.log(box_class);

elem.onclick = () => {
    // document.box.style.color = "red"
    box_class.classList.remove('box')

    box_class.classList.add('active')
    document.body.style.background = "rgba(0, 0, 0, 0.47)"
}
// box_class.style.color = "red"
//     box_class.style.height = "380px"
//     box_class.style.width = "540px"
//     box_class.style.margin = "50px auto"
//     box_class.style.border = "2px solid black"