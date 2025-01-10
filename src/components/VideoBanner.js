import React from 'react';

const VideoSection = () => {
    return (
        <section className="full-width-video-container">
            <video className="full-width-video" autoPlay muted loop>
                <source src="/videos/services-video.mp4" type="video/mp4" />
            </video>
        </section>
    );
};

export default VideoSection;
