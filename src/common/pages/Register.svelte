<script>

import firebaseInstance from '../resources/firebase/index.js';
import { navigate } from "svelte-routing";

function processRegister() {
  var email    = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var password2 = document.getElementById("password2").value;

  if(password!=password2)
    displayError("The two passwords don't match!");
  else {
    firebaseInstance.createUserWithCredentials(email, password).then(function() {
        console.log("Registered");
        //navigate to login
        navigate("/login");
    }).catch(function(error) {
      console.log(error);
      displayError(error);
    });
  }
}

function displayError(message) {
  document.getElementById("errorMessage").style.display = "flex";
  document.getElementById("errorMessage").innerHTML = message;
}

console.log("Signup");

</script>

<div class="peers ai-s fxw-nw h-100vh">
    <div class="peer peer-greed h-100 pos-r bgr-n bgpX-c bgpY-c bgsz-cv" style='background-image: url("assets/static/images/bg.jpg")'>
      <div class="pos-a centerXY">
        <div class="bgc-white bdrs-50p pos-r" style='width: 120px; height: 120px;'>
          <img class="pos-a centerXY" src="assets/static/images/logo.png" alt="">
        </div>
      </div>
    </div>
    <div class="col-12 col-md-4 peer pX-40 pY-80 h-100 bgc-white scrollable pos-r" style='min-width: 320px;'>
      <h4 class="fw-300 c-grey-900 mB-40">Register</h4>
      <div id="errorMessage" class="alert alert-danger" role="alert" style="display: none;">
                            Email address not valid!
      </div>
      <div>
        <div class="form-group">
          <label class="text-normal text-dark">Email Address</label>
          <input type="email" id="email" class="form-control" Placeholder='name@email.com'>
        </div>
        <div class="form-group">
          <label class="text-normal text-dark">Password</label>
          <input type="password" id="password" class="form-control" placeholder="Password">
        </div>
        <div class="form-group">
          <label class="text-normal text-dark">Confirm Password</label>
          <input type="password" id="password2" class="form-control" placeholder="Password">
        </div>
        <div class="form-group">
          <button on:click={processRegister} class="btn btn-primary">Register</button>
        </div>
      </div>
    </div>
</div>
