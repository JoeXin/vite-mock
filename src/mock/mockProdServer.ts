import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer";
import indexModule from "./index";
export function setupProdMockServer() {
  createProdMockServer([...indexModule]);
}