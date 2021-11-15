import BasePage from "./base.page";

class ContactPage extends BasePage {
    get subjectHeadingSelector() { return $('#id_contact') }
    get emailField() { return $('#email') }
    get orderReferenceField() { return $('#id_order') }
    get messageField() { return $('#message') }
    get sendButton() { return $('#submitMessage') }
    get successAlert() { return $('.alert.alert-success') }
    get errorAlert() { return $('.alert.alert-danger') }

    async open() {
        await super.open('http://automationpractice.com/index.php?controller=contact')
    }

    async sendMessage(subject, email, orderId, message) {
        await this.selectOptionByVisibleText(this.subjectHeadingSelector, subject)
        await this.sendKeysToAnElement(this.emailField, email)
        await this.sendKeysToAnElement(this.orderReferenceField, orderId)
        await this.sendKeysToAnElement(this.messageField, message)

        await this.clickOnElement(this.sendButton)
    }
}

export default new ContactPage()