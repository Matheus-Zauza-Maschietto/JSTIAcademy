window.onload = function(){
    const inputTask = document.querySelector('#input-task');
    const addItem = document.querySelector('#add');
    const majorBox = document.querySelector('#tasks-list');

    function createListItem(text){
        if(text.trim()!=''){
            let li = document.createElement('li');
            li.setAttribute('class', 'flex center task-item');
                let p = document.createElement('p');
                p.textContent = text;
                li.appendChild(p);

                let div = document.createElement('div');
                div.setAttribute('class', 'flex center');
                
                    let span = document.createElement('span');
                    span.setAttribute('id', 'trash')
                    span.setAttribute('class', 'material-symbols-outlined icon-item');
                    span.textContent = 'delete';
                    div.appendChild(span)

                    span = document.createElement('span');
                    span.setAttribute('id', 'mark-ok')
                    span.setAttribute('class', 'material-symbols-outlined icon-item');
                    span.textContent = 'check_box_outline_blank';
                    div.appendChild(span);
                li.appendChild(div)
            majorBox.appendChild(li);
        }
        else{
            alert('Não é possivel adicionar um item sem nome')
        }
    }

    addItem.addEventListener('click', function(){
        createListItem(inputTask.value)
    })
}