import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthModal from '../AuthModal';
import Button from '../Button';

import s from './style.module.scss';

export default function Nav() {
  //отвечает за модальное окно с регистрацией и входом 
  //начало
  const [ isAuthModalOpen, setIsAuthModalOpen ] = useState(false);
 // крнец

  const [ isMenuOpen, setMenuOpen ] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (e) => {
    if (buttonRef.current && buttonRef.current.contains(e.target)) {
      return;
    }

    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setMenuOpen(false);
    }
  };

  // функция для кнопки входа

  function handleClick(){
    setMenuOpen(!isMenuOpen);
    setIsAuthModalOpen(true);
  }

  return (
    <div className={s.menu}>

      <div>
        <AuthModal 
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
          />
      </div>

      <div 
        ref={buttonRef}
        className={s.menu_Btn} 
        onClick={() => setMenuOpen(!isMenuOpen)}
        style={{ backgroundColor: isMenuOpen ? '#0a1429' : '#0d1937',
                 backgroundColor: isAuthModalOpen ? '' : '#0d1937'}}>
          <div></div>
          <div></div>
          <div></div>
        </div>

      {
        isMenuOpen && (
          <nav ref={menuRef} className={`${s.nav} ${isMenuOpen ? s.open : ''}`}>
          <ul>
            <li><Link to={'/'}>Главная</Link></li>
            <li><Link>Выбор катерогии</Link></li>
            <li><Link>Таблица рекордов</Link></li>
            <li><Link>Профиль игрока</Link></li>
            <li><Link>Настройки</Link></li>
            <li><Link>О игре</Link></li>
            <li><Link><Button text={'Начать игру'} className={s.menu_startBtn}></Button></Link></li>
            <li><Button 
                  text={'Вход'} 
                  className={s.menu_exetBtn} 
                  onClick={handleClick}
                  ></Button></li>
          </ul>
      </nav>
        )
      }
    </div>
  )
}
