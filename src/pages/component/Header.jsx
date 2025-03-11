import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
const Header = () => {
    return (
        <div>
            <Navbar  className='bg-info justify-content-between '>
                <Navbar.Brand className='text-white ms-3' >
                    Chat
                </Navbar.Brand>
                <Nav.Link href="#" className='text-white me-3 right-0'>Sign in: admin</Nav.Link>

            </Navbar>
            
        </div>
    );
}

export default Header;
