const SUCCESS_CONTENT= `<i class="fa-solid fa-circle-check"></i> Sucess`;
const ERROR_CONTENT= `<i class="fa-solid fa-circle-xmark"></i> Error`;
const INVALID_CONTENT= `<i class="fa-solid fa-circle-exclamation"></i> Invalid`;

function showToast(type){
    console.log("toast");
    let toast=document.createElement('div');
    toast.classList.add('toast');
    let toastBox=document.getElementById("toastBox");
    toastBox.appendChild(toast);
    if(type==='success')
        {
            toast.innerHTML=SUCCESS_CONTENT;
            toast.classList.add('success');
        }
    if(type==='error')
        {
            toast.innerHTML=ERROR_CONTENT;
            toast.classList.add('failure');
        }
    if(type==='invalid')
        {
            toast.innerHTML=INVALID_CONTENT;
            toast.classList.add('invalid');
        }
    setTimeout(()=>{toast.remove();}, 5000);
}