export class ChatRoom {
  logs: { date: Date, sender: User, message: string }[]

  constructor() {
    this.logs = []
  }

  logMessage(user: User, message: string) {
    const sender = user.getName();
    this.logs.push({ date: new Date(), sender: user, message })
  }

  displayLogs() {
    for(const { date, sender, message } of this.logs) {
      console.log(`${new Date().toLocaleString()} [${sender}]: ${message}`);
    }
  }
}

export class User {
  name: string
  chatroom: ChatRoom

  constructor(name: string, chatroom: ChatRoom) {
    this.name = name;
    this.chatroom = chatroom;
  }

  getName() {
    return this.name;
  }

  send(message: string) {
    this.chatroom.logMessage(this, message);
  }
}