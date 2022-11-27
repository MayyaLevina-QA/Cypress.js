describe('Проверка наличия e-mail в форме Обмен и возрат', function () {

    it('Наличие контактов', function () {
       cy.visit('https://staya.dog/');
       cy.get('[href="/returns"]').click();
       cy.get('[href="mailto:info@staya.dog"]');
       
    
       })
})