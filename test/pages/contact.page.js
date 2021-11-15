import BasePage from "./base.page";

class ContactPage extends BasePage {
    get subjectHeadingSelector() { return $('#id_contact') }
    get emailField() { return $('#email') }
    get orderReferenceField() { return $('#id_order') }
    get messageField() { return $('#message') }
    get sendButton() { return $('#submitMessage') }
    get successAlert() { return $('.alert.alert-success') }

    async open() {
        await super.open('http://automationpractice.com/index.php?controller=contact')
    }

    async sendMessage(subject, email, orderId, message) {
        await this.subjectHeadingSelector.selectByVisibleText(subject)
        await this.emailField.setValue(email)
        await this.orderReferenceField.setValue(orderId)
        await this.messageField.setValue(message)

        await this.sendButton.click()
    }
}

export default new ContactPage()