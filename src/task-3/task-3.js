function makeNumeration(arr){
    for(let i = 0;i<arr.length;i++){
        arr[i].firstElementChild.textContent = i+1;
        arr[i].classList.remove("d-none");

        

        if((i+1)%2 == 0)    arr[i].classList.add("table-row-even")
        else                arr[i].classList.remove("table-row-even")
    }
}


export default function filterTable(tbody, filters) {
    makeNumeration(tbody.querySelectorAll("tr"))

    for(const key in filters){
        const tdArray = tbody.querySelectorAll(`td[data-field-name = ${key}]`)
        for(const item of tdArray){
            if(item.textContent.indexOf(filters[key]) === -1 ){
                item.parentElement.classList.add("d-none")
            }
        }
    }
    makeNumeration(tbody.querySelectorAll("tr:not(.d-none)"));
}