from twilio.rest import Client 
import os

account_sid = os.environ['TWILIO_ACCOUNT_SID']
auth_token = os.environ['TWILIO_AUTH_TOKEN']
client = Client(account_sid, auth_token) 

def send_msg(body):
    my_number = '+19179207044' #i got my number
    
    message = client.messages.create( 
                                from_=my_number,  
                                body=body,      
                                to='+65 9893 7196',
    )
    
    print(message.sid)
    return (message.sid)

# send_msg("hi there")

'''
export TWILIO_ACCOUNT_SID="AC25b264f295b2e06eff7efc77a3ff2132"
export TWILIO_AUTH_TOKEN="77a47698495a43e8d0835a5ba4441cfc"
'''