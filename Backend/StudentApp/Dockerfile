# Stage 1: Build the application
FROM maven:3.8.8-eclipse-temurin-17 AS build

# Set the working directory for the build process
WORKDIR /app

# Copy the Maven configuration and source files
COPY pom.xml ./
COPY src ./src

# Download the dependencies (go-offline will cache them for future builds)
RUN mvn dependency:go-offline

# Package the application, skipping tests for faster builds
RUN mvn clean package -DskipTests

# Stage 2: Create the runtime image
FROM eclipse-temurin:17-jre-alpine

# Set the working directory in the final runtime container
WORKDIR /app

# Create a non-root user and group for security purposes
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy the JAR file from the build stage
COPY --from=build /app/target/StudentApp-0.0.1-SNAPSHOT.jar /app/app.jar

# Change ownership of the app file to the non-root user
RUN chown appuser:appgroup /app/app.jar

# Switch to the non-root user
USER appuser:appgroup

# Expose the port the app will run on
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
