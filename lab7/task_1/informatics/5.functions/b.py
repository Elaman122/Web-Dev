def pow(a: float, n: int):
    return a**n

a, n = map(int, input().split())
print(pow(a, n))