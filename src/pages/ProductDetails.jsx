import React from 'react'
import { useParams } from 'react-router'
import Navbar from '../components/Navbar';
import style from "../styles/productDetails.module.css"
import ImageCarousel from '../components/ImageCarousel';
import { Link } from "react-router"
import { IoIosArrowBack } from "react-icons/io";

export default function ProductDetails() {

    const { id } = useParams();
    console.log(id)
    return (
        <div className={style.mainContainer}>
            <Navbar backgroundOn={true} />
            <div className={style.middleContainer}>
                <div className={style.back} >
                    <IoIosArrowBack />
                    <Link to="../browse">Back to Browse</Link>
                </div>
                <ImageCarousel />

            </div>
        </div>
    )
}
