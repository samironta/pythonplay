import urllib.request, urllib.parse, urllib.error
import json
import ssl

api_key = False

#If api_key is False (do not have an api key),
#use the below course api_key and service url
if api_key is False:
    api_key = 42
    serviceurl = 'http://py4e-data.dr-chuck.net/json?'
#If api_key is True (if you have an api key for Google Maps),
#use the below google maps api service url
else :
    serviceurl = 'https://maps.googleapis.com/maps/api/geocode/json?'

#Ignore SSL certificate errors
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

#Prompt for a location/address from the user
while True:
    address = input('Enter location: ')
    #If the user does not add a url (<1 character in length),
    #use the address/location below
    if len(address) < 1:
        address = 'PUCMM'

    #Make a dictionary that contains the address, so urlencode accepts it below
    parms = dict()
    parms['address'] = address
    if api_key is not False: parms['key'] = api_key
#Concatenate the service url and code for the encoded location address
url = serviceurl + urllib.parse.urlencode(parms)

    #Print the newly concatenated url
    #Open the url and read and decode the data
print('Retrieving', url)
uh = urllib.request.urlopen(url, context=ctx)
data = uh.read().decode()
print('Retrieved', len(data), 'characters')

    #Try to parse the data
try:
    js = json.loads(data)
except:
    js = None

    #Debugging code to check for errors
if not js or 'status' not in js or js['status'] != 'OK':
    print('==== Failure To Retrieve ====')
    print(data)
    continue

    #Extract the place_id data; Start at ‘Results’ sub-0 to look up ‘place_id’
place_id = js['results'][0]['place_id']
print('Place ID', place_id)
if len(place_id) > 1: break
