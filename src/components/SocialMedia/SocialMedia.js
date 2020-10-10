import React from 'react';

function SocialMedia(props){
	return (
		<React.Fragment>
            <a href="https://www.facebook.com/uclaacm" target="_blank" rel="noreferrer noopener"><div className={'sm-icon ' + props.type} id="facebook" /></a>
            <a href="https://www.github.com/uclaacm" target="_blank" rel="noreferrer noopener"><div className={'sm-icon ' + props.type} id="github" /></a>
            <a href="https://www.instagram.com/acm.ucla/" target="_blank" rel="noreferrer noopener"><div className={'sm-icon ' + props.type} id="instagram" /></a>
            <a href="https://discord.gg/eWmzKsY" target="_blank" rel="noreferrer noopener"><div className={'sm-icon ' + props.type} id="discord" /></a>
            <a href="https://www.youtube.com/c/acmucla" target="_blank" rel="noreferrer noopener"><div className={'sm-icon ' + props.type} id="youtube" style={{width: 35 + 'px'}} /></a>
            <a href="https://medium.com/techatucla" target="_blank" rel="noreferrer noopener"><div className={'sm-icon ' + props.type} id="medium" /></a>	
        </React.Fragment>
	);
}

export default SocialMedia;