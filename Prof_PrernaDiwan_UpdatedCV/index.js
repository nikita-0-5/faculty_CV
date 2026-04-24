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
const othersContainer = document.querySelector(".Others__container")
const otherDivs = Array.from(othersContainer.children);
const left = document.querySelector(".Others__left")
const right = document.querySelector(".Others__right")
const width = document.querySelector(".Others").getBoundingClientRect().width;

otherDivs.forEach((ele, index) => {
    ele.style.left = width * index + 'px'
})
let currentDiv = othersContainer.querySelector(".current__div")
let nextDiv = currentDiv.nextElementSibling;

if (currentDiv.matches(".first")) {
    left.style.opacity = 0;
}
right.addEventListener("click", e => {
    left.style.opacity = .8;
    currentDiv = othersContainer.querySelector(".current__div")
    nextDiv = currentDiv.nextElementSibling;
    if (nextDiv.matches(".last")) {
        right.style.opacity = 0;
    }
    if (currentDiv && nextDiv) {
        const amountToMove = nextDiv.style.left;
        othersContainer.style.transform = 'translateX(-' + amountToMove + ')'
        currentDiv.classList.remove("current__div")
        nextDiv.classList.add("current__div")
    }
})
left.addEventListener("click", e => {
    right.style.opacity = .8;
    const currentDiv = othersContainer.querySelector(".current__div")
    const prevDiv = currentDiv.previousElementSibling;
    if (prevDiv.matches(".first")) {
        left.style.opacity = 0;
    }
    if (currentDiv && prevDiv) {
        const amountToMove = prevDiv.style.left;
        othersContainer.style.transform = 'translateX(-' + amountToMove + ')'

        currentDiv.classList.remove("current__div")
        prevDiv.classList.add("current__div")
    }
})
// const moreDetails = document.querySelector(".more")
// const lessDetails = document.querySelector(".less")
// const profileHidden = document.querySelector(".profile__hidden")

// moreDetails.addEventListener("click", e => {
//     profileHidden.setAttribute('data-hidden', false)
// })
// lessDetails.addEventListener("click", e => {
//     profileHidden.setAttribute('data-hidden', true)
// })

const othersListItem = document.querySelector(".Others__list-item")
othersListItem.addEventListener("click", e => {
    e.preventDefault()
    if (e.target.matches('.college__list__link')) {
        location.href = '#Others'
        return;
    }
    nextDiv = document.querySelector('#' + e.target.href.split("#")[1]);
    currentDiv = document.querySelector(".current__div")

    if (nextDiv && currentDiv) {
        const amountToMove = nextDiv.style.left;
        othersContainer.style.transform = 'translate(-' + amountToMove + ')'
        nextDiv.classList.add("current__div")
        currentDiv.classList.remove("current__div")

        if (!nextDiv.matches(".first"))
            left.style.opacity = .8
        if (nextDiv.matches(".last"))
            right.style.opacity = 0
        else if (nextDiv.matches(".first")) {
            left.style.opacity = 0;
        }
    }
    location.href = '#Others'
})
const seemore = document.querySelectorAll(".btn__seemore")
seemore.forEach(ele => {
    let flag = false;
    ele.addEventListener("click", e => {
        console.log('hello')
        if (!flag) {
            const parent = e.target.parentNode;
            const sibling = e.target.previousElementSibling;
            sibling.style.overflow = 'auto'
            sibling.style.height = '70%'
            parent.style.overflow = 'auto';
            ele.textContent = 'see less'
            flag = !flag;
        }
        else {
            const parent = e.target.parentNode;
            const sibling = e.target.previousElementSibling;
            sibling.style.overflow = 'hidden'
            sibling.style.height = '33%'
            ele.textContent = 'see more'
            flag = !flag;
        }
    })
    
})