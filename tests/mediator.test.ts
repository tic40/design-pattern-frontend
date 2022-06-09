import { ChatRoom, User } from '../src/mediator/chatroom'

test('mediator', () => {
  const logger = jest.fn()
  const chatroom = new ChatRoom()
  const user1 = new User('John Doe', chatroom)
  const user2 = new User('Jane Doe', chatroom)
  user1.send('Hi there!')
  user2.send('Hey!')
  expect(chatroom.logs[0].sender).toBe(user1)
  expect(chatroom.logs[0].message).toBe('Hi there!')
  expect(chatroom.logs[1].sender).toBe(user2)
  expect(chatroom.logs[1].message).toBe('Hey!')
  chatroom.displayLogs()
})
