<!DOCTYPE html>

<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desafio de la Clase 8</title>
</head>

<body>

    <h1>Formulario: Alta de Producto</h1>

    <form style="width:400px" action="http://localhost:8080/api/productos", method="post">
        
        <fieldset style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
            
            <legend>Nuevo Producto</legend>
            
            <div>
                <div style="display: inline;">Nombre :</div>
                <div style="display: inline;"><input style="padding:3px; margin-bottom:7px ; border-radius: 5px;" type="text" name="title" placeholder="Ingresar nombre" required></div>
            </div>
            <div>
                <div style="display: inline;">Precio :</div>
                <div style="display: inline;"><input style="padding:3px; margin-bottom:7px ; border-radius: 5px;" type="number" name="price" placeholder="Ingresar precio" required></div>
            </div>
            <div>
                <div style="display: inline;">Url de la imagen :</div>
                <div style="display: inline;"><input style="padding:3px; margin-bottom:7px ; border-radius: 5px;" type="url" name = "thumbnail" placeholder="Ingresar URL" required></div>
            </div>
            <div>
                <input style="padding: 5px 10px; margin-top: 15px; border-radius: 5px;" type="submit" value="Agregar Producto">
            </div>

        </fieldset>
    
    </form>
    
</body>
</html>