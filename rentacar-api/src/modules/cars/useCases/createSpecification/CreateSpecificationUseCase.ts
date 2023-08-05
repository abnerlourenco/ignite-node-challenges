import { type ISpecificationRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest {
  name: string
  description: string
}
class CreateSpecificationUseCase {
  constructor (private readonly specificationsRepository: ISpecificationRepository) {}

  async execute ({ description, name }: IRequest): Promise<void> {
    const specificationAlreadyExists = await this.specificationsRepository.findByName(name);

    if (!specificationAlreadyExists) {
      throw new Error('Specification already exists');
    }

    await this.specificationsRepository.create({
      name,
      description
    });
  }
}

export { CreateSpecificationUseCase };
