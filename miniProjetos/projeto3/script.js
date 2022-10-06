window.onload = function(){
    const inputTask = document.querySelector('#input-task');
    const addItem = document.querySelector('#add');
    const majorBox = document.querySelector('#tasks-list');
    let trashItens = document.querySelectorAll('#trash');
    let checkBoxItens = document.querySelectorAll('#mark-ok');

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
                    removeNewItemList(span)
                    div.appendChild(span)

                    span = document.createElement('span');
                    span.setAttribute('id', 'mark-ok')
                    span.setAttribute('class', 'material-symbols-outlined icon-item');
                    span.textContent = 'check_box_outline_blank';
                    
                    checkNewTask(span);


                    div.appendChild(span);

            li.appendChild(div);
            majorBox.appendChild(li);
            inputTask.value = '';
            updateVariables();
        }
        else{
            alert('Não é possivel adicionar um item sem nome')
        }
    };

    function removeNewItemList(trashTag){
        trashTag.addEventListener('click', function(){
            trashTag.parentElement.parentElement.remove();
        })
    }

    function removeItemList(trashTag){
        trashTag.forEach(function(item){
            item.addEventListener('click', function(){
                item.parentElement.parentElement.remove();
            })
        }) 
    };

    function checkNewTask(checkTag){
        checkTag.addEventListener('click', function(){
            if(checkTag.textContent == 'check_box_outline_blank'){
                checkTag.textContent = 'check_box';
                checkTag.parentElement.parentElement.classList.add('done')
            }
            else{
                checkTag.textContent = 'check_box_outline_blank';
                checkTag.parentElement.parentElement.classList.remove('done')
            } 
        })
    }

    function checkTask(checkTag){
        
        checkTag.forEach(function(item){
            item.addEventListener('click', function(){
                if(item.textContent == 'check_box_outline_blank'){
                    item.textContent = 'check_box';
                    item.parentElement.parentElement.classList.add('done')
                }
                else{
                    item.textContent = 'check_box_outline_blank';
                    item.parentElement.parentElement.classList.remove('done')
                } 
            })
        }
    )}

    function updateVariables(){
        trashItens = document.querySelectorAll('#trash');
        checkBoxItens = document.querySelectorAll('#mark-ok');
    }

    
    
    addItem.addEventListener('click', function(){
        createListItem(inputTask.value);
    })
    removeItemList(trashItens);
    checkTask(checkBoxItens)
    


}