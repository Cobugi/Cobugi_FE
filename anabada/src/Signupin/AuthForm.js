import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import userData from "../Data/UsersData.json";

// 회원가입 or 로그인폼 보여줌.

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

    background: #6741d9;
    &:hover {
        background: #7950f2;
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

    const idRef = useRef();
    const pswdRef = useRef();
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();

        const id2 = idRef.current.value;
        const password2 = pswdRef.current.value;

        const user = users.find((user) => user.id === id2);

        if (user) {
            if (user.password === password2) {
                console.log(user.name + " 님, 로그인에 성공했습니다.");
                localStorage.clear();
                localStorage.setItem("userId", user.id);
                navigate("/");
            } else {
                // 비밀번호가 일치하지 않음
                console.log("비밀번호가 틀립니다.");
            }
        } else {
            // 주어진 ID를 가진 사용자를 찾을 수 없음
            console.log("사용자를 찾을 수 없습니다.");
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
                />
                {type === "register" && (
                    <StyledInput
                        autoComplete="nickname"
                        name="nickname"
                        placeholder="닉네임"
                    />
                )}
                <StyledInput
                    autoComplete="current-password"
                    name="password"
                    ref={pswdRef}
                    placeholder="비밀번호"
                    type="password"
                />
                {/* type 이 회원가입이면, 비밀번호 확인 인풋 추가 */}
                {type === "register" && (
                    <StyledInput
                        autoComplete="new-password"
                        name="passwordConfirm"
                        placeholder="비밀번호 확인"
                        type="password"
                    />
                )}
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
