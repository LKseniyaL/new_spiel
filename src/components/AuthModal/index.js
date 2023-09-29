import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';
import s from './style.module.scss';
import { loginUser, registerUser } from '../../store/slice/authSlice';

// Эта строка указывает библиотеке react-modal,
// какой элемент следует рассматривать как корневой элемент вашего приложения
Modal.setAppElement('#root');

export default function AuthModal({isOpen, onClose}) {
  const [ isLogin, setIsLogin ] = useState(true);
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(isLogin){
      dispatch(loginUser({ email, password }));
    }else{
      dispatch(registerUser({ email, password }));
    }
  }

  // if (!isOpen) {
  //   return null;
  // }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel='Авторизация'
      className={s.modal}  
    >
      <button onClick={onClose} className={s.modal_closeBtn}>X</button>
      <h2>{isLogin ? 'Вход' : 'Регистрация'}</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          placeholder='Пароль'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>{isLogin ? 'Войти' : 'Зарегистрироваться'}</button>
      </form>
      <div className={s.modal_switchBtn} onClick={() => setIsLogin((prev) => !prev)}>
        {isLogin ? 'Переключиться на регистрацию' : 'Переключиться на вход'}
      </div>
    </Modal>
  );
}