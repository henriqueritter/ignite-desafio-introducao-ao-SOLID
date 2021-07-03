import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);
    if (!user) {
      throw new Error("User doest not exists.");
    }
    const adminUser = this.usersRepository.turnAdmin(user);
    return adminUser;

    // Complete aqui - acha o usuario pela ID, verifica se ja nao é admin e passa para o repositorio ele inteiro
  }
}

export { TurnUserAdminUseCase };
