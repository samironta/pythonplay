
count = 0
largest = None
smallest = None

while True :
    sval = input('Enter Number: ')
    if sval == 'done':
        break
    try:
        fval = int(sval)
    except:
        print ('invalid input')
        continue
    if largest is None:
        largest = fval
    elif largest < fval:
        largest = fval
    if smallest is None:
        smallest = fval
    elif fval < smallest:
        smallest = fval
    count = count + 1

print ('largest is ',largest)
print ('smallest is ',smallest)
print ('count is ', count)
