
import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import "./mainpage.css";
import Slider from "./slide.jsx";
class X19201 extends React.Component {

  constructor(props) {
      super(props);
      this.state = {

      };
  }
  
  render() {
    
    return (
          <div data-layer="710896c8-0cc0-4560-8638-1df1fa5e2078" className="x19201">        
          <div data-layer="4a0d22e9-2371-460e-875d-84419c7c45a0" className="topbar">            
          <div data-layer="9fbd5a08-1dda-41c5-af29-eeb7efdc035d" className="menubar"></div>
            <Link to ="/first"><div data-layer="e752582a-54ce-4fcc-9a6b-7de74080c7f6" className="logo"></div></Link>
            <div data-layer="45e8bcfe-e178-49d3-9806-9496a1ef66bc" className="intorpage">소개</div>
            <div data-layer="47358ccc-a075-409f-a3f4-67badbf57d4f" className="pidpage">피드</div>
            <Link to ="/data"><div data-layer="e36063a5-b2d5-4171-8308-0e00134c14fe" className="datapage">진단</div></Link>
            <Link to ="/first"><div data-layer="282f1118-8a05-4792-b794-3ba59df2aa2b" className="socialbiologo"></div></Link>
</div>
        <div data-layer="dcce11bb-727b-4a50-be20-96e72a55ac4d" className="addbox"><Slider/></div>
        <div data-layer="7f8531a6-9dd7-4f6c-8edb-25fa282110ad" className="notice">            
        <div data-layer="833e6f59-9a8a-4bcd-ba02-a2eaf5fd1232" className="noticebox"></div>
            <div data-layer="339d5727-47b5-44c7-87bc-6d95d1d8c95d" className="noticetext">공지 사항</div>
            <div data-layer="0d68d037-8530-41c5-85e6-4c7445e34e00" className="noticelist">
              새로운 제품이 추가..<br />
              문의는 ~~로<br />
              데이터 추가 알림~~
              </div>
</div>
        <div data-layer="fffffb6b-1863-450c-8823-ad3881e92eec" className="poppid">            
        <div data-layer="640d10dc-8055-40a0-9c00-39c12b54aa77" className="poppidbox"></div>
            <div data-layer="5730eda8-67d6-47d4-b693-025b3a6111d3" className="poppidback"></div>
            <div data-layer="e3e96ef8-425e-4511-a4e7-929ced2aaaa9" className="poppidtext">인기 게시글</div>
            <div data-layer="63053ce4-a992-4cc1-a084-e5824df1f0f6" className="poppidlist">
              식단 공개합니다..<br />
              누구나 쉽게..<br />
              오늘의 목표..</div>
</div>
        <div data-layer="dcd248b9-a2dc-448f-bf7b-e3f844735cd7" className="recomtodo">            
        <div data-layer="4368c021-2f7b-4eab-9c59-caec9e35fd06" className="recomtodobox"></div>
            <div data-layer="333cff40-8628-4a49-8dfb-7847c64f8958" className="recomback"></div>
            <div data-layer="bd1c7082-49fa-4b85-af66-1cb961e95d67" className="recomtext">오늘의 추천 To DO List</div>
            <div data-layer="cd33c194-8525-4ad7-832e-2103075deb7d" className="recomlist">물 1리터 마시기<br /><br />걸음수 5000 이상</div>
</div>
</div>

    );
  }
}

X19201.propTypes = {

}

X19201.defaultProps = {

}


export default X19201;
          