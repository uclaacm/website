import React, { useEffect, useState } from 'react';

function SidebarLink(props){
	return (
		<a
			className={`committee ${props.committee.class}`}
			href={`#${props.committee.class}`}
		>
			<img src={process.env.PUBLIC_URL + props.committee.image} alt={`Logo and Wordmark for ACM ${props.committee.name}`} />
		</a>
	);
}

function Sidebar(props){
	// Check if user has scrolled to the bottom of the page
	const [bottom, setBottom] = useState(false);
	const scrollBottomListener = () => {
		const difference = document.documentElement.scrollHeight - window.innerHeight;
		const scrollposition = document.documentElement.scrollTop;
		setBottom(difference - scrollposition <= 180);
	};

	useEffect(() => {
		window.addEventListener('scroll', scrollBottomListener);

		// cleanup
		return () => {
			window.removeEventListener('scroll', scrollBottomListener);
		};
	}, []);


	// Don't display sidebar if user has scrolled to the bottom of the screen
	if (bottom) {
		return null;
	}

	return (
		<div className="sidebar-item">
			{props.committees.map(
				committee => <SidebarLink key={committee.name} committee={committee} />,
			)}
		</div>
	);
}

export default Sidebar;
