import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {connect } from 'react-redux';
import { getCurrentProfile } from '../actions/profile';
import Logout from './Logout';

const Dashboard = ({getCurrentProfile, auth, profile}:any) => {
    useEffect(()=> {
        getCurrentProfile();
    },[])
  return (
    <>
    <Logout/>
    Dashborad
    </>
  )
}

Dashboard.propTypes ={
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = (state:any) => ({
    auth: state.auth,
    profile:state.profile
})

export default connect(mapStateToProps,{getCurrentProfile})(Dashboard)
