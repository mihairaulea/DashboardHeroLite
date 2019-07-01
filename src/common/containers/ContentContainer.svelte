<script>

import { Router, Route } from "svelte-routing";
import TopBar from '../components/TopBar.svelte'
import MenuDrawer from '../components/MenuDrawer.svelte'

import DashboardContent from '../pageContents/DashboardContent.svelte'
import EmailContent from '../pageContents/EmailContent.svelte'
import CalendarContent from '../pageContents/CalendarContent.svelte'
import ChatContent from '../pageContents/ChatContent.svelte'
import FormsContent from '../pageContents/FormsContent.svelte'
import UiContent from '../pageContents/UiContent.svelte'
import ChartContent from '../pageContents/ChartContent.svelte'
import jQuery from "jQuery";
import { onMount } from 'svelte';

onMount(() => {

jQuery('.dropdown').on('click', function () {
  console.log("click on dropdown class");
  const $this = jQuery(this);
  if($this.hasClass('show'))
    $this.removeClass('show');
  else
    $this.addClass('show');
});

// Sidebar links
jQuery('.sidebar .sidebar-menu li a').on('click', function () {
    const $this = jQuery(this);
    if ($this.parent().hasClass('open')) {
      $this
        .parent()
        .children('.dropdown-menu')
        .slideUp(200, () => {
          $this.parent().removeClass('open');
        });
    } else {
      $this
        .parent()
        .parent()
        .children('li.open')
        .children('.dropdown-menu')
        .slideUp(200);

      $this
        .parent()
        .parent()
        .children('li.open')
        .children('a')
        .removeClass('open');

      $this
        .parent()
        .parent()
        .children('li.open')
        .removeClass('open');

      $this
        .parent()
        .children('.dropdown-menu')
        .slideDown(200, () => {
          $this.parent().addClass('open');
        });
    }
  });

  jQuery('.sidebar-toggle').on('click', e => {
    console.log("click");
    jQuery('.app').toggleClass('is-collapsed');
    e.preventDefault();
  });

  jQuery('#sidebar-toggle').click(e => {
    e.preventDefault();
    setTimeout(() => {
      window.dispatchEvent(window.EVENT);
    }, 300);
  });
});


export let url = "";
</script>

<Router url="{url}">
<MenuDrawer />
<div class="page-container">
<TopBar />
<div>
<main class="main-content bgc-grey-100">
  <div id="mainContent">
  <div>
    <Route path="/" component="{DashboardContent}" />
    <Route path="email" component="{EmailContent}" />
    <Route path="calendar" component="{CalendarContent}" />
    <Route path="forms" component="{FormsContent}" />
    <Route path="chat" component="{ChatContent}" />
    <Route path="ui" component="{UiContent}" />
    <Route path="charts" component="{ChartContent}" />
  </div>
  </div>
</main>
</div>
</div>
</Router>
