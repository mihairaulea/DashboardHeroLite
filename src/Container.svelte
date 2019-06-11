<style global type="text/postcss" src="./common/assets/index.scss">
</style>

<script>
import Button from './common/components/Button.svelte'
import getInfluencers from './common/resources/firebase/index';

let influencerList = getInfluencers("nada-colada");
</script>

<div>
{#await influencerList}
  <p>loading...</p>
{:then influencerList}
  <p>got data: {influencerList}</p>
{:catch theError}
  <p>whoops! {theError.message}</p>
{/await}

<Button />
</div>
