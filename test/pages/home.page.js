import BasePage from "./base.page";

class HomePage extends BasePage {
    get contactUsButton () { return $('#contact-link') }

    async open () {
        await super.open('http://automationpractice.com/index.php')
    }

    async goToContactPage () {
        await this.clickOnElement(this.contactUsButton)
    }
}

export default new HomePage()