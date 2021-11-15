import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='header'>
           <h1>{title}</h1>
           <Button 
           color={showAdd ? 'red' : 'green'} 
           text={showAdd ? 'Close' : 'Add'} 
           onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Todo List',
}   

Header.propTypes = {
    title: PropTypes.string.isRequired, // Hetta fer at gera soleiðis at Header í app.js væntar at vera ein string. so um t.d. eitt tal verður givið so kemur ein lítil feil melding í console
}

//CSS in js... 
// const headingStyle = {
//    color: 'red', 
//    backgroundColor: 'black'
//} //um man ger css soleiðis so koyrir man tað á t.d. h1 taggið uppá hendan mátan. <h1 style={headingStyle}>Hello Man</h1>

export default Header
