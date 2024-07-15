import styles from '../mystyle/main.module.scss'
import { useState } from 'react'
import Image from 'next/image'
import Pic1 from '../images/img11.jpg'
import Pic2 from '../images/img2.jpg'
import Pic3 from '../images/img9.jpg'
import Pic4 from '../images/img3.jpg'

export default function Equipe(){
    const [data,setData]= useState([
        {
            title:'Andela Mêle Carine épse NDZANA',
            poste:'PDG',
            Pic:Pic1,
            text:'Je suis Andela Mêle Carine épse NDZANA, fondatrice de la maison de décoration ANCA et bienvenu(e) sur notre site. ANCA a le devoir de transformer chaque endroit de décoration en un lieu féerique en répondant aux attentes des clients. Ma vision à long terme est de faire d’ANCA DÉCOR une grande maison hospitalière qui sublime tous les événements et accessible à tous. Je vous invite donc dans notre univers qui sera bientôt le vôtre'
        },
        {
            title:'Frédérique',
            poste:'DAF',
            Pic:Pic2,
            text:'Je suis Frédérique responsable de la direction financière, je met un point d’honneur à organiser la partie financière et et économie de l’entreprise ANCA DÉCOR . Dans cette même optique, nous nous engageons à proposer des services rationnels à la portée de tous. '
        },
       {
        title:'Armand',
        poste:'COMMUNICATION',
        Pic:Pic3,
        text:'Je suis Armand, chargé de la communication d’ANCA DÉCOR. C’est toujours un plaisir de parler d’ANCA et d’établir un communication stable entre le client et la maison. Ceci dit, j’ai pour rôle d’écouter les recommandations des clients avec attention et retransmettre fidèlement à la maison en vu de répondre à ses attentes. Pour moi, ANCA décor is still the best '
       },
       {
        title:'Diane',
        poste:'SECRÉTAIRE',
        Pic:Pic4,
        text:'Je suis Diane, j’occupe le poste assistante et secrétaire depuis quelques mois. Je suis l’auxiliaire et le relais entre les départements de ANCA pour assurer un travail professionnel'
       }
    ])
    return(
        <>
            <div id={styles.service_main}>
                    <div className={styles.title1}>Notre équipe</div>
                    <div className={styles.grille_box}>
                            {data.map((infos,index)=>(
                                <div className={styles.box} key={index}>
                                    <Image src={infos.Pic} className={styles.photo} />
                                    <div className={styles.title}>{infos.title} <span className={styles.poste} > ({infos.poste})</span> </div>    
                                    <div className={styles.texteEquipe}>{infos.text} </div>    
                                </div>
                            ))}
                    </div>
            </div>
        </>
    )
}