import React from 'react';
import s from './style.module.scss';

export default function Button({ text, onClick, className }) {
  return (
    <div onClick={onClick} className={`${s.button} ${className}`}>
        {text}
    </div>
  )
}
