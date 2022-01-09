defmodule NeochatPoc.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      # Start the Telemetry supervisor
      NeochatPocWeb.Telemetry,
      # Start the PubSub system
      {Phoenix.PubSub, name: NeochatPoc.PubSub},
      # Start the Endpoint (http/https)
      NeochatPocWeb.Endpoint,
      # Start a worker by calling: NeochatPoc.Worker.start_link(arg)
      # {NeochatPoc.Worker, arg}
      {Bolt.Sips, Application.get_env(:bolt_sips, Bolt)}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: NeochatPoc.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    NeochatPocWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
