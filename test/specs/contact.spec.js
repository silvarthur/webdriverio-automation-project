import  ContactPage  from '../pages/contact.page'

describe('contact requirement tests', () => {
    it('send contact message successfully', async () => {
        await ContactPage.open()        
        await ContactPage.sendMessage('Customer service', 'test@email.com', '1', 'just testing...')

        await expect(ContactPage.successAlert).toHaveText('Your message has been successfully sent to our team.')
    })
})