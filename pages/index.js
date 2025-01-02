import Head from 'next/head'
import { Inter } from 'next/font/google'
import Nav from './components/Nav'
import styles from '../pages/mystyle/main.module.scss'
import Link from 'next/link'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import Image from 'next/image'
import {AiOutlineFileText} from 'react-icons/ai'
import SroolPic from '../pages/images/img5.jpg'



import { useState } from 'react'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [data,setData]= useState([
    {
        title:'Décoration de mariage',
        Pic:'/services/service1.jpg',
        text:'Eblouissez vos invités impériale pour une cérémonie indoor ou en air libre'
    },
    {
        title:'Fête d\’anniversaire',
        Pic:'/services/service2.jpg',
        text:'Véritable invitation à la convivialité, votre soirée d\’anniversaire marquera les esprits de vos invités'
    },
   {
    title:'Restauration',
    Pic:'/services/service5.jpg',
    text:'Faites chavirer les papilles de vos invités à travers des saveurs locales et exotiques pour un voyages appétissant'
   },
   {
    title:'Diner d\’exception',
    Pic:'/services/service6.jpg',
    text:'Célébrez un évènement de façcon extra au tour d\’un verre entre connaissance dans l\’art de la modernité chic'
   },
   {
    title:'Sonorisation',
    Pic:'/services/service4.jpg',
    text:'Rien de tel qu\’une belle embiance pour annimer vos soirées ett faire danser vos invités'
   },
   {
    title:'Soirée de gala',
    Pic:'/services/service3.jpg',
    text:'Véritable invitation à la convivialité, votre soirée de gala marquera les esprits de vos invités'
   }
])
  return (
    <>
      <Head>
        <title>Anca Decor</title>
        <meta name="description" content="site officiel de anca decor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* baner */}
      <div id={styles.banner_main}>
          <div className={styles.banner_text1}>Bienvenue chez</div>
          <div className={styles.banner_text2}>Anca Decor</div>
          <Link href='https://wa.me/692638390'>
            <div className={styles.banner_botton}>
              Contactez nous
            </div>
          </Link> 
          <Link href='https://wa.me/692638390'>
            <div className={styles.whastapp_button}><AiOutlineWhatsApp className={styles.whastapp_button_size}/></div>
          </Link> 
           {/* file button
          <a  href='../files/acadecor.pdf'>
            <div className={styles.book_button}><AiOutlineFileText className={styles.whastapp_button_size}/></div>
          </a> 
           */}
      </div>

       {/* end baner */}

       {/* about */}

       <div id={styles.about_main}>
          <div className={styles.title1}>A propos de nous</div>
          <div className={styles.text}>
              ANCA est une agence évènementielle spécialisée dans la décoration de luxe, elle imagine et conçoit vos projets juqu'à son aboutissement.
              Fondé en 2010 par sa promotrice ANDELA CARINE Epse NDZANA passionée de décoration épurés, elle étend son activité dans plusieurs villes du cameroun à l'instar de SANGMELIMA et YAOUNDE où est basé son siège social. Elle 
              prend le soin de sélèctionner minitieusement les pièces les plus précieusement et luxueuses et les saupoudres de créativité afin
              de vous affrir un résultat magique <br/><br/>
              ANCA a pour mission de rendre chaque rêve et chaque attente des clients une réalité accessible et réussie. Compte tenu des exigeances des clients, nous avons pour objectifs de : <br/>
              <b>Respecter les critères et choix pour répondre à leur attentes - puiser dans l'imagination des organisation et offrir un résultat satisfaisant - Créer son univers et faire régner son ambiance</b><br/><br/>
              ANCA à pour vision de rendre la décoration une véritable ambiance conviviale au coeur des évènements
          </div>
       </div>

       {/* end about */}

       {/* srollBox 
        <div id={styles.scrollboxMain}>
        </div>
        */}

        <div className={styles.scroll}>
            <img src={SroolPic} className={styles.scrollImage}/>
        </div>

       {/* end srollBox */}


       {/* services */}
        <div id={styles.service_main}>
          <div className={styles.title1}>Nos services</div>
          <div className={styles.grille_box}>
                    {data.map((infos,index)=>(
                        <div className={styles.box} key={index}>
                            <img src={infos.Pic} className={styles.photo} />
                            <div className={styles.title}>{infos.title} </div>    
                            <div className={styles.texte}>{infos.text} </div>    
                        </div>
                    ))}
          </div>
        </div>
       {/* end services */}



      
    </>
  )
}
