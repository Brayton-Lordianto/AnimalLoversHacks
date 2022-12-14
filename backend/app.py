from flask import Flask, render_template
import flask
import psycopg2
from db import *
from twil_util import *

from flask_cors import CORS, cross_origin

app = Flask(__name__)
conn = psycopg2.connect("postgresql://chantal:kuwhacks2022@free-tier6.gcp-asia-southeast1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3D2022hacking-3042")

@app.route("/send_confirmation")
def send_confirmation():
    of_animal = "Name: Loki, Type: crab"
    return send_msg(f"This is a confirmation that we have received your request to take care of the following animal: \n{of_animal}")

@app.route("/report_animals")
def report_animals():
    area = "New York"
    animal_details = "Name: Loki, Type: crab"
    send_msg(f"An animal has been reported near your area ({area})! The animal's details are: \n{animal_details}")
    return send_msg("")

@app.route("/")
def index():
	return render_template("index.html")


@app.route("/form")
def form():
	return render_template("form.html")



@app.route("/api/activity", methods=["GET", "POST"])
@cross_origin()
def placeholder():
    if flask.request.method == "POST":
        adoptor_name = flask.request.args.get('adoptor_name')
        pet_id = flask.request.args.get('pet_id')
        pet_name = flask.request.args.get('pet_name')
        pet_type = flask.request.args.get('pet_type')
        breed = flask.request.args.get('breed')
        sex = flask.request.args.get('sex')
        description = flask.request.args.get('description')
        med_description = flask.request.args.get('med_description')

        entry = {
            'adoptorname': adoptor_name,
            '_petid':pet_id,
            '_petname': pet_name,
            '_pettype':pet_type,
            '_breed':breed,
            '_sex': sex,
            '_description':description,
             '_medicaldescription':med_description

        }

        insert_adoption_info(conn, entry)
        
        return "ok"

    else:
        all_adoptions = adoption_info(conn)
        

        print(all_adoptions)





@app.route("/api/activity2", methods=["GET", "POST"])
@cross_origin()
def placehold():
    if flask.request.method == "POST":
        name = flask.request.args.get('name')
        address = flask.request.args.get('address')
        email = flask.request.args.get('email')
        mobile_number = flask.request.args.get('mobile_number')
        animal_id = flask.request.args.get('animal_id')
        
        entry = {
            'name': name,
            'address':address,
            'email': email,
            'mobile_number':mobile_number,
            'animal_id':animal_id
            

        }

        insert_adopter_info(conn, entry)
        
        return "ok"

    else:
        all_adoptions = adopter_info(conn)
        

        print(all_adoptions)



if __name__ == '__main__':
	app.run(debug=True)