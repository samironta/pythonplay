

def computepay(h,r):
    if h > 40:
        ovh = (h - 40)
        otr = r + (r/2)
        pay = (40 * r) + (ovh * otr)

    else:
        pay = (h * r)
    return pay

hrs = input("Enter Hours:")
rte = input("Enter Rate:")
h = float(hrs)
r = float(rte)
p = computepay(h,r)



print ("Pay:",p)
