const component = (() => {
    let footer = document.createElement(`div`)
    footer.classList.add(`footer`)

    let socialMedia = [`facebook`, `twitter`, `instagram`]

    for(let item of socialMedia) {
        let a = document.createElement(`a`)
        a.href = `#`
        a.classList.add(`fa`)
        a.classList.add(`fa-${item}`)

        footer.appendChild(a)
    }

    return footer
})();

export default component