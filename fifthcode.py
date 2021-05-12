print ("please enter a score between 0.0 and 1.0")
score = input("Enter Score: ")
scr = float(score)
if (scr > 1):
    print("score entered is out of range")

elif (scr < 0.6):
    print ("F")

elif (scr >= 0.9):
    print("A")

elif (scr >= 0.8):
    print("B")

elif (scr >= 0.7):
        print("C")

elif (scr >= 0.6):
        print("D")
else:
    print("score entered is out of range")

quit()
