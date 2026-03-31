let i = -1
const fotos = 
[
    {foto :"../Images/celeste-selfie.jpg" , legenda : "Selfie dos personagens"},
    {foto :"../Images/CelesteLogo.png", legenda : "Madeline"}
]

function foto_proxima()
{

    i ++



    if (i >= fotos.length)
    {
        i = 0
    }
    document.querySelector(".foto-troca").src = `${fotos[i].foto}`
    document.querySelector(".legenda").textContent = `${fotos[i].legenda}`
}

function foto_anterior()
{

    i --


    if (i <= -1)
    {
        i = fotos.length
    }
    document.querySelector(".foto-troca").src = `${fotos[i].foto}`
    document.querySelector(".legenda").textContent = `${fotos[i].legenda}`
}