# To run this, download the BeautifulSoup zip file
# http://www.py4e.com/code3/bs4.zip
# and unzip it in the same directory as this file
import urllib.request, urllib.parse, urllib.error

#from urllib.request
#import urlopen
from bs4 import BeautifulSoup
import ssl
count = list()
sum = 0
# Ignore SSL certificate errors
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = input('Enter - ')
html = urllib.request.urlopen(url, context=ctx).read()
soup = BeautifulSoup(html, "html.parser")

# Retrieve all of the anchor tags
tags = soup('span')
for tag in tags:
    # Look at the parts of a tag
    #print('TAG:', tag)
#    print('URL:', tag.get('href', None))
    #print('Contents:', tag.contents[0])
    sum = sum + int(tag.contents[0])
#    print('Attrs:', tag.attrs)
    #count[tag] = count.get(tag,0) + 1
    #print(count)
print(sum)
