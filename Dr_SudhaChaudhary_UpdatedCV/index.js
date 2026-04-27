const observer = new IntersectionObserver((enteries => {
    let tab;
    enteries.forEach(entry => {
        if (entry.target.matches("#education")) {
            entry.target.classList.add("animate")
        }
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            tab = document.querySelector(`.college li:has(a[href="#${entry.target.id}"`)
            if (tab) {
                tab.classList.add("college__list__item--active")
            }
        }
        else {
            if (entry.target.matches("#education"))
                entry.target.classList.remove("animate")
            entry.target.classList.remove("show");
            tab = document.querySelector(`.college li:has(a[href="#${entry.target.id}"`);
            if (tab) {
                tab.classList.remove("college__list__item--active")
            }
        }
    })
}), { threshold: .2 })

const sections = document.querySelectorAll("section");
sections.forEach(ele => {
    observer.observe(ele);
})

const check = document.querySelector("#check");
document.addEventListener("click", e => {
    if (e.target.matches(".hamburger__link")) {
        check.checked = false;
    }
})

const setColor = (color1, color2, color3) => {
    const root = document.querySelector(":root");
    root.style.setProperty('--color-primary', color1);
    root.style.setProperty('--color-secondary', color2);
    root.style.setProperty('--color-tertiary', color3);
}

const setFont = (font) => {
    const root = document.querySelector(":root");
    root.style.setProperty('--font', font)
}

let params = new URLSearchParams(location.href.split("?")[1])
let colors = {
    'rusty': ['#BB473A', '#DD5445', '#E55948'],
    'blue_dark': ['#1A086D', '#350FDB', '#330FD3'],
    'blue_light': ['#1A468E', '#0F5AD3', '#0F5EDB'],
    'green': ['#086D48', '#198E64', '#0FD38B'],
    'blue': ['#4062A3', '#4D77C5', '#5D91F0']
}

let color = params.get("c");
let font = params.get("f")
if (color) setColor(colors[color][0], colors[color][1], colors[color][2])
if (font) setFont(font)

const seemore = document.querySelectorAll(".btn__seemore")
seemore.forEach(ele => {
    let flag = false;
    ele.addEventListener("click", e => {
        if (!flag) {
            const parent = e.target.parentNode;
            const sibling = e.target.previousElementSibling;
            sibling.style.overflow = 'auto'
            sibling.style.height = '70%'
            parent.style.overflow = 'auto';
            ele.textContent = 'see less'
            flag = !flag;
        } else {
            const parent = e.target.parentNode;
            const sibling = e.target.previousElementSibling;
            sibling.style.overflow = 'hidden'
            sibling.style.height = '33%'
            ele.textContent = 'see more'
            flag = !flag;
        }
    })
})