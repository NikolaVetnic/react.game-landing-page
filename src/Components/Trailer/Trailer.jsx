import "./Trailer.css";

const Trailer = () => {
    return (
        <div>
            <h2>Trailer</h2>
            <div className="trailer-video">
                <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Game Trailer"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default Trailer;
