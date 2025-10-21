const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatContainer = document.getElementById("chat-container");

sendBtn.addEventListener("click", () => {
  const text = userInput.value.trim();
  if (text === "") return;

  // Порака од корисникот
  const userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.textContent = "👤 " + text;
  chatContainer.appendChild(userMsg);

  // Одговор од "AI" (демо)
  const aiMsg = document.createElement("div");
  aiMsg.className = "message ai";
  aiMsg.textContent = "🤖 Ова е само демо-одговор (вистински AI доаѓа подоцна)";
  chatContainer.appendChild(aiMsg);

  // Скрол до дното
  chatContainer.scrollTop = chatContainer.scrollHeight;
  userInput.value = "";
});
