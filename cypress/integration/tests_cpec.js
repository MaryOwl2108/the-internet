describe('Download Test', () => {
    beforeEach (() => {
        cy.visit('http://the-internet.herokuapp.com/upload');
    })

    it('File uploading with the button', () => {

        cy.get('#file-upload')
            .attachFile('file.png');
        // cy.get('#drag-drop-upload')
        //     .attachFile('file.png', { subjectType: 'drag-n-drop' });
         cy.get('#file-submit').click();

         cy.get('h3').should('contain', 'File Uploaded!');
    })

    it('File uploading with drag-n-drop', () => {

        cy.get('#file-upload')
            .attachFile('file.png');


        cy.get('#drag-drop-upload')
            .attachFile('file.png', { subjectType: 'drag-n-drop' });

         cy.get('#file-submit').click();

         cy.get('h3').should('contain', 'File Uploaded!');
    })
})

  describe('slider test', () => {
    beforeEach (() => {
        cy.visit('http://the-internet.herokuapp.com/horizontal_slider');
    })

    it('positive tests',() => {
        cy.get('input').invoke('val', 0).trigger('change');
        cy.get('#range').should('contain', '0');
        cy.get('input').invoke('val', 0.5).trigger('change');
        cy.get('#range').should('contain', '0.5');
        cy.get('input').invoke('val', 1).trigger('change');
        cy.get('#range').should('contain', '1');
        cy.get('input').invoke('val', 1.5).trigger('change');
        cy.get('#range').should('contain', '1.5');
        cy.get('input').invoke('val', 2).trigger('change');
        cy.get('#range').should('contain', '2');
        cy.get('input').invoke('val', 2.5).trigger('change');
        cy.get('#range').should('contain', '2.5');
        cy.get('input').invoke('val', 3).trigger('change');
        cy.get('#range').should('contain', '3');
        cy.get('input').invoke('val', 3.5).trigger('change');
        cy.get('#range').should('contain', '3.5');
        cy.get('input').invoke('val', 4).trigger('change');
        cy.get('#range').should('contain', '4');
        cy.get('input').invoke('val', 4.5).trigger('change');
        cy.get('#range').should('contain', '4.5');
        cy.get('input').invoke('val', 5).trigger('change');
        cy.get('#range').should('contain', '5');
    })

    it('negative tests',() => {
        cy.get('input').invoke('val', 0.1).trigger('change');
        cy.get('#range').should('contain', '0');
        cy.get('input').invoke('val', 0.2).trigger('change');
        cy.get('#range').should('contain', '0');
        cy.get('input').invoke('val', 0.3).trigger('change');
        cy.get('#range').should('contain', '0.5');
        cy.get('input').invoke('val', 0.4).trigger('change');
        cy.get('#range').should('contain', '0.5');
        cy.get('input').invoke('val', 0.6).trigger('change');
        cy.get('#range').should('contain', '0.5');
        cy.get('input').invoke('val', 0.7).trigger('change');
        cy.get('#range').should('contain', '0.5');
        cy.get('input').invoke('val', 0.8).trigger('change');
        cy.get('#range').should('contain', '1');
        cy.get('input').invoke('val', 0.9).trigger('change');
        cy.get('#range').should('contain', '1');
        cy.get('input').invoke('val', 1.1).trigger('change');
        cy.get('#range').should('contain', '1');
        cy.get('input').invoke('val', 1.2).trigger('change');
        cy.get('#range').should('contain', '1');
        cy.get('input').invoke('val', 1.3).trigger('change');
        cy.get('#range').should('contain', '1.5');
        cy.get('input').invoke('val', 1.4).trigger('change');
        cy.get('#range').should('contain', '1.5');
        cy.get('input').invoke('val', 1.6).trigger('change');
        cy.get('#range').should('contain', '1.5');
        cy.get('input').invoke('val', 1.7).trigger('change');
        cy.get('#range').should('contain', '1.5');
        cy.get('input').invoke('val', 1.8).trigger('change');
        cy.get('#range').should('contain', '2');
        cy.get('input').invoke('val', 1.9).trigger('change');
        cy.get('#range').should('contain', '2');
        cy.get('input').invoke('val', 2.1).trigger('change');
        cy.get('#range').should('contain', '2');
        cy.get('input').invoke('val', 2.2).trigger('change');
        cy.get('#range').should('contain', '2');
        cy.get('input').invoke('val', 2.3).trigger('change');
        cy.get('#range').should('contain', '2.5');
        cy.get('input').invoke('val', 2.4).trigger('change');
        cy.get('#range').should('contain', '2.5');
        cy.get('input').invoke('val', 2.6).trigger('change');
        cy.get('#range').should('contain', '2.5');
        cy.get('input').invoke('val', 2.7).trigger('change');
        cy.get('#range').should('contain', '2.5');
        cy.get('input').invoke('val', 2.8).trigger('change');
        cy.get('#range').should('contain', '3');
        cy.get('input').invoke('val', 2.9).trigger('change');
        cy.get('#range').should('contain', '3');
        cy.get('input').invoke('val', 3.1).trigger('change');
        cy.get('#range').should('contain', '3');
        cy.get('input').invoke('val', 3.2).trigger('change');
        cy.get('#range').should('contain', '3');
        cy.get('input').invoke('val', 3.3).trigger('change');
        cy.get('#range').should('contain', '3.5');
        cy.get('input').invoke('val', 3.4).trigger('change');
        cy.get('#range').should('contain', '3.5');
        cy.get('input').invoke('val', 3.6).trigger('change');
        cy.get('#range').should('contain', '3.5');
        cy.get('input').invoke('val', 3.7).trigger('change');
        cy.get('#range').should('contain', '3.5');
        cy.get('input').invoke('val', 3.8).trigger('change');
        cy.get('#range').should('contain', '4');
        cy.get('input').invoke('val', 3.9).trigger('change');
        cy.get('#range').should('contain', '4');
        cy.get('input').invoke('val', 4.1).trigger('change');
        cy.get('#range').should('contain', '4');
        cy.get('input').invoke('val', 4.2).trigger('change');
        cy.get('#range').should('contain', '4');
        cy.get('input').invoke('val', 4.3).trigger('change');
        cy.get('#range').should('contain', '4.5');
        cy.get('input').invoke('val', 4.4).trigger('change');
        cy.get('#range').should('contain', '4.5');
        cy.get('input').invoke('val', 4.6).trigger('change');
        cy.get('#range').should('contain', '4.5');
        cy.get('input').invoke('val', 4.7).trigger('change');
        cy.get('#range').should('contain', '4.5');
        cy.get('input').invoke('val', 4.8).trigger('change');
        cy.get('#range').should('contain', '5');
        cy.get('input').invoke('val', 4.9).trigger('change');
        cy.get('#range').should('contain', '5');
        cy.get('input').invoke('val', 6).trigger('change');
        cy.get('#range').should('contain', '5');
        cy.get('input').invoke('val', -6).trigger('change');
        cy.get('#range').should('contain', '0');
    })
})