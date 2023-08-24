import { defineStore } from "pinia";


export const useMessageStore = defineStore("message", {
  state: () => ({
    message: {} as Record<string, string>,
    studentDetails: {} as Record<string, string[]>,
    flashMessage:  '' as string
  }),
  actions: {
    updateMessage(studentId: string, message: string) {
      this.message[studentId] = message;
    },
    getMessage(studentId: string): string {
      return this.message[studentId]||"";
    },
    addDetail(studentId: string, detail: string) {
      if (!this.studentDetails[studentId]) {
        this.studentDetails[studentId] = [];
      }
      this.studentDetails[studentId].push(detail);
    },
    getDetail(studentId: string): string[] {
      return this.studentDetails[studentId] || [];
    },
    updateflashcard(message: string) {
      this.flashMessage = message
  },
  resetflashcard() {
      this.flashMessage= ''
  }
  },
  
}
);


