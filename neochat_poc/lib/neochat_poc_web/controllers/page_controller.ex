defmodule NeochatPocWeb.PageController do
  use NeochatPocWeb, :controller
  
  alias NeochatPoc.Repo
  alias Bolt.Sips.Response
  alias Bolt.Sips.Types.Node

  def index(conn, _params) do
    query = "
      match (tail:Message)
      where not exists {
          match (tail)<-[:follows  {author: 1}]-()
      }
      with tail
      match (tail)-[*0..5 { author: 1 }]-(m)
      return m
    "
    %Response{
      results: results,
    } = Repo.query(query)

    messages = results
    |> Enum.map(&Map.get(&1, "m"))
    |> Enum.map(fn %Node{ properties: properties } -> properties end)
    |> Enum.reverse

    conn
    |> assign(:messages, messages)
    |> render("index.html")
  end
end
