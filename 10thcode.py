# Use the file name mbox-short.txt as the file name
count = 0
value = 0
avrg = 0
fname = input("Enter file name: ")
fh = open(fname)
for line in fh:
    if  line.startswith("X-DSPAM-Confidence:") :
        count = count + 1
        value = float(line[19 :]) + value


avrg = value / count

print("Average spam confidence: ",avrg)
