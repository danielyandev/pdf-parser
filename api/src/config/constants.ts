/**
 * Port to run the server on
 */
export const PORT: number = 8080

/**
 * Secret string for jwt encryption and check
 */
export const JWT_TOKEN_SECRET_KEY: string = "some-secret-string"

/**
 * URI for db connection
 */
export const MONGO_URI: string = "mongodb+srv://trialuser:trialpassword@cluster0.uprbf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

/**
 * Apache tika microservice URL
 *
 * NOTE: changed to an external URL for testing purposes, cause microservice URL does not work
 * TODO: change to microservice URL
 */
// export const APACHE_TIKA_URL: string = "http://localhost:9999/tika"
export const APACHE_TIKA_URL: string = "http://givemetext.okfnlabs.org/tika/tika"