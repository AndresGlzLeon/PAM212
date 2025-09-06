document.write("Gonzalez Leon Andres - TIID212<br>");

class inicioPAM{
    reglamentoPoo(){
        document.write("<br>Reglamento POO<br>");
        document.write("1. Participación activa en clase.<br>");
        document.write("2. Trabajos en classroom.<br>");
        document.write("3. No usar chat en prácticas o examen.<br>");
        document.write("4. Presentación de trabajo calidad universitaria.<br>");
    }

    lineamientosClassroom(){
        document.write("<br> Lineamientos Classroom <br>");
        document.write("1. Todos los trabajos llevan portada estilo libre: Logo UPQ, tema, datos de alumno, materia <br>");
        document.write("2. Conclusiones de aprendizaje: Descripción de lo aprendido durante el desarrollo de la actividad .<br>");
        document.write("3. Entregas completas.<br>");
        document.write("4. Respetar tiempos de entrega.<br>");
    }
    
    fechasDeParciales(){
        document.write("<br> Fechas de parciales <br>");
        document.write("1. Primer parcial: 30-09-2025 <br>");
        document.write("2. Segundo parcial 04-11-2025 <br>");
        document.write("3. Tercer parcial 02-12-2025 <br>");
    }

    porcentajesDeParciales(){
        document.write(" <br> Porcentajes de parciales <br>");
        document.write("1. Primer parcial: 40% Conocimiento, 20% Desempeño, 30% Producto, 10% PI . <br>");
        document.write("2. Segundo parcial: 40% Conocimiento, 20% Desempeño, 20% Producto, 20% PI . <br>");
        document.write("3. Tercer parcial: 20% Conocimiento, 10% Desempeño, 40% Producto, 30% PI . <br>");
        
    }
}

new inicioPAM().reglamentoPoo();
new inicioPAM().lineamientosClassroom();
new inicioPAM().fechasDeParciales();
new inicioPAM().porcentajesDeParciales();

