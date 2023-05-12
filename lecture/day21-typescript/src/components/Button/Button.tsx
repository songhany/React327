import React, { useEffect } from 'react'

interface ButtonProps {
  text: string;
  onClick: () => void;
}


export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button role="button" onClick={onClick}>{text}</button>
  )
}

Button.defaultProps = {
  text: "click",
  onclick: () => { }
}