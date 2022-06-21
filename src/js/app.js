import * as flsFunctions from "./modules/functions.js";
import * as modalHandlers from "./modules/script.js";
import { showModal } from "./modules/script.js";

flsFunctions.isWebp();
modalHandlers.showModal();
modalHandlers.handleModalClose(modalHandlers.selectors);