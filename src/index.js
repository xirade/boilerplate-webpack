import { addTitle, styleBody, contact } from "./dom";
import users, {getPremUsers} from "./data";

const premUsers = getPremUsers(users)
console.log("index.file");
addTitle("test");
styleBody();
console.log(contact);
console.log(users, premUsers);
