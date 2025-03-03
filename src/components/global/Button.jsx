const Button = ({className, onClick, children}) => {
  return (
    <button className={className} onClick={() => {
        console.log('Button clicked');
        onClick()
    }} >
      {children}
    </button>
  )
};

export default Button;
