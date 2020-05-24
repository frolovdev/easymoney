
FROM node:12

COPY . ./app

WORKDIR /app

RUN yarn

RUN node ./tools/ci/integration-tests.js

RUN yarn --cwd integration --no-lockfile

RUN yarn test-integration


