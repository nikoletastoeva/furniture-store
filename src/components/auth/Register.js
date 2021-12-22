import * as authService from '../../services/authService'
import { Link } from "react-router-dom"
import "./Register.css"
import { useAuthContext } from '../../contexts/AuthContext'
import { Alert } from 'react-bootstrap'
import { useState } from 'react/cjs/react.development'

const Register = ({history}) => {
	
	const [errors, setErrors] = useState({message: false, machPass: false, pass: false})
	const {login} = useAuthContext()
	
	const onRegisterHandler = (e) => {
		e.preventDefault();

        let formData = new FormData(e.currentTarget);
		let username = formData.get('email')
		let password = formData.get('password')
		let rePassword = formData.get('re-password') 

		

		
			authService.register(username, password, rePassword)
			.then((authData) => {
				login(authData)
				history.push('/')
			})
			.catch(err => {
				setErrors(state => ({...state, message: err}));
			})
		

			
				
	}

	const passChangeHandler = (e) => {
        let currentName = e.target.value;
        if (currentName.length < 6) {
            setErrors(state => ({...state, pass: 'Your password sould be at least 6 characters!'}))
        } else {
            setErrors(state => ({...state, pass: false}))
        }

    }

	

	return (

		<section className="h-100 gradient-form" >
			<div className="container py-5 h-100">
				<div className="row d-flex justify-content-center align-items-center h-100">
					<div className="col-xl-10">
						<div className="card rounded-3 text-black">
							<div className="row g-0">
								<div className="col-lg-6">
									<div className="card-body p-md-5 mx-md-4">

										<div className="text-center">
											<img src="StudioNovo.png" id="logoRegister" alt="logo" />
											<h4 className="mt-1 mb-5 pb-1">SMART WORK. GOOD HEALTH. BETTER BUSINESS</h4>
										</div>
										
										<form onSubmit={onRegisterHandler} method="POST">

										<Alert variant="danger" show={errors.message}>{errors.message}</Alert>
											<div className="form-outline mb-4">
												<input type="email" id="form2Example11" name="email" className="form-control" required />
												<label className="form-label" to="form2Example11">Username</label>
											</div>

											<div className="form-outline mb-4">
												<input type="password" id="form2Example22" name="password" className="form-control" onBlur={passChangeHandler} required/>
												<label className="form-label" to="form2Example22">Password</label>
												<Alert variant="danger" show={errors.pass}>{errors.pass}</Alert>
											</div>

											<div className="form-outline mb-4">
												<input type="password" id="form2Example23" name="re-password" className="form-control" required />
												<label className="form-label" to="form2Example23">Confirm Password</label>
												<Alert variant="danger" show={errors.machPass}>{errors.machPass}</Alert>
											</div>

											<div className="text-center pt-1 mb-5 pb-1">
												<input className="buttonStyle" type="submit"  value="Register"/>

											</div>

											<div className="d-flex align-items-center justify-content-center pb-4">
												<p className="mb-0 me-2">You have an account?</p>
												<Link to="/login" className="btn btn-link">Log in</Link>
											</div>

										</form>

									</div>
								</div>
								<div className="col-lg-6 d-flex align-items-center">
									<div className="px-3 py-4 p-md-5 mx-md-4">
										<img src="img2.jpg" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>


	)
}
export default Register