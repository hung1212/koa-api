import Router from 'koa-router'
import IndexController from '../controller/indexController'

const router = new Router()
console.log(IndexController)

router.get('/', IndexController.index)

export default router