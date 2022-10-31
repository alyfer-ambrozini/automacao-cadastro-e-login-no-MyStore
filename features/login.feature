Feature: Login com sucesso no WebSite My Store

    Scenario: Logar com uma conta existente
    Given que esteja na home do WebSite
    When eu clico em sign in no canto superior
    And preencho email e password corretamente
    And clico no botão Sign in
    Then o login é realizado com sucesso exibindo a mensagem "Welcome to your account. Here you can manage all of your personal information and orders."
    And exibe o nome do usuário no menu