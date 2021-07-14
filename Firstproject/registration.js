const signUp = e => {
    let formData = {
        login: document.getElementById('login').value,
        password: document.getElementById('password').value
    }
    localStorage.setItem('formData', JSON.stringify(formData));

     dispData();
    e.preventDefault();

}

function dispData() {

    try {
        let {login, password} = JSON.parse(localStorage.getItem('formData'))
        let output = document.getElementById('output')
        const regExp = /^[a-zа-яё|A-ZА-ЯЁ]+\s[a-zа-яё|A-ZА-ЯЁ]+$/

        if (regExp.test(login)) {

            let newLogin = login.split(" ")
            let name = newLogin[0]
            let surname = newLogin[1]
            if (name.length > 8) {
                output.innerHTML = `
        ${name.charAt(0).toUpperCase()}. ${surname[0].toUpperCase()}.
    `
            } else {
                output.innerHTML =
                    `
        ${name.charAt(0).toUpperCase() + name.slice(1)} ${surname[0].toUpperCase()}.
    `
            }
            popupClose.onclick()
            change()


        } else {
            alert('Введите имя и фамилию через пробел')
        }
    } catch (err) {
        return
    }


}

function outFromSite(){
    localStorage.clear()
    window.location.reload(false);
}

function change() {
    let loginButton = document.getElementById('myBtn')
    loginButton.style.background = 'white'
    loginButton.style.color = 'red'
    loginButton.addEventListener('click', () => outFromSite())
    loginButton.innerHTML = `
        Выйти
        `
}

 dispData();





