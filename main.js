
let btn = document.getElementById('btn')
let inp = document.getElementById('inp')
let box = document.querySelectorAll('.box')
let drag = null;

btn.onclick = function () {
    if (inp.value !== '') {
        box[0].innerHTML += `
         <p class="item" draggable="true">${inp.value}</p> 
    
        `
        inp.value = '';
    }
    dragItem();

}
function dragItem() {
    let item = document.querySelectorAll('.item')
    let box = document.querySelectorAll('.box')
    let drag;

    item.forEach(item => 
        item.addEventListener('dragstart', function(e) {
            drag = item ;
        })
    )

    box.forEach(box => {
        box.addEventListener('dragover', function(e) {
            e.preventDefault()      
            this.style.background = '#090';
            this.style.color = '#fff';
        })

        box.addEventListener('dragleave', function() {
            this.style.background = '';
            this.style.color = '';
        })

        box.addEventListener('drop', function(e) {
            e.preventDefault();
            this.append(drag);
            this.style.background = '#090';
            this.style.color = '#fff';
        })
    })
}


