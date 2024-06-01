import React from "react";
import "./HeroOverlay.css";

// Import local images
import gameLogo from "./img/game_logo.png";
import facebookIcon from "./img/facebook.png";
import twitterIcon from "./img/twitter.png";
import discordIcon from "./img/discord.png";
import windowsLogo from "./img/windows.png";
import linuxLogo from "./img/linux.png";
import macosLogo from "./img/macos.png";

const HeroOverlay = () => {
    return (
        <div className="hero-overlay">
            <div className="hero-overlay-inner">
                <img
                    src={gameLogo}
                    alt="Blasphemous II"
                    className="game-logo"
                />
                <div className="community-section">
                    <h3>Join the Blasphemous community</h3>
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

export default HeroOverlay;
