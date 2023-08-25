FROM node:19

WORKDIR /app
COPY package*.json ./
RUN npx playwright install --with-deps
RUN npm install @playwright/test -D


COPY playwright.config.ts /app/
COPY . /app/
RUN npx playwright install webkit
CMD npx playwright test


