import React, { useState } from 'react';
import CommitteeSidebar from './CommiteeSidebar';

function SidebarItem(props){

	// Check if user has scrolled to the bottom of the page
	const [bottom, setBottom] = useState(false);
	window.onscroll = function()
	{
		var difference = document.documentElement.scrollHeight - window.innerHeight;
		var scrollposition = document.documentElement.scrollTop;

		if (difference - scrollposition <= 180)
		{
			setBottom(true);
		}
		else
		{
			setBottom(false);
		}
	};


	if (bottom) // Don't display sidebar if user has scrolled to the bottom of the screen
	{
		return null;
	}

	return (
		<div className="sidebar-item">
			{props.committees.map(
				committee => <CommitteeSidebar key={committee.name} committee={committee} />,
			)}
		</div>
	);
}

export default SidebarItem;
