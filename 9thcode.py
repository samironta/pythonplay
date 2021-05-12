# Use words.txt as the file name
fname = input("Enter file name: ")
fh = open(fname)
inp = fh.read()
for line in inp:
    line = line.rstrip()
print(inp.upper())
