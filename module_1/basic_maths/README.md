
# Ecledian Algorithm: 

**Used in programs such as finding Greatest Common Divisor between two numbers**
**It says gcd(a,b) = gcd(a-b, b) given that a>b**

For Example:

gcd(15,10) = gcd (15-10, 10) = gcd (5, 10) 
gcd(10,5) = gcd (10-5, 5) = gcd(5,5) = gcd(5-5, 5) = gcd(0, 5)

2. **Instead of subtracting again and again we can devide the numbers the number until one number becomes 0, then another number will become gcd**

For Example:

gcd(15, 10) => gcd(15%10, 10) = gcd(5,10) => gcd(10,5) => gcd(10%5, 5) = gcd(0,5) Hence 5 become GCD

# Square Root Method

**It is alwasy optimal to iterate till square root of any element in case of finding divisors, which can be used in programs like finding divisors or prime number**

For Example: Instead of iterating till 'n' we can iterate till 'i * i <= n'

# To Add N Numbers
Intuition: We can use the formula for the sum of N numbers, i.e N(N+1)/2.

For eg: N=5

5(5+1)/2 = 5(6)/2 = 15.


