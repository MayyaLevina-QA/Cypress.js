describe('Тестирование формы логина и пароля staya', function () {

    it('Валидные логин и пароль', function () {
       cy.visit('https://staya.dog/');
       cy.get('.header-bottom__right--link').click();
       cy.get('.auth-form > form > [type="email"]').type('Валидный логин');
       cy.get('.auth-form > form > [type="password"]').type('Валидный пароль');
       cy.get('.auth-form__submit > .s-button__content').click();
       cy.contains('Мои заказы');
       

       })


    it('Валидный логин и невалидный пароль', function () {
        cy.visit('https://staya.dog/login');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('Валидный логин');
        cy.get('.auth-form > form > [type="password"]').type('Невалидный пароль');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
    

        })
})
