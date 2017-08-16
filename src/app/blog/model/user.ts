export class User {

  static fromJsonList(array): User[] {
    return array.map(User.fromArray);
  }

  static fromArray({$key, displayName, photoURL, email, department, username}): User {
    return new User($key, displayName, photoURL, email, department, username);
  }

  constructor(
    public $key: string,
    public displayName: string,
    public photoURL: string,
    public email: string,
    public department: string,
    public username: string
  ) {}
}
