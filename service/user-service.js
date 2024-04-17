const { User } = require('../models/models.js')
const bcrypt = require('bcrypt')
const tokenService = require('./token-service')
const UserDto = require('../dtos/user-dtos')
const ApiError = require('../error/ApiError')

class UserService {
    async registration(nickname, password) {
        const candidate = await User.findOne({ 
            where: {
                nickname 
            }
        })

        if (candidate) {
            ApiError.BadRequest('User with this nickname exists ' + nickname)
        }

        const hashPassword = await bcrypt.hash(password, 3)

        const user = await User.create({ nickname, password: hashPassword })

        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({ ...userDto })

        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {
            ...tokens,
            user: userDto,
        }
    }
}

module.exports = new UserService()
