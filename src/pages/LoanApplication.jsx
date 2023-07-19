import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdArrowBackIos } from "react-icons/md";

const LoanApplication = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [loanRequestResult, setLoanRequestResult] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoanAmountChange = (event) => {
    setLoanAmount(event.target.value);
  };

  const handleSubmitLoanApplication = (event) => {
    event.preventDefault();
    alert(email)

    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem("userData"));
    

    // Verify user credentials
    if (!userData || !userData.email || userData.email.toLowerCase() !== email.toLowerCase() || userData.password !== password) {
        setLoanRequestResult('Invalid email or password. Please try again.');
        return;
      }

    // Handle loan application submission
    // For simplicity, we'll just set a response message based on the user's credit limit
    if (userData.creditLimit >= parseInt(loanAmount)) {
      setLoanRequestResult(`Congratulations ${userData.name}! Your loan request for $${loanAmount} has been approved.`);
    } else {
      setLoanRequestResult(`Sorry, your credit limit is insufficient for a loan of $${loanAmount}.`);
    }
  };

  return (
    <div className="p-4 bg-primary h-[100vh]">
      <h1 className="text-2xl text-white font-bold mb-4 flex items-center lg:w-[60%] md:w-[80%] w-[90%] mx-auto mt-6">
        <span onClick={() => navigate(-1)} className="mr-4">
          <MdArrowBackIos />
        </span>
        Loan Application
      </h1>
      <form onSubmit={handleSubmitLoanApplication} className="lg:w-[60%] md:w-[80%] w-[90%] m-auto">
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-1 text-white">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 rounded-md border border-gray-300"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-semibold mb-1 text-white">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 rounded-md border border-gray-300"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="loanAmount" className="block font-semibold mb-1 text-white">
            Loan Amount:
          </label>
          <input
            type="number"
            id="loanAmount"
            className="w-full p-2 rounded-md border border-gray-300"
            value={loanAmount}
            onChange={handleLoanAmountChange}
            min="1"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-light text-primary px-4 py-2 w-full mt-6 text-lg font-bold h-[50px] rounded-md"
        >
          Submit Application
        </button>
      </form>
      {loanRequestResult && (
        <p className="mt-6 font-semibold text-white lg:w-[60%] md:w-[80%] w-[90%] mx-auto text-2xl">{loanRequestResult}</p>
      )}
    </div>
  );
};

export default LoanApplication;
