
const SignupPage = () => {
    return (
      <div>
        <h1>Signup Page</h1>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  };
  
  export default SignupPage;