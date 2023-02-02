
import React from "react";
import PropTypes from "prop-types";
import "./datapage.css";
import {Link} from 'react-router-dom';

class Datapage extends React.Component {

  constructor(props) {
      super(props);
      this.state = {

      };
  }
  

  
  render() {
    
    return (
          <div data-layer="ccb7a9c2-2dfd-4fcb-899d-9f276beef94f" className="datapage">        
          <div data-layer="fb763897-5b98-4b44-a304-dcc6ca1a5179" className="back"></div>
        <div data-layer="8bca0263-0ebe-4b72-82a4-b3dc8d8dee82" className="topbar">            
        <div data-layer="fcb4446d-3c2a-4d5a-a24c-96b4f6566ee3" className="menubar"></div>
            <div data-layer="080496fd-427a-45c3-a982-665496b376e9" className="logo"></div>
           <Link to="/three"> <div data-layer="09a650da-9505-490a-8230-7c06fef59db7" className="intropage">소개</div></Link>
            <div data-layer="ac016c64-3f5d-4c10-9013-71a771ee4b86" className="pidpage">피드</div>
            <div data-layer="3840616d-9396-4980-b409-6cab57be9060" className="datapage">진단</div>
            </div>
        <div data-layer="bea7cf16-ae5c-4bd0-a5a8-c3d4dade4260" className="usertop">            
        <Link to="/"><div data-layer="5bba6c60-08ef-438d-9164-bb3ce583e1ec" className="profile">프로필</div></Link>
            <div data-layer="651c8aa6-5f19-4502-859c-94bd1e136a5c" className="dm">쪽지</div>
            <div data-layer="76a38c53-f9be-4faa-94d3-bb897c59be09" className="pidlink">게시글</div>
            </div>
        <div data-layer="efc4a779-f7eb-4f04-8c09-8def5832f663" className="user">            
        <div data-layer="a9d5e8de-b8e3-4bf7-9c6f-bf0383f4db0e" className="userback"></div>
            <div data-layer="e25942ec-6d72-4fea-ac93-14717f431996" className="todoback"></div>
            <div data-layer="e541eb0f-e118-40d5-aa21-0f2d4c75da12" className="todoground"></div>
            <div data-layer="fb171adb-29a9-4f71-9dfa-7443457c0eae" className="todays">Today's</div>
            <svg data-layer="d298213c-4676-479a-a0ce-bad10d0aa16a" preserveAspectRatio="none" viewBox="-0.75 -0.75 249.5 245.5" className="userimage">
                <path d="M 124 0 C 192.4833068847656 0 248 54.62126922607422 248 122 C 248 189.3787231445313 192.4833068847656 244 124 244 C 55.51669311523438 244 0 189.3787231445313 0 122 C 0 54.62126922607422 55.51669311523438 0 124 0 Z"  /></svg>
            <div data-layer="08d150ee-59da-4709-b540-f21f49b6f1d9" className="todolist">하루 물 1리터</div>
            <div data-layer="82ace4ed-6ed3-471e-ae9b-28fcf37b0f43" className="username">닉네임</div>
</div>
        <div data-layer="2134be41-4a37-45a6-8569-a7cc33e7deec" className="datafb_back">            
        <div data-layer="4de47f3c-1d02-4c88-8e99-fcc71befb214" className="datafb"></div>
            <div data-layer="989798af-2415-4e11-8fcc-d45f618fab02" className="datafbtext">시각화 결과</div>
            <div data-layer="7c2558b6-aa03-4f77-9835-73ce765b9e8b" className="datafblist">
                물을 더 많이 마셔야 해요<br />
                음주 횟수를 줄여야 해요<br />
                .<br />
                .
            </div>
</div>
        <div data-layer="e105ce9e-81be-49ed-b6bd-8730f3324d84" className="dataimage">            
        <svg data-layer="f71f28c6-1bd1-4489-9c0b-88e2748b0e44" preserveAspectRatio="none" viewBox="0 0 628 580" className="datav">
            <path d="M 314 0 C 487.4174194335938 0 628 129.8374328613281 628 290 C 628 450.1625671386719 487.4174194335938 580 314 580 C 140.5825958251953 580 0 450.1625671386719 0 290 C 0 129.8374328613281 140.5825958251953 0 314 0 Z"  /></svg>
            <div data-layer="2b75359a-8f11-4f66-b363-647463ab69d2" className="smoke">흡연</div>
            <div data-layer="55bb740a-00be-4244-a175-db34551c028e" className="drink">음주</div>
            <div data-layer="95930050-b302-439e-b804-451b94d9e739" className="x3kg">3대</div>
            <div data-layer="57db5fd1-dc6c-41cc-bf82-7d845b50db81" className="bmi">BMI</div>
            <div data-layer="d1f5cd9c-0c81-4f23-b30e-516c76111a9d" className="sugar">당 수치</div>
            <div data-layer="b8891ea3-4430-4d19-9144-f70afe7cad78" className="blood">혈압</div>
            <div data-layer="d298a746-3ca4-4ac2-8ab7-3739090b2806" className="kcal">칼로리</div>
            <div data-layer="9e5c69c9-a318-43ce-8cf5-f6a60652e161" className="water">물</div>
            <div data-layer="086e7d38-22ef-4aa1-b405-c26020a53aa1" className="walk">걸음 수</div>
            <div data-layer="49db498b-2ef9-4c81-bbfe-1c1adbb94072" className="liver">간 수치</div>
            <Link to="/detail"><svg data-layer="36d1ec12-e579-42d1-8a39-a5f588cd1c21" preserveAspectRatio="none" viewBox="0 0 359 347" className="datashape">
                <path d="M 179.5000152587891 5.436796072899597e-06 C 215.528076171875 1.90547348211112e-06 250.6075592041016 11.54781246185303 279.5906372070313 32.94881820678711 L 280.8991394042969 33.91501617431641 C 309.3863525390625 54.94985961914063 330.5223999023438 84.42497253417969 341.305908203125 118.1547698974609 L 342.595458984375 122.1883697509766 C 353.2658081054688 155.5640258789063 353.2658081054688 191.4359588623047 342.5954895019531 224.8116302490234 L 341.3059387207031 228.8452606201172 C 330.5223999023438 262.5750122070313 309.3863525390625 292.0501403808594 280.899169921875 313.0849609375 L 279.5906677246094 314.0511779785156 C 250.6075744628906 335.4522094726563 215.528076171875 347 179.5 347 L 179.4999847412109 347 C 143.4718933105469 347 108.3924102783203 335.4522094726563 79.40932464599609 314.0511779785156 L 78.10079956054688 313.0849609375 C 49.61363983154297 292.0501403808594 28.47758865356445 262.5750427246094 17.69406318664551 228.8452453613281 L 16.40448951721191 224.8115844726563 C 5.734184265136719 191.4359436035156 5.734185695648193 155.5640411376953 16.40449523925781 122.1884078979492 L 17.69405174255371 118.1548004150391 C 28.47760009765625 84.42497253417969 49.61368942260742 54.94982147216797 78.10089874267578 33.91496658325195 L 79.40926361083984 32.94887161254883 C 108.3923797607422 11.5478401184082 143.471923828125 8.968120710051153e-06 179.5000610351563 5.436792889668141e-06 Z"  />
                </svg></Link>
</div>
        <div data-layer="01d2efc6-0caa-43d2-b93e-23c48e2d86be" className="radiobtn">            
        <input type="checkbox" data-layer="9e6f55a3-4961-4a63-8509-a28d036f8ea5" className="radio1"></input> 
            <div data-layer="c3241859-2298-4384-9549-aa3c86b9a2c1" className="radio1text">흡연</div>
            <input type="checkbox" data-layer="404511e8-6143-46da-ab61-079e35524b99" className="radio2"></input>
            <div data-layer="77e59439-c184-46f6-9b56-2a2889b86979" className="radio2text">음주</div>
            <input type="checkbox" data-layer="896efec8-b0aa-4a1b-9c10-ef34eecd8102" className="radio3"></input>
            <div data-layer="6c46c88e-7782-4fc1-a098-f203b010c3e1" className="radio3text">3대</div>
            <input type="checkbox"data-layer="97b590fb-6f51-4578-aaf1-0198daf4cd94" className="radio4"></input>
            <div data-layer="782eb49a-9204-40eb-87df-5fb1674fead8" className="radio4text">혈압</div>
            <input type="checkbox" data-layer="3c1cad69-55d0-4832-9da1-af41afe764f8" className="radio5"></input>
            <div data-layer="cb94c7df-cfd7-41f2-b005-0bab58122132" className="radio5text">당</div>
            <input type="checkbox" data-layer="7c85e6fa-7746-4590-a424-efe3c16c24a2" className="radio6"></input>
            <div data-layer="db9d0947-5cf2-4300-a3eb-8034b6132eab" className="radio6text">간</div>
</div>
        <div data-layer="6760353c-3b28-4f72-a129-7137643f097f" className="btn">            
        <div data-layer="a55a3eae-d9e0-40e7-a679-b00313b029a6" className="btns"></div>
            <div data-layer="13f1c0c6-c8ab-40f3-a888-80fb1defb568" className="btnstext">검색</div>
</div>
        <div data-layer="c52f4425-357b-43a8-9b62-f6fb8fe47350" className="rank">            
        <div data-layer="cf8832ea-6e91-41eb-9abd-796901b51d4e" className="rankback"></div>
            <div data-layer="3975ccef-b4af-4323-b9bb-fed848ed7744" className="x12">
                랭킹 1<br />
                랭킹 2<br />
                .<br />
                <br />
            </div>
        </div>
    </div>

    );
  }
}

Datapage.propTypes = {

}

Datapage.defaultProps = {

}

export default Datapage;

          