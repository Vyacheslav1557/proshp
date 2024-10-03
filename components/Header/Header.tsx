import styles from "./header.module.css";
import React from "react";

type Props = {
    logo: React.JSX.Element | null
    nav: React.JSX.Element | null
    profile: React.JSX.Element | null
    style: React.CSSProperties | undefined
}

const Header = (props: Props) => {
    return (
        <div className={styles.header} style={props.style}>
            {props.logo}
            {props.nav}
            {props.profile}
        </div>
    )
}

Header.defaultProps = {
    logo: null,
    nav: null,
    profile: null,
    style: undefined
}

export {Header};