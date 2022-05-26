const component = (() => {
    let header = document.createElement(`div`)
    header.classList.add(`header`)

    let logoOuter = document.createElement(`div`)
    logoOuter.classList.add(`logo-outer`)
    header.appendChild(logoOuter)

    let logoInner = document.createElement(`span`)
    logoInner.classList.add(`logo-inner`)
    logoInner.textContent = `TR`
    logoOuter.appendChild(logoInner)

    let headerBtnContainer = document.createElement(`div`)
    headerBtnContainer.classList.add(`header-btn-container`)
    
    let headerBtnOptions = [`HOME`, `CONTACT`, `MENU`]

    for(let option of headerBtnOptions) {
        let btn = document.createElement(`button`)
        btn.classList.add(`header-btn`)
        if(option === `HOME`) btn.classList.add(`header-btn-active`)
        btn.id = `${option.toLowerCase()}`
        btn.textContent = option
        headerBtnContainer.appendChild(btn)
    }

    header.appendChild(headerBtnContainer)

    return header
})();

export default component
