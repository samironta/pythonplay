

import re
num = list()
sum = 0

hand = open("regex_sum_42.txt")

for line in hand:
    numa = re.findall('[0-9]+',line)
    num = num+numa

for itm in num:
    sum = sum + int(itm)

print(sum)
