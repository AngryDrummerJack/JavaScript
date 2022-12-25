let mainDiv = document.querySelector(`.mainDiv`);

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
        for (const user of users) {
            let div = document.createElement('div');
            let h2 = document.createElement(`h2`);
            let btn = document.createElement(`button`);
            btn.innerText = `More Info`;
            btn.onclick = function () {
                location.href = "userinfo.html?id=" + user.id;
            };
            btn.title = `Go to user info page`;
            h2.innerText = user.name;
            div.append(h2,btn);
            div.classList.add(`userCard`);
            mainDiv.appendChild(div);
        }
    });