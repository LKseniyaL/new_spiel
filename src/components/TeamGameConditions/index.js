import { Link } from 'react-router-dom';
import React from 'react';
import Button from '../Button';

import s from './style.module.scss';

export default function TeamGameConditions() {
  return (
    <section className={s.mainBlock}>
      <Link to={'/'}><div className={s.mainBlock_close}>x</div></Link>
      
        <div className={s.mainBlock_linkBtn}>
          <Link to={'/'}><Button text={'Командная игра'}/></Link>
        </div>
        <div className={s.mainBlock_btns}>
            <Button text={'Создать игру'} className={s.mainBlock_btns_btnLeft}/>
            <Button text={'Найти игру'} className={s.mainBlock_btns_btnRight}/>
        </div>
    </section>
  )
}
