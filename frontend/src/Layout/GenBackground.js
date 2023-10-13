import React from "react";


function GenBackground({backgroundImage}) {
    return (
        <div className="general-header-background" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Other content can go here if needed */}
        </div>
    );
}

export default GenBackground;
