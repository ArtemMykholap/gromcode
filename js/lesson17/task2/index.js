export const callbackPrompt = {
    message: 'Tell me your number',
    showPrompt() {
        const phoneNumber = prompt(this.message);
        console.log(phoneNumber);
    },
    showDeferкedPrompt(ms) {
        // setTimeout(() => this.showPrompt(), ms)
        setTimeout(this.showPrompt.bind(this), ms)
    }
};
callbackPrompt.showPrompt()