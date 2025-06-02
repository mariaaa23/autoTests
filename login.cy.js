describe('Проверка авторизации', function () {

// №1 Напиши проверку на позитивный кейс авторизации:

    it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/');  // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');  // Проверяю цвет кнопки восстановить пароль

        cy.get('#mail').type('german@dolnikov.ru');  // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio1');  // Ввели верный пароль
        cy.get('#loginButton').click();  // Нажали войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно');  // Проверяю, что после авт вижу текст
        cy.get('#messageHeader').should('be.visible');  // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })


// №2 Напиши автотест на проверку логики восстановления пароля:

    it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');  // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');  // Проверяю цвет кнопки восстановить пароль

        cy.get('#forgotEmailButton').click();  // Нажимаем кнопку "Восстановить пароль"

        cy.get('#mailForgot').type('german@dolnikov.ru');  // Ввели почту для восстановления
        cy.get('#restoreEmailButton').click();  // Нажали "Отправить код"

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');  // Проверяю на совпадение текст
        cy.get('#messageHeader').should('be.visible');  // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })


// №3 Напиши проверку на негативный кейс авторизации:

    it('Неверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/');  // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');  // Проверяю цвет кнопки восстановить пароль

        cy.get('#mail').type('german@dolnikov.ru');  // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio7');  // Ввели неверный пароль
        cy.get('#loginButton').click();  // Нажали войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет');  // Проверяю, что после авт вижу текст
        cy.get('#messageHeader').should('be.visible');  // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })


    // №4 Напиши проверку на негативный кейс авторизации:

    it('Верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/');  // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');  // Проверяю цвет кнопки восстановить пароль

        cy.get('#mail').type('german@dolniov.ru');  // Ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1');  // Ввели верный пароль
        cy.get('#loginButton').click();  // Нажали войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет');  // Проверяю, что после авт вижу текст
        cy.get('#messageHeader').should('be.visible');  // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })


// №5 Напиши проверку на негативный кейс валидации:

    it('Проверка что в логине есть @', function () {
        cy.visit('https://login.qa.studio/');  // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');  // Проверяю цвет кнопки восстановить пароль

        cy.get('#mail').type('germandolnikov.ru');  // Ввели логин без @
        cy.get('#pass').type('iLoveqastudio1');  // Ввели верный пароль
        cy.get('#loginButton').click();  // Нажали войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');  // Проверяю, что после авт вижу текст
        cy.get('#messageHeader').should('be.visible');  // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })


// №6 Напиши проверку на приведение к строчным буквам в логине:

    it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/');  // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');  // Проверяю цвет кнопки восстановить пароль

        cy.get('#mail').type('GerMan@Dolnikov.ru');  // Ввели верный логин не строчными буквами
        cy.get('#pass').type('iLoveqastudio1');  // Ввели верный пароль
        cy.get('#loginButton').click();  // Нажали войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно');  // Проверяю, что после авт вижу текст
        cy.get('#messageHeader').should('be.visible');  // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })
   
})
