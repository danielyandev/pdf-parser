import {verifySignUpMiddleware} from "../VerifySignUp";
import {mockRequest, mockResponse} from "jest-mock-req-res";
import {connectDb} from "../../config/database";
import {connection} from "mongoose";
import AuthController from "../../controllers/AuthController";
import {mockUser} from "../../config/mockData";

const req = mockRequest()
const res = mockResponse()
const next = jest.fn()

jest.setTimeout(30000)

beforeAll(() => {
  connectDb()
})

afterAll(() => {
  connection.close()
})

describe('VerifySignUp middleware', () => {

  test('should abort if email is invalid', async () => {
    const invalidEmails = [
      'withoutat.mock',
      'withoutdomain@mock',
      '@mock.mock',
      'plaintext',
      '@.',
    ]

    for (const email of invalidEmails) {
      req.body = {email}
      await verifySignUpMiddleware(req, res, next)

      expect(res.status).toBeCalledWith(400)
      expect(res.send).toBeCalledWith({message: "Invalid email format"})
    }
  })

  test('should abort if agreement is not checked', async () => {
    req.body = {
      email: 'valid@email.com',
      agreement: false
    }
    await verifySignUpMiddleware(req, res, next)

    expect(res.status).toBeCalledWith(400)
    expect(res.send).toBeCalledWith({message: "Please read and accept Terms of Service and Privacy Policy"})
  })

  test('should abort if password is not confirmed', async () => {
    req.body = {
      email: 'valid@email.com',
      agreement: true,
      password: 'password',
      password_confirmation: 'diffpassword',
    }
    await verifySignUpMiddleware(req, res, next)

    expect(res.status).toBeCalledWith(400)
    expect(res.send).toBeCalledWith({message: "Password should be confirmed"})
  })

  test('should abort if user exists', async () => {
    req.body = mockUser
    req.body.agreement = true
    await AuthController.register(req, res)
    expect(res.status).toBeCalledWith(204)

    await verifySignUpMiddleware(req, res, next)

    expect(res.status).toBeCalledWith(400)
    expect(res.send).toBeCalledWith({message: "Email is already in use"})
  })


  test('should continue if user does not exist', async () => {
    req.body = {
      email: 'nonexistinguserAU743@email.com',
      agreement: true,
      password: 'password',
      password_confirmation: 'password',
    }
    await verifySignUpMiddleware(req, res, next)

    expect(next).toBeCalled()
  })

})