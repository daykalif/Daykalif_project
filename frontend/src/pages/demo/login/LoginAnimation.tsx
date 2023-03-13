import { useEffect } from 'react';
import LoginTemplate from './LoginTemplate';
import './style.less';

const LoginAnimation = () => {
  // 点击切换
  useEffect(() => {
    let switchCtn = document.querySelector("#switch-cnt");
    let switchC1 = document.querySelector("#switch-c1");
    let switchC2 = document.querySelector("#switch-c2");
    let switchCircle = document.querySelectorAll(".switch_circle");
    let switchBtn = document.querySelectorAll(".switch-btn");
    let aContainer = document.querySelector("#a-container");
    let bContainer = document.querySelector("#b-container");
    let allButtons = document.querySelectorAll(".submit");

    let getButtons = (e: { preventDefault: () => any; }) => e.preventDefault();

    // 修改类名
    let changeForm = () => {
      switchCtn?.classList.add("is-gx");
      setTimeout(function () {
        switchCtn?.classList.remove("is-gx");
      }, 1500)
      switchCtn?.classList.toggle("is-txr");
      switchCircle[0].classList.toggle("is-txr");
      switchCircle[1].classList.toggle("is-txr");

      switchC1?.classList.toggle("is-hidden");
      switchC2?.classList.toggle("is-hidden");
      aContainer?.classList.toggle("is-txl");
      bContainer?.classList.toggle("is-txl");
      bContainer?.classList.toggle("is-z");
    }

    for (var i = 0; i < allButtons.length; i++) {
      allButtons[i].addEventListener("click", getButtons);
    }

    for (var i = 0; i < switchBtn.length; i++) {
      switchBtn[i].addEventListener("click", changeForm);
    }
  }, []);

  return (
    <div className="shell">
      <div className="container a-container" id="a-container">
        <div className="form" id="a-form">
          <h2 className="form_title title">登录账号</h2>
          <div className="form_icons">
            <span className="iconfont icon">&#xe667;</span>
            <span className="iconfont icon">&#xe665;</span>
          </div>
          <span className="form_span">选择登录方式活电子邮箱登录</span>
          <LoginTemplate />
        </div>
      </div>
      <div className="container b-container" id="b-container">
        <div className="form" id="b-form">
          <h2 className="form_title title">注册账号
          </h2>
          <div className="form_icons">
            <span className="iconfont">&#xe667;</span>
            <span className="iconfont">&#xe665;</span>
          </div>
          <span className="form_span">选择注册方式活电子邮箱注册</span>
          <input type="text" className="form_input" placeholder="Name" />
          <input type="text" className="form_input" placeholder="Email" />
          <input type="text" className="form_input" placeholder="Password" />
          <button className="form_button button submit">注册</button>
        </div>
      </div>
      <div className="switch" id="switch-cnt">
        <div className="switch_circle"></div>
        <div className="switch_circle switch_circle-t"></div>
        <div className="switch_container" id="switch-c1">
          <h2 className="switch_title title" style={{ "letterSpacing": 0 }}>Hello Friend！</h2>
          <p className="switch_description description">去注册一个账号，成为尊贵的粉丝会员，让我们踏入奇妙的旅途！</p>
          <button className="switch_button button switch-btn">切换注册</button>
        </div>

        <div className="switch_container is-hidden" id="switch-c2">
          <h2 className="switch_title title" style={{ "letterSpacing": 0 }}>Welcome Back！</h2>
          <p className="switch_description description">已经有账号了嘛，去登入账号来进入奇妙世界吧！！！</p>
          <button className="switch_button button switch-btn">切换登录</button>
        </div>
      </div>
    </div>
  );
}

export default LoginAnimation;