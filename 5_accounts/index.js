// modulos externos

const inquirer = require('inquirer')
const chalk = require('chalk')

// modulos internos
const fs = require('fs')

console.log("Iniciando o Account")
operation()

function operation () {

    inquirer.prompt([
        {
            type:  'list',
            name: 'action',
            message: 'O que vc deseja fazer?',
            choices: [
                'Criar conta',
                'Consultar saldo',
                'Depositar',
                'Sacar',
                'Sair'
            ]
        },
    ])
    .then((answer) => {
        const action = answer['action']

        if(action === 'Criar conta') {
            createAccoutn()
        }

        if(action === 'Consultar saldo'){
            consultarSaldo()
        }
        
        if(action === 'Depositar'){
            depositar()
        }

        if(action === 'Sacar'){
            sacar()
        }

        if(action === 'Sair'){
            sair()
        }
    })
    .catch((err) => console.log(err))
}

function createAccoutn(){
    console.log(chalk.bgGreen.black('Obrigado por escolher o nosso Banco.'))
    console.log(chalk.bgGreen('Defina as opções da sua conta a seguir:'))
    buildAccount()
}

function buildAccount(){
    inquirer
        .prompt([
            {
                name: 'accountName',
                message: 'Digite um nome para sua conta:'
            },
        ])
        .then((answer) => {
            const accountName = answer['accountName']

            console.info(accountName)

            if(!fs.existsSync('accounts')) {
                fs.mkdirSync('accounts')
            }

            if(fs.existsSync(`accounts/${accountName}.json`)) {
                console.log(chalk.bgRed.black('Esta conta já existe, escolha outro nome!'))
                buildAccount()
            }
        })
}