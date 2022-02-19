import { useContext } from "react";
import Langcontext from "../langcontext";
export default function HeaderLogo() {
    const lang = useContext(Langcontext);
    return <>{lang}</>;
}
