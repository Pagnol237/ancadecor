import styles from '../mystyle/main.module.scss'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { db } from '../../firebase'
import {collection,getDocs,query} from 'firebase/firestore'

import Pic39 from '../images/realisations/deco-39.JPG'
import Pic40 from '../images/realisations/deco-40.JPG'
import Pic41 from '../images/realisations/deco-41.JPG'
import Pic42 from '../images/realisations/deco-43.JPG'
import Pic44 from '../images/realisations/deco-44.JPG'
import Pic45 from '../images/realisations/deco-45.JPG'
import Pic46 from '../images/realisations/deco-46.JPG'
import Pic47 from '../images/realisations/deco-47.JPG'
import Pic48 from '../images/realisations/deco-48.JPG'
import Pic49 from '../images/realisations/deco-49.JPG'
import Pic50 from '../images/realisations/deco-50.JPG'
import Pic51 from '../images/realisations/deco-51.JPG'
import Pic52 from '../images/realisations/deco-52.JPG'
import Pic53 from '../images/realisations/deco-53.JPG'
import Pic54 from '../images/realisations/deco-54.JPG'
import Pic55 from '../images/realisations/deco-55.JPG'
import Pic56 from '../images/realisations/deco-56.JPG'
import Pic57 from '../images/realisations/deco-57.JPG'
import Pic58 from '../images/realisations/deco-58.JPG'
import Pic59 from '../images/realisations/deco-59.JPG'
import Pic60 from '../images/realisations/deco-60.JPG'
import Pic61 from '../images/realisations/deco-61.JPG'
import Pic62 from '../images/realisations/deco-62.JPG'
import Pic63 from '../images/realisations/deco-63.JPG'
import Pic64 from '../images/realisations/deco-64.JPG'
import Pic65 from '../images/realisations/deco-65.JPG'
import Pic66 from '../images/realisations/deco-66.JPG'
import Pic67 from '../images/realisations/deco-67.JPG'
import Pic68 from '../images/realisations/deco-68.JPG'
import Pic69 from '../images/realisations/deco-69.JPG'
import Pic70 from '../images/realisations/deco-70.JPG'
import Pic71 from '../images/realisations/deco-71.JPG'
import Pic72 from '../images/realisations/deco-72.JPG'
import Pic73 from '../images/realisations/deco-73.JPG'
import Pic74 from '../images/realisations/deco-74.JPG'
import Pic75 from '../images/realisations/deco-75.JPG'
import Pic77 from '../images/realisations/deco-77.JPG'
import Pic78 from '../images/realisations/deco-78.JPG'
import Pic79 from '../images/realisations/deco-79.JPG'
import Pic80 from '../images/realisations/deco-80.JPG'
import Pic81 from '../images/realisations/deco-81.JPG'
import Pic82 from '../images/realisations/deco-82.JPG'
import Pic83 from '../images/realisations/deco-83.JPG'
import Pic84 from '../images/realisations/deco-84.JPG'
import Pic85 from '../images/realisations/deco-85.JPG'
import Pic86 from '../images/realisations/deco-86.JPG'
import Pic87 from '../images/realisations/deco-87.JPG'
import Pic88 from '../images/realisations/deco-88.JPG'
import Pic89 from '../images/realisations/deco-89.JPG'
import Pic90 from '../images/realisations/deco-90.JPG'
import Pic91 from '../images/realisations/deco-91.JPG'
import Pic92 from '../images/realisations/deco-92.JPG'
import Pic93 from '../images/realisations/deco-93.JPG'
import Pic94 from '../images/realisations/deco-94.JPG'
import Pic95 from '../images/realisations/deco-95.JPG'
import Pic96 from '../images/realisations/deco-96.JPG'
import Pic97 from '../images/realisations/deco-97.JPG'
import Pic98 from '../images/realisations/deco-98.JPG'
import Pic99 from '../images/realisations/deco-99.JPG'
import Pic100 from '../images/realisations/deco-100.JPG'
import Pic101 from '../images/realisations/deco-101.JPG'
import Pic102 from '../images/realisations/deco-102.JPG'
import Pic103 from '../images/realisations/deco-103.JPG'
import Pic104 from '../images/realisations/deco-104.JPG'
import Pic105 from '../images/realisations/deco-105.JPG'
import Pic106 from '../images/realisations/deco-106.JPG'
import Pic107 from '../images/realisations/deco-107.JPG'
import Pic108 from '../images/realisations/deco-108.JPG'
import Pic109 from '../images/realisations/deco-109.JPG'
import Pic110 from '../images/realisations/deco-110.JPG'
import Pic111 from '../images/realisations/deco-111.JPG'
import Pic112 from '../images/realisations/deco-112.JPG'
import Pic113 from '../images/realisations/deco-113.JPG'
import Pic114 from '../images/realisations/deco-114.JPG'
import Pic115 from '../images/realisations/deco-115.JPG'
import Pic116 from '../images/realisations/deco-116.JPG'
import Pic117 from '../images/realisations/deco-117.JPG'
import Pic118 from '../images/realisations/deco-118.JPG'
import Pic119 from '../images/realisations/deco-119.JPG'
import Pic120 from '../images/realisations/deco-120.JPG'
import Pic121 from '../images/realisations/deco-121.JPG'
import Pic122 from '../images/realisations/deco-122.JPG'
import Pic123 from '../images/realisations/deco-123.JPG'
import Pic124 from '../images/realisations/deco-124.JPG'
import Pic125 from '../images/realisations/deco-125.JPG'
import Pic126 from '../images/realisations/deco-126.JPG'
import Pic127 from '../images/realisations/deco-127.JPG'
import Pic128 from '../images/realisations/deco-128.JPG'
import Pic129 from '../images/realisations/deco-129.JPG'
import Pic130 from '../images/realisations/deco-130.JPG'
import Pic131 from '../images/realisations/deco-131.JPG'
import Pic132 from '../images/realisations/deco-132.JPG'
import Pic134 from '../images/realisations/deco-134.JPG'
import Pic135 from '../images/realisations/deco-135.JPG'
import Pic136 from '../images/realisations/deco-136.JPG'
import Pic137 from '../images/realisations/deco-137.JPG'
import Pic138 from '../images/realisations/deco-138.JPG'
import Pic139 from '../images/realisations/deco-139.JPG'
import Pic141 from '../images/realisations/deco-141.JPG'
import Pic140 from '../images/realisations/deco-140.JPG'
import Pic142 from '../images/realisations/deco-142.JPG'
import Pic143 from '../images/realisations/deco-143.JPG'
import Pic144 from '../images/realisations/deco-144.JPG'
import Pic145 from '../images/realisations/deco-145.JPG'
import Pic146 from '../images/realisations/deco-146.JPG'
import Pic147 from '../images/realisations/deco-147.JPG'
import Pic148 from '../images/realisations/deco-148.JPG'
import Pic149 from '../images/realisations/deco-149.JPG'
import Pic150 from '../images/realisations/deco-150.JPG'
import Pic151 from '../images/realisations/deco-151.JPG'
import Pic152 from '../images/realisations/deco-152.JPG'
import Pic153 from '../images/realisations/deco-153.JPG'
import Pic154 from '../images/realisations/deco-154.JPG'
import Pic155 from '../images/realisations/deco-155.JPG'
import Pic156 from '../images/realisations/deco-156.JPG'
import Pic157 from '../images/realisations/deco-157.JPG'
import Pic158 from '../images/realisations/deco-158.JPG'
import Pic159 from '../images/realisations/deco-159.JPG'
import Pic160 from '../images/realisations/deco-160.JPG'
import Pic161 from '../images/realisations/deco-161.JPG'
import Pic162 from '../images/realisations/deco-162.JPG'
import Pic163 from '../images/realisations/deco-163.JPG'
import Pic164 from '../images/realisations/deco-164.JPG'
import Pic165 from '../images/realisations/deco-165.JPG'
import Pic166 from '../images/realisations/deco-166.JPG'
import Pic167 from '../images/realisations/deco-167.JPG'
import Pic168 from '../images/realisations/deco-168.JPG'
import Pic169 from '../images/realisations/deco-169.JPG'
import Pic170 from '../images/realisations/deco-170.JPG'
import Pic171 from '../images/realisations/deco-171.JPG'
import Pic172 from '../images/realisations/deco-172.JPG'
import Pic173 from '../images/realisations/deco-173.JPG'
import Pic174 from '../images/realisations/deco-174.JPG'
import Pic175 from '../images/realisations/deco-175.JPG'
import Pic176 from '../images/realisations/deco-176.JPG'
import Pic177 from '../images/realisations/deco-177.JPG'
import Pic178 from '../images/realisations/deco-178.JPG'

export default function Realisation(){
    const [data,setData]= useState([
        {Pic:Pic39},
        {Pic:Pic40},
        {Pic:Pic41},
        {Pic:Pic42},
        {Pic:Pic44},
        {Pic:Pic45},
        {Pic:Pic46},
        {Pic:Pic47},
        {Pic:Pic48},
        {Pic:Pic49},
        {Pic:Pic50},
        {Pic:Pic51},
        {Pic:Pic52},
        {Pic:Pic53},
        {Pic:Pic55},
        {Pic:Pic56},
        {Pic:Pic57},
        {Pic:Pic58},
        {Pic:Pic59},
        {Pic:Pic60},
        {Pic:Pic61},
        {Pic:Pic62},
        {Pic:Pic63},
        {Pic:Pic66},
        {Pic:Pic67},
        {Pic:Pic68},
        {Pic:Pic69},
        {Pic:Pic64},
        {Pic:Pic65},
        {Pic:Pic70},
        {Pic:Pic71},
        {Pic:Pic72},
        {Pic:Pic73},
        {Pic:Pic74},
        {Pic:Pic75},
        {Pic:Pic77},
        {Pic:Pic78},
        {Pic:Pic79},
        {Pic:Pic80},
        {Pic:Pic81},
        {Pic:Pic82},
        {Pic:Pic83},
        {Pic:Pic84},
        {Pic:Pic85},
        {Pic:Pic86},
        {Pic:Pic87},
        {Pic:Pic88},
        {Pic:Pic89},
        {Pic:Pic90},
        {Pic:Pic91},
        {Pic:Pic92},
        {Pic:Pic93},
        {Pic:Pic94},
        {Pic:Pic95},
        {Pic:Pic96},
        {Pic:Pic97},
        {Pic:Pic98},
        {Pic:Pic99},
        {Pic:Pic100},
        {Pic:Pic101},
        {Pic:Pic102},
        {Pic:Pic103},
        {Pic:Pic104},
        {Pic:Pic105},
        {Pic:Pic106},
        {Pic:Pic107},
        {Pic:Pic108},
        {Pic:Pic109},
        {Pic:Pic110},
        {Pic:Pic111},
        {Pic:Pic112},
        {Pic:Pic113},
        {Pic:Pic114},
        {Pic:Pic115},
        {Pic:Pic116},
        {Pic:Pic117},
        {Pic:Pic118},
        {Pic:Pic119},
        {Pic:Pic120},
        {Pic:Pic121},
        {Pic:Pic122},
        {Pic:Pic123},
        {Pic:Pic124},
        {Pic:Pic125},
        {Pic:Pic126},
        {Pic:Pic127},
        {Pic:Pic128},
        {Pic:Pic129},
        {Pic:Pic130},
        {Pic:Pic131},
        {Pic:Pic132},
        {Pic:Pic134},
        {Pic:Pic135},
        {Pic:Pic136},
        {Pic:Pic137},
        {Pic:Pic138},
        {Pic:Pic139},
        {Pic:Pic140},
        {Pic:Pic141},
        {Pic:Pic142},
        {Pic:Pic143},
        {Pic:Pic144},
        {Pic:Pic145},
        {Pic:Pic146},
        {Pic:Pic147},
        {Pic:Pic148},
        {Pic:Pic149},
        {Pic:Pic150},
        {Pic:Pic151},
        {Pic:Pic152},
        {Pic:Pic153},
        {Pic:Pic154},
        {Pic:Pic155},
        {Pic:Pic156},
        {Pic:Pic157},
        {Pic:Pic158},
        {Pic:Pic159},
        {Pic:Pic160},
        {Pic:Pic161},
        {Pic:Pic162},
        {Pic:Pic163},
        {Pic:Pic164},
        {Pic:Pic165},
        {Pic:Pic166},
        {Pic:Pic167},
        {Pic:Pic168},
        {Pic:Pic169},
        {Pic:Pic170},
        {Pic:Pic171},
        {Pic:Pic172},
        {Pic:Pic173},
        {Pic:Pic174},
        {Pic:Pic175},
        {Pic:Pic176},
        {Pic:Pic177},
        {Pic:Pic178},
    ]);

    const [img1,setImg1]=useState([]);

    const getimg1 = async ()=>{
        const q = query(collection(db,'picture'));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc)=>({
          ...doc.data(),
          id:doc.id,
        }));
        setImg1(data);
       };
 
       useEffect(()=>{
          getimg1();
         },[]);
    return(
        <>
             <div id={styles.service_main}>

                    <div className={styles.grille_deco_box}>
                            {data.map((infos,index)=>(
                                <div className={styles.box} key={index}>
                                    <Image src={infos.Pic} className={styles.photo} />  
                                </div>
                            ))}
                    </div>

                    
                    <div className={styles.box1}>
                    {img1.map((res,id)=>{
                        return(
                            <div className={styles.box} key={id}>
                                <img src={res.lien} alt='sig-services' className={styles.photo} />
                            </div>
                            )
                            })}
                    </div>

            </div>
        </>
    )
}