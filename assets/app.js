const btn = document.querySelector('button');
const messagelist = document.querySelector("#messagelist")

// Event lisner 
btn.addEventListener('click', () =>
{
    const input = (document.getElementById('message').value);
    const p = document.querySelector('p');
    p.textContent = input;
})

    