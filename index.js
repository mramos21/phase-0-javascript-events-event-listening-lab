function clickAlert() {
    alert('I was clicked')
}

function addingEventListener() {
    const input = document.getElementById('input')
    return input.addEventListener('click', clickAlert)
}