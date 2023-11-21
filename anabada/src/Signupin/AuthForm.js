import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import userData from "../Data/UsersData.json";
import {
    AuthErrorCodes,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase-config";
import { lastDayOfWeekWithOptions } from "date-fns/fp";

// 회원가입 or 로그인폼 보여줌.

const ErrorMessage = styled.div`
    color: red;
    margin-top: 5px;
    font-size: 12px;
`;

const AuthFormBlock = styled.div`
    h3 {
        margin: 0;
        color: #343a40;
        margin-bottom: 1rem;
    }
`;

// button margin
const ButtonWithMarinTop = styled.button`
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color: white;
    outline: none;
    cursor: pointer;

    background: #4470e1;
    &:hover {
        background: #5e83e0;
    }
    margin-top: 1rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    width: 100%;
    font-size: 1.125rem;
`;

// styled input

const StyledInput = styled.input`
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid #E2E2E2
    padding-bottom: 0.5rem;
    outline: none;
    width: 100%;
    &:focus {
        color: $oc-teal-7;
        border-bottom: 1px solid #495057;
    }
    /* Scss 에서 쓰는 요소가 서로 반복될 때 margin-top 을 줌 >>> input 과 input 사이에 margin-top 줌. */
    & + & {
        margin-top: 1rem;
    }
`;
// 폼 하단에 회원가입 링크 style
const Footer = styled.div`
    margin-top: 2rem;
    text-align: right;
    a {
        color: 1px solid #868e96;
        text-decoration: underline;
        &:hover {
            color: 1px solid #212529};
        }
    }
`;

const textMap = {
    login: "로그인",
    register: "회원가입",
};

const AuthForm = ({ type }) => {
    const [users, setUsers] = useState(userData);
    const [errorMessage, setErrorMessage] = useState(""); //로그인 에러메세지
    const [registerEmail, setRegisterEmail] = useState(""); //회원 가입 이메일
    const [registerPassword, setRegisterPassword] = useState(""); // 비밀번호
    const [passwordConfirm, setPasswordConfirm] = useState(""); // 비밀번호 확인
    const [nickname, setNickname] = useState(""); //닉네임

    const idRef = useRef();
    const pswdRef = useRef();
    const navigate = useNavigate();

    const handleAuthErrors = (error) => {
        if (error.code === "auth/email-already-in-use") {
            setErrorMessage("이미 등록된 회원입니다.");
        } else if (error.code === "auth/missing-password") {
            setErrorMessage("비밀번호를 입력해주세요.");
        } else if (error.code === "auth/weak-password") {
            setErrorMessage("비밀번호를 6자리 이상 입력해주세요.");
        } else if (error.code === "auth/invalid-login-credentials") {
            setErrorMessage("이메일 혹은 비밀번호가 일치하지 않습니다.");
        }
    };

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user);
            const userInfo = { email: registerEmail, nickname };

            let existingInfo = localStorage.getItem("userList");
            let userList = existingInfo ? JSON.parse(existingInfo) : [];

            userList.push(userInfo);
            localStorage.setItem("userList", JSON.stringify(userList)); // 로컬 스토리지에 회원가입 된 유저의 이메일과 닉네임 올리기

            navigate("/"); //회원가입 완료시 로그인 페이지로 이동
        } catch (error) {
            handleAuthErrors(error);
        }
    };

    const login = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            console.log("로그인 성공");
            localStorage.setItem("currentUser", email);
            navigate("/");
        } catch (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
            handleAuthErrors(error);
        }
    };

    const submit = (e) => {
        e.preventDefault();
        if (type === "login") {
            const emaillogin = idRef.current.value;
            const passwordlogin = pswdRef.current.value;
            login(emaillogin, passwordlogin);
        } else if (type === "register") {
            if (registerPassword !== passwordConfirm) {
                setErrorMessage("비밀번호가 일치하지 않습니다.");
            } else if (nickname.trim() == "") {
                setErrorMessage("닉네임을 입력해주세요.");
            } else if (nickname.trim() !== "") {
                register();
            }
        }
    };
    const text = textMap[type];
    return (
        <AuthFormBlock>
            <h3>{text}</h3>
            <form onSubmit={submit}>
                <StyledInput
                    autoComplete="email"
                    ref={idRef}
                    name="email"
                    placeholder="이메일"
                    type="email"
                    onChange={(e) => {
                        setRegisterEmail(e.target.value);
                        setErrorMessage("");
                    }}
                />
                {type === "register" && (
                    <StyledInput
                        autoComplete="nickname"
                        name="nickname"
                        placeholder="닉네임"
                        onChange={(e) => {
                            setNickname(e.target.value);
                            setErrorMessage("");
                        }}
                    />
                )}
                <StyledInput
                    autoComplete="current-password"
                    name="password"
                    ref={pswdRef}
                    placeholder="비밀번호"
                    type="password"
                    onChange={(e) => {
                        setRegisterPassword(e.target.value);
                        setErrorMessage("");
                    }}
                />
                {/* type 이 회원가입이면, 비밀번호 확인 인풋 추가 */}
                {type === "register" && (
                    <StyledInput
                        autoComplete="new-password"
                        name="passwordConfirm"
                        placeholder="비밀번호 확인"
                        type="password"
                        onChange={(e) => {
                            setPasswordConfirm(e.target.value);
                            setErrorMessage("");
                        }}
                    />
                )}
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
                <ButtonWithMarinTop fullWidth>{text}</ButtonWithMarinTop>
            </form>
            <Footer>
                {type === "login" ? (
                    <Link to="/signup">회원가입</Link>
                ) : (
                    <Link to="/signin">로그인</Link>
                )}
            </Footer>
        </AuthFormBlock>
    );
};

export default AuthForm;
