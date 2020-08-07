import React, { } from "react"
import Gallery from "./gallery"
import GalleryFilter from "./gallery-filter"
import sal from 'sal.js'

//const GalleryContainer = (props) => {
let categoryFilter = "homepage"
let categoryFilterTxt = "all"
let layoutFilteredGallery

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


const updateFilter = (filterName) => {
  categoryFilter = categoryFilter.replace("homepage", "")



  if (!categoryFilter.includes(filterName)) {
    categoryFilter = categoryFilter + filterName + ","
    // console.log("categoryFilter New! ===" + categoryFilter)
    //layoutFilteredState = "new"
    //console.log("layoutFilteredState === " + layoutFilteredState)
    layoutFilteredGallery = (
      <>
        {/* <GalleryFilter updateFilterClick={updateFilter} /> */}
        <Gallery categoryFilter={categoryFilter} />
      </>
    )
    // } else if (categoryFilter = categoryFilter.replace(filterName + ',', '')) {
  } else {
    categoryFilter = categoryFilter.replace(filterName + ',', '')
    layoutFilteredGallery = (
      <>
        <Gallery categoryFilter={categoryFilter} />
      </>
    )
  }
  if (categoryFilter === '' || null) {
    categoryFilter = 'homepage'
    layoutFilteredGallery = (
      <>
        <Gallery categoryFilter={categoryFilter} />
      </>
    )
  }

  categoryFilterTxt = categoryFilter
  const regex = /,/gi;
  categoryFilterTxt = categoryFilterTxt.replace('homepage', 'all')
  categoryFilterTxt = categoryFilterTxt.replace(regex, ' ')
  categoryFilterTxt = categoryFilterTxt.replace('adult child', 'child & adult')
  categoryFilterTxt = categoryFilterTxt.replace('child adult', 'child & adult')
  //categoryFilterTxt = categoryFilterTxt.replace(regex, " ")

}

class GalleryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterClick = this.handleFilterClick.bind(this)
    this.state = { filterClick: false };

  }

  handleFilterClick(filterName) {
    updateFilter(filterName)
    this.setState({ filterClick: true });
  }

  componentDidUpdate() {
    sal()
    resizeAllGridItems()
    hoverGridItems()
  }

  render() {
    const filterClick = this.state.filterClick;

    if (filterClick) {
      //layoutFilteredGallery = layoutFilteredGallery
    } else {
      categoryFilter = "homepage"
      //categoryFilter = "all"
      layoutFilteredGallery = (
        <>

          <Gallery categoryFilter={'homepage'} />
        </>
      )
    }
    return (
      <>
        <GalleryFilter updateFilterClick={(this.handleFilterClick)} categoryFilterTxt={categoryFilterTxt} />
        {layoutFilteredGallery}
      </>
    )
  }
}

export default GalleryContainer