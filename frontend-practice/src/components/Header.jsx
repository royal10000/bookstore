import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div style={styles.navbar}>
            <div style={styles.logo}>Logo</div>
            <div style={styles.navLinks}>
                <NavLink to="/" style={styles.link}>Home</NavLink>
                <NavLink to="/about" style={styles.link}>About</NavLink>
                <NavLink to="/contact" style={styles.link}>Contact</NavLink>
                
            </div>
        </div>
    );
};

const styles = {
    navbar: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
    navLinks: {
        display: 'flex',
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
        margin: '0 10px',
    },

}

export default Header