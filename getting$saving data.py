Datatime = open("Trading stocks data\datatime.txt", "w")
Readabletime = open("Trading stocks data\readabletime.txt","w")
Value = open("Trading stocks data\value.txt","w")
Asset = open("Trading stocks data\asset.txt","w")
Budget = open("Trading stocks data\budget.txt","w")

def extract_log(data):
    startindex = []
    endindex = []
    """ discovers start-end index """
    for i in range(len(data)):
        if data[i] == "(":
            startindex += [i]
        if data[i] == ")":
            endindex += [i]
    list = extract_tuples_from_data(data, startindex, endindex)
    for i in range(len(list)):
        atuple = list[i]
        for j in range(len(atuple)):
            if atuple[j] == ",":
                end = []
                end += [j]
        Datatime.write(atuple[1:end[0]])
        Readabletime.write(atuple[end[0]+1, end[1]])
        Value.write(atuple[end[1]+1, end[2]])
        Asset.write(atuple[end[2]+1, end[3]])
        Budget.write(atuple[end[3]+1, len(atuple)])
    Datatime.close()
    Readabletime.close()
    Value.close()
    Asset.close()
    Budget.close()

def extract_tuples_from_data(data, starti, endi):
    list_of_string_of_tuples = []
    for i in range(len(starti)):
        list_of_string_of_tuples += [data[starti[i]:endi[i]]]
    return list_of_string_of_tuples
    
        