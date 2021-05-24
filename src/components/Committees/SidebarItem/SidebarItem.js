<<<<<<< HEAD
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
=======
import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
//import CommitteeSidebar from './CommiteeSidebar';

const Navigation = (props) => {
	return (
		<>
		<div className="committee-choices">
			<DropdownButton className="dropdown" title="Committees">
					<Dropdown.Item href="/#studio">Studio</Dropdown.Item>
					<Dropdown.Item href="/#icpc">ICPC</Dropdown.Item>
			</DropdownButton>
		</div>
		</>
	);
}

export default Navigation;
/*
function SidebarItem(props){
	return (
		<div className="sidebar-item">
			{props.committees.map(
				committee => <CommitteeSidebar key={committee.name} committee={committee} />
>>>>>>> 7ff0e4aa0b573f3c307233577609b4b772e29275
			)}
		</div>
	);
}

<<<<<<< HEAD
export default SidebarItem;
=======
export default SidebarItem;*/

/*{props.committees.map(
						committee => <Nav.Link href={`#${props.committee.class}`}></Nav.Link>
					)}*/

/*
<Navbar className='sidebar' collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
			<Container>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav>
						<Nav.Link href='/#studio'>Studio</Nav.Link>
						<Nav.Link href='/#icpc'>ICPC</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
		*/
>>>>>>> 7ff0e4aa0b573f3c307233577609b4b772e29275
