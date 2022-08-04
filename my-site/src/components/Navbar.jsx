import propTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Navbar({title}) {
  return (
    <div>
    <h1>Navbar {title}</h1>
    <Link to='/user'>user</Link>
    <Link to='/about'>About</Link>
    </div>
  )
}
Navbar.defaultProps ={
  title: 'Github Finder'
}
Navbar.propTypes ={
  title: propTypes.string, 
}

export default Navbar
