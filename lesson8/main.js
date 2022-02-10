let viewLoginPwd = false;

const changePwdView = () => {
  let getPwdView = $("#viewPwdLogin");
  if (!viewLoginPwd) {
    getPwdView.attr("type", "text");
    viewLoginPwd = true;
  } else if (viewLoginPwd) {
    getPwdView.attr("type", "password");
    viewLoginPwd = false;
  }
};
