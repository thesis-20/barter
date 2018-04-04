const envBuild = {
  'rest-server': [
    'DEBUG=TRUE',
    'NODE_ENV=test',
    'PORT=3396',
    'LOCAL_USER=root',
    'LOCAL_HOST=localhost',
    'LOCAL_DATABASE=barter',
    'LOCAL_PASSWORD=',
    'LOCAL_PORT=5432',
    'AWS_USER=',
    'AWS_HOST=',
    'AWS_DATABASE=',
    'AWS_PASSWORD=',
    'AWS_PORT=',
    'SALT_ROUNDS=10',
    'TOKEN_SECRET=barterThesisApi',
    'EMAIL_KEY=',
  ],
  'socket-server': [
    'NODE_ENV=DEVELOPMENT',
    'DEBUG=TRUE',
    'HOST=http://localhost',
    'PORT=4155',
    'REST_SERVER_URL=http://localhost:3396',
    'TOKEN_SECRET=barterThesisApiSocketServer',
  ],
  's3-server': [
    'NODE_ENV=DEVELOPMENT',
    'HOST=http://localhost',
    'DEBUG=TRUE',
    'PORT=8593',
    'bucket=barterbruh',
    'AWS_ACCESS_KEY_ID=',
    'AWS_SECRET_ACCESS_KEY=',
    // 'AWS_SESSION_TOKEN=##########optional',
    'TOKEN_SECRET=barterThesisApiS3',
  ],
};

module.exports = envBuild;
