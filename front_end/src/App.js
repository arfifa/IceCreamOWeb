import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { Container, Alert } from 'reactstrap';

import AuthApi from '../src/config/AuthApi';
import { ProtectedRoute } from './config/ProtectedRoute';

import Home from '../src/pages/Home';
import Pendaftaran from '../src/pages/Pendaftaran/index';
import DetailItem from '../src/pages/DetailItem';
import Cart from '../src/pages/Cart';
import About from '../src/pages/About';
import MyAccount from '../src/pages/MyAccount';
import AddAddress from '../src/pages/AddAddress';
import UbahProfile from '../src/pages/UbahProfile';

import Navbar from '../src/components/NavBar';
import Footer from '../src/components/Footer';
import ModalLogin from './components/ModalLogin';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      authSuccess: false
    }
  }

  Routes = () => {
    const Auth = React.useContext(AuthApi)
    return (
      <Switch>
        <Route path='/' component={Home} exact />
        <ProtectedRoute path='/cart' auth={Auth} component={Cart} exact />
        <Route path='/pendaftaran' render={() => <Pendaftaran />} exact />
        <Route path='/detail_item/:id_item' exact component={DetailItem} />
        <Route path='/about' auth={Auth} component={About} exact />
        <Route path='/modal_login' exact >
          <Container className="mb-5" style={{ backgroundColor: 'white' }}>
            <div className="p-3">
              {this.props.auth.data.success ? (
                <Alert>
                  <h1>Login Berhasil</h1>
                  <p>silahkan lanjutkan pesanan anda.</p>
                </Alert>
              ) :
                (
                  <div>
                    <span>Silahkan login disini :</span>
                    <ModalLogin isOpen={true} buttonLabel="Login" />
                  </div>
                )}
            </div>
          </Container>
        </Route>
        <ProtectedRoute path='/my_account' auth={Auth} component={MyAccount} exact />
        <ProtectedRoute path='/add_address' auth={Auth} component={AddAddress} exact />
        <ProtectedRoute path='/edit_profile' auth={Auth} component={UbahProfile} exact />
      </Switch>
    )
  }

  render() {
    return (
      <AuthApi.Provider value={this.props.auth.data.success}>
        <Router>
          <div>
            <Navbar />
          </div>
          <this.Routes />
          <div>
            <Footer />
          </div>
        </Router>
      </AuthApi.Provider>
    )
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(App);

