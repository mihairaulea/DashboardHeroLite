<script>

import TopBar from '../components/TopBar.svelte'
import MenuDrawer from '../components/MenuDrawer.svelte'
import DashboardContent from '../pageContents/DashboardContent.svelte'
import EmailContent from '../pageContents/EmailContent.svelte'
import CalendarContent from '../pageContents/CalendarContent.svelte'
import ChatContent from '../pageContents/ChatContent.svelte'
import FormsContent from '../pageContents/FormsContent.svelte'
import UiContent from '../pageContents/UiContent.svelte'
</script>

<MenuDrawer />
<div class="page-container">
<TopBar />
<div>
<main class="main-content bgc-grey-100">
  <div id="mainContent">
    <UiContent />
  </div>
</main>
</div>
</div>
