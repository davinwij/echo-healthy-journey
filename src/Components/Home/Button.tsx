type Props = {
    classes: any;
    children: any;
    onClick: () => void;
}

const Button = (props: Props) => {    
  return (
    <>
        <button style={props.classes} onClick={props.onClick}>
            {props.children}
        </button>
    </>
  )
}

export default Button