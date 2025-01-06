import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function setup() {
    // Otevření nebo vytvoření databáze
    const db = await open({
        filename: './database.sqlite',
        driver: sqlite3.Database
    });

    // Vytvoření tabulky users
    await db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE,
            password TEXT
        );
    `);

    console.log('Databáze byla úspěšně připravena!');
}

setup();
