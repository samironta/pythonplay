
## reads through a url and extracts some numbers and calculates total
import urllib.request, urllib.parse, urllib.error
import xml.etree.ElementTree as ET
import ssl

url = input('Enter URL: ')
html = urllib.request.urlopen(url).read()

tree = ET.fromstring(html)
comcnt = tree.findall('comments/comment')
totcnt = len(comcnt)
total = 0

for com in comcnt:
    total = total + int(com.find('count').text)

print(totcnt)
print(total)
