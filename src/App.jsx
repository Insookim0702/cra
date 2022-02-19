import "./index.css";
import Header from "./global/header";
import "./assets/app.module.css";
import { useState } from "react";
import Langcontext from "./langcontext";

function App() {
    const [logo, setLogo] = useState("대한민국");
    return (
        <>
            <Langcontext.Provider value={logo}>
                <Header text={"헤더입니다."} />
                김인수 입니다.
            </Langcontext.Provider>
        </>
    );
}

export default App;
