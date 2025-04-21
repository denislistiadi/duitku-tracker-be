import app from "./src/app.js";

const port: string = process.env.PORT ?? "5000";

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
