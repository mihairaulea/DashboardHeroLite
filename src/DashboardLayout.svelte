
<script>
import MenuDrawer from './common/components/MenuDrawer.svelte';
import TopBar from './common/components/TopBar.svelte';
</script>

<div>
  <MenuDrawer />
  <!-- #Main ============================ -->
  <div class="page-container">
    <!-- ### $Topbar ### -->
    <TopBar />

    <!-- ### $App Screen Content ### -->
    <main class='main-content bgc-grey-100'>
      <div id='mainContent'>
        <div class="full-container">


        </div>
      </div>
    </main>

    <!-- ### $App Screen Footer ### -->
    <footer class="bdT ta-c p-30 lh-0 fsz-sm c-grey-600">
      <span>Copyright © 2017 Designed by <a href="https://colorlib.com" target='_blank' title="Colorlib">Colorlib</a>. All rights reserved.</span>
    </footer>
  </div>
</div>
