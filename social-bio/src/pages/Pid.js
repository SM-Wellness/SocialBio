import {Link} from "react-router-dom"
import styles from "./Pid.module.css";
import { useEffect, useInsertionEffect, useState } from "react";
import useFetch from './../hooks/fetch';
import { useCallback } from "react";

export default function Pid(){
    const pid = useFetch("http://localhost:3000/pid");
    // 접속 지연 시, 로딩 출력
  //  if(pid.length === 0){
   //     return <span>Loading ...</span>
   // }
   const onAdMenuTextClick = useCallback(() => {
    // Please sync "adv_page" to the project
  }, []);

  const onFollowBtnContainerClick = useCallback(() => {
    <Link to ="/followlist">follow_list</Link>
  }, []);

  const onAdStarBtnContainerClick = useCallback(() => {

  }, []);


    return(
<div className={styles.pidPage}>
      <div className={styles.pidPageChild} />
      <div className={styles.pidUi2}>
        <img className={styles.chatBtnIcon} alt="" src="../pidpage_images/chat-btn@2x.png" />
        <div className={styles.div}>1,200</div>
        <div className={styles.div1}>1,200</div>
        <img className={styles.heartBtnIcon} alt="" src="../pidpage_images/heart-btn@2x.png" />
        <div className={styles.pidBar}>
          <div className={styles.pidBox} />
          <div className={styles.pidName}>user_name</div>
          <img
            className={styles.pidProfileImgIcon}
            alt=""
            src="../pidpage_images/pid-profile-img@2x.png"
          />
          <img className={styles.pidEtcIcon} alt="" src="../pidpage_images/pid-etc.svg" />
        </div>
        <img className={styles.image3Icon} alt="" src="../pidpage_images/image-3@2x.png" />
      </div>
      <img className={styles.pidPageItem} alt="" src="../pidpage_images/group-4.svg" />
      <div className={styles.adMenuText} onClick={onAdMenuTextClick}>
        광고
      </div>
      <div className={styles.pidBtn}>
        <div className={styles.pidSelect}>{`게시물 `}</div>
        <div className={styles.selectLine} />
      </div>
      <div className={styles.idBlockBtn}>
        <img
          className={styles.profileImgExIcon}
          alt=""
          src="../pidpage_images/profile-img-ex@2x.png"
        />
        <div className={styles.profileName}>csyeob</div>
      </div>
      <div className={styles.followBtn} onClick={onFollowBtnContainerClick}>
        <img className={styles.listBtnIcon} alt="" src="../pidpage_images/list-btn.svg" />
        <div className={styles.fllowlistText}>팔로우 리스트</div>
        <img
          className={styles.followlistImgIcon}
          alt=""
          src="../pidpage_images/followlist-img@2x.png"
        />
      </div>
      <div className={styles.menuBarBox} />
      <div className={styles.logoBox} />
      <div className={styles.adStarBtn} onClick={onAdStarBtnContainerClick}>
        <div className={styles.listBtn} />
        <img className={styles.adStarImgIcon} alt="" src="../pidpage_images/ad-star-img.svg" />
        <div className={styles.adStarText}>광고물 보기</div>
      </div>
    </div>
  );
}

