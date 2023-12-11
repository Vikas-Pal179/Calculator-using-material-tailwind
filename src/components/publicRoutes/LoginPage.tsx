import React from "react";
import { authStoreHelper } from "../pullstate/store";
import Utils from "../utils/Utils";

function LoginPage() {
  return (
    <div>
      login
      <button
        onClick={() => {
          authStoreHelper.setLoggedIn(true);
          Utils.lsSet("isLoggedIn", true);
        }}
      >
        click to login a user
      </button>
    </div>
  );
}

export default LoginPage;
