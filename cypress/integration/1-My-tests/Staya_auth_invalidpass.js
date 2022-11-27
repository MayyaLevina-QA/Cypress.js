describe('Тестирование формы логина и пароля staya', function () {

    it('Валидный логин и невалидный пароль', function () {
       cy.visit('https://staya.dog/');
       cy.get('.header-bottom__right--link').click();
       cy.get('.auth-form > form > [type="email"]').type('maya-1@mail.ru');
       cy.get('.auth-form > form > [type="password"]').type('12345679');
       cy.get('.auth-form__submit > .s-button__content').click();
       cy.contains('Невозможно войти с предоставленными учетными данными.');
       

       })
})