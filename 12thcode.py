
count = 0
fname = input("Enter file name: ")
fn2 = open(fname)



for line in fn2:
    if line.startswith('From '):
        words = line.split()
        count = count + 1
        print (words[1])


print("There were", count, "lines in the file with From as the first word")
