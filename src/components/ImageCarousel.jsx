import React, { useEffect, useState } from 'react';
import style from "../styles/componentsStyle/imageCarousel.module.css";

export default function ImageCarousel({ images }) {
    const [image, setImage] = useState(0);

    const list = [
        images?.background,
        ...(images?.screenshots || [])
    ].filter(Boolean);

    useEffect(() => {
        if (!list.length) return;

        const interval = setInterval(() => {
            setImage(prev => (prev === list.length - 1 ? 0 : prev + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, [list]);

    if (!list.length) return null;

    return (
        <div className={style.mainContainer}>
            <img className={style.mainImage} src={list[image]} />

            <div className={style.photosContainer}>
                {list.map((item, index) => (
                    <div
                        key={index}
                        className={`${style.subImage} ${index === image ? style.selected : style.notSelected}`}
                    >
                        <img src={item} onClick={() => setImage(index)} />
                    </div>
                ))}
            </div>
        </div>
    );
}
