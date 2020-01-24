import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import { useDispatch, connect } from 'react-redux';

import { deleteAuth } from '../../redux/action/auth';

import {
  Container,
  Collapse,
  Navbar as NB,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';

import './navbar.css';

import ModalLogin from '../../components/ModalLogin';

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState(null);
  const [success, setSuccess] = useState(false);
  const [logout, setLogout] = useState(true);
  const [token, setToken] = useState(null);

  const dispatch = useDispatch()

  useEffect(() => {
    setToken(props.auth.data.token)
    setSuccess(props.auth.data.success)
    if (success) {
      const tokenDecode = jwt.decode(token)
      setUsername(tokenDecode.username)
      setLogout(false)
    }
    if (props.auth.data.status == 200) {
      setLogout(true)
    }
  })

  let tokenBearer = `Bearer ${token}`

  const _actionLogout = () => {
    dispatch(deleteAuth(username, {
      headers: {
        'Authorization': tokenBearer
      }
    }))
  }

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Container style={styles.containerMenu}>
      <div style={styles.headerInfo} className="text-right pr-4">
        {logout == false ? (
          <div>
            <span className="mr-3">Hi {username}</span>
            <Link style={styles.menuHeader} className="btn mr-1" to="/cart"><span className="fa fa-shopping-cart mr-1"></span>Cart</Link> |
            <Link to="/" style={styles.menuLogout} className="btn ml-1" onClick={_actionLogout}>
              <span className="fa fa-sign-out  mr-1"></span>Logout
            </Link>
          </div>
        ) : (
            <div>
              <ModalLogin buttonLabel={<font><span className="fa fa-shopping-cart mr-1"></span>Cart</font>} className="modalLogin" /> |
              <ModalLogin buttonLabel={<font><span className="fa fa-user mr-1"></span>Login</font>} className="modalLogin" />
            </div>
          )}
      </div>
      <div className="text-center" style={styles.containerLogo}>
        <img src={require('../../assets/images/logo.jpg')} alt='logo' style={styles.imageLogo} />
        <div style={styles.sloganText}>
          <h1>Ice Cream O</h1>
          <h3>Share your joy with everyone you love</h3>
        </div>
      </div>
      <NB style={styles.navbar} light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <nav className="mr-auto"></nav>
          <Nav navbar>
            <NavItem>
              <Link to="/" className='nav-link px-5' style={styles.menuLink}>Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/about" className='nav-link px-5' style={styles.menuLink}>About</Link>
            </NavItem>
            <NavItem>
              <Link to="/my_account" className='nav-link px-5' style={styles.menuLink}>My Account</Link>
            </NavItem>
          </Nav>
          <nav className="mr-auto"></nav>
        </Collapse>
      </NB>
    </Container >
  );
}

const styles = {
  containerMenu: {
    color: '#222',
    padding: 0
  },
  headerInfo: {
    backgroundColor: '#F17880',
    color: '#fff',
    height: '45px',
    flex: 1,
    flexDirection: 'col',
    padding: 5,
    justifyContent: 'flex-end'
  },
  menuHeader: {
    textDecoration: 'none',
    color: "#fff",
    backgroundColor: "#7FB6BA"
  },
  navbar: {
    backgroundColor: 'pink',
    alignItems: 'center'
  },
  containerLogo: {
    backgroundColor: '#ffffff',
    paddingBottom: '20px'
  },
  imageLogo: {
    width: 170,
    height: 140,
    marginTop: '20px',
    marginBottom: '20px',
    borderRadius: '20px'
  },
  sloganText: {
    fontFamily: 'Pacifico',
  },
  menuLink: {
    fontWeight: 'bold'
  },
  menuLogout: {
    backgroundColor: "#F17880",
    border: '0px',
    color: '#222'
  }

}

const mapStateToProps = (state) => {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Navbar)