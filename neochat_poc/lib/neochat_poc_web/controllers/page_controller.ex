defmodule NeochatPocWeb.PageController do
  use NeochatPocWeb, :controller
  
  alias Bolt.Sips, as: Neo

  def index(conn, _params) do
    conn
    |> assign(:neo4j, Neo.info())
    |> render("index.html")
  end
end
