// Função para verificar o login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

// Obtém os valores dos campos
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var message = document.getElementById('message');

// Verifica as credenciais
    if (username === 'teste' && password === '1234') {
        message.style.color = 'white';
        message.textContent = 'Login bem-sucedido!';
// Redirecionar ou realizar outra ação 
    } else {
        message.style.color = 'black';
        message.textContent = 'Usuário ou senha incorretos!';
    }
});
