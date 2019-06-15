<script>
import { Router, Route } from "svelte-routing";
import Register from '../pages/Register.svelte';
import Login from '../pages/Login.svelte';

export let loggedIn = false;

export let url = "login";
</script>

<Router url="{url}">
<Route path="login"> <Login bind:loggedIn={loggedIn}/> </Route>
<Route path="register" component="{Register}" />
</Router>
