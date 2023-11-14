import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Typography } from "@mui/material";

// 회원가입 / 로그인 페이지의 레이아웃 담당
const AuthTemplateBlock = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    right: 0;
    /* 내가 설정해놓은 paltte 에서 2번째 회색을 쓰겠어 */
    background: #e2e2e2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

// white box

const WhiteBox = styled.div`
    .logo-area {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 2rem;
        text-align: center;
        font-weight: bold;
        /* 글자 간격 */
        letter-spacing: 2px;
    }
    /* 윤곽선 4면 전부 그림자로 입체감줌 */
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
    padding: 2rem;
    width: 360px;
    background: white;
    border-radius: 2px;
`;

const AuthTemplate = ({ children }) => {
    // 부모 컴포넌트 안에 있는 자식 컴포넌트 요소 띄우기
    return (
        <AuthTemplateBlock>
            <WhiteBox>
                {/* 전부 스타일 컴포넌트로 만들어주지 않고 가독성을 위해 css selector 사용 */}
                <div className="logo-area">
                    <Link to="/">
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{
                                display: {
                                    xs: "none",
                                    sm: "block",
                                },
                            }}
                        >
                            <img
                                src="/anabada_logo.jpg"
                                width="90px"
                                height="50px"
                            ></img>
                        </Typography>
                    </Link>
                </div>
                {children}
            </WhiteBox>
        </AuthTemplateBlock>
    );
};

export default AuthTemplate;
