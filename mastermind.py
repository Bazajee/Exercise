'''
The mastermind is a code-breaking game for two players. 
A player has to find a secret combination with, for only clues, 
the number of well placed and incorrectly placed symbols (that means the symbol is present in both strings, 
but their position is different).

Given the secret combination and a proposition of the second player, 
you have to output the number of well placed (+) and incorrectly placed symbols (-).
'''

def checkPwd (secretNumber, propositionNumber):
    result = []
    if len(str(secretNumber)) != len(str(propositionNumber)):
        return 'ERROR'
    for number in list(str(propositionNumber)):
        if number in list(str(secretNumber)):
            if list(str(propositionNumber)).index(number) == list(str(secretNumber)).index(number):
                result.append("+")
            else :
                result.append('-')
    if len(result) == 0:
        return 'NOTHING'        
            
    result = ''.join(result)
    return(result)
            
            

print(checkPwd(1234,2314))
print(checkPwd(123, 568))
print(checkPwd(1234,1234))
print(checkPwd(1234,23149))