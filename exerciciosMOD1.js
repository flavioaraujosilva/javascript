// Exercicios sobre classe 

class User {
  constructor (email, password) {
    this.email = email;
    this.password = password;
  }

  isAdmin () {
    return this.admin === true;  
  }

}


class Admin extends User {
  constructor (email, password){
    super(email, password)
    this.admin = true;
  }


}



const user1 = new User ('flavio@user.com','12345');
const adm1 = new Admin ('adm@admn.com','2323');


console.log(user1.isAdmin());
console.log(adm1.isAdmin());



