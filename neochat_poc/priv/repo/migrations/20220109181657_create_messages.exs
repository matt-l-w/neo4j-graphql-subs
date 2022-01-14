defmodule NeochatPoc.Repo.Migrations.CreateMessages do
  use Ecto.Migration

  def change do
    create table(:messages) do
      add :content, :string

      timestamps()
    end
  end
end
