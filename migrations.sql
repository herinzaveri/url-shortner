CREATE DATABASE url_shortner;

CREATE TABLE url_shortner.urls (
  id INT NOT NULL AUTO_INCREMENT,
  full TEXT NOT NULL,
  short VARCHAR(255) NOT NULL,
  clicks INT NULL DEFAULT 0,
  PRIMARY KEY (id)
);
