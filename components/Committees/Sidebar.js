// import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import styles from "../../styles/components/Committees/Sidebar.module.scss";

function SidebarLink(props){
	return (
		<a
			className={styles.committee}
			href={`#${props.committee.class}`}
		>
			<div className={styles.committeeSidebarImage}>
				<img src={props.committee.image} alt={`Logo and Wordmark for ACM ${props.committee.name}`} />
				{/* TODO: use next image without breaking deploy */}
			</div>
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
		<div className={styles.sidebarItem}>
			{props.committees.map(
				committee => <SidebarLink key={committee.name} committee={committee} />,
			)}
		</div>
	);
}

export default Sidebar;
