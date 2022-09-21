import { createToken } from "../service/JwtService"
import { login, validateBody } from "../service/LoginService"

const loginController = {
  login: async (req, res) => {
    const { email } = validateBody(req.body)

    const token = await login(req.body)

    res.status(200).json(token)
  }
}