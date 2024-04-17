const jwt = require('jsonwebtoken');
const { Token } = require('../models/models')

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '30s' })

        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET)

        return {
            accessToken,
            refreshToken,
        }
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await Token.findOne({ 
            where: {
                userId 
            }
        })

        if (tokenData) {
            tokenData.refreshToken = refreshToken;

            return tokenData.save();
        }

        const token = await Token.create({ userId: userId, refreshToken })

        return token;
    }

    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
            
            console.log(22222, userData);
            return userData;
        } catch(e) {
            console.log(343434);
            return null;
        }
    }

    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
            console.log(111111, userData);
            return userData;
        } catch(e) {
            return null;
        }
    }

    async removeToken(refreshToken) {
        const tokenData = await Token.destroy({
            where: {
                refreshToken,
            }
        })

        return tokenData;
    }

    async findToken(refreshToken) {
        const tokenData = await Token.findOne({
            where: {
                refreshToken,
            }
        })

        return tokenData;
    }
}

module.exports = new TokenService()
