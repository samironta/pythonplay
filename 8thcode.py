text = "X-DSPAM-Confidence:    0.8475";
pos = text.find('0')
finpos = float(text[pos : 70])
# this line would also work as finpos = float(text[pos :])
print(finpos)
