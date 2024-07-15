import styles from '../mystyle/main.module.scss'
import{FaFacebookSquare,FaInstagramSquare,FaTwitterSquare,FaCopyright} from 'react-icons/fa'
import Link from 'next/link'
export default function Footer(){
    return(
        <>
            <div id={styles.footer_main}>
                <div className={styles.box_container}>
                    <div>
                        <div className={styles.footer_title}>Nos services</div>
                        <p className={styles.footer_text}>
                        Décoration de mariage<br/>
                        Fête d’anniversaire<br/>
                        Restauration<br/>
                        Diner d’exception<br/>
                        Sonorisation<br/>
                        Soirée de gala
                        </p>
                    </div>

                    <div>
                        <div className={styles.footer_title}>Nous contactez</div>
                        <p className={styles.footer_text}>
                            Yaoundé / face ambassade du BRESIL <br/>
                            (+237) 679 79 61 98 <br/>
                            (+237) 694 05 75 83  <br/>
                            ancadecor2020@yahoo.com
                        </p>
                    </div>
                    <div>
                    <div className={styles.footer_title}>suivez nous</div>
                        <p className={styles.footer_text}>
                                <Link href='/' className={styles.lien}><FaFacebookSquare className={styles.icon}/> Facebook</Link>
                                <Link href='/' className={styles.lien}><FaInstagramSquare className={styles.icon}/> Instagram</Link> 
                                <Link href='/' className={styles.lien}><FaTwitterSquare className={styles.icon}/> Twitter</Link> 
                        </p>
                    </div>
                </div>
                <div className={styles.footer2}>
                    <p translate='no' className={styles.footer_text}><FaCopyright/> Copyright  Anca Decor 2023<br/>
                    <Link href='https://www.pagnolconsulting.com/'>by pagnol consulting</Link>
                    </p>
                </div>
            </div>
        </>
    )
}
