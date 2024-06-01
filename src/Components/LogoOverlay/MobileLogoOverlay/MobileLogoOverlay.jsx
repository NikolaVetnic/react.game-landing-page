import React from "react";
import "./MobileLogoOverlay.css";

import gameLogo from "../../../img/logo.png";
import facebookIcon from "../../../img/facebook.png";
import twitterIcon from "../../../img/twitter.png";
import discordIcon from "../../../img/discord.png";

const MobileLogoOverlay = () => {
    return (
        <section className="splash-section-mobile">
            <img src={gameLogo} alt="Game" className="game-logo-mobile" />
            <div className="community-section">
                <div className="social-icons">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={facebookIcon} alt="Facebook" />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={twitterIcon} alt="Twitter" />
                    </a>
                    <a
                        href="https://discord.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={discordIcon} alt="Discord" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default MobileLogoOverlay;
