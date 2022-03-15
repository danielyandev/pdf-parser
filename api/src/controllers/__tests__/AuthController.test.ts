import AuthController from "../AuthController"
import {mockRequest, mockResponse} from "jest-mock-req-res"
import {connectDb} from "../../config/database"
import {connection} from "mongoose"

const {login, register} = AuthController

const mockToken = 'mockToken'
const mockUser = {
  name: "Mock",
  surname: "User",
  email: `mock${Math.random()}@email.com`,
  password: "mockuser",
  password_confirmation: "mockuser"
}

// mock lib to return mock token
jest.mock('jsonwebtoken', () => {
  const originalModule = jest.requireActual('jsonwebtoken')

  return {
    ...originalModule,
    sign: jest.fn(() => mockToken),
  }
})

const req = mockRequest()

const res = mockResponse()

beforeAll(() => {
  connectDb()
})

afterAll(() => {
  connection.close()
})

describe('AuthController', () => {
  describe('POST /register', () => {

    test('should return 200 if user is created', async () => {

      req.body = mockUser

      await register(req, res)

      expect(res.status).toBeCalledWith(204)
      expect(res.send).toBeCalledWith({message: "User was registered successfully!"})

    })

    test('should return 400 if user is not created', async () => {
      req.body = {}
      await register(req, res)
      expect(res.status).toBeCalledWith(400)
    })
  })


  describe('POST /login', () => {

    test('should return 200 and access token if user is found', async () => {
      const {name, surname, email} = mockUser

      req.body.email = mockUser.email
      req.body.password = mockUser.password

      await login(req, res)

      expect(res.status).toBeCalledWith(200)
      expect(res.send).toBeCalledWith({
        user: {name, surname, email},
        access_token: mockToken
      })

    })

    test('should return 404 if user is not found', async () => {
      req.body.email = "wrongemail"
      req.body.password = "wrongpass"
      await login(req, res)
      expect(res.status).toBeCalledWith(404)
    })

    test('should return 401 if password is incorrect', async () => {
      req.body.email = mockUser.email
      req.body.password = 'wrongpass'

      await login(req, res)

      expect(res.status).toBeCalledWith(401)
      expect(res.send).toBeCalledWith({message: "Invalid credentials"})
    })
  })
})