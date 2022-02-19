import PropTypes from "prop-types";
import HeaderLogo from "./headerLogo";

export default function Header({ text }) {
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
