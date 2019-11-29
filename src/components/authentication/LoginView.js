import React from 'react';


const LoginView = (props) => {
    return (
        <div className="container-scroller">
    <div className="container-fluid page-body-wrapper full-page-wrapper">
      <div className="content-wrapper d-flex align-items-stretch auth auth-img-bg">
        <div className="row flex-grow">
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className="auth-form-transparent text-left p-3">
              <div className="brand-logo">
                <img src="https://rentacar.ng/images/hertznigeria.png" alt="Hert Nigeria"/>
              </div>
              <h4>Welcome back!</h4>
              <h6 className="font-weight-light">Happy to see you again!</h6>
              
             
              <form className="pt-3" onSubmit={e=>props.submit(e,props.state)} id="pushtoapi" name="pushtoapi">
                <div className={'form-group' + (props.state.submitted && !props.state.email ? ' has-error' : '')}>
                  <label htmlFor="exampleInputEmail">User Email</label>
                  <div className="input-group">
                    <div className="input-group-prepend bg-transparent">
                      <span className="input-group-text bg-transparent border-right-0">
                        <i className="mdi mdi-account-outline text-primary"></i>
                      </span>
                    </div>
                    <input type="text" className="form-control form-control-lg border-left-0" id="email" placeholder="Email" name="email" value={props.state.email}  onChange={props.handleChange}/>
                  </div>
                  {props.state.submitted && !props.state.email &&
                                <div className="help-block">Email is required</div>
                            }
                </div>
                  
                  
                <div className={'form-group' + (props.state.submitted && !props.state.password ? ' has-error' : '')}>
                  <label htmlFor="exampleInputPassword">Password</label>
                  <div className="input-group">
                    <div className="input-group-prepend bg-transparent">
                      <span className="input-group-text bg-transparent border-right-0">
                        <i className="mdi mdi-lock-outline text-primary"></i>
                      </span>
                    </div>
                    <input type="password" className="form-control form-control-lg border-left-0" id="password" placeholder="Password" name="password" value={props.state.password} onChange={props.handleChange}/>                       
                  </div>
                  {props.state.submitted && !props.state.password &&
                                <div className="help-block">Passsword is required</div>
                            } 
                </div>
                  
                  
                <div className="my-2 d-flex justify-content-between align-items-center">
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" id="checkmein" className="form-check-input"/>
                      Keep me signed in
                    </label>
                  </div>
                  <a href="#" className="auth-link text-black">Forgot password?</a>
                </div>
                  
                 
                  
                <div className="my-3">
                    
                  <button type="submit" className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" 
                    style={{color:"whitesmoke", cursor: "pointer", id:"postLogin"}}>LOGIN</button>
                </div>
                  
                {/* <!--<div className="mb-2 d-flex">
                  <button type="button" className="btn btn-facebook auth-form-btn flex-grow mr-1">
                    <i className="mdi mdi-facebook mr-2"></i>Facebook
                  </button>
                  <button type="button" className="btn btn-google auth-form-btn flex-grow ml-1">
                    <i className="mdi mdi-google mr-2"></i>Google
                  </button>
                </div>--> */}
                  
                  
                <div className="text-center mt-4 font-weight-light">
                 {/* <!-- Don't have an account? <a href="register-2.html" className="text-primary">Create</a> --> */}
                </div>
              </form>
              
              
              
            </div>
          </div>
            
          {/* <!-- THIS IS THE BACKGROUND FOR THE LOGIN PAGE --> */}
          <div className="col-lg-6 login-half-bg d-flex flex-row">
            <p className="text-white font-weight-medium text-center flex-grow align-self-end">Copyright &copy; 2018  All rights reserved.</p>
          </div>
           {/* <!-- END OF BACKGROUND FOR THE LOGIN PAGE --> */}
            
            
        </div>
      </div>
      {/* <!-- content-wrapper ends --> */}
    </div>
    {/* <!-- page-body-wrapper ends --> */}
  </div>
    );
}
export default LoginView;