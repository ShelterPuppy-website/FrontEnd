const header = document.querySelector("#header");
const footer = document.querySelector("#footer");

header.innerHTML= `
<nav class="navbar navbar-expand sticky-top navbar-display-None" style="width: 1200px;">
            <div class="login">
                <a class="nav-login-link" href="#">회원가입</a>
                  <a class="nav-signin-link" href="#">로그인</a>
            </div>
            <div class="container-fluid" >
              <a class="navbar-brand Logo" href="#">
                <img src="../Image/logo.png" alt="" class="Logo">
              </a>
              
              <div class="collapse navbar-collapse nav-End" id="navbarNavAltMarkup">
                <div class="navbar-nav Nav-padding">
                  <a class="header-nav-link" aria-current="page" href="#">소개하기</a>
                  <a class="header-nav-link" href="#">입양하기</a>
                  <a class="header-nav-link" href="#">입양후기</a>
                  <a class="header-nav-link" href="#">문의하기</a>
                  <a class="header-nav-link" href="#">후원하기</a>
                </div>
              </div>
            </div>
        </nav>
`;

footer.innerHTML= `

`;
