import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Spinner, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';

import { postAuth } from '../../redux/action/auth';

import './modalLogin.css';

const ModalLogin = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [isOpen, setIsOpen] = useState(props.isOpen);
  const [modal, setModal] = useState(false);
  const [viewGuess, setViewGuess] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch()
  const { msg } = props.auth.data;

  useEffect(() => {
    setIsSuccess(props.auth.isSuccess)
    setIsLoading(props.auth.isLoading)
    setIsError(props.auth.isError)
    setSuccess(props.auth.data.success)
  })

  const _handleLogin = () => {
    dispatch(postAuth({ username, password }))
  }

  const toggle = () => {
    setModal(!modal)
    setIsOpen(undefined)
  }

  const menuModal = () => {
    setViewGuess(!viewGuess)
  };

  const closeBtn = <button className="close closeLayout" onClick={toggle} >&times;</button>;

  return (
    <div className="containerModal" >
      <Button className={props.button ? "buttonTransparent" : "buttonModal"} onClick={toggle} >{buttonLabel}</Button>
      <Modal isOpen={isOpen !== undefined || success ? isOpen || false : modal} toggle={toggle} className={className} size='lg'>
        <ModalHeader toggle={toggle} close={closeBtn} className="modalHeader">
          <div className="text-center">
            <img src={require('../../assets/images/logo.jpg')} />
            <h3>Selamat Datang. Log Masuk, Untuk Mulai Pesan.</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="modalBodyLogin col-sm-6 text-center mb-5">
            <div className="mb-3">
              <Button
                className="buttonModalMenu"
                onClick={menuModal}
                disabled={viewGuess == false ? true : false} >Log Masuk</Button> |
                <Button
                className="buttonModalMenu"
                onClick={menuModal}
                disabled={viewGuess == false ? false : true}>Kunjungan Pertama</Button>
            </div>
            {viewGuess ? (
              <div>
                <p>Buat akun untuk mendapatkan penawaran eksklusif dan promosi, menyimpan pesanan dan menu favorit, dan proses pesan lebih cepat.</p>
                <Link to="/pendaftaran" onClick={toggle} className="btn buttonModal mb-3">PENDAFTARAN</Link>
              </div>
            ) : (
                <div>
                  {props.auth.isLoading}
                  <Form>
                    <FormGroup>
                      <Input type="text" placeholder="username"
                        onChange={event => setUsername(event.target.value)} />
                    </FormGroup>
                    <FormGroup>
                      <Input type="password" placeholder="password"
                        onChange={event => setPassword(event.target.value)} />
                    </FormGroup>
                  </Form>
                  {isSuccess && success == false && <div className="text-danger text-left mb-3">{msg}</div>}
                  {isLoading ? (
                    <div >
                      <Spinner color="dark" /> Loading ...
                    </div>
                  ) : (
                      <Button onClick={_handleLogin} className="btn buttonModalLogin" block >LOGIN</Button>
                    )}
                </div>
              )}
          </div>
          {isError &&
            <Alert color="danger">
              <h3>Connection Failed!</h3>
            </Alert>}
        </ModalBody>
      </Modal>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(ModalLogin);