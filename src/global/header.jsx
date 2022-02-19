import PropTypes from "prop-types";
import HeaderLogo from "./headerLogo";

export default function Header({ text }) {
    console.log("렌더링 헤더");
    return (
        <header>
            {text}
            <HeaderLogo />
        </header>
    );
}

Header.propTypes = {
    text: PropTypes.string,
};
