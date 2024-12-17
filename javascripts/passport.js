document.getElementById('translateButton').addEventListener('click', function () {
    const issuedText = document.getElementById('issued')
    const surnameText = document.getElementById('surname')
    const nameText = document.getElementById('name')
    const patronymicText = document.getElementById('father')
    const genderText = document.getElementById('gender')
    const birthplaceText = document.getElementById('birthplace')

    if (issuedText.innerText === 'ГУ МВД ПО Г. МОСКВЕ') {
        issuedText.innerText = 'MOSCOW GU MVD'
        surnameText.innerText = 'TOLSTOVA'
        nameText.innerText = 'MARIA'
        patronymicText.innerText = 'IGOREVNA'
        genderText.innerText = 'FEM'
        birthplaceText.innerText = 'MOSCOW'
    } else {
        issuedText.innerText = 'ГУ МВД ПО Г. МОСКВЕ'
        surnameText.innerText = 'ТОЛСТОВА'
        nameText.innerText = 'МАРИЯ'
        patronymicText.innerText = 'ИГОРЕВНА'
        genderText.innerText = 'Жен.'
        birthplaceText.innerText = 'гор. Москва'
    }
})