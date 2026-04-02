let i = -1
const fotos = 
[
    {foto :"../Images/celeste-selfie.jpg" , legenda : "Selfie dos personagens"},
    {foto :"../Images/madelineicon.png", legenda : "Madeline"},
    {foto :"../Images/theoicon.jpg", legenda : "Theo"},
    {foto :"../Images/grandmaicon.jpg", legenda : "Vovó"},
    {foto :"../Images/oshiroicon.jpg", legenda : "Sr.Oshiro"}
]

function foto_proxima()
{

    i ++



    if (i >= fotos.length)
    {
        i = 0
    }
    document.querySelector(".numeroimg").textContent = `${i + 1} / ${fotos.length}`
    document.querySelector(".foto-troca").src = `${fotos[i].foto}`
    document.querySelector(".legenda").textContent = `${fotos[i].legenda}`
}

function foto_anterior()
{

    i --

    if (i <= -1)
    {
        i = fotos.length - 1
    }
    document.querySelector(".numeroimg").textContent = `${i + 1} / ${fotos.length}`
    document.querySelector(".foto-troca").src = `${fotos[i].foto}`
    document.querySelector(".legenda").textContent = `${fotos[i].legenda}`
}


