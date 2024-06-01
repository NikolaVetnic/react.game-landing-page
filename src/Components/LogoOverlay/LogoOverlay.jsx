import React from "react";
import "./LogoOverlay.css";

import gameLogo from "../../Images/logo.png";
import facebookIcon from "../../Images/facebook.png";
import twitterIcon from "../../Images/twitter.png";
import discordIcon from "../../Images/discord.png";
import windowsLogo from "../../Images/windows.png";
import linuxLogo from "../../Images/linux.png";
import macosLogo from "../../Images/macos.png";

const LogoOverlay = () => {
    return (
        <div className="flexbox-container">
            <div className="logo-overlay">
                <img src={gameLogo} alt="Game Logo" className="game-logo" />
                <div className="community-section">
                    <h3>Join the Game community</h3>
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
                <div className="platform-logos">
                    <a
                        href="https://windows.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={windowsLogo} alt="Windows" />
                    </a>
                    <a
                        href="https://linux.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={linuxLogo} alt="Linux" />
                    </a>
                    <a
                        href="https://apple.com/macos"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={macosLogo} alt="MacOS" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LogoOverlay;
