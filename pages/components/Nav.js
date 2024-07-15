import React from 'react'
import styles from '../mystyle/main.module.scss'
import Logo from '../images/ancalogo1.png'
import {FaBars} from 'react-icons/fa'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'


export default function Nav(){

    const [isopen,setIsopen]=useState(false);
    const togglemenu =()=>{
        setIsopen(!isopen)
    }
    return(
        <>
            <div className={styles.navMAin}>
                <div className={styles.barsConterner}>
                    <FaBars className={styles.barsIcon} onClick={togglemenu}/>
                </div>
                <div className={styles.logoContainer}>
                    <Image src={Logo} className={styles.navLogo} />
                </div>
                <div className={`${isopen?styles.on:styles.off}`}>
                    <div className={styles.linkContainer}>
                        <Link  onClick={togglemenu}  href='/'  className={styles.navLink}>Acceuil</Link>
                        <Link  onClick={togglemenu}  href='../realisation/Realisation'  className={styles.navLink}>Réalisations</Link>
                        <Link  onClick={togglemenu}  href='../equipe/Equipe'  className={styles.navLink}>L'équipe</Link>
                        <Link  onClick={togglemenu}  href='https://wa.me/692638390'  className={styles.navLink}>Contacts</Link>
                    </div>
                </div>

            </div>
        </>
    )
}