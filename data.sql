-- Create Database
CREATE DATABASE IF NOT EXISTS EasyMedDB;

-- Use the Database
USE EasyMedDB;

-- Create Patients Table
CREATE TABLE IF NOT EXISTS Patients (
    patient_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);

-- Create Medical Records Table
CREATE TABLE IF NOT EXISTS MedicalRecords (
    record_id INT PRIMARY KEY AUTO_INCREMENT,
    patient_id INT,
    record_date DATE,
    diagnosis VARCHAR(255),
    prescription VARCHAR(255),
    FOREIGN KEY (patient_id) REFERENCES Patients(patient_id)
  );

-- Create Appointments Table
CREATE TABLE IF NOT EXISTS Appointments (
    appointment_id INT PRIMARY KEY AUTO_INCREMENT,
    patient_id INT,
    appointment_date DATETIME,
    doctor_name VARCHAR(100),
    notes TEXT,
    FOREIGN KEY (patient_id) REFERENCES Patients(patient_id)
);