import propTypes from 'prop-types';
const Button = ( {color,text,onClick}) =>{
    return <button style={{backgroundColor:color}} className='btn' onClick={onClick}>{text}</button>
}
Button.propTypes = {
    text: propTypes.string,
    color: propTypes.string,
    onClick: propTypes.func,
}

export default Button;