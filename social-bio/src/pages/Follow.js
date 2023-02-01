import styles from "./FollowPage.module.css";
import useFetch from './../hooks/fetch';

export default function Follow(){
    const follow = useFetch("http://localhost:3000/followlist");
    return (
    <div className={styles.followPage}>
      <div className={styles.followPageChild} />
      <img className={styles.searchBarIcon} alt="" src="../followpage_img/search-bar.svg" />
      <div className={styles.idBlock}>
        <img className={styles.idBlockChild} alt="" src="../followpage_img/ellipse-2@2x.png" />
        <div className={styles.csyeob}>csyeob</div>
      </div>
      <div className={styles.advBox}>
        <div className={styles.advBox1} />
        <img className={styles.starIcon} alt="" src="../followpage_img/star.svg" />
        <div className={styles.advTxt}>광고물 보기</div>
      </div>
      <div className={styles.follow}>
        <div className={styles.followBox} />
        <div className={styles.advTxt}>팔로우 리스트</div>
        <img
          className={styles.followImgIcon}
          alt=""
          src="../followpage_img/follow-img@2x.png"
        />
      </div>
      <div className={styles.followBar}>
        <div className={styles.followBar1} />
        <img
          className={styles.userImageIcon}
          alt=""
          src="../followpage_img/user-image@2x.png"
        />
        <div className={styles.userName}>csyeob</div>
        <img
          className={styles.delFollowImgIcon}
          alt=""
          src="../followpage_img/del-follow-img@2x.png"
        />
        <div className={styles.delFollowTxt}>팔로우 취소</div>
      </div>
    </div>
  );
}

