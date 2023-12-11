export default class Utils {
  static lsSet(key: string, data: any) {
    return localStorage.setItem(key, JSON.stringify(data));
  }
  static lsGet(key: string) {
    const getItem = localStorage.getItem(key);
    if (getItem) return JSON.parse(getItem);
    return;
  }
}
