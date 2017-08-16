export class User {

  static fromJsonList(array): User[] {
    return array.map(User.fromArray);
  }

  static fromArray({$key, first_name, last_name, email, photoURL, username}): User {
    return new User($key, first_name, last_name, email, photoURL, username);
  }

  constructor(
    public $key: string,
    public first_name: string,
    public last_name: string,
    public email: string,
    public photoURL: string,
    public username: string
  ) {}
}
