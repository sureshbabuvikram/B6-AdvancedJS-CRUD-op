var selectedRow = null

function onFormSubmit(){
    event.preventDefault()
    let formData = readFormData()

    if(selectedRow == null){
        insertNewRecord(formData)
    }else{
        updateRecord(formData)
    }

    resetForm()
}


function readFormData(){
    let formData ={};
    formData['productCode'] = document.getElementById('productCode').value
    formData['product'] = document.getElementById('product').value
    formData['qty'] = document.getElementById('qty').value
    formData['perPrice'] = document.getElementById('perPrice').value

    console.log(formData);
    return formData
}


function insertNewRecord(data){
    var table = document.getElementById('storeList').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length)

    cell1= newRow.insertCell(0)
    cell1.innerText = data.productCode 

    cell2= newRow.insertCell(1)
    cell2.innerText = data.product

    cell3= newRow.insertCell(2)
    cell3.innerText = data.qty

    cell4= newRow.insertCell(3)
    cell4.innerText = data.perPrice

    cell4= newRow.insertCell(4)
    cell4.innerHTML = `<button onClick="onEdit(this)" > Edit </button> <button onClick="onDelete(this)" > Del </button> `

}


function onEdit(td){
    selectedRow = td.parentElement.parentElement
    console.log("selectedRow", selectedRow);
    document.getElementById('productCode').value = selectedRow.cells[0].innerText;
     document.getElementById('product').value=selectedRow.cells[1].innerText;
     document.getElementById('qty').value=selectedRow.cells[2].innerText;
   document.getElementById('perPrice').value=selectedRow.cells[3].innerText;    
}



function updateRecord(formData){
    selectedRow.cells[0].innerText =formData.productCode
    selectedRow.cells[1].innerText =formData.product
    selectedRow.cells[2].innerText =formData.qty
    selectedRow.cells[3].innerText =formData.perPrice
}


function onDelete(td){
    if(confirm("Delete particular row, are you sure?")){
        let row = td.parentElement.parentElement
    console.log("row", row);
    document.getElementById('storeList').deleteRow(row.rowIndex)
    }    
}
















function resetForm(){
    document.getElementById('productCode').value =""
     document.getElementById('product').value=""
     document.getElementById('qty').value=""
   document.getElementById('perPrice').value=""

   selectedRow = null
}