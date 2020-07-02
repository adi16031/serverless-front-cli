export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app1-upload1"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://qy3ehdxsie.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_plVnEW7Tu",
      APP_CLIENT_ID: "4tmn20qfu2394c5f1fa86dmi4k",
      IDENTITY_POOL_ID: "us-east-1:82acfdd7-ba39-4432-8468-2f9d4b4e300f"
    }
  };