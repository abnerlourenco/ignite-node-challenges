import { CategoriesRepository } from '../../repositories/CategoriesRepository'
import { ListCategoriesController } from './ListCategoriesController'
import { ListCategoriesUseCase } from './ListCategoriesUseCase'

const categoryRepository = CategoriesRepository.getInstance()
const listCategoryUseCase = new ListCategoriesUseCase(categoryRepository)
const listCategoriesController = new ListCategoriesController(listCategoryUseCase)

export { listCategoriesController }
