

import urllib.request, urllib.parse, urllib.error
from bs4 import BeautifulSoup

url = input('enter web address: ')
b = int(input('number of times: '))
a = int(input('position to retrieve: ')) - 1

for r in range(b):

    html = urllib.request.urlopen(url).read()
    soup = BeautifulSoup(html, 'html.parser')
    z = soup('a')
    lnk = z[a].get('href',None)
    url = lnk
    e = z[a].contents[0]

print(e)
