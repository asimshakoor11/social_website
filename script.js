




// toast code




const notifications = document.querySelector(".notifications"),
buttons = document.querySelectorAll(".buttons .btn");

const toastDetails = {
    timer: 5000,
    welcome: {
        icon: 'fa-circle-info',
        text: 'Welcome!',
    },
    info: {
        icon: 'fa-circle-info',
        text: 'Please explore all pages of website',
    },
    info1: {
        icon: 'fa-circle-info',
        text: 'By using Nav bar & aside navigation',
    },
    thanks: {
        icon: 'fa-circle-info',
        text: 'Thanks!',
    }
}

const removeToast = (toast) => {
    toast.classList.add("hide");
    if(toast.timeoutId) clearTimeout(toast.timeoutId); // Clearing the timeout for the toast
    setTimeout(() => toast.remove(), 500); // Removing the toast after 500ms
}

const createToast = (id) => {
    // Getting the icon and text for the toast based on the id passed
    const { icon, text } = toastDetails[id];
    const toast = document.createElement("li"); // Creating a new 'li' element for the toast
    toast.className = `toast ${id}`; // Setting the classes for the toast
    // Setting the inner HTML for the toast
    toast.innerHTML = `<div class="column">
                         <i class="fa-solid ${icon}"></i>
                         <span>${text}</span>
                      </div>
                      <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
    notifications.appendChild(toast); // Append the toast to the notification ul
    // Setting a timeout to remove the toast after the specified duration
    toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
}


function codeAddress() {
        createToast("welcome");
        setTimeout(() => createToast("info"), 5500);
        setTimeout(() => createToast("info1"), 6500);
        setTimeout(() => createToast("thanks"), 12000);
}
window.onload = codeAddress;