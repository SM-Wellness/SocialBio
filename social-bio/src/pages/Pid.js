import { Link } from "react-router-dom"
import styles from "./Pid.module.css";
import { useEffect, useInsertionEffect, useState, useNavigate } from "react";
import useFetch from './../hooks/fetch';
import { useCallback } from "react";
import axios from 'axios'

const SERVER_URL = ""

export default function Pid() {
  const [PidData, setPidData] = useState();

  const fetchData = async () => {
    // get응답이 왔으면 then 
    const response = await axios.get("SERVER_URL");

    // fetch('http://localhost:4000/server url')
    //   .then((response) => response.json())
    //   .then((data) => setTodoList(data));
  };

  useEffect(() => {
    fetchData();
  }, []);


  const onAdMenuTextClick = useCallback(() => {
    // Please sync "adv_page" to the project
  }, []);

  const onAdStarBtnContainerClick = useCallback(() => {

  }, []);


  return (
    <div className="Pid">
      <div className={styles.pidPage}>
        <div className={styles.pidPageChild} />
        <div className={styles.pidUi2}>
          {PidData?.map((data) => (
            <div key={data.id}>
              <img className={styles.chatBtnIcon} alt="" src="../pidpage_images/chat-btn@2x.png" />
              <div className={styles.div}>{data.heart}</div>
              <div className={styles.div1}>{data.chat}</div>
              <img className={styles.heartBtnIcon} alt="" src="../pidpage_images/heart-btn@2x.png" />
              <div className={styles.pidBar}>
                <div className={styles.pidBox} />
                <div className={styles.pidName}>{data.id}</div> {/* nickname */}
                <img
                  className={styles.pidProfileImgIcon}
                  alt=""
                  src="../pidpage_images/pid-profile-img@2x.png"
                />{/*data.img*/}
                <img className={styles.pidEtcIcon} alt="" src="../pidpage_images/pid-etc.svg" />
              </div>
              <img className={styles.image3Icon} alt="" src="../pidpage_images/image-3@2x.png" />
            </div>
          ))}
        </div>

        <div className={styles.div45}>
          <div className={styles.div46} />
          <div className={styles.div47} />
          <div className={styles.div48}>
            <div className={styles.div49}>
              <div className={styles.div50} />
              <div className={styles.div44}>피드</div>
            </div>
            <div className={styles.div52}>
              <div className={styles.div50} />
              <div className={styles.div44}>진단</div>
            </div>
            <div className={styles.div55}>
              <div className={styles.div50} />
              <div className={styles.div44}>소개</div>
            </div>
          </div>
        </div>

        {/*검색*/}
        <img className={styles.pidPageItem} alt="" src="../pidpage_images/group-4.svg" />
        {/*상단 메뉴*/}
        <div className={styles.adMenuText} onClick={onAdMenuTextClick}>
          광고
        </div>
        <div className={styles.pidBtn}>
          <div className={styles.pidSelect}>{`게시물 `}</div>
          <div className={styles.selectLine} />
        </div>
        {/*사이드 메뉴*/}
        <div className={styles.idBlockBtn}>
          <img
            className={styles.profileImgExIcon}
            alt=""
            src="../pidpage_images/profile-img-ex@2x.png"
          />
          <div className={styles.profileName}>csyeob</div>
        </div>
        <Link to="/followlist">
          <div className={styles.followBtn}>

            <img className={styles.listBtnIcon} alt="" src="../pidpage_images/list-btn.svg" />
            <div className={styles.fllowlistText}>팔로우 리스트</div>
            <img
              className={styles.followlistImgIcon}
              alt=""
              src="../pidpage_images/followlist-img@2x.png"
            />
          </div>
        </Link>
        <div className={styles.adStarBtn} onClick={onAdStarBtnContainerClick}>
          <div className={styles.listBtn} />
          <img className={styles.adStarImgIcon} alt="" src="../pidpage_images/ad-star-img.svg" />
          <div className={styles.adStarText}>광고물 보기</div>
        </div>
      </div>
    </div>
  );
}


