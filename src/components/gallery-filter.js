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

      {/* <span>
        <button
          type="button"
          name="All Portraits"
          id='all'
          class="buttonSecondary filterGalleryBtn"
          onClick={clickFilter}
        >
          Show all
        </button>
      </span> */}

      <p>Viewing {categoryFilterTxt} portraits</p>

    </div >
  )
}

export default GalleryFilter
