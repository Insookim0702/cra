import "./index.css";
import Header from "./global/header";
import "./assets/app.module.css";
import React, { useState } from "react";
import Langcontext from "./langcontext";

const MemoHeader = React.memo(Header);
function App() {
    const [headerText, setHeaderText] = useState("헤더입니다.");
    const [logo, setLogo] = useState("대한민국");
    return (
        <>
            <Langcontext.Provider value={logo}>
                <MemoHeader text={headerText} />
                김인수 입니다.
                <button onClick={() => setHeaderText("안녕하세요.")}>
                    헤더 이름 변경하기
                </button>
            </Langcontext.Provider>
        </>
    );
}

export default App;
