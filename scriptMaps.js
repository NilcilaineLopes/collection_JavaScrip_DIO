function getAdmins(map) {   
    let admins = [];
    for([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Nilcilaine', 'Admin');
usuarios.set('Antônio', 'Admin');
usuarios.set('nathalia', 'User');
usuarios.set('Wesley', 'Admin'); 

console.log(getAdmins(usuarios));