import { defineStore } from 'pinia'
export const useMessageStore = defineStore('message', {
  state: () => ({
    message: {} as Record<string, string>
  }),
  actions: {
    updateMessage(studentId: string, message: string) {
      this.message[studentId] = message
    },
    getCommentForStudent(studentId: string) {
      return this.message[studentId] || ''
    },
    resetMessage(studentId: string) {
      this.message[studentId] = ''
    }
  }
})
