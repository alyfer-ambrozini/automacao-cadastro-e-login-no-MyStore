Feature: Criar Conta no WebSite My Store

    Scenario: Criar nova conta com sucesso
    Given que eu esteja na home do WebSite
    When eu clico em create account
    And preencho todos os dados do formulário
    And clico no botão Register
    Then o cadastro é realizado com sucesso exibindo a mensagem "Welcome to your account. Here you can manage all of your personal information and orders."
    And exibe o nome do usuário cadastrado no menu