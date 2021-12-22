import * as authService from '../../services/authService'
import { Link } from "react-router-dom";
import "./Login.css"
import { useAuthContext } from '../../contexts/AuthContext';
import { useState } from 'react/cjs/react.development';
import { Alert } from 'react-bootstrap';

const Login = ({history}) => {
   
	const [errors, setErrors] = useState({message: false})
	const {login} = useAuthContext()

	const onLoginHandler = (e) => {
		e.preventDefault();

        let formData = new FormData(e.currentTarget);

		let email = formData.get('email')
		let password = formData.get('password')

		

		authService.login(email, password)
		.then((authData) => {
			login(authData)
			history.push('/')
		})
		.catch(err => {
			setErrors(state => ({...state, message: err}));
		})
		
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
											<img src="StudioNovo.png" id='logoLogin'  alt="logo"/>
											<h4 className="mt-1 mb-5 pb-1">SMART WORK. GOOD HEALTH. BETTER BUSINESS</h4>
										</div>

										<form onSubmit={onLoginHandler} method="POST">
										<Alert variant="danger" show={errors.message}>{errors.message}</Alert>

											<div className="form-outline mb-4">
												<input type="email" id="form2Example11" name="email" className="form-control" required />
												<label className="form-label" to="form2Example11">Username</label>
											</div>

											<div className="form-outline mb-4">
												<input type="password" id="form2Example22" name="password" className="form-control" required/>
												<label className="form-label" to="form2Example22">Password</label>
											</div>

											<div className="text-center pt-1 mb-5 pb-1">
												
												<input className="buttonStyle" type="submit" value="Log in" />
											</div>

											<div className="d-flex align-items-center justify-content-center pb-4">
												<p className="mb-0 me-2">Don't have an account?</p>
												<Link to="/register" className="btn btn-link">Create new</Link>
											</div>

										</form>

									</div>
								</div>
								<div className="col-lg-6 d-flex align-items-center">
									<div className="px-3 py-4 p-md-5 mx-md-4">
										<img src="img2.jpg"/>
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
export default Login