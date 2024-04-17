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
            throw ApiError.BadRequest('User with this nickname exists ' + nickname)
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

    async login(nickname, password) {
        const user = await User.findOne({
            where: {
                nickname,
            }
        })

        if (!user) {
            throw ApiError.BadRequest('User not found')
        }

        const isPassEquals = await bcrypt.compare(password, user.password);

        if (!isPassEquals) {
            throw ApiError.BadRequest('Wrong password');
        }

        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({ ...userDto });

        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {
            ...tokens,
            user: userDto,
        }
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken);

        return token;
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError();
        }

        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await tokenService.findToken(refreshToken);

        if (!userData || !tokenDb) {
            throw ApiError.UnauthorizedError();
        }

        const user = await User.findOne({
            where: {
                id: userData.id
            }
        });
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({ ...userDto });

        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {
            ...tokens,
            user: userDto,
        }
    }
}

module.exports = new UserService()
