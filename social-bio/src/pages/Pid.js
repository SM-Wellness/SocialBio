import {Link} from "react-router-dom"
import styles from "./Pid.module.css";
import { useEffect, useInsertionEffect, useState } from "react";
import useFetch from './../hooks/fetch';

export default function Pid(){
    const pid = useFetch("http://localhost:3000/pid");
    // 접속 지연 시, 로딩 출력
  //  if(pid.length === 0){
   //     return <span>Loading ...</span>
   // }
    return(
    <div className={styles.pidPage}>
      <div className={styles.pidPageChild} />
      <div className={styles.pidUi2}>
        <img className={styles.chatIcon} alt="" src="../images/chat-icon@2x.png" />
        <div className={styles.div}>1,200</div>
        <div className={styles.div1}>1,200</div>
        <img className={styles.image6Icon} alt="" src="../images/image-6@2x.png" />
        <div className={styles.pidBar}>
          <div className={styles.groupParent}>
            <div className={styles.groupParent}>
              <div className={styles.logo} />
            </div>
            <img
              className={styles.groupChild}
              alt=""
              src="../images/ellipse-1@2x.png"
            />
          </div>
          <img className={styles.pidBarChild} alt="" src="../images/group-3.svg" />
          <div className={styles.userName}>user_name</div>
        </div>
        <img className={styles.image3Icon} alt="" src="../images/image-3@2x.png" />
        <div className={styles.socialBio}>
          <p className={styles.p}>스타벅스 커피 최고~@~@~@</p>
          <p className={styles.p}>&nbsp;</p>
          <p className={styles.p}>&nbsp;</p>
          <p className={styles.p}>&nbsp;</p>
          <p className={styles.p}>&nbsp;</p>
          <p className={styles.p}>&nbsp;</p>
          <p className={styles.p}>&nbsp;</p>
          <p className={styles.p}>{`# 스타벅스 `}</p>
          <p className={styles.p}># 바이오헬스</p>
          <p className={styles.socialBio1}># social bio</p>
        </div>
      </div>
      <div className={styles.pidUi}>
        <img className={styles.chatIcon1} alt="" src="../images/chat-icon1@2x.png" />
        <div className={styles.div2}>1,200</div>
        <div className={styles.div3}>1,200</div>
        <img className={styles.image6Icon1} alt="" src="../images/image-61@2x.png" />
        <img className={styles.image7Icon} alt="" src="../imgaes/image-7@2x.png" />
        <div className={styles.pidBar1}>
          <div className={styles.groupContainer}>
            <div className={styles.groupContainer}>
              <div className={styles.logo1} />
            </div>
            <img
              className={styles.groupItem}
              alt=""
              src="../images/ellipse-11@2x.png"
            />
          </div>
          <img className={styles.pidBarItem} alt="" src="../images/group-31.svg" />
          <div className={styles.userName1}>user_name</div>
        </div>
        <div className={styles.socialBio2}>
          <p className={styles.p}>스타벅스 커피 최고~@~@~@</p>
          <p className={styles.p}>&nbsp;</p>
          <p className={styles.p}>&nbsp;</p>
          <p className={styles.p}>&nbsp;</p>
          <p className={styles.p}>&nbsp;</p>
          <p className={styles.p}>&nbsp;</p>
          <p className={styles.p}>&nbsp;</p>
          <p className={styles.p}>&nbsp;</p>
          <p className={styles.p}>&nbsp;</p>
          <p className={styles.p}>{`# 스타벅스 `}</p>
          <p className={styles.p}># 바이오헬스</p>
          <p className={styles.socialBio1}># social bio</p>
        </div>
      </div>
      <img className={styles.pidPageItem} alt="" src="../images/group-4.svg" />
      <div className={styles.div4}>{`게시물 `}</div>
      <div className={styles.div5}>광고</div>
      <div className={styles.pidPageInner} />
      <div className={styles.idBlock}>
        <img className={styles.idBlockChild} alt="" src="../images/ellipse-2@2x.png" />
        <div className={styles.csyeob}>csyeob</div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupInner} />
        <img className={styles.starIcon} alt="" src="../images/star-1.svg" />
        <div className={styles.div6}>광고물 보기</div>
      </div>
      <div className={styles.follow}>
        <div className={styles.groupInner} />
        <div className={styles.div6}>팔로우 리스트</div>
        <img className={styles.image8Icon} alt="" src="../images/image-8@2x.png" />
      </div>
      <div className={styles.div8} />
      <div className={styles.div9} />
    </div>
  );
}

