import React from 'react'
import { Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../actions/auth'
import { useNavigate } from 'react-router-dom'



const Logout = ({auth: {isAuthenticated, loading}, logout}:any) => {

    const navigate = useNavigate()

    const authLinks = (
        <div>
        
        <Button onClick={logout} variant="outline-danger">
              LOGOUT
            </Button>
      
    </div>

    )
  return (
    <>
    {!loading && (<> {isAuthenticated ? authLinks :  navigate("..")} </>)}
    </>
    
  )
}

Logout.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state:any) => ({
    auth: state.auth
})

export default connect(mapStateToProps,{logout})(Logout)
