// let oneBtn = document.querySelector(".one")
// let twoBtn = document.querySelector(".two")

// oneBtn.onclick = () => {
//     twoBtn.classList.add('active')
//     oneBtn.classList.remove('active')
// }
// twoBtn.onclick = () => {
//     oneBtn.classList.add('active')
//     twoBtn.classList.remove('active')
// }

// // https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840578
// // https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-gold?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840519
// // https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-silver?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840488
// // https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-spaceblack?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840510

let purple = document.querySelector('.deep')
let gold = document.querySelector('.gold')
let silver = document.querySelector('.silver')
let black = document.querySelector('.black')
let img = document.querySelector('.picture img')
let btn = document.querySelectorAll('.four_colors button')
let h2 = document.querySelector('.color h2')

purple.onclick = () => {
    img.setAttribute('src', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840578')
}

gold.onclick = () => {
    img.setAttribute('src', "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-gold?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840519")
}

silver.onclick = () => {
    img.setAttribute('src', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-silver?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840488')
}

black.onclick = () => {
    img.setAttribute('src', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-spaceblack?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840510')
}

btn.forEach(btn => {

    const key = btn.getAttribute('data-color')

    btn.onmouseenter = () => {
        h2.innerHTML = `Color - ${key}`
    }

    btn.onmouseleave = () => {
        h2.innerHTML = current
    }
   
})



