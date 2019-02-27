// Exercicios sobre classe 

class User {
  constructor (email, password) {
    this.email = email;
    this.password = password;
  }
  isAdmin () {
    return this.admin ? "Administrator":"Default";  
  }
}
class Admin extends User {
  constructor (email, password){
    super(email, password)
    this.admin = true;
  }
}

const user1 = new User ('flavio@user.com','12345');
const adm1 = new Admin ('root@adm.com','#323sf23');


console.log(` Email: ${user1.email} Password: ${user1.password} user: ${user1.isAdmin()}`);
console.log(` Email: ${adm1.email}  Password: ${adm1.password} user: ${adm1.isAdmin()}`);




