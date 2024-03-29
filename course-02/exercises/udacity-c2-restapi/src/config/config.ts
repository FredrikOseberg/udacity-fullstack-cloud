export const config = {
  "dev": {
    "username": process.env.UDAGRAM_POSTGRESS_USERNAME,
    "password": process.env.UDAGRAM_POSTGRESS_PASSWORD,
    "database": process.env.UDAGRAM_POSTGRESS_DATABASE,
    "host": process.env.UDAGRAM_POSTGRESS_HOST,
    "dialect": "postgres",
    "aws_region": process.env.UDAGRAM_AWS_REGION,
    "aws_profile": process.env.UDAGRAM_AWS_PROFILE,
    "aws_media_bucket": process.env.UDAGRAM_AWS_MEDIA_BUCKET,
    "jwt_secret": process.env.UDAGRAM_JWS_SECRET
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
