<script lang="ts">
	import { ApolloClient, InMemoryCache } from '@apollo/client';
	import { HttpLink } from "@apollo/client/link/http";
	import { RetryLink } from "@apollo/client/link/retry";
	import { setClient } from 'svelte-apollo';	
	import WebSocketLink from './webSocketLink';
	import Messages from "./Messages.svelte";

	const defaultRetryLink = new RetryLink({
		delay: {
			initial: 300,
			max: Infinity,
			jitter: true
		},
		attempts: {
			max: 5,
			retryIf: (error, _operation) => !!error
		}
	});
	const wsLink = new WebSocketLink({ url: 'ws://localhost:4000/graphql' });
	const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' })
	const link = defaultRetryLink.split(
		(operation) => operation.query.loc.source.body.trim().startsWith('subscription'),
		wsLink,
		httpLink,
	)
	const client = new ApolloClient({
		cache: new InMemoryCache(),
		link,
	})
	setClient(client);
</script>

<main>
	<Messages />
</main>

<style>
	main {
		padding: 1rem;
	}
</style>