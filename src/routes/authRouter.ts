import { Router } from 'express'

import * as schema from '../schemas/authSchema.js'
import * as middleware from '../middlewares/authMiddleware.js'
import * as controller from '../controllers/authController.js'

import validateSchemaMiddleware from '../middlewares/schemaMiddleware.js'

const authRouter = Router()

authRouter.post(
  '/sign-up',
  validateSchemaMiddleware(schema.RegisterUser),
  middleware.checkIfEmailIsAlreadyRegistered,
  controller.registerUser
)

authRouter.post(
  '/sign-in',
  validateSchemaMiddleware(schema.SignIn),
  middleware.checkIfEmailIsValid,
  middleware.checkIfPasswordIsValid,
  controller.loginUser
)

export default authRouter