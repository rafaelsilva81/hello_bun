const server = Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response(
      JSON.stringify({
        hello: "world",
        using: 'bun!'
      }),
    );
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
