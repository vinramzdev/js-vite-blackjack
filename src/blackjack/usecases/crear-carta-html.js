/**
 * 
 * @param {String} carta 
 * @returns {HTMLImageElement} image de retorno
 */

export const crearCartaHTML = (carta)=>{

    if(!carta) throw new Error('La carta es un argumento obligatorio');
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/img/cartas/${carta}.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}