<script lang="ts">
  import gql from "graphql-tag";
  import { query, subscribe } from "svelte-apollo";
  import MessageInput from './MessageInput.svelte';
  
  let allMessages = []
  const messages = query(gql`
    query GetMessages {
      messages {
        id
        author {
          id
        }
        content
        children {
          id
        }
      }
    }
  `)
  messages.subscribe(resp => {
    if (resp.data) {
      allMessages = resp.data?.messages;
    }
  })

  const newMessages = subscribe(gql`
    subscription Messages {
      messages {
        id
        content
      }
    }
  `)
  newMessages.subscribe((resp) => {
    if (resp.data) {
      allMessages = [...allMessages, ...resp.data.messages];
    }
  })
</script>

<div class="container">
  <h1 class="font-1">Messages</h1>
  <section id="messages">
    {#if $messages.loading}
      Loading...
    {:else if $messages.error}
      Error: {$messages.error.message}
    {:else}
      {#each allMessages as message}
        {message.content}<br>
      {/each}
    {/if}
  </section>
  <div class="sticky-bottom">
    <MessageInput />
  </div>
</div>

<style>
  .sticky-bottom {
    position: sticky;
    bottom: 0;
  }
</style>