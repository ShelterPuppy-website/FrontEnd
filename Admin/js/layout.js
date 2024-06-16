// const header = document.querySelector("#header");
const nav = document.querySelector("#nav");


header.innerHTML= `
        
`;

nav.innerHTML= `
        <nav class="nav flex-column Ah-96">
                    <a class="nav-link" href="#" onclick="loadContent('page1.html')">입양하기</a>
                    <a class="nav-link" href="#" onclick="loadContent('page2.html')">입양후기</a>
                    <a class="nav-link" href="#" onclick="loadContent('page3.html')">공지사항</a>
                    <a class="nav-link" href="#" onclick="loadContent('page4.html')">후원하기</a>
                    <a class="nav-link" href="#" onclick="loadContent('page5.html')">문의내역</a>
                </nav>
`;

