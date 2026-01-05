import React from 'react'
import style from "../styles/componentsStyle/imageCarousel.module.css"
import { useState } from 'react';
export default function ImageCarousel() {
    const [image, setImage] = useState(0);

    const images = ['https://images.unsplash.com/photo-1725314060496-f4385a151dca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YW1waXJlJTIwZGFyayUyMGdvdGhpY3xlbnwxfHx8fDE3Njc1NjA5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080', 'https://images.unsplash.com/photo-1563480022566-94a6c6637362?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwdmFtcGlyZSUyMGNhc3RsZXxlbnwxfHx8fDE3Njc1NjExMjF8MA&ixlib=rb-4.1.0&q=80&w=1080', 'https://images.unsplash.com/photo-1635319520353-194ef0284701?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YW1waXJlJTIwYmxvb2QlMjBtb29ufGVufDF8fHx8MTc2NzU2MTEyMXww&ixlib=rb-4.1.0&q=80&w=1080', 'https://images.unsplash.com/photo-1643447727844-1e2e31544237?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3RoaWMlMjBjYXRoZWRyYWx8ZW58MXx8fHwxNzY3NDcxNTE0fDA&ixlib=rb-4.1.0&q=80&w=1080']


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
