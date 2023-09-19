function Button({ style, label, onClick }) {
   return <button onClick={onClick} className={style}>{label}</button>
}

export default Button;