import { client, gql } from "./utils"; // Apollo Client
import { createAuthLink } from "aws-appsync-auth-link";

console.log(createAuthLink);

const getPokemons = async () => {
  const data = await client.query({
    query: gql`
      query pokemons($limit: Int, $offset: Int) {
        pokemons(limit: $limit, offset: $offset) {
          count
          next
          previous
          status
          message
          results {
            url
            name
            image
          }
        }
      }
    `,
  });

  console.log({ data });
};

chrome.action.onClicked.addListener((tab) => {
  console.log("extension clicked");

  if (!tab.id) {
    console.error("tab not found");
  }

  getPokemons();

  console.log({ tab: tab.id });
  chrome.scripting.executeScript({
    target: { tabId: tab.id as number },
    files: ["content-script.js"],
  });
});
