describe('Тестирование формы логина и пароля staya', function () {

    it('Валидные логин и пароль', function () {
       cy.visit('https://staya.dog/');
       cy.get('.header-bottom__right--link').click();
       cy.get('.auth-form > form > [type="email"]').type('maya-1@mail.ru');
       cy.get('.auth-form > form > [type="password"]').type('F22h3d2MkJ8XTii');
       cy.get('.auth-form__submit > .s-button__content').click();
       cy.contains('Мои заказы');
       

       })
})