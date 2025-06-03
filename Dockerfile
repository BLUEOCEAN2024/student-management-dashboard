# Use a base image with Java runtime
FROM openjdk:17-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the built JAR file into the container
COPY target/StudentManagementBackend-0.0.1-SNAPSHOT.jar student-dashboard-backend.jar

# Expose port (change if your app uses a different port)
EXPOSE 8085

# Command to run the JAR
ENTRYPOINT ["java", "-jar", "student-dashboard-backend.jar"]
