CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    mobileNumber VARCHAR(15) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    createdDate DATETIME NOT NULL,
    createdBy VARCHAR(255),
    updatedDate DATETIME NOT NULL,
    updatedBy VARCHAR(255)
);
