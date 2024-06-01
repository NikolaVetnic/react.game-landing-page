import React from "react";
import "./App.css";

import { Header, MobileHeader } from "./Components/Header/Header";
import LogoOverlay from "./Components/LogoOverlay/LogoOverlay";
import TextBlock from "./Components/TextBlock/TextBlock";
import Feature from "./Components/Feature/Feature";
import Footer from "./Components/Footer/Footer";

import splashImage from "./Images/splash.png";
import featureImage1 from "./Images/feature1.png";
import featureImage2 from "./Images/feature2.png";
import featureImage3 from "./Images/feature3.png";
import featureImage4 from "./Images/feature4.png";
import Gallery from "./Components/Gallery/Gallery";
import Trailer from "./Components/Trailer/Trailer";

const LandingPage = () => {
    return (
        <div className="landing-page">
            <Header />
            <MobileHeader />

            <section id="splash" className="hero-section">
                <div>
                    <img
                        src={splashImage}
                        alt="Splash"
                        className="hero-image"
                    />
                    <LogoOverlay />
                </div>
            </section>

            <section id="features" className="content">
                <div className="features">
                    <section id="description">
                        <TextBlock
                            title="Description"
                            paragraphs={[
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                "Ut enim ad minim veniam, quis nostrud exercitation Windows, MacOS et Linux.",
                            ]}
                            highlights={[
                                "consectetur adipiscing elit",
                                "ea commodo consequat",
                                "in reprehenderit in voluptate",
                                "deserunt mollit anim",
                                "windows",
                                "macos",
                                "linux",
                            ]}
                        />
                    </section>
                    <Feature
                        image={featureImage1}
                        overtitle="Overtitle"
                        title="Title"
                        text="Nullam vitae luctus augue. Cras volutpat libero mi, in volutpat justo feugiat sed. Praesent lacinia iaculis elementum. Aliquam vitae est ligula. Donec consectetur tempor porttitor."
                        highlights={["vitae luctus augue", "lacinia iaculis"]}
                        textLeft={false}
                    />
                    <Feature
                        image={featureImage2}
                        overtitle="Overtitle"
                        title="Title"
                        text="Praesent vel velit nulla. Maecenas vel vulputate tellus. Cras vulputate fringilla tellus, vel lobortis nisi sagittis et. Vivamus non est mauris. Duis eget sem est. Duis finibus blandit diam, in egestas lacus pulvinar eu."
                        highlights={[
                            "vulputate tellus",
                            "lobortis nisi sagittis",
                        ]}
                        textLeft={true}
                    />
                    <Feature
                        image={featureImage3}
                        overtitle="Overtitle"
                        title="Title"
                        text="Maecenas ultrices ipsum id malesuada ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed posuere ante et nisi consequat pretium."
                        highlights={[
                            "malesuada ultrices",
                            "faucibus orci luctus",
                        ]}
                        textLeft={false}
                    />
                    <Feature
                        image={featureImage4}
                        overtitle="Overtitle"
                        title="Title"
                        text="Donec facilisis nulla nisi, ut elementum tortor mattis nec. Donec sed auctor purus. Aenean malesuada velit facilisis ante tincidunt suscipit. Mauris lacinia, metus at malesuada."
                        highlights={["facilisis nulla nisi", "auctor purus"]}
                        textLeft={true}
                    />
                </div>
            </section>

            <section id="screenshots" className="gallery">
                <Gallery />
            </section>

            <section id="trailer" className="trailer">
                <Trailer />
            </section>

            <Footer />
        </div>
    );
};

export default LandingPage;
