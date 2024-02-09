import React from 'react';

const ImageList = (props) => {

    const allImages = props.images.map((image) => {
        return <img className="m-2 rounded-xl" key={image.id} src={image.webformatURL} alt="image"/>
    })
    return(
        <div className='w-full flex flex-wrap justify-center overflow-x-hidden'>
            {allImages}
        </div>
    )
}

export default ImageList;