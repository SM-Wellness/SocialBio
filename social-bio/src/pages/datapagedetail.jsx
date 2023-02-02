
import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import "./datapagedetail.css";

class Datapagedetail extends React.Component {

  constructor(props) {
      super(props);
      this.state = {

      };
  }
  
  render() {
    
    return (
          <div data-layer="dc82d6e1-e095-4e2f-b481-46d74a25788f" className="datapagedetail">        
          <div data-layer="23028c66-b766-4860-a9bc-4ab556f8f833" className="back"></div>
        <div data-layer="60ca532e-9022-4e52-81f4-cef7e983feb9" className="topbar">            
        <div data-layer="ba37198a-fc27-4c59-b1b3-2379fe7be6d6" className="menubar"></div>
            <div data-layer="181542b7-ff41-41d6-ae74-329a2a66deed" className="logo"></div>
            <div data-layer="700b4756-4dca-4336-befd-c92a3fdb9854" className="intropage">소개</div>
            <div data-layer="397cc787-0d72-45a6-92a8-1a083ee79fba" className="pidpage">피드</div>
            <div data-layer="9cb39e1c-0a8c-44c9-b3fc-ceefc2ef963f" className="datapage">진단</div>
</div>
        <div data-layer="ea2337c6-f530-48e3-88a5-f78e73999a0d" className="usertop">           
        <Link to="/"><div data-layer="c50c4ffd-f0bf-4c3b-8684-7f841d4037b3" className="profile">프로필</div></Link>
            <div data-layer="00a64738-f9e7-4ad2-b0bd-2b9e12a50703" className="dm">쪽지</div>
            <div data-layer="638371bf-15a5-4e89-a37d-fb1aee77fef0" className="pidlink">게시글</div>
</div>
        <div data-layer="4405724c-b52c-4605-9a67-529c260d98a7" className="user">           
         <div data-layer="ddce69f5-71a2-4ce1-81a3-166401fad27e" className="userback"></div>
            <div data-layer="607b2f78-37d2-4fea-9f35-21db94f22829" className="todoback"></div>
            <div data-layer="dcc41a0e-da53-405c-b146-58025288c4f7" className="todoground"></div>
            <div data-layer="8ef933da-ffc0-4c37-9cef-bdf32da8f6af" className="todays">Today's</div>
            <svg data-layer="96071838-e9ef-4360-94a7-36eb25c285fc" preserveAspectRatio="none" viewBox="-0.75 -0.75 249.5 245.5" className="userimage"><path d="M 124 0 C 192.4833068847656 0 248 54.62126922607422 248 122 C 248 189.3787231445313 192.4833068847656 244 124 244 C 55.51669311523438 244 0 189.3787231445313 0 122 C 0 54.62126922607422 55.51669311523438 0 124 0 Z"  />
            </svg>
            <div data-layer="3f2098b6-cce1-4604-a195-c1071a424d75" className="todolist">하루 물 1리터</div>
            <div data-layer="a2c922e6-8c8b-42d3-9220-bbc5a9bc0e7b" className="username">닉네임</div>
</div>
        <div data-layer="a2719886-183b-4199-8afe-7f84bc9d7f46" className="dataviback"></div>
</div>

    );
  }
}

Datapagedetail.propTypes = {

}

Datapagedetail.defaultProps = {

}


export default Datapagedetail;
          