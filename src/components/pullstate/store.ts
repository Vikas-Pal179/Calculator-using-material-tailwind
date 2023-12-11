import { Store } from "pullstate";
import Utils from "../utils/Utils";
interface IInitialState {
  isLoggedIn: boolean;
}
let initialState: IInitialState = {
  isLoggedIn: false,
};
export const authStore = new Store(initialState);

export class authStoreHelper {
  static setLoggedIn(isLogin: boolean) {
    return authStore.update((s) => {
      s.isLoggedIn = isLogin;
    });
  }
  static isUserLoggedIn() {
    const isLoggedIn = Utils.lsGet("isLoggedIn");
    if (isLoggedIn) return this.setLoggedIn(isLoggedIn);
    return;
  }
}
