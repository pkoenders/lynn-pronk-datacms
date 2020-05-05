// mediumZoom
import mediumZoom from 'medium-zoom'

// @see https://github.com/francoischalifour/medium-zoom#options
const defaultOptions = {
    //maxWidth: 800,
    margin: 0,
    background: '#dad8d8',
    scrollOffset: 40,
    // container: null,
    // template: null,
    zIndex: 9999,
    // excludedSelector: null,
}

// @see https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-remark-images/src/constants.js#L1
const imageClass = '.mediumZoomImage img'

const FIRST_CONTENTFUL_PAINT = 'first-contentful-paint'
const ZOOM_STYLE_ID = 'medium-zoom-styles'
const TRANSITION_EFFECT = 'opacity 0.5s, transform .3s cubic-bezier(.2,0,.2,1)'

function onFCP(callback) {
    if (!window.performance) {
        return
    }

    const po = new PerformanceObserver(list =>
        list
            .getEntries()
            .filter(({ entryType }) => entryType === 'paint')
            .map(({ name }) => name === FIRST_CONTENTFUL_PAINT)
            .forEach(callback)
    )

    try {
        po.observe({ entryTypes: ['measure', 'paint'] })
    } catch (e) {
        console.error(e)
        po.disconnect()
    }
}

function injectStyles(options) {
    const styleTag = document.querySelector(`#${ZOOM_STYLE_ID}`)
    if (styleTag) {
        return
    }

    const { zIndex } = options
    const node = document.createElement('style')
    const styles = `
      .medium-zoom--opened > .medium-zoom-overlay,
      .medium-zoom--opened > .medium-zoom-image,
        img.medium-zoom-image--opened {
        z-index: ${zIndex}
      }
    `
    node.id = ZOOM_STYLE_ID
    node.innerHTML = styles
    document.head.appendChild(node)
}

function applyZoomEffect({ excludedSelector, includedSelector, ...options }) {
    const imagesSelector = excludedSelector
        ? `${imageClass}:not(${excludedSelector})`
        : imageClass

    let imageElements = Array.from(document.querySelectorAll(imagesSelector))
    if (includedSelector) {
        const includedEls = Array.from(document.querySelectorAll(includedSelector))
        imageElements = imageElements.concat(includedEls)
    }
    const images = imageElements
        .filter(el => !el.classList.contains('medium-zoom-image'))
        .map(el => {
            function onImageLoad() {
                const originalTransition = el.style.transition
                el.style.transition = `${originalTransition}, ${TRANSITION_EFFECT}`
                el.removeEventListener('load', onImageLoad)
            }
            el.addEventListener('load', onImageLoad)
            el.setAttribute('tabIndex', 0)
            el.addEventListener('keydown', e => {
                if (e.key === ' ' || e.key === 'Enter') {
                    e.preventDefault()
                    el.click()
                }
            })
            return el
        })

    if (images.length > 0) {
        mediumZoom(images, options)
    }
}
// export const onRouteUpdate = (_, pluginOptions) => {
//     const options = { ...defaultOptions, ...pluginOptions }
//     injectStyles(options)

//     onFCP(() => applyZoomEffect(options))
//     applyZoomEffect(options)
// }


export const onRouteUpdate = (_, pluginOptions) => {

    // if (window.innerWidth >= 768) {
    //     mediumZoom('.mediumZoomImage img', {
    //         container: {
    //             // width: 720,
    //             // height: 480,
    //             // top: 64,
    //             // bottom: 64,
    //             // right: 0,
    //             left: 300,
    //         },
    //     })
    // } else {
    //     mediumZoom('.mediumZoomImage img', {
    //         container: {
    //             // width: 720,
    //             // height: 480,
    //             // top: 64,
    //             // bottom: 64,
    //             // right: 0,
    //             left: 0,
    //         },
    //     })
    // }


    // 'load scroll touchmove resize'.split(" ").forEach(function (e) {
    //     window.addEventListener(e, (_, pluginOptions) => {
    //         if (window.innerWidth >= 768) {
    //             mediumZoom('.mediumZoomImage img', {
    //                 container: {
    //                     left: 300,
    //                 },
    //             })

    //         } else {
    //             mediumZoom('.mediumZoomImage img', {
    //                 container: {
    //                     left: 0,
    //                 },
    //             })
    //         }

    //         const options = { ...defaultOptions, ...pluginOptions }
    //         console.log('ZoomOptions 1 = ' + options)
    //         injectStyles(options)
    //         onFCP(() => applyZoomEffect(options))
    //         applyZoomEffect(options)

    //     })
    // });

    mediumZoom('.mediumZoomImage img', {
        container: {
            // width: 720,
            // height: 480,
            // top: 64,
            // bottom: 64,
            right: 0,
            left: 0,
        },

    })

    const options = { ...defaultOptions, ...pluginOptions }
    //console.log('ZoomOptions 1 = ' + options)
    injectStyles(options)
    onFCP(() => applyZoomEffect(options))
    applyZoomEffect(options)





    // Load page
    document.addEventListener("DOMContentLoaded", ready());

    // Scroll etc
    'scroll touchmove resize'.split(" ").forEach(function (e) {
        window.addEventListener(e, () => {
            //initStickyHeader()
            resizeAllGridItems()
            //mobileNav()
        })
    });

    //Resize
    window.addEventListener('resize', () => {
        mobileNavOnResize()
    })

}




function ready() {
    //alert('DOM is ready');
    resizeAllGridItems()
    hoverGridItems()
    mobileNav()
    mobileFilterGallery()

    // document.getElementsByClassName('ril-close')[0]
    //     .addEventListener('click', function (e) {
    //         handleClose(true);
    //     });

    //initStickyHeader()
}

function initStickyHeader() {
    var navBar = document.getElementById("myTopnav")
    var sticky = document.querySelector("#myHeader > div").offsetHeight
    setStickyNav(navBar, sticky)
}


function toggleMobileNavOnClick(hamBurgerBtn, headerDiv, layoutModule) {
    hamBurgerBtn.addEventListener("click", function () {
        //console.log('Hamburger Clicked')
        if (headerDiv.offsetHeight <= 50) {
            headerDiv.style.height = `auto`;
            headerDiv.style.maxHeight = 100 + `%`
            headerDiv.classList.add("headerOpen")
            hamBurgerBtn.classList.add("is-active")
            //console.log('Hamburger Clicked 2')

        } else {
            headerDiv.style.maxHeight = 50 + `px`
            headerDiv.style.height = 50 + `px`
            headerDiv.classList.remove("headerOpen")
            hamBurgerBtn.classList.remove("is-active")
        }
    });

    [headerDiv, layoutModule].forEach(function (element) {
        element.addEventListener("click", function () {
            console.log('headerDiv, layoutModule Clicked')
            if (headerDiv.classList.contains('headerOpen')) {
                headerDiv.style.maxHeight = 50 + `px`
                headerDiv.style.height = 50 + `px`
                headerDiv.classList.remove("headerOpen")
                hamBurgerBtn.classList.remove("is-active")
            }
        })
    })
}

function mobileNav() {
    const hamBurgerBtn = document.querySelector('.hamburger')
    const headerDiv = document.getElementById("myHeader")
    const layoutModule = document.getElementById("layoutModule")
    toggleMobileNavOnClick(hamBurgerBtn, headerDiv, layoutModule)
}


function toggleMobileNavOnResize(headerDiv, hamBurgerBtn) {
    if (window.innerWidth >= 768) {
        //console.log('Widow is > 576px')
        headerDiv.style.height = `auto`
        headerDiv.style.maxHeight = 100 + `% `
        headerDiv.classList.remove("headerOpen")
        hamBurgerBtn.classList.remove("is-active")
    } else {
        headerDiv.style.height = `auto`
        headerDiv.style.maxHeight = 50 + `px`
        hamBurgerBtn.classList.remove("is-active")
    }

    if ((window.innerWidth < 768) && (headerDiv.classList.contains('headerOpen'))) {
        headerDiv.style.height = `auto`
        headerDiv.style.maxHeight = 100 + `% `
        hamBurgerBtn.classList.add("is-active")
    }
}
function mobileNavOnResize() {
    const headerDiv = document.getElementById("myHeader")
    const hamBurgerBtn = document.querySelector('.hamburger')
    toggleMobileNavOnResize(headerDiv, hamBurgerBtn)
}


function mobileFilterGalleryItem(e) {
    e.addEventListener("click", function () {
        if (!e.classList.contains('active')) {
            e.classList.add("active")
        } else {
            e.classList.remove("active")
        }

    });
}

function mobileFilterGallery() {
    const allItems = document.querySelectorAll('.filterGalleryBtn')
    for (let x = 0; x < allItems.length; x += 1) {
        mobileFilterGalleryItem(allItems[x])
    }
}




function setStickyNav(navBar, sticky) {
    var headerDiv = document.getElementById("myHeader")
    var headerHeight = headerDiv.offsetHeight

    if (window.pageYOffset >= sticky) {
        navBar.classList.add("sticky-nav")
        headerDiv.style.height = headerHeight + "px"
    } else {
        navBar.classList.remove("sticky-nav")
    }
}

// Resize grid
const resizeGridItem = (item) => {
    const grid = document.querySelector('.grid'),
        rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows')),
        rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap')),
        rowSpan = Math.ceil((item.querySelector('.item-content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap))
    item.style.gridRowEnd = `span ${rowSpan} `

},
    resizeAllGridItems = () => {
        const allItems = document.querySelectorAll('.item')
        for (let x = 0; x < allItems.length; x += 1) {
            resizeGridItem(allItems[x])
        }
    }

// Fancy hover the grid
const hoverGridItem = (hoverItem) => {
    hoverItem.addEventListener("mouseover", function (evt) {
        //console.log('hover gallery item')
        var spin = 0
        var precision = 1000
        //spin = Math.floor(Math.random() * (4.00)),
        spin = Math.floor(Math.random() * (1.00 * precision - 1 * precision) + 1 * precision) / (1 * precision)
        spin *= Math.floor(Math.random() * 2) === 1 ? 1 : -1
        hoverItem.style.transform = `rotate(` + spin + `deg)`
    })
    hoverItem.addEventListener("mouseout", function (evt) {
        hoverItem.style.transform = `rotate(` + 0 + `deg)`
    })
},
    hoverGridItems = () => {
        const allHoverItems = document.querySelectorAll('.item')
        for (let x = 0; x < allHoverItems.length; x += 1) {
            hoverGridItem(allHoverItems[x])
        }
    }