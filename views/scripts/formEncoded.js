document.addEventListener("DOMContentLoaded", playForm())




function playForm() {
    const formObj = document.getElementById("form-user-encoded");
    formObj.addEventListener("submit", e => {
        e.preventDefault();
        const form = e.currentTarget;
        const URL = form.action;
        const method = form.method;
        const enctype = form.enctype;
        const user = document.getElementById("user").value;
        const password = document.getElementById("password").value;

        const formData = new URLSearchParams();
        formData.append("user", user);
        formData.append("password", password);
        
        options = {
            method,
            headers: {
                "Content-Type": enctype,
                "Accept": "application/json"
            },
            body: formData.toString()
        }

        fetch(URL, options).then(res => res.json()).then(obj => information(obj));
    })
}
function information(obj) {
    
    let msg = "";
    obj.error ? msg = obj.message : msg = `Redirect to ${obj.user}`;
    const title = document.getElementById("title");
    title.classList.remove("show");
    title.classList.add("hide");

    title.innerHTML = msg;
    title.classList.remove("hide");
    title.classList.add("show");
}