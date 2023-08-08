class User {
  constructor(fullName, email, password) {
    this.fullName = fullName
    this.email = email
    this.password = password
    this.logued = false
  }
  login(email, password) {
    if (this.email == email && this.password == password) {
      this.logued = true
      console.log(`Welcome ${this.fullName}`)
    } else {
      console.log('User or Password incorrect')
    }
  }
}

let yuri = new User('Yuri Ramalho', 'xpto@naoteinteressa', 'C4gue1')
console.log(yuri)
yuri.login('xpto@naoteinteressa', 'C4gue1')
console.log(yuri)
