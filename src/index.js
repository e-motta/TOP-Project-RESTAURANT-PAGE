import './reset.css';
import './style.css';
import Header from './header.js';
import Footer from './footer.js';
import Home from './home.js';
import Contact from './contact.js';
import Menu from './menu.js'

const page = (() => {
    const content = document.querySelector(`.content`)

    const setUpInitialState = () => {
        content.appendChild(Header)
        content.appendChild(Home)
        content.appendChild(Footer)
    }

    return { content, setUpInitialState }
})();

const navigation = (() => {
    const pages = {
        home: Home,
        contact: Contact,
        menu: Menu
    }
    
    const changePage = (e) => {
        let previousId = Footer.previousSibling.classList[0]
        let nextId = e.target.id
        
        highlightActiveBtn(previousId, nextId)
    
        Footer.previousSibling.remove()
        page.content.insertBefore(pages[nextId], Footer)
    
        router.push(nextId)
    }

    const addEventListenersToBtns = () => {
        const home = document.querySelector(`#home`)
        const contact = document.querySelector(`#contact`)
        const menu = document.querySelector(`#menu`)
    
        home.addEventListener(`click`, (e) => changePage(e))
        contact.addEventListener(`click`, (e) => changePage(e))
        menu.addEventListener(`click`, (e) => changePage(e))
    }

    const highlightActiveBtn = (btnIdRemove, btnIdAdd) => {
        let a = document.querySelector(`#${btnIdRemove}`)
        let b = document.querySelector(`#${btnIdAdd}`)
        a.classList.remove(`header-btn-active`)
        b.classList.add(`header-btn-active`)
    }

    return { addEventListenersToBtns }
})();

const router = (() => {
    const routes = {
        home: '/',
        contact: '/contact',
        menu: '/menu'
    }

    const push = (page) => {
        window.history.pushState(
            {},
            routes[page],
            window.location.origin + routes[page]
            )
    }

    return { push }
})();

page.setUpInitialState()
navigation.addEventListenersToBtns()
