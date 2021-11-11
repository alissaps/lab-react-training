import { useState } from 'react';



function SignupPage() {
  const [email, setEmail] = useState('');
  const [nacionality, setNacionality] = useState('');
  const [emailText, setEmailText] = useState('');
  const [greetings, setGreeting] = useState('');
  const [verificacao, setVerificacao] = useState('');


    function ClickSubmit() {
        setGreeting(nacionality === "1" ? "Hello" : nacionality === "2" ? "Hallo" : "Bonjour");
        setEmailText(`Your email is ${email}`);
        setVerificacao("Your email is correct")
        
    }

  return (
    <div>
      <form className="w-50">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input onChange={event => setEmail(event.target.value)}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div>
          <label for="exampleInputPassword1" className="form-label">
            Nationality
          </label>
          <select onChange={event => setNacionality(event.target.value)} class="form-select" aria-label="Default select example">
            <option selected>Select your nacionality</option>
            <option value="1">English</option>
            <option value="2">German</option>
            <option value="3">French</option>
          </select>
        </div>

        <button onClick={ClickSubmit} type="button" className="btn btn-primary">
          Submit
        </button>
      </form>

      <div>
          <p>{greetings}</p>
          <p>{emailText}</p>
          <p>{verificacao}</p>
      </div>
    </div>
  );
}

export default SignupPage;
