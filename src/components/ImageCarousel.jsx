import React from 'react'
import style from "../styles/componentsStyle/imageCarousel.module.css"
import { useState } from 'react';
export default function ImageCarousel() {
    const [image, setImage] = useState(0);

    const images = ['https://media.rawg.io/media/games/526/526881e0f5f8c1550e51df3801f96ea3.jpg', 'https://media.rawg.io/media/screenshots/b9c/b9c6546ce1488f918e6373073d800fa7.jpg', 'https://media.rawg.io/media/screenshots/801/801c5b2489abedcddf4acd94da35daaf.jpg', 'https://media.rawg.io/media/screenshots/0f7/0f7bb8958b46684d773c75d26008d800.jpg']


    return (
        <div className={style.mainContainer}>
            <img className={style.mainImage} src={images[image]} />
            <div className={style.photosContainer}>
                {
                    images.map((item, index) => {
                        return <div className={`${style.subImage} ${index == image ? style.selected : style.notSelected}`} ><img onClick={() => setImage(index)} key={index} src={item} /></div>
                    })
                }
            </div>
        </div>
    )
}
