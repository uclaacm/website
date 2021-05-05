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
			)}
		</div>
	);
}

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
