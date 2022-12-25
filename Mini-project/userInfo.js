let url = new URL(location.href);
let id = url.searchParams.get("id");
let mainDiv = document.querySelector(`.mainUserInfo`);
let usersUrl = `https://jsonplaceholder.typicode.com/users`;


fetch(usersUrl + `/`+ id)
    .then((value) => value.json())
    .then((value) => {
        for (const item in value) {

            const userDiv = document.createElement('div');
            if (typeof value[item] !== 'object') {

                userDiv.innerHTML = `<b>${item}</b>:  ${value[item]}`;
            } else {
                userDiv.innerHTML = `<b>${item}</b> :`

                for (const key in value[item]) {

                    const userLi = document.createElement('li');
                    if (typeof value[item][key] !== 'object') {
                        userLi.innerText = `${key}:  ${value[item][key]}`;

                    } else {
                        userLi.innerHTML = `<b>${key}</b> :`;

                        for (const element in value[item][key]) {
                            const htmlDivElement = document.createElement('div');
                            if (typeof value[item][key][element] !== 'object') {
                                htmlDivElement.innerHTML = `${element}:  ${value[item][key][element]}`;
                            }
                            userLi.append(htmlDivElement);
                        }
                    }
                    const userUl = document.createElement("ul");
                    userUl.appendChild(userLi);
                    userDiv.append(userUl);
                }
            }
            mainDiv.append(userDiv);
        }
    });

fetch(usersUrl + `/` + id + `/`+ `posts`)
    .then((value) => value.json())
    .then((value) => {
        let postsDiv = document.createElement(`div`);
        postsDiv.classList.add(`hiddenDiv`);
        let ul = document.createElement(`ul`);
        for (const valueElement of value) {
            let li = document.createElement(`li`);
            li.innerHTML = `<b>Title:</b>  ${valueElement.title}`;
            let a = document.createElement(`a`);
            a.innerText = ` view post details`;
            a.href = `post-details.html?comments=` + JSON.stringify(valueElement);
            li.appendChild(a);
            ul.appendChild(li);
            postsDiv.appendChild(ul);
            mainDiv.append(postsDiv);


        }
        let btn = document.createElement(`button`);
        btn.classList.add(`btn`);
        btn.innerText = `Show/hide user posts`;
        mainDiv.appendChild(btn);
        btn.onclick = function showHidePosts(){
            let x = document.querySelector(`.hiddenDiv`);
            if (x.style.display === "none") {
                x.style.display = "block";
           } else {
                x.style.display = "none";
            }}
           }


    );

