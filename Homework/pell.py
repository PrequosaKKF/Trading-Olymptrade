def pell_oblong(ran):
    for x in range(ran):
        for y in range(ran):
            if (x**2)-(2*(y**2)) == -1:
                n = (x-1)/2
                U = n*(n+1)/2
                print("(x,y) = " + str((x,y)) +"and U = " +str(U))