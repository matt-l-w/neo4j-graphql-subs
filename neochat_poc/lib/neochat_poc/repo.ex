defmodule NeochatPoc.Repo do
  alias Bolt.Sips, as: Neo

  def conn() do
    Neo.conn
  end

  def query(cypher) do
    Neo.query!(conn, cypher)
  end
end