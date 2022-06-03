let mem = document.querySelector('.buts')
let btns = mem.querySelectorAll('button')




let see = document.querySelector('.price')


btns.forEach(btn => {
    btn.onclick = () => {
        btns.forEach(item => item.classList.remove('new_price_of_macbook'))
        btn.classList.add('new_price_of_macbook')




    }

})


let mems = document.querySelector('.buts_color')
let btnss = mems.querySelectorAll('button')


btnss.forEach(btnn => {
    btnn.onclick = () => {
        btnss.forEach(itemm => itemm.classList.remove('new_maccbok_color')

        )
        btnn.classList.add('new_maccbok_color')

        
    }
})

let white_color = mems.querySelector('.White')
let grey_color = mems.querySelector('.Grey')
let color = document.querySelector('.color')
let macbook = document.querySelector('.macbook')



white_color.onclick = () => {
    grey_color.classList.remove('new_maccbok_color')
    grey_color.classList.add('maccbok_color')


    color.innerText = 'White'
    white_color.classList.toggle('new_maccbok_color')
    macbook.classList.remove('macbook_two')
    macbook.classList.add('macbook')

}
grey_color.onclick = () => {
    white_color.classList.remove('new_maccbok_color')
    white_color.classList.add('maccbok_color')

    grey_color.classList.toggle('new_maccbok_color')
    color.innerText = 'Space Grey'
    macbook.classList.remove('macbook')
    macbook.classList.add('macbook_two')

}




let one = mem.querySelector('.one')
let two = mem.querySelector('.two')
let three = mem.querySelector('.three')
let four = mem.querySelector('.four')


one.onclick = () => {
   


    see.innerText = '$1,199'
}
two.onclick = () => {
    
    
    see.innerText = '$2,199'
}
three.onclick = () => {
    
    see.innerText = '$2,599'
}
four.onclick = () => {
    
    see.innerText = '$3,199'
}