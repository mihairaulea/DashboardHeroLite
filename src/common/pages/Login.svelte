<script>

import firebaseInstance from '../resources/firebase/index.js';

function requestLogin() {
  var email    = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  firebaseInstance.signInWithCredentials(email, password).then(function() {
      console.log("logged in!");
  }).catch(function(error) {
    console.log(error);
  });

  }

console.log("Loginnn");

</script>


<div class="peers ai-s fxw-nw h-100vh">
  <div class="d-n@sm- peer peer-greed h-100 pos-r bgr-n bgpX-c bgpY-c bgsz-cv" style='background-image: url("assets/static/images/bg.jpg")'>
    <div class="pos-a centerXY">
      <div class="bgc-white bdrs-50p pos-r" style='width: 120px; height: 120px;'>
        <img class="pos-a centerXY" src="assets/static/images/logo.png" alt="">
      </div>
    </div>
  </div>
  <div class="col-12 col-md-4 peer pX-40 pY-80 h-100 bgc-white scrollable pos-r" style='min-width: 320px;'>
    <h4 class="fw-300 c-grey-900 mB-40">Login</h4>
    <div>
      <div class="form-group">
        <label class="text-normal text-dark">Email</label>
        <input id="email" type="email" class="form-control" placeholder="JohnDoe@email.com">
      </div>
      <div class="form-group">
        <label class="text-normal text-dark">Password</label>
        <input id="password" type="password" class="form-control" placeholder="Password">
      </div>
      <div class="form-group">
        <div class="peers ai-c jc-sb fxw-nw">
          <div class="peer">
            <div class="checkbox checkbox-circle checkbox-info peers ai-c">
              <input type="checkbox" id="inputCall1" name="inputCheckboxesCall" class="peer">
              <label for="inputCall1" class=" peers peer-greed js-sb ai-c">
                <span class="peer peer-greed">Remember Me</span>
              </label>
            </div>
          </div>
          <div class="peer">
            <button on:click={requestLogin} class="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
