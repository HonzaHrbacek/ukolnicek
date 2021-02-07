import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {

  // const onClick = (e) => {
  //   console.log('click', e);
  // }

  return (
    <header className='header'>
      {/* CSS in JS (inline) */}
      {/* <h1 style={{color: 'red',backgroundColor: 'black'}}>{title}</h1> */}
      {/* <h1 style={headingStyle}>{title}</h1> */}
      <h1 >{title}</h1>
      <Button text={showAdd ? 'Zavřít' : 'Nový úkol'} color={showAdd ? 'red' : 'green'} onClick={onAdd}/>
      {/* <Button color='blue' text='Add2'/>
      <Button color='red' text='Add3'/> */}
    </header>
  )
}

Header.defaultProps = {
  title: 'Úkolníček',
}

Header.propTypes = {
  title: PropTypes.string,
}

// CSS in JS
// const headingStyle = {color: 'red',backgroundColor: 'black'}

export default Header
