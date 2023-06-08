import React from 'react';
import { useSelector } from 'react-redux';

import { selectLayeredImage } from "./layeredImageSlice";
import styles from './LayeredImage.module.css'

export function LayeredImage() {
    const imageLayers = useSelector(selectLayeredImage);
    console.log("Image Layers in component: ", imageLayers);
    return (
        <div className={styles.imageContainer} >
            <img src={imageLayers.background.url} className={`${styles.imageLayer} ${styles.one}`} />
            <img src={imageLayers.aura.url} className={`${styles.imageLayer} ${styles.two}`} />
            <img src={imageLayers.base.url} className={`${styles.imageLayer} ${styles.three}`} />
            <img src={imageLayers.clothes.url} className={`${styles.imageLayer} ${styles.four}`} />
            <img src={imageLayers.chain.url} className={`${styles.imageLayer} ${styles.five}`} />
            <img src={imageLayers.head.url} className={`${styles.imageLayer} ${styles.six}`} />
            <img src={imageLayers.eyes.url} className={`${styles.imageLayer} ${styles.seven}`} />
            <img src={imageLayers.mouth.url} className={`${styles.imageLayer} ${styles.eight}`} />
        </div>
    );
}