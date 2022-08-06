import psycopg2
from psycopg2.errors import SerializationFailure

import logging

conn = psycopg2.connect("postgresql://chantal:kuwhacks2022@free-tier6.gcp-asia-southeast1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3D2022hacking-3042")

def info(conn):
    with conn.cursor() as cur:
        cur.execute(
             "CREATE TABLE IF NOT EXISTS adopter_info (name VARCHAR(15), address VARCHAR(300), email VARCHAR(50), mobile_number VARCHAR(50), animal_id INT)"),
        cur.execute(
             "CREATE TABLE IF NOT EXISTS adoption_info (adoptorName VARCHAR(60),_petId INT,_petName VARCHAR(60),_petType VARCHAR(60),_breed VARCHAR(60),_sex VARCHAR(60),_description VARCHAR(300),_medicalDescription VARCHAR(300), image_hash VARCHAR(600))")
    
      
      
        logging.debug("create_accounts(): status message: %s",
                      cur.statusmessage)

    conn.commit()


info(conn)

def insert_adoption_info(conn, entry):
     with conn.cursor() as cur:
        cur.execute(
           f"UPSERT INTO adoption_info (adoptorname, _petid, _petname, _pettype, _breed,  _sex, _description, _medicaldescription) VALUES ('{entry['adoptorname']}','{entry['_petid']}', '{entry[' _petname']}', '{entry['_pettype']}', '{entry['_breed']}', '{entry['_sex']}', '{entry['_description']}', '{entry['_medicaldescription']}', {entry['image_hash']}')"
          )
       
      
      
        logging.debug("create_accounts(): status message: %s",
                      cur.statusmessage)

     conn.commit()


def adoption_info(conn):
     with conn.cursor() as cur:
        cur.execute(
             "SELECT * FROM adoption_info"),
      
      
      
        logging.debug("create_accounts(): status message: %s",
                      cur.statusmessage)



def insert_adoption_info(conn, entry):
     with conn.cursor() as cur:
        cur.execute(
           f"UPSERT INTO adoption_info (adoptorname, _petid, _petname, _pettype, _breed,  _sex, _description, _medicaldescription) VALUES ('{entry['adoptorname']}','{entry['_petid']}', '{entry[' _petname']}', '{entry['_pettype']}', '{entry['_breed']}', '{entry['_sex']}', '{entry['_description']}', '{entry['_medicaldescription']}', {entry['image_hash']}')"
          )
       
      
      
        logging.debug("create_accounts(): status message: %s",
                      cur.statusmessage)

     conn.commit()
     conn.commit()







