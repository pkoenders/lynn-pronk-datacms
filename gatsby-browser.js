
import mediumZoom from 'medium-zoom'
export const onRouteUpdate = () => {
    //mediumZoom('.medium-zoom-image div img')
    mediumZoom('.medium-zoom-image picture img')

    // 'figure.zoom-effect'

    // Load page
    document.addEventListener("DOMContentLoaded", ready())

    // Scroll etc
    //"scroll touchmove resize".split(" ").forEach(function (e) {
    "resize".split(" ").forEach(function (e) {
        window.addEventListener(e, () => {
            //initStickyHeader()
            resizeAllGridItems()
            //mobileNav()
        })
    })

    //Resize
    window.addEventListener("resize", () => {
        mobileNavOnResize()
    })
}

function ready() {
    //alert('DOM is ready');

    mediumZoom('.medium-zoom-image picture img')
    resizeAllGridItems()
    hoverGridItems()
    mobileNav()
    filterGalleryBtns()
}

function toggleMobileNavOnClick(hamBurgerBtn, headerDiv, layoutModule) {
    hamBurgerBtn.addEventListener("click", function () {
        headerDiv.scrollTop = 0
        //console.log('Hamburger Clicked')
        if (headerDiv.offsetHeight <= 50) {
            headerDiv.style.height = `100vh`
            headerDiv.style.overflowY = `auto`
            headerDiv.classList.add("headerOpen")
            hamBurgerBtn.classList.add("is-active")
            //console.log('Hamburger Clicked 2')
        } else {
            headerDiv.style.height = 50 + `px`
            headerDiv.style.overflowY = `hidden`
            headerDiv.classList.remove("headerOpen")
            hamBurgerBtn.classList.remove("is-active")
        }
    });

    [headerDiv, layoutModule].forEach(function (element) {
        element.addEventListener("click", function () {
            //console.log('headerDiv, layoutModule Clicked')
            if (headerDiv.classList.contains("headerOpen")) {
                headerDiv.style.height = 50 + `px`
                headerDiv.style.overflowY = `hidden`
                headerDiv.classList.remove("headerOpen")
                hamBurgerBtn.classList.remove("is-active")
            }
        })
    })
}

function mobileNav() {
    const hamBurgerBtn = document.querySelector(".hamburger")
    const headerDiv = document.getElementById("myHeader")
    const layoutModule = document.getElementById("layoutModule")

    toggleMobileNavOnClick(hamBurgerBtn, headerDiv, layoutModule)
}

function toggleMobileNavOnResize(headerDiv, hamBurgerBtn) {
    if (window.innerWidth >= 768) {
        headerDiv.scrollTop = 0
        //console.log('Widow is > 576px')
        headerDiv.style.height = `100vh`
        headerDiv.style.overflowY = `auto`

        headerDiv.classList.remove("headerOpen")
        hamBurgerBtn.classList.remove("is-active")
    } else {
        headerDiv.style.height = 50 + `px`
        headerDiv.style.scrollTop = 0
        headerDiv.style.overflowY = `hidden`
        hamBurgerBtn.classList.remove("is-active")
    }

    if (window.innerWidth < 768 && headerDiv.classList.contains("headerOpen")) {
        headerDiv.scrollTop = 0
        headerDiv.style.height = `auto`
        headerDiv.style.maxHeight = 100 + `% `
        headerDiv.style.overflowY = `auto`
        hamBurgerBtn.classList.add("is-active")
    }
}
function mobileNavOnResize() {
    const headerDiv = document.getElementById("myHeader")
    const hamBurgerBtn = document.querySelector(".hamburger")
    toggleMobileNavOnResize(headerDiv, hamBurgerBtn)
}

function filterGalleryItem(e, listAll) {
    e.addEventListener("click", function () {
        if (!e.classList.contains("isActive")) {
            //filterGalleryClick()
            e.classList.add("isActive")
        } else {
            e.classList.remove("isActive")
        }

        // if (e.id === 'all') {
        //     //console.log("categoryFilter === All ")
        //     //console.log("categoryFilterRemove === " + allItems)
        //     for (let x = 0; x < listAll.length; x += 1) {
        //         x.classList.remove("isActive")
        //     }
        // }
    })
}

function filterGalleryBtns() {
    const allItems = document.querySelectorAll(".filterGalleryBtn")
    for (let x = 0; x < allItems.length; x += 1) {
        filterGalleryItem(allItems[x], allItems)
    }
}

// Resize grid
const resizeGridItem = item => {
    const grid = document.querySelector(".grid"),
        rowHeight = parseInt(
            window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
        ),
        rowGap = parseInt(
            window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
        ),
        rowSpan = Math.ceil(
            (item.querySelector(".item-content").getBoundingClientRect().height +
                rowGap) /
            (rowHeight + rowGap)
        )
    item.style.gridRowEnd = `span ${rowSpan} `
    //console.log("Grid updated")
},
    resizeAllGridItems = () => {
        const allItems = document.querySelectorAll(".item")
        for (let x = 0; x < allItems.length; x += 1) {
            resizeGridItem(allItems[x])
        }
    }

// Fancy hover the grid
const hoverGridItem = hoverItem => {
    hoverItem.addEventListener("mouseover", function (evt) {
        //console.log('hover gallery item')
        var spin = 0
        var precision = 1000
        //spin = Math.floor(Math.random() * (4.00)),
        spin =
            Math.floor(
                Math.random() * (1.0 * precision - 1 * precision) + 1 * precision
            ) /
            (1 * precision)
        spin *= Math.floor(Math.random() * 1.5) === 1 ? 1 : -1
        hoverItem.style.transform = `rotate(` + spin + `deg)`
    })
    hoverItem.addEventListener("mouseout", function (evt) {
        hoverItem.style.transform = `rotate(` + 0 + `deg)`
    })
},
    hoverGridItems = () => {
        const allHoverItems = document.querySelectorAll(".item")
        for (let x = 0; x < allHoverItems.length; x += 1) {
            hoverGridItem(allHoverItems[x])
        }
    }
