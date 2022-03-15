import {verifySignUpMiddleware} from "../VerifySignUp";
import {mockRequest, mockResponse} from "jest-mock-req-res";
import {connectDb} from "../../config/database";
import {connection} from "mongoose";

const req = mockRequest()
const res = mockResponse()
const next = jest.fn()

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
      req.body.email = email
      await verifySignUpMiddleware(req, res, next)

      expect(res.status).toBeCalledWith(400)
      expect(res.send).toBeCalledWith({message: "Invalid email format"})
    }
  })

  test('should abort if agreement is not checked', async () => {
    req.body.email = 'valid@email.com'
    req.body.agreement = false
    await verifySignUpMiddleware(req, res, next)

    expect(res.status).toBeCalledWith(400)
    expect(res.send).toBeCalledWith({message: "Please read and accept Terms of Service and Privacy Policy"})
  })

  test('should abort if password is not confirmed', async () => {
    req.body.email = 'valid@email.com'
    req.body.agreement = true
    req.body.password = 'password'
    req.body.password_confirmation = 'diffpassword'
    await verifySignUpMiddleware(req, res, next)

    expect(res.status).toBeCalledWith(400)
    expect(res.send).toBeCalledWith({message: "Password should be confirmed"})
  })

  test('should abort if user exists', async () => {
    req.body.email = 'first@email.com'
    req.body.agreement = true
    req.body.password = 'password'
    req.body.password_confirmation = 'password'
    await verifySignUpMiddleware(req, res, next)

    expect(res.status).toBeCalledWith(400)
    expect(res.send).toBeCalledWith({message: "Email is already in use"})
  })


  test('should abort if user exists', async () => {
    req.body.email = 'nonexisting@email.com'
    req.body.agreement = true
    req.body.password = 'password'
    req.body.password_confirmation = 'password'
    await verifySignUpMiddleware(req, res, next)

    expect(next).toBeCalled()
  })

})