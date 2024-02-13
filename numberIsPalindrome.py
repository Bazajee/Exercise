def isPalindrome (number):
    splitNumber = list(str(number))
    splitNumber.reverse()
    reversedNumber = int("".join(splitNumber))
    return True if reversedNumber == number else False
   





print(isPalindrome(66666))
print(isPalindrome(6666))
print(isPalindrome(45654))