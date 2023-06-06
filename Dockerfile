FROM node:16.13.0

COPY . .

# Clean
USER root
RUN rm -fr node_modules

COPY package*.json .
COPY yarn.lock .

ARG GITHUB_TOKEN

RUN echo "//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}" >> .npmrc && \
    echo "@taraldefi:registry=https://npm.pkg.github.com" >> .npmrc
RUN yarn install --frozen-lockfile --production
RUN yarn add --dev @types/react @types/node

ENV NODE_ENV=production

RUN yarn build

EXPOSE 4200

CMD ["yarn", "start"]
