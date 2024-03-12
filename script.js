    function carregar() {        
    
    let msg = document.getElementById('mensagem')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()  
      

    if (hora >= 0 && hora < 12) {
        document.body.style.background = ("#edab55")
        img.src = "imagem/manha.jpg"
        msg.innerHTML = `Agora são ${hora} horas. Tenha um Bom dia!`
        
        
    } else if (hora > 12 && hora < 18){
        document.body.style.background = ("#c65738")
        img.src = "imagem/tarde.jpg"
        msg.innerHTML = `Agora são ${hora} horas. Tenha uma Boa Tarde!`
        

    } else if (hora > 18 && hora < 24) {
        document.body.style.background = ("#354b63f6") 
        img.src = "imagem/noite.jpg"  
        msg.innerHTML = `Agora são ${hora} horas. Tenha uma Boa noite!`
         
    }
}

