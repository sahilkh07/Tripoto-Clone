function navbar(){

    return ` <nav id="navbar">
    <div id="rightNavbar">
      <a href="1.html"><img src="https://cdn1.tripoto.com/assets/2.9/img/logo/tripoto.svg" alt=""></a>
    </div>
    <div id="corner" class="corner">
        <button>
          <li class="ins">Inspiration
            <ul>
              <div id="margin">
                <li>Visit Dubai</li>
                <li>Visit Singapore</li>
                <li>Beaches</li>
                <li>Mountains</li>
                <li>Heritage</li>
                <li>Weekend Guide</li>
                <li>Upcoming Festivals</li>
                <li>Honeymoon Packages</li>
                <li>Wildlife Tourism</li>
                <li>Road Trips</li>
                <li>Getaways Guide</li>
                <li>Luxury Travel</li>
                <li>Explore More</li>
              </div>
            </ul>
          </li>
        </button>
        <button>
          <li class="ins">Forum</li>
        </button>
        <button>
          <li class="ins">Packages</li>
        </button>
        <button>
          <li class="ins">Publish Trip
            <ul>
              <div id="margin">
                <li id="addAmount">Add Amount</li>
                <li>Create New</li>
                <li>Upload Photos/Videos</li>
                <li>Import Blog</li>
              </div>
            </ul>
          </li>
        </button>
        <button class="logOut" id="show-login">
          <li class="ins">Sign In</li>
        </button>
    </div>
  </nav>
<!-- </div> -->
<div id="container">
<div id="popUp" class="popup">
  <div class="close-btn">&times;</div>
  <div class="form-element">
      <a href="#" class="fa fa-facebook"></a>
      <button id="facebook">Log in with Facebook</button>
  </div>
  <div class="form-element">
      <a id="fa-google" href="#" class="fa fa-google"></a>
      <button id="google">Log in with Google</button>
  </div>
  <label id="or" for="OR">OR</label>

  <div  class="form-element">
      <label for="email">Email</label>
      <input type="text" id="loginEmail" placeholder="Enter Email">
  </div>
  <div  class="form-element">
      <label for="password">Password</label>
      <input type="password" id="loginPassword" placeholder="Enter Password">
  </div>
  <div class="form-element">
      <input type="checkbox" id="remember-me">
      <label id="remember" for="remember-me">Remember-Me</label>
  </div>
  <div id="login" class="form-element">
      <button id="login">LOG IN</button>
  </div>
  <div class="form-element">
      <a id="forget" href="#">Forgot Password</a>
  </div>
  <div id="signup" class="form-element">
      <label id="text" for="dont">Don't have an account?</label>
      <a id="loginpage" href="#">Sign Up</a>
  </div>
</div>
</div>
<div id="popUp" class="popup1">
<div class="close-btn">&times;</div>
<div class="form-element">
<a id="signFa" href="#" class="fa fa-facebook"></a>
<button id="facebook">Sign Up with Facebook</button>
</div>
<div class="form-element">
<a id="signGo" href="#" class="fa fa-google"></a>
<button id="google">Sign Up with Google</button>
</div>
<label id="or" for="OR">OR</label>
<div  class="form-element">
<input type="text" id="name" placeholder="Enter Name">
</div>
<div  class="form-element">
<input type="text" id="email" placeholder="Enter Email">
</div>
<div  class="form-element">
<!-- <label for="password">Password</label> -->
<input type="password" id="password" placeholder="Enter Password">
</div>
<div  class="form-element">
<!-- <label for="password">Password</label> -->
<input type="text" id="mobile" placeholder="Enter Ph no">
</div>
<div class="form-element">
<input type="checkbox" id="remember-me">
<label id="remember" for="remember-me">Subscribe to the newsletter</label>
</div>
<div class="form-element">
<button id="signUp">SIGN UP</button>
</div>
<div class="form-element">
<a id="forget" href="#">
    By signing up, you agree to Tripoto's terms and conditions and privacy policy.
</a>
</div>
</div>`
}

export default navbar