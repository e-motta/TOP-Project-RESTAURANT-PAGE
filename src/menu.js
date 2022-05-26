import MenuItems from './menu.json'

const component = (() => {
    let menu = document.createElement(`div`)
    menu.classList.add(`menu`)

    Object.entries(MenuItems).forEach((item) => {
        const [type, properties] = item

        const menuTypeItem = document.createElement(`div`)
            menuTypeItem.classList.add(`menu-type-item`)

        Object.entries(properties).forEach((prop) => {
            const [propName, propValue] = prop

            if(propName === `title`) {
                const menuTypeName = document.createElement(`div`)
                menuTypeName.classList.add(`menu-type-name`)
                menuTypeName.textContent = propValue
                menuTypeItem.appendChild(menuTypeName)

            } else if(propName === `meals`) {
                const menuTypeMeals = document.createElement(`div`)
                menuTypeMeals.classList.add(`menu-type-meals`)

                for(let meal of propValue) {
                    const mealItem = document.createElement(`div`)
                    mealItem.classList.add(`meal-item`)
                    mealItem.textContent = `∙ ` + meal

                    menuTypeMeals.appendChild(mealItem)
                }

                menuTypeItem.appendChild(menuTypeMeals)
            }
            menu.appendChild(menuTypeItem)

        })
    })

    return menu
})();

export default component
