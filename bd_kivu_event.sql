CREATE DATABASE kivu_event;

USE kivu_event;

-- Table des événements
CREATE TABLE evenements (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    description TEXT,
    lieu VARCHAR(255),
    date_debut DATE NOT NULL,
    date_fin DATE NOT NULL,
    cree_a TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modifie_a TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table des participants
CREATE TABLE participants (
    id INT AUTO_INCREMENT PRIMARY KEY,
    prenom VARCHAR(100) NOT NULL,
    nom VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    telephone VARCHAR(20),
    cree_a TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modifie_a TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table des sessions (lié à un événement)
CREATE TABLE sessions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    evenement_id INT NOT NULL,
    nom VARCHAR(255) NOT NULL,
    description TEXT,
    intervenant VARCHAR(150),
    heure_debut DATETIME NOT NULL,
    heure_fin DATETIME NOT NULL,
    cree_a TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modifie_a TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (evenement_id) REFERENCES evenements(id) ON DELETE CASCADE
);

-- Table d'inscription des participants à des sessions
CREATE TABLE inscriptions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    participant_id INT NOT NULL,
    session_id INT NOT NULL,
    date_inscription TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (participant_id) REFERENCES participants(id) ON DELETE CASCADE,
    FOREIGN KEY (session_id) REFERENCES sessions(id) ON DELETE CASCADE
);

-- Table des utilisateurs
CREATE TABLE utilisateurs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    mot_de_passe VARCHAR(255) NOT NULL,
    cree_a TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modifie_a TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Modification de la table des événements pour inclure une relation avec les utilisateurs
ALTER TABLE evenements ADD utilisateur_id INT NOT NULL;
ALTER TABLE evenements ADD FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id) ON DELETE CASCADE;
ALTER TABLE evenements ADD slug VARCHAR(255) UNIQUE;

-- Test --
