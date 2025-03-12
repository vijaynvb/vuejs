import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Todo API",
      version: "1.0.0",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ["./authRouter.js", "./userRouter.js", "./todosRouter.js"],
};

const specs = swaggerJSDoc(options);
export default specs;