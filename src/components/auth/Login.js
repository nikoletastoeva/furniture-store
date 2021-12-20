import * as authService from '../../services/authService'
import { Link } from "react-router-dom";
import "./Login.css"
import { useAuthContext } from '../../contexts/AuthContext';

const Login = ({history}) => {
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
											<img src="StudioNovo.png" style={{width: "112px"}} alt="logo"/>
											<h4 className="mt-1 mb-5 pb-1">SMART WORK. GOOD HEALTH. BETTER BUSINESS</h4>
										</div>

										<form onSubmit={onLoginHandler} method="POST">
											

											<div className="form-outline mb-4">
												<input type="email" id="form2Example11" name="email" className="form-control"  />
												<label className="form-label" to="form2Example11">Username</label>
											</div>

											<div className="form-outline mb-4">
												<input type="password" id="form2Example22" name="password" className="form-control" />
												<label className="form-label" to="form2Example22">Password</label>
											</div>

											<div className="text-center pt-1 mb-5 pb-1">
												
												<input className="btn btn-primary btn-block fa-lg mb-3" type="submit" style={buttonStyle} value="Log in" />
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