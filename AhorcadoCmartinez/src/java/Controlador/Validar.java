package Controlador;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
@WebServlet("/Validar")

public class Validar extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String btnIngresar = request.getParameter("btnIngresar");

        if ("Ingresar".equalsIgnoreCase(btnIngresar)) {
            String usuario = request.getParameter("txtCorreo");
            String contra = request.getParameter("txtContrasena");

      
            if ("1".equals(usuario) && "1".equals(contra)) {
                request.getRequestDispatcher("ahorcado.jsp").forward(request, response);
            } else {
        
                request.setAttribute("error", "Usuario o contraseña incorrectos");
                request.getRequestDispatcher("index.jsp").forward(request, response);
            }
        } else {
            response.sendRedirect("index.jsp");
        }
    }
}
