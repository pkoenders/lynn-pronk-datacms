import React from "react"
import Img from 'gatsby-image'
import { Link } from 'gatsby'

//https://github.com/treyhuffine/lightbox-react/blob/master/src/lightbox-react.js
//https://reactjsexample.com/lightbox-for-components-or-images-built-for-react/
import LightboxReact from "lightbox-react"
import "lightbox-react/style.css"

import NonStretchedImage from "./nonStretchedImage"

const Lightbox = ({
    images,
    selectedImage,
    handleClose,
    handlePrevRequest,
    handleNextRequest,
}) => {
    const array = []


    images.forEach(image =>
        //array.push(<NonStretchedImage fluid={image.node.coverImage.fluid} />)

        //array.push(<Img fluid={image.node.coverImage.fluid} />)

        array.push(
            <>
                {/* <h2>{image.node.title}</h2> */}
                <Link to={`/gallery/${image.node.slug}`}  >
                    <img src={image.node.coverImage.url} />
                </Link>
            </>
        )



    )


    return (
        <LightboxReact
            enableZoom={false}
            clickOutsideToClose={false}
            mainSrc={array[selectedImage]}
            nextSrc={array[(selectedImage + 1) % array.length]}
            prevSrc={array[(selectedImage + array.length - 1) % images.length]}
            onCloseRequest={handleClose}
            onMovePrevRequest={handlePrevRequest(selectedImage, array.length)}
            onMoveNextRequest={handleNextRequest(selectedImage, array.length)}
        />
    )
}

export default Lightbox
