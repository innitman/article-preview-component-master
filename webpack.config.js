import path from "path";

export default {
  mode: "development", // Set mode to 'development'
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve("dist"),
  },
  devtool: false,
};
