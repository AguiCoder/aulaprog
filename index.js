const inputNome = document.getElementById('nome'),
    inputSobrenome = document.getElementById('sobrenome'),
    inputTelefone = document.getElementById('telefone'),
    inputEmail = document.getElementById('email'),
    inputSenha = document.getElementById('senha');

function enviar(){
    const formulario = montaFormulario();
    montaRegistroTabela(formulario);
}

function montaFormulario() {
    const formulario = {
        nome: inputNome.value,
        sobrenome: inputSobrenome.value,
        telefone: inputTelefone.value,
        email: inputEmail.value
    }
    return formulario;
}


function montaRegistroTabela(formulario) {
    const tableBody = document.getElementById('table-body');

    const tableRow = document.createElement('tr');
    tableBody.appendChild(tableRow);

    const nameCell = document.createElement('td');
    nameCell.textContent = formulario.nome;

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = formulario.sobrenome;

    const phoneCell = document.createElement('td');
    phoneCell.textContent = formulario.telefone;

    const emailCell = document.createElement('td');
    emailCell.textContent = formulario.email;

    const tableCells = [nameCell, lastNameCell, phoneCell, emailCell];

    for (let index = 0; index < tableCells.length; index++) {
        const tableCell = tableCells[index];
        tableRow.appendChild(tableCell);
    }
}

getUsers();

async function getUsers() {
    const users = getStaticUsers();
    users.forEach(user => {
        montaRegistroTabela(user);
    });
    console.log(users);
}

function getStaticUsers() {
    return [
        {
            nome: 'João', 
            sobrenome: 'Silva', 
            telefone: '+5511999999999', 
            email: 'joao.silva@example.com'
        },
        {
            nome: 'Maria', 
            sobrenome: 'Oliveira', telefone: '+5511888888888', email: 'maria.oliveira@example.com'
        },
        {
            nome: 'Pedro', 
            sobrenome: 'Souza', 
            telefone: '+5511777777777', 
            email: 'pedro.souza@example.com'
        },
        {
            nome: 'Ana', 
            sobrenome: 'Costa', 
            telefone: '+5511666666666', 
            email: 'ana.costa@example.com'
        }
    ]
}