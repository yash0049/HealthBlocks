import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import web3 from '.././web3';
import contract from '.././contract';

class Home extends Component {
	state = {
		redirectto : 5
	};
	render() {
		  return (
			<div id="home-body">
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
				<h2>Sign Up </h2>
				<br></br>
					<div><NavLink to="/newpatient" className="btn btn-light"><h4>Patient</h4></NavLink></div>
					<br></br>
					<div><NavLink to="/newdoctor" className="btn btn-light"><h4>Doctor</h4></NavLink></div>
					<br></br>
					<div><NavLink to="/newinsurancecompany" className="btn btn-light"><h4>Insurance Company</h4></NavLink></div>
					<br></br>
					<div><NavLink to="/newchemist" className="btn btn-light"><h4>Chemist</h4></NavLink></div>
					<br></br>
				<h2>Already registered?</h2>
				<br></br>
				  <button onClick={async() => {
				  	const accounts = await web3.eth.getAccounts();
				  	await contract.methods.Identify().call({from : accounts[0]}, (error,result) => {
				  		this.setState({redirectto : result});
				  		console.log(result);
				  	});
				  }} className="btn btn-dark"><h4>Enter</h4></button>
			{
				(this.state.redirectto==1) 
					? (<Redirect to="/patient"/>)
					: (<span></span>)
			}
			{
				(this.state.redirectto==2) 
					? (<Redirect to="/doctor"/>)
					: (<span></span>)
			}
			{
				(this.state.redirectto==3) 
					? (<Redirect to="/insurancecompany"/>)
					: (<span></span>)
			}
			{
				(this.state.redirectto==4) 
					? (<Redirect to="/chemist"/>)
					: (<span></span>)
			}
			</div>
	    )
	}     
}

export default Home;