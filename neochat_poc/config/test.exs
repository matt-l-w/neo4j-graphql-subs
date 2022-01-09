import Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :neochat_poc, NeochatPocWeb.Endpoint,
  http: [ip: {127, 0, 0, 1}, port: 4002],
  secret_key_base: "D4K04AXwZSy+lAGRg5T4vl2C0XJGSTZcjglkLI0TYQiRlWEiWR7v+OC2PqsPwyqp",
  server: false

# In test we don't send emails.
config :neochat_poc, NeochatPoc.Mailer,
  adapter: Swoosh.Adapters.Test

# Print only warnings and errors during test
config :logger, level: :warn

# Initialize plugs at runtime for faster test compilation
config :phoenix, :plug_init_mode, :runtime
