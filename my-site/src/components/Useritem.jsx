import propTypes from 'prop-types'

function Useritem({user : {avatar_url, login}}) {
    
  return (
    <div>
        <div>
             <img src={avatar_url}  alt='profile' width='100px' />
        </div>
        <div><h3>{login}</h3></div>
        
    </div>
  )
}

Useritem.propTypes ={
    user: propTypes.object.isRequired,
}


export default Useritem
