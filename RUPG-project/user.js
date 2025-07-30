class User {
  constructor(info) {
    this.firstName = info.firstName;
    this.lastName = info.lastName;
    this.city = info.city;
    this.state = info.state;
    this.photo = info.photo;
    this.friendsNames = info.friendsNames || [];
    this.quote = info.quote;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getLocation() {
    return this.city && this.state ? `${this.city}, ${this.state}` : "";
  }
  getQuote() {
    return this.quote;
  }
}

export default User;
