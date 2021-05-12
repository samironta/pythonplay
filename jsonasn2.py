
import urllib.request, urllib.parse, urllib.error
import json

url = input('Enter URL: ')
## print('opening ', url)

data = urllib.request.urlopen(url).read().decode()
print('retrieved', len(data), 'characters')

info = json.loads(data)

sum = 0
total = 0

for comment in info['comments']:
    sum = sum + int(comment['count'])
    total = total + 1

print('count is: ', total)
print('sum is: ', sum)
