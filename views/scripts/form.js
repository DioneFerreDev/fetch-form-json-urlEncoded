document.addEventListener("DOMContentLoaded", playForm())




function playForm() {
    const formObj = document.getElementById("form-user");
    formObj.addEventListener("submit", e => {
        e.preventDefault();
        const form = e.currentTarget;
        const URL = form.action;
        const method = form.method;
        const formData = new FormData(form);

        // convertendo os valores para json e depois strings para passar no body
        const formJson = Object.fromEntries(formData.entries());
        const formStringfied = JSON.stringify(formJson);
        options = {
            method,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body:formStringfied
        }

        fetch(URL,options).then(res => res.json()).then(obj => information(obj));
    })
}
function information(obj){
    let msg = "";
    obj.error? msg = obj.message : msg = `Redirect to ${obj.user}`;                   
    const title = document.getElementById("title");
    title.classList.remove("show");
    title.classList.add("hide");

    title.innerHTML = msg;    
    title.classList.remove("hide");
    title.classList.add("show");
}