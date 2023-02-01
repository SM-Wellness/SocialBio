import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthProvider';
import axios from '../api/axios';
import style from './Login.module.css';
const LOGIN_URL = '/auth';

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();
    // 오류가 발생하면 참조

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    // 사용자 정보

    useEffect(() => {
        userRef.current.focus();
    }, [])
    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response)) 모든 데이터
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No server response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing username or password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed')
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            
            {success ? (
                <section>
                    <h1>로그인 성공!</h1>
                    <br />
                    <p>
                        <a href="#">메인페이지 출력</a>
                    </p>
                </section>
            ) : (
                <section className={style.loginform}>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}
                        aria-live="assertive">{errMsg}</p>
                    <form onSubmit={handleSubmit}>
                        <div className={style.section_box}>
                            <label htmlFor="username">아이디 </label>
                            <input
                                className={style.login_box}
                                type="text"
                                id="username"
                                ref={userRef}
                                //userRef로 포커싱함.
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required
                            />
                        </div>
                        <div className={style.section_box}>
                            <label htmlFor="password">비밀번호 </label>
                            <input
                                className={style.login_box}
                                type="password"
                                id="password"
                                ref={userRef}
                                //userRef로 포커싱함.
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required
                            />
                        </div>
                        <button className={style.login_signUp}
                           >Sign In</button> 
                    </form>
                    <p style={
                         {textAlign: 'center'}
                    }>
                        회원가입을 안하셨나요? 
                        <span className="line">
                            {/*라우터 링크를 넣으면 됨.*/}
                            <a href="#">회원가입</a>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default Login;