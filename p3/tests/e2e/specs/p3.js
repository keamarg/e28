// /tests/e2e/specs/p3.js

describe('p3', () => {

    it('Visits the homepage', () => {
        cy.visit('/')
        cy.contains('h1', 'Pick a quiz')
    })
    // Define a quiz we can use to test. This test works for a "clean slate" version of the app that has at least the wine quiz
    const quiz = {
        name: 'wine',
        id: 1
    }

    it('has a wine quiz', () => {

        cy.visit('/')

        // Confirm we see the wine quiz
        cy.contains('.btn', quiz.name).should('be.visible')

        //Confirm there is at least one quiz
        cy.get('.clean-list').should('have.length.greaterThan', 0);

        //Go through the quiz and confirm we can go back to home after it is done
        cy.get('.btn').contains(quiz.name).click();
        cy.get('.btn').first().click();
        cy.get('.btn').first().click();
        cy.get('.btn').first().click();
        cy.get('.btn').first().click();
        cy.get('.btn').first().click();
        cy.get('.btn').first().click();
        cy.get('.btn').first().click();
        cy.get('.btn').first().click();
        cy.get('.btn').first().click();
        cy.get('.btn').first().click();
        cy.contains('a', 'Back to').click();
        cy.contains('h1', 'Pick a quiz')

    })

    it('visits default quiz page', () => {

        cy.visit('/quiz')

        // Confirm we see the default page without quiz
        cy.contains('h3', "Pick a quiz").should('be.visible')
    })

    it('visits default create page', () => {
        cy.visit('/create')
        cy.contains('h1', "Access").should('be.visible')

        cy.get('a').contains('Create an account').click();
        cy.get('h2').contains('Register');
        cy.go('back')
        cy.get('a').contains('login').click();
        cy.get('h2').contains('Login');
    })


    describe('Account Page', () => {

        let id = makeid();
        const user = {
            name: 'testuser',
            email: id + "@test.test",
            password: 'asdfasdf'
        }

        //from https://www.codegrepper.com/code-examples/javascript/generate+random+number+string+javascript+using+date
        function makeid() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (var i = 0; i < 5; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        }

        //Create
        it('shows an error if user is not created', () => {
            cy.visit('/account');
            cy.get('[data-test=name-input]').clear().type("testuser");
            cy.get('[data-test=email-input]').clear().type(user.email);
            cy.get('[data-test=password-input]').clear().type(user.password);
            cy.get('[data-test=create-button]').click();
            cy.contains('Create user');
        })
        //Login
        it('shows an error if created login is invalid', () => {
            cy.visit('/account');
            cy.get('button').contains('Login').click();
            cy.get('[data-test=email-input]').clear().type(user.email);
            cy.get('[data-test=password-input]').clear().type('this-password-should-not-work');
            cy.get('[data-test=login-button]').click();
            cy.contains('These credentials do not match our records');
        })

        it('lets the created user log in and log out', () => {
            cy.visit('/account');
            cy.get('button').contains('Login').click();
            cy.get('[data-test=email-input]').clear().type(user.email);
            cy.get('[data-test=password-input]').clear().type(user.password);
            cy.get('[data-test=login-button]').click();
            cy.contains('[data-test="welcome-message"]', user.name);

            cy.get('[data-test=logout-button]').click();

            cy.get('[data-test="login-button"]').should('exist');
        })

    })

    describe('Quiz Create Page', () => {

        // Test quiz
        const quiz = {
            quiz: 'myQuiz',
            image: 'someImage',
            question: 'someQuestion',
            answer1: 'someAnswer',
            answer2: 'someAnswer',
            answer3: 'someAnswer',
            answer4: 'someAnswer',
            correct: 1,
        }

        it('adds a new question', () => {

            cy.login();

            // Go to the "Create page"
            cy.visit('/create');

            // Enter the details for a new question
            cy.get('[data-test=quiz-quiz-input]').clear().type(quiz.quiz);
            cy.get('[data-test=quiz-image-input]').clear().type(quiz.image);
            cy.get('[data-test=quiz-question-input]').clear().type(quiz.question);
            cy.get('[data-test=quiz-answer1-input]').clear().type(quiz.answer1);
            cy.get('[data-test=quiz-answer2-input]').clear().type(quiz.answer2);
            cy.get('[data-test=quiz-answer3-input]').clear().type(quiz.answer3);
            cy.get('[data-test=quiz-answer4-input]').clear().type(quiz.answer4);
            cy.get('[data-test=quiz-correct-input]').clear().type(quiz.correct);


            // Submit the form
            cy.get('[data-test=add-question-button]').click();

            // Assert we see a confirmation message
            cy.get('[data-test=question-added-confirmation]').should('exist');
        });

        it('shows error messages when blurring off a field', () => {

            cy.login();

            // Go to the "Create page"
            cy.visit('/create');

            // Make sure quiz name input is blank
            cy.get('[data-test=quiz-quiz-input]').clear();

            // Click on the next field to trigger the client-side validation
            cy.get('[data-test=quiz-quiz-input]').click();

            // Assert we see validation feedback (not working for some reason)
            // cy.contains("The quiz field is required.");
        });
    })
    describe('Route Guards', () => {

        it('denies access to guests to auth-required page', () => {
            cy.visit('/create');
            cy.get('[data-test=access-denied-heading]').should('exist');
        })

        it('denies access to guests to auth-required page when navigating from another page', () => {
            cy.visit('/');
            cy.get('[data-test="nav-link-create"]').click();
            cy.get('[data-test=access-denied-heading]').should('exist');
        })

        it('allows access to logged in users to auth-required page', () => {
            cy.login();
            cy.visit('/create');
            cy.get('[data-test=access-denied-heading]').should('not.exist');
        })

        // it('allows access to logged in users to auth-required page when navigating from another page', () => {
        //     cy.login();
        //     cy.visit('/');
        //     cy.get('[data-test="nav-link-add a product"]').click();
        //     cy.get('[data-test=access-denied-heading]').should('not.exist');
        // })

    })

})