<script>
  import { Router, Route } from 'svelte-routing';
  import Login from './components/Login.svelte';
  // import other components here as you create them
</script>

<Router>
  <Route path="/login" component={Login} />
  {/* Add more routes as needed */}
</Router>


<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>