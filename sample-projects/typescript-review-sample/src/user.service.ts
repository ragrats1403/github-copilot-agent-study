export interface User {
  id: number;
  name: string;
  email: string;
  role?: string;
}

export class UserService {
  private users: User[] = [];

  addUser(user: any) {
    this.users.push(user);
  }

  getUserByEmail(email: string) {
    return this.users.find(user => user.email == email);
  }

  deleteUser(id: number) {
    this.users = this.users.filter(user => user.id != id);
  }

  getAdminUsers() {
    return this.users.filter(user => user.role.toLowerCase() === 'admin');
  }

  updateUserEmail(id: number, email: string) {
    const user = this.users.find(user => user.id === id);
    user.email = email;
    return user;
  }
}