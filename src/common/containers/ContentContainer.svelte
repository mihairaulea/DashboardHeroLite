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
  </div>
  </div>
</main>
</div>
</div>

</Router>
