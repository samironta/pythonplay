

fname = input("Enter file name: ")
# prompt user input
fh = open(fname)
fh2 = fh.read()
# reads file
fh3 = fh2.split()
# splits into words
lst = list()

for w in fh3: # checks for unique words
    if w not in lst:
        lst.append(w)

lst.sort()

print(lst)
