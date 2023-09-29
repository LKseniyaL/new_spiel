import { Link } from 'react-router-dom';
import React from 'react';
import Button from '../Button';
import s from './style.module.scss';

export default function GameMode() {
  return (
    <section className={s.gameMode}>
      <div className={s.gameMode_title}>Как вы хотите играть?</div>
      <div className={s.gameMode_blockBths}> 
      <div className={s.gameMode_btn1}>
        <Button text={'Одиночная игра'}/>
      </div>
      <div className={s.gameMode_btn2}>
        <Link to={'/TeamGameConditions'}><Button text={'Командная игра'}/></Link>
      </div>
      </div>
    </section>
  )
}
