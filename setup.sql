DROP TABLE IF EXISTS alien;
DROP TABLE IF EXISTS planet;
DROP TABLE IF EXISTS incident;
DROP TABLE IF EXISTS location;

CREATE TABLE planet (
    planet_id INT GENERATED ALWAYS AS IDENTITY,
    planet_name VARCHAR (50) NOT NULL,
    planet_population INT NOT NULL,
    planet_description VARCHAR (50) NOT NULL,
    PRIMARY KEY (planet_id)
);

INSERT INTO planet (planet_name, planet_population, planet_description)
VALUES ('Gloop', 21000000, 'Everything is sticky'), ('Lobi', 400000, 'Basically a marble');

CREATE TABLE alien (
    alien_id INT GENERATED ALWAYS AS IDENTITY,
    alien_name VARCHAR (50) NOT NULL,
    alien_colour VARCHAR(20) NOT NULL,
    planet_id INT NOT NULL,
    PRIMARY KEY (alien_id),
    FOREIGN KEY (planet_id) REFERENCES planet (planet_id)
);

INSERT INTO alien (alien_name, alien_colour, planet_id)
VALUES ('Ulikxion', 'Red', 1), ('Ratri', 'Green', 2);

CREATE TABLE location (
    location_id INT GENERATED ALWAYS AS IDENTITY,
    city_name VARCHAR (50) NOT NULL,
    country_name VARCHAR (50) NOT NULL,
    PRIMARY KEY (location_id)
);

INSERT INTO location (city_name, country_name)
VALUES('London', 'United Kingdom'), ('Barcelona', 'Spain');

CREATE TABLE incident (
    incident_id INT GENERATED ALWAYS AS IDENTITY,
    alien_id INT NOT NULL,
    location_id INT NOT NULL,
    incident_description VARCHAR (50) NOT NULL,
    severity_level INT NOT NULL,
    PRIMARY KEY (incident_id),
    FOREIGN KEY (alien_id) REFERENCES alien (alien_id),
    FOREIGN KEY (location_id) REFERENCES location (location_id)
);

INSERT INTO incident (alien_id, location_id, incident_description, severity_level)
VALUES (1, 1, 'Red alien spotted in London', 4), (2,2, 'Green alien spotted in Barcelona', 3);



