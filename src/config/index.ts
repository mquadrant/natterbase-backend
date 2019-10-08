import dotenv from 'dotenv'

// Set the NODE_ENV to 'development' by default
let env = `${process.env.NODE_ENV}`
env = process.env.NODE_ENV || 'DEVELOPMENT'

let envString = env.toUpperCase()

const envFound = dotenv.config()
if (!envFound) {
    // This error should crash whole process
    throw new Error("⚠️  Couldn't find .env file  ⚠️")
}

export default {
    /**
     * Your favorite port
     */
    port: parseInt(process.env.PORT!, 10),

    /**
     * That baseUrl
     */
    backendURL: process.env[`API_BASE_URL_${envString}`],

    /**
     * API configs
     */
    api: {
        prefix: '/api',
    },
}
