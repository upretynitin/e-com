import React, { useEffect, useState } from 'react'
import Loading from '../layouts/Loading'
import MetaData from '../layouts/MetaData'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { clearErrors, loadUser, updateUserPassword } from '../../redux/action/UserAction';
import { UPDATE_PASSWORD_RESET } from '../../redux/constants/UserConstant';

function Updatepassword() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const alert = useAlert()
    const { user } = useSelector(
        (state) => state.auth
    );
    const { error, isUpdated, loading } = useSelector(state => state.user)

    const [oldpassword, setOldPassword] = useState()
    const [newpassword, setNewPassword] = useState()
    const [cpassword, setCPassword] = useState()

    useEffect(() => {
        if (user) {
            setOldPassword(user.password)
            setNewPassword(user.newpassword)
            setCPassword(user.cpassword)
        } 
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
        if (isUpdated) {
            alert.success('User Updates Successfull')
            dispatch(loadUser())
            navigate('/profile')

            dispatch({
                type: UPDATE_PASSWORD_RESET
            })
        }
    }, [dispatch, alert, error, isUpdated, navigate, user])

    const submitHandle = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append("oldpassword", oldpassword);
        formData.append('newpassword', newpassword);
        formData.append('cpassword', cpassword)
        dispatch(updateUserPassword(formData))

    }

  return (
    <>
        {
            loading ? (
                <Loading />
            ) : (
                <>
                    <MetaData title={'registration'} />
                    <div className='container'>
                        <div className='px-5'>
                            <center><h3 className='mb-3'>Update Password</h3></center>
                            <form onSubmit={submitHandle}>
                                <div className="form-group">
                                    <label>Old Password</label>
                                    <input value={oldpassword} type="oldpassword" name='oldpassword' className="form-control" placeholder="Enter oldpassword" onChange={(e) => setOldPassword(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>New Password</label>
                                    <input value={newpassword} type="newpassword" name='newpassword' className="form-control" placeholder="Enter newpassword" onChange={(e) => setNewPassword(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input value={cpassword} type="cpassword" name='cpassword' className="form-control" placeholder="Enter cpassword" onChange={(e) => setCPassword(e.target.value)} />
                                </div>
                                <button type="submit" className="btn btn-success">Submit</button>
                            </form>
                        </div>
                    </div>
                </>
            )
        }
    </>
    )
}

export default Updatepassword