import * as authService from '../../services/authService'
import { Link } from "react-router-dom"
import "./Register.css"
import { useAuthContext } from '../../contexts/AuthContext'

const Register = ({history}) => {
	let buttonStyle = {
        fontSize: "16px",
        lineHeight: "16px",
        borderRadius: '50px 50px 50px 50px',
        overflow: 'hidden',
        borderWidth: "0px",
        paddingTop: '12px',
        paddingRight: '64px',
        paddingBottom: '12px',
        paddingLeft: '64px',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',
        color: "#fefefe"

    }

	const {login} = useAuthContext()
	
	const onRegisterHandler = (e) => {
		e.preventDefault();

        let formData = new FormData(e.currentTarget);
		let username = formData.get('email')
		let password = formData.get('password')
		
		authService.register(username, password)
		.then((authData) => {
			login(authData)
			history.push('/')
		})
		.catch(err => {
			console.log(err);
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
											<img src="StudioNovo.png" style={{ width: "112px" }} alt="logo" />
											<h4 className="mt-1 mb-5 pb-1">SMART WORK. GOOD HEALTH. BETTER BUSINESS</h4>
										</div>

										<form onSubmit={onRegisterHandler} method="POST">


											<div className="form-outline mb-4">
												<input type="email" id="form2Example11" name="email" className="form-control" />
												<label className="form-label" to="form2Example11">Username</label>
											</div>

											<div className="form-outline mb-4">
												<input type="password" id="form2Example22" name="password" className="form-control" />
												<label className="form-label" to="form2Example22">Password</label>
											</div>

											<div className="form-outline mb-4">
												<input type="password" id="form2Example22" name="re-password" className="form-control" />
												<label className="form-label" to="form2Example22">Confirm Password</label>
											</div>

											<div className="text-center pt-1 mb-5 pb-1">
												<input className="btn btn-primary btn-block fa-lg mb-3" type="submit" style={buttonStyle} value="Register"/>

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