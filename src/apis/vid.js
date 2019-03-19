import axios from "axios";
import { serverUrl } from "../config";

export default axios.create({
  baseURL: `${serverUrl}/`
});
