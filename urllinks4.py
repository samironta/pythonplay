# To run this, download the BeautifulSoup zip file
# http://www.py4e.com/code3/bs4.zip
# and unzip it in the same directory as this file

import urllib.request, urllib.parse, urllib.error
from bs4 import BeautifulSoup
import ssl

# Ignore SSL certificate errors
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = input('Enter - ')
count = int(input('How many loops: '))
rtnval = int(input('Position to return: ')) - 1

html = urllib.request.urlopen(url, context=ctx).read()
soup = BeautifulSoup(html, 'html.parser')

#tags = soup('a')
# Retrieve all of the anchor tags

tags = soup('a')
sequence = []
for i in range(count):
    link = i[rtnval].get('href', None)
    print(i[rtnval].contents[0])
    html = urllib.request.urlopen(link).read()
    soup = BeautifulSoup(html, 'html.parser')
    rtnval = soup('a')

#for tag in tags:
    #print(tag.get('href', None))
