<script lang="ts">
  import { mutation } from "svelte-apollo";
  import gql from "graphql-tag";
  export let value = "";

  const addMessage = mutation(gql`
    mutation CreateMessage($input: [MessageCreateInput!]!) {
      createMessages(input: $input) {
        messages {
          id
          content
          author {
            id
          }
        }
      }
    }
  `)

  const addMessageInput = (value: string) => ({
    "input": {
      "content": value,
      "author": {
        "connect": {
          "where": {
            "node": {
              "id": "13b013cd-3a55-4fcf-aff1-3fbccaec8644"
            }
          }
        }
      }
    }
  })

  async function handleSubmit() {
    try {
      await addMessage({ variables: addMessageInput(value) });
      value = ""
    } catch (error) {
      console.error(error)
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <textarea name="message" id="message" rows="4" bind:value></textarea>
  <input type="submit" value="Send">
</form>

<style>
  form {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  textarea {
    flex: 1;
  }
</style>