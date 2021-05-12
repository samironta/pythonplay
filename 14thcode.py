

name = input("Enter file:")
if len(name) < 1 : name = "mbox-short.txt"
handle = open(name)

lst = list()
cnt = dict()

for line in handle:
    if line.startswith("From "):
        line=line.split()
        hours=line[5]
        hours=hours[:2]
        lst.append(hours)

for hour in lst:
    cnt[hour] = cnt.get(hour,0) + 1

for k,v in sorted(cnt.items()):
    print(k,v)
