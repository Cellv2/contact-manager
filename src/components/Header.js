import React from "react";

const Header = props => {
    const { branding } = props;
    return (
        <div>
            <h1>{branding}</h1>
        </div>
    );
};

//if 'branding' isn't passed in, MyApp will be used instead
Header.defaultProps = { branding: "MyApp" };

export default Header;
