<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Juego del Ahorcado</title>
    <link rel="stylesheet" href="css/ahorcado.css">

</head>
<body>
    <div class="container">
        <h1>Juego del Ahorcado</h1>
        <div class="ahorcado">
            <img id="imagenAhorcado" src="img/ahorcado0.png" alt="Ahorcado">
        </div>
        <div class="palabra" id="palabra"></div>
        <div class="pistas" id="pistas"></div>
        <div class="teclado" id="teclado"></div>
        <div class="mensaje" id="mensaje"></div>
        <div class="cronometro" id="cronometro">15</div>
        <div class="controles">
            <button id="inicio" onclick="iniciarJuego()">Inicio</button>
            <button id="reiniciar" onclick="reiniciarJuego()">Reiniciar</button>
            <button id="pausa" onclick="pausarJuego()">Pausa</button>
        </div>
    </div>

    <script src="${pageContext.request.contextPath}/script/juego.js"></script>
</body>
</html>
