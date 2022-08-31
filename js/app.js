
function embed (){
let opcion = prompt('Introduce la Accion que corresponda: youtube, soundcloud');
let contenido = prompt('Introduce el código a incrustar')
switch(opcion){
    case "youtube":
        console.log('<iframe width="560" height="315" src="'+contenido+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
    case "soundcloud":
        console.log('<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url='+contenido+'&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>')
    default:break
    }
}

let accion= prompt('Que desea hacer: embed, otro')

switch(accion){
    case "embed":
        embed();
    case "otro":
        break
    default: console.log('Operacion no válida')
}
