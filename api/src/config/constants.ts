/**
 * Port to run the server on
 */
export const APP_PORT: number|string = process.env.APP_PORT || 8080

/**
 * Secret string for jwt encryption and check
 */
export const JWT_TOKEN_SECRET_KEY: string = process.env.JWT_TOKEN_SECRET_KEY || "some-secret-string"

/**
 * URI for db connection
 */
export const MONGO_URI: string = process.env.MONGO_URI || "mongodb://localhost:27017/test";

/**
 * Apache tika microservice URL
 *
 * NOTE: changed to an external URL for testing purposes, cause microservice URL does not work
 * TODO: change to microservice URL
 */
// export const APACHE_TIKA_URL: string = "http://localhost:9999/tika"
export const APACHE_TIKA_URL: string = process.env.APACHE_TIKA_URL || "http://givemetext.okfnlabs.org/tika/tika"