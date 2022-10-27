document.querySelectorAll('button').forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
    })
});

const Textarea = document.querySelector('textarea');

let prevheight = 0;

Textarea.addEventListener('input', (e) => {
    if (prevheight != e.target.scrollHeight) {
        prevheight = e.target.scrollHeight;
        console.log('Textarea height:', e.target.getBoundingClientRect().height);
        console.log('Textarea scrollHeight:', e.target.scrollHeight);
    }
})


const Autoresizes = document.querySelectorAll('.autoresize').forEach((item) => {
    item.addEventListener('input', (e) => {
        e.target.style.height = 'auto';
        if (e.target.getBoundingClientRect().height - 4 != e.target.scrollHeight) {
            e.target.style.height = e.target.scrollHeight + 4 + 'px';
            console.log('!NEW! Textarea height:', e.target.getBoundingClientRect().height);
            console.log('!NEW! Textarea scrollHeight:', e.target.scrollHeight);
        }
        // e.target.style.height = e.target.scrollHeight + 4 + 'px';
    })
});