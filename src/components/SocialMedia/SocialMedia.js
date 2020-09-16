import React from 'react';

function SocialMedia(props){
	return (
		<React.Fragment>
            <a href="https://www.facebook.com/uclaacm" target="_blank" rel="noreferrer noopener"><div className="sm-icon" id="facebook" /></a>
            <a href="https://www.github.com/uclaacm" target="_blank" rel="noreferrer noopener"><div className="sm-icon" id="github" /></a>
            <a href="https://www.instagram.com/acm.ucla/" target="_blank" rel="noreferrer noopener"><div className="sm-icon" id="instagram" /></a>
            <a href="https://discord.gg/eWmzKsY" target="_blank" rel="noreferrer noopener"><div className="sm-icon" id="discord" /></a>
            <a href="https://www.youtube.com/channel/UCwTqwgA4thysNbB2kNYsCIw" target="_blank" rel="noreferrer noopener"><div className="sm-icon" id="youtube" style={{width: 35 + 'px'}} /></a>
            <a href="https://medium.com/techatucla" target="_blank" rel="noreferrer noopener"><div className="sm-icon" id="medium" /></a>	
        </React.Fragment>
	);
}

export default SocialMedia;