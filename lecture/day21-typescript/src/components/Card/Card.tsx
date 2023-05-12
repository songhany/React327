import React from 'react'
import "./card.scss"

interface CardProps {
  title: string;
  body: string;
}

export default function Card({ title, body }: CardProps) {
  return (
    <div className="card">
      <div className="card__header">
        <h2 className="card__title">{title}</h2>
      </div>
      <div className="card__body">
        <p className="card__text">{body}</p>
      </div>
      <div className="card__footer">
        <button className="card__button card__button--primary">Primary Button</button>
        <button className="card__button card__button--secondary">Secondary Button</button>
      </div>
    </div>
  )
}
