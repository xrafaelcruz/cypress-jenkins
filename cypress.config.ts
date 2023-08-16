import { config } from "dotenv";
import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";

const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");

config();

export default defineConfig({
  video: false,
  screenshotOnRunFailure: false,
  e2e: {
    supportFile: "cypress/support/e2e.{ts,js}",
    baseUrl: "http://localhost:3000",
    specPattern: "**/*.feature",

    async setupNodeEvents(on, config) {
      config.env = { ...process.env, ...config.env };

      // Converte os arquivos .feature em javascript
      await addCucumberPreprocessorPlugin(on, config);

      // Necessário para o esbuild funcionar com o cucumber
      on(
        "file:preprocessor",
        createBundler({ plugins: [createEsbuildPlugin(config)] })
      );

      return config;
    },
  },
});
