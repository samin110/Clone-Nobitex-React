import { http } from "./httpService";

export function getCryptoData(url) {
  return http.get(url);
}
