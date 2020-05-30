import React, { } from "react"
import blogStyles from '../pages/portfolio.module.scss'

function GalleryFilter({ categoryFilterTxt, updateFilterClick }) {
  function clickFilter(e) {
    let thisFilter = e.target.id
    updateFilterClick(thisFilter)
  }

  return (
    <div className={blogStyles.filterPosts}>
      <p>Viewing {categoryFilterTxt} portraits</p>
      <span>
        <button
          type="button"
          name="Child Portraits"
          id='child'
          className='buttonSecondary filterGalleryBtn'
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
          className='buttonSecondary filterGalleryBtn'
          onClick={clickFilter}
        >
          Adult Portraits
        </button>
      </span>
    </div >
  )
}

export default GalleryFilter
