var a = 0;
var menu = "El cliente eligio: ";

while (a != 'menu' && parseInt(a) != 6){
    a = prompt(
        "----- Menu -----\n1.- Sopa\n2.- Ensalada\n3.- Carne\n4.- Postre\n5.- Bebida\n6.- Salir\n---------------\nIngrese menu o digite 6 para salir"
    );
    if (Number.isInteger(parseInt(a)) && 1<=parseInt(a) && parseInt(a)<=6) {
        switch (a) {
            case "1":
                menu = menu + "Sopa ";
                break;
            case "2":
                menu = menu + "Ensalada ";
                break;
            case "3":
                menu = menu + "Carne ";
                break;
            case "4":
                menu = menu + "Postre ";
                break;
            case "5":
                menu = menu + "Bebida ";
                break;
        }
    }
}
document.write(menu)
