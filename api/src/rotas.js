import addCardController from './controller/addCardController.js'

export default function addRota(servidor){
    servidor.use(addCardController)
}