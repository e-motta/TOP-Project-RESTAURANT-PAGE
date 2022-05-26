import BackgroundImage from './bg-img.jpg'

const component = (() => {
    let home = document.createElement(`div`)
    home.classList.add(`home`)

    let imgContainer = document.createElement(`div`)
    imgContainer.classList.add(`img-container`)

    let name = document.createElement(`div`)
    name.classList.add(`name`)
    name.classList.add(`centered`)
    name.textContent = `The Restaurant`

    let credit = document.createElement(`a`)
    credit.classList.add(`credit`)
    credit.textContent = `Photo by Andrew Seaman`
    credit.href = `https://unsplash.com/photos/sQopSb2K0CU`
    credit.target = `_blank`

    let bgImg = new Image()
    bgImg.src = BackgroundImage
    bgImg.classList.add(`bg-img`)

    imgContainer.appendChild(credit)
    imgContainer.appendChild(name)
    imgContainer.appendChild(bgImg)

    home.appendChild(imgContainer)

    let title = document.createElement(`h2`)
    title.classList.add(`title`)
    title.textContent = `Welcome!`

    home.appendChild(title)

    let text = document.createElement(`p`)
    text.classList.add(`text`)
    text.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

    home.appendChild(text)

    return home
})();

export default component
