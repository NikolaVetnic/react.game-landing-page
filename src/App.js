import React from "react";
import "./App.css";
import HeroOverlay from "./HeroOverlay";

// Import local images
import heroImage from "./img/ph01.png";
import savageCombatImage from "./img/ph02.png";
import bossBattlesImage from "./img/ph03.png";
import playYourWayImage from "./img/ph04.png";
import strangeNewWorldImage from "./img/ph05.png";
import galleryImage1 from "./img/ph06.png";
import galleryImage2 from "./img/ph07.png";
import galleryImage3 from "./img/ph08.png";
import galleryImage4 from "./img/ph09.png";
import companyLogosImage from "./img/ph11.png";

const LandingPage = () => {
    return (
        <div className="landing-page">
            <header className="header">
                <div className="logo">Blasphemous II</div>
                <nav className="navbar">
                    <a href="#about">About</a>
                    <a href="#features">Features</a>
                    <a href="#screenshots">Screenshots</a>
                    <a href="#trailer">Trailer</a>
                </nav>
                <div className="header-buttons">
                    <button>Buy Now</button>
                    <button>Trailer</button>
                </div>
            </header>

            <section id="about" className="hero-section">
                <img src={heroImage} alt="Hero" className="hero-image" />
                <div class="flexbox-container">
                    <HeroOverlay />
                </div>
            </section>

            <section id="features" className="content">
                <h2>Penance Never Ends</h2>
                <p>
                    The Penitent One has returned in Blasphemous II for duty
                    calls once more to venture through a mysterious land filled
                    with secrets and challenges.
                </p>

                <div className="features">
                    <div className="feature">
                        <img src={savageCombatImage} alt="Savage Combat" />
                        <h3>Savage Combat</h3>
                        <p>
                            Engage in brutal combat and unleash devastating
                            combos and abilities.
                        </p>
                    </div>
                    <div className="feature">
                        <img src={bossBattlesImage} alt="Boss Battles" />
                        <h3>Boss Battles</h3>
                        <p>
                            Encounter epic bosses that will test your skills and
                            determination.
                        </p>
                    </div>
                    <div className="feature">
                        <img src={playYourWayImage} alt="Play Your Way" />
                        <h3>Play Your Way</h3>
                        <p>
                            Customize your abilities and weaponry to suit your
                            playstyle.
                        </p>
                    </div>
                    <div className="feature">
                        <img
                            src={strangeNewWorldImage}
                            alt="Strange New World"
                        />
                        <h3>Strange New World</h3>
                        <p>
                            Explore a vast world filled with mysteries and
                            hidden secrets.
                        </p>
                    </div>
                </div>
            </section>

            <section id="screenshots" className="gallery">
                <h2>The Gallery</h2>
                <div className="gallery-images">
                    <img src={galleryImage1} alt="Gallery 1" />
                    <img src={galleryImage2} alt="Gallery 2" />
                    <img src={galleryImage3} alt="Gallery 3" />
                    <img src={galleryImage4} alt="Gallery 4" />
                </div>
            </section>

            <section id="trailer" className="trailer">
                <h2>Trailer</h2>
                <div className="trailer-video">
                    <iframe
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="Blasphemous II Trailer"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>

            <footer className="footer">
                <h2>Sign up for the Blasphemous Newsletter</h2>
                <form>
                    <input type="email" placeholder="Email" />
                    <button type="submit">Submit</button>
                </form>
                <div className="footer-logos">
                    <img src={companyLogosImage} alt="Company Logos" />
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
