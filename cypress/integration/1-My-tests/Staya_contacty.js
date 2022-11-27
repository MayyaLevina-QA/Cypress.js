describe('Проверка наличия e-mail', function () {

    it('Наличие контактов в Обмен и Возврат', function () {
       cy.visit('https://staya.dog/');
       cy.get('[href="/returns"]').click();
       cy.get('[href="mailto:info@staya.dog"]');
           
       })

       it('Наличие контактов в Вопросы и ответы', function () {
        cy.visit('https://staya.dog/');
        cy.get('.footer-bottom__left > [href="/faq"]').click();
        cy.get('[href="mailto:info@staya.dog"]');
    })

       it('Наличие контактов в Способы оплаты', function () {
        cy.visit('https://staya.dog/');
        cy.get('[href="/faq/payment"]').click();
        cy.get('[href="mailto:info@staya.dog"]');
    })

       it('Наличие контактов в Доставка и самовывоз', function () {
        cy.visit('https://staya.dog/');
        cy.get('.footer-bottom__left > [href="/delivery"]').click();
        cy.get('[href="mailto:info@staya.dog"]');
    })

})