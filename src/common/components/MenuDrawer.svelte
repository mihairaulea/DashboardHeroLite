<script>
import { Link } from "svelte-routing";
</script>

<div class="sidebar">
  <div class="sidebar-inner">
    <!-- ### jQuerySidebar Header ### -->
    <div class="sidebar-logo">
      <div class="peers ai-c fxw-nw">
        <div class="peer peer-greed">
          <a class="sidebar-link td-n" href="index.html">
            <div class="peers ai-c fxw-nw">
              <div class="peer">
                <div class="logo">
                  <img src="assets/static/images/logo.png" alt="">
                </div>
              </div>
              <div class="peer peer-greed">
                <h5 class="lh-1 mB-0 logo-text">DashboardHero</h5>
              </div>
            </div>
          </a>
        </div>
        <div class="peer">
          <div class="mobile-toggle sidebar-toggle">
            <a href="" class="td-n">
              <i class="ti-arrow-circle-left"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- ### jQuerySidebar Menu ### -->
    <ul class="sidebar-menu scrollable pos-r">

      <li class="nav-item mT-30 actived">
        <a class='sidebar-link'>
          <span class="icon-holder">
            <i class="c-brown-500 ti-home"></i>
          </span>
          <span class="title">
            <Link to="/">Dashboard</Link>
          </span>
        </a>
      </li>
      <li class="nav-item">
        <a class='sidebar-link'>
          <span class="icon-holder">
            <i class="c-brown-500 ti-email"></i>
          </span>
          <span class="title">
            <Link to="email">Email</Link>
          </span>
        </a>
      </li>
      <li class="nav-item">
        <a class='sidebar-link'>
          <span class="icon-holder">
            <i class="c-deep-orange-500 ti-calendar"></i>
          </span>
          <span class="title">
            <Link to="calendar">Calendar</Link>
          </span>
        </a>
      </li>
      <li class="nav-item">
        <a class='sidebar-link'>
          <span class="icon-holder">
            <i class="c-deep-purple-500 ti-comment-alt"></i>
          </span>
          <span class="title">
            <Link to="chat">Chat</Link>
          </span>
        </a>
      </li>
      <li class="nav-item">
        <a class='sidebar-link'>
          <span class="icon-holder">
            <i class="c-indigo-500 ti-bar-chart"></i>
          </span>
          <span class="title">
            <Link to="charts">Charts</Link></span>
        </a>
      </li>
      <li class="nav-item">
        <a class='sidebar-link' href="forms.html">
          <span class="icon-holder">
            <i class="c-light-blue-500 ti-pencil"></i>
          </span>
          <span class="title">Forms</span>
        </a>
      </li>
      <li class="nav-item dropdown">
        <a class="sidebar-link" href="ui.html">
          <span class="icon-holder">
              <i class="c-pink-500 ti-palette"></i>
            </span>
          <span class="title">UI Elements</span>
        </a>
      </li>
      <li class="nav-item dropdown">
        <a class="dropdown-toggle" href="javascript:void(0);">
          <span class="icon-holder">
            <i class="c-orange-500 ti-layout-list-thumb"></i>
          </span>
          <span class="title">Tables</span>
          <span class="arrow">
            <i class="ti-angle-right"></i>
          </span>
        </a>
        <ul class="dropdown-menu">
          <li>
            <a class='sidebar-link' href="basic-table.html">Basic Table</a>
          </li>
          <li>
            <a class='sidebar-link' href="datatable.html">Data Table</a>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a class="dropdown-toggle" href="javascript:void(0);">
          <span class="icon-holder">
              <i class="c-red-500 ti-files"></i>
            </span>
          <span class="title">Pages</span>
          <span class="arrow">
              <i class="ti-angle-right"></i>
            </span>
        </a>
        <ul class="dropdown-menu">
          <li>
            <a class='sidebar-link' href="blank.html">Blank</a>
          </li>
          <li>
            <a class='sidebar-link' href="404.html">404</a>
          </li>
          <li>
            <a class='sidebar-link' href="500.html">500</a>
          </li>
          <li>
            <a class='sidebar-link' href="signin.html">Sign In</a>
          </li>
          <li>
            <a class='sidebar-link' href="signup.html">Sign Up</a>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a class="dropdown-toggle" href="javascript:void(0);">
          <span class="icon-holder">
            <i class="c-teal-500 ti-view-list-alt"></i>
          </span>
          <span class="title">Multiple Levels</span>
          <span class="arrow">
            <i class="ti-angle-right"></i>
          </span>
        </a>
        <ul class="dropdown-menu">
          <li class="nav-item dropdown">
            <a href="javascript:void(0);">
              <span>Menu Item</span>
            </a>
          </li>
          <li class="nav-item dropdown">
            <a href="javascript:void(0);">
              <span>Menu Item</span>
              <span class="arrow">
                <i class="ti-angle-right"></i>
              </span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a href="javascript:void(0);">Menu Item</a>
              </li>
              <li>
                <a href="javascript:void(0);">Menu Item</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>
