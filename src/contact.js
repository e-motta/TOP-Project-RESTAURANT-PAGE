const component = (() => {
    let contact = document.createElement(`div`)
    contact.classList.add(`contact`)

    let address = document.createElement(`div`)
    address.classList.add(`address`)
    address.innerHTML = `The Restaurant<br>1 Some Random St.<br>SoHo<br>New York City<br>ZIP Code 10001`
    contact.appendChild(address)

    let line = document.createElement(`div`)
    line.classList.add(`line`)
    contact.appendChild(line)

    let contactInfo = document.createElement(`div`)
    contactInfo.classList.add(`contact-info`)
    contactInfo.innerHTML = `+1 (212) 123-4567<br>contact@therestaurant.com<br><br><br>See our social media below`
    contact.appendChild(contactInfo)

    return contact
})();

export default component
