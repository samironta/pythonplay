
lst = list()
count = dict()
fname = input("Enter file name: ")
fn2 = open(fname)



for line in fn2:
    if line.startswith('From '):
        words = line.split()
        lst.append(words[1])

for word in lst:
    count[word] = count.get(word,0) + 1

lrgcnt = None
lrgwrd = None

for word,cnt in count.items():
    if lrgcnt is None or cnt > lrgcnt:
        lrgwrd = word
        lrgcnt = cnt

print(lrgwrd,lrgcnt)
