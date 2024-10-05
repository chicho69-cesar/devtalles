FROM alpine:3.19

# Install SQLite
RUN apk --no-cache add sqlite

# Create a directory to store the database
WORKDIR /db

# Copy your SQLite database file into the container
COPY initial-db.sqlite /db/

# Expose the port if needed
# EXPOSE 1433

# Command to run when the container starts
CMD ["sqlite3", "/data/initial-db.sqlite"]

# docker build -t sqlite_db .
# docker run -it -v sqlite_data:/data --name sqlite_container sqlite_db
