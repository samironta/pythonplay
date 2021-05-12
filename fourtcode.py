hrs = input("Enter Hours:")
h = float(hrs)
rte = input("Enter Rate")
r = float(rte)
if h > 40:
    ovh = (h - 40)
    otr = r + (r/2)
    pay = (40 * r) + (ovh * otr)

else:
    pay = (h * r)

print (pay)
