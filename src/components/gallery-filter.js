import React, { useState } from "react"
import blogStyles from "../pages/portfolio.module.scss"

function GalleryFilter({ categoryFilterTxt, updateFilterClick }) {
  const [active, setActive] = useState()




  function clickFilter(e) {
    //console.log("e.target.name === " + e.target.name)



    let thisFilter = e.target.id
    updateFilterClick(thisFilter)
    //setActive(prevState => !prevState)
  }

  return (
    <div className={blogStyles.filterPosts}>
      <p>Viewing {categoryFilterTxt} portraits</p>
      <span>
        <button
          type="button"
          name="Child Portraits"
          id='child'
          class="buttonSecondary filterGalleryBtn"
          className={'buttonSecondary' + ' ' + 'filterGalleryBtn'}
          onClick={clickFilter}
        >
          Child Portraits
        </button>
      </span>
      <span>
        <button
          type="button"
          name="Adult Portraits"
          id='adult'
          class="buttonSecondary filterGalleryBtn"
          className={'buttonSecondary' + ' ' + 'filterGalleryBtn'}
          //className={'buttonSecondary' + ' ' + 'filterGalleryBtn' + (active ? ' isActive' : '')}
          onClick={clickFilter}
        //onClick={handleToggle}

        >
          Adult Portraits
        </button>
      </span>
    </div >
  )
}

export default GalleryFilter
