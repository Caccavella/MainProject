CREATE TABLE users (
    UserID SERIAL PRIMARY KEY,
    FirstName VARCHAR(100),
    LastName VARCHAR(100),
    email VARCHAR(100),
    authid TEXT
)