package aseds.ine2.Etudiant.StudentApp;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Allow requests from the frontend (React) container
        registry.addMapping("/**") // Allow all paths
                .allowedOrigins("http://localhost:5173", "http://frontend-container:5173")
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Allowed HTTP methods
                .allowCredentials(true); // Allow cookies or authentication headers
    }
}
