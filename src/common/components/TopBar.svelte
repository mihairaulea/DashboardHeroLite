<script>
  import firebaseInstance from "../resources/firebase/index.js";
  import { links, Router } from "svelte-routing";

  let userName = "Mihai";
  let userImage = "https://randomuser.me/api/portraits/men/10.jpg";
  let anonAvatar = "https://randomuser.me/api/portraits/men/10.jpg";

  function doLogOut() {
    firebaseInstance.signOut();
    window.location.reload();
  }
</script>

<style>
  .dropdown .dropdown-toggle {
    margin: 5px 20px;
    cursor: pointer;
  }
</style>

<div use:links class="header navbar">
  <Router>
    <div class="header-container">
      <ul class="nav-left">
        <li>
          <div id="sidebar-toggle" class="sidebar-toggle">
            <i class="ti-menu" />
          </div>
        </li>
      </ul>
      <ul class="nav-right">
        <li class="dropdown">
          <div
            class="dropdown-toggle no-after peers fxw-nw ai-c lh-1"
            data-toggle="dropdown"
            aria-expanded="false">
            <div class="peer mR-10">
              <img
                class="w-2r bdrs-50p"
                src="https://randomuser.me/api/portraits/men/10.jpg"
                alt="" />
            </div>
            <div class="peer">
              <span class="fsz-sm c-grey-900">John Doe</span>
            </div>
          </div>
          <ul class="dropdown-menu fsz-sm">
            <li>
              <a
                href="javascript://"
                class="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                <i class="ti-settings mR-10" />
                <span>Setting</span>
              </a>
            </li>
            <li>
              <a
                href="javascript://"
                class="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                <i class="ti-user mR-10" />
                <span>Profile</span>
              </a>
            </li>
            <li>
              <a
                href="javascript://"
                class="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                <i class="ti-email mR-10" />
                <span>Messages</span>
              </a>
            </li>
            <li role="separator" class="divider" />
            <li>
              <a
                href="/"
                noroute
                class="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                <i class="ti-power-off mR-10" />
                <span on:click|preventDefault={doLogOut}>Logout</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </Router>
</div>
