
import React from "react";
import PropTypes from "prop-types";
import video from "./Finish_SocialBio.mp4";
import "./firstpage.css";
import {Link} from "react-router-dom";


class X19201 extends React.Component {

  constructor(props) {
      super(props);
      this.state = {

      };
  }
  
  render() {
    
    return (
          <div data-layer="52d222f6-8dc2-4f1a-b68d-44930918b2bd" className="x19201">        
          <div data-layer="5fc86185-9b10-4d7c-a375-59ca02f20bf6" className="motion">
            <video autoPlay loop muted>
              <source src={video} type="video/mp4"></source>
              </video>
          </div>
        <div data-layer="fd066f4e-cb19-4f7a-bb69-52e02cc496f0" className="introtext">소개</div>
        <Link to="/data"><div data-layer="d4278c96-d097-4eb1-8e44-83cb2dda3bf1" className="datatext">진단</div></Link>
        <div data-layer="ecd7c228-d8ff-4132-b88d-e205dc36df82" className="pidtext">피드</div>
        <div data-layer="790f0fd8-7398-4866-982b-3e14332260a2" className="pushbtn85b7390f">            
        <Link to="/main"><div data-layer="18b49463-f90e-4c0b-b85d-1ebd7642ddc2" className="pushbtn"></div></Link>
            <Link to="/main"><div data-layer="07b17806-5abf-42c7-a302-5565a497826c" className="pushbtntext">이용하기</div></Link>
</div>
        <div data-layer="4778e8e1-daec-4a15-9d0f-cd65aeafd711" className="socialbiologoa053e2f7"></div>
        <div data-layer="d1c4f996-8698-4f85-9d7c-09a9ebb7068c" className="socialbiologo"></div>
</div>

    );
  }
}

X19201.propTypes = {

}

X19201.defaultProps = {

}


export default X19201;
          