// helper to get random message
export function getRandomMessage(messages) {
  return messages[Math.floor(Math.random() * messages.length)];
}
