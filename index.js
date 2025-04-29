import fetch from "node-fetch";

const express = require("express");
const app = express();
app.use(express.json());

const TOKEN = "" :
const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}`;

const EMOJIS = ["😂", "🔥", "❤️", "🥲", "😎", "👍", "🤖", "🎉"];

app.post("/", async (req, res) => {
  const msg = req.body.message;
  if (!msg || !msg.text) return res.sendStatus(200);

  const reply = msg.text + " " + EMOJIS[Math.floor(Math.random() * EMOJIS.length)];

  await fetch(`${TELEGRAM_API}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: msg.chat.id,
      text: reply,
    }),
  });

  res.send("OK");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Bot is running..."));
