function generate() {
    let num = document.getElementById('txtnumber');
    let tab = document.getElementById('seltab');
    
    if(num.value.length == 0) { 
        window.alert('Por favor, digite um número!');
    } else { 
        const number = Number(num.value);
        let counter = 0;
        tab.innerHTML = '';
        while ( counter <= 10) { 
            let item = document.createElement('option');
            item.text = `${number} x ${counter} = ${number*counter}`;
            item.value = `tab${counter}`;
            tab.appendChild(item);
            counter++;
        }
    }

}